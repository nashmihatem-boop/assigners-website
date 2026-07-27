import { NextResponse } from "next/server";
import { buyerIntakeSchema, type BuyerIntakeInput } from "@/lib/validation";
import { siteConfig } from "@/lib/constants";

function formatInquiryText(inquiry: Omit<BuyerIntakeInput, "company_website">) {
  return [
    `New sales inquiry from ${siteConfig.name}`,
    "",
    `Company: ${inquiry.companyName}`,
    `Contact: ${inquiry.contactName}`,
    `Work Email: ${inquiry.workEmail}`,
    `Phone: ${inquiry.phone}`,
    `Industry: ${inquiry.vertical}`,
    `Solution Interest: ${inquiry.productInterest}`,
    `Monthly Volume: ${inquiry.monthlyVolume}`,
    `Budget Range: ${inquiry.budgetRange}`,
    `Message: ${inquiry.message || "(none provided)"}`,
  ].join("\n");
}

function formatInquiryHtml(inquiry: Omit<BuyerIntakeInput, "company_website">) {
  const rows: [string, string][] = [
    ["Company", inquiry.companyName],
    ["Contact", inquiry.contactName],
    ["Work Email", inquiry.workEmail],
    ["Phone", inquiry.phone],
    ["Industry", inquiry.vertical],
    ["Solution Interest", inquiry.productInterest],
    ["Monthly Volume", inquiry.monthlyVolume],
    ["Budget Range", inquiry.budgetRange],
    ["Message", inquiry.message || "(none provided)"],
  ];
  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#6b7280;font-family:sans-serif;font-size:13px;">${label}</td><td style="padding:6px 12px;color:#0a0f2c;font-family:sans-serif;font-size:13px;font-weight:600;">${value}</td></tr>`
    )
    .join("");
  return `<h2 style="font-family:sans-serif;color:#0a0f2c;">New sales inquiry from ${siteConfig.name}</h2><table>${tableRows}</table>`;
}

async function deliverInquiry(inquiry: Omit<BuyerIntakeInput, "company_website">) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.FORM_NOTIFICATION_EMAIL || siteConfig.infoEmail;

  if (!apiKey) {
    // No email provider configured yet — log so the inquiry is at least visible in server logs
    // rather than silently disappearing. Set RESEND_API_KEY (see .env.example) to enable real delivery.
    console.warn("[sales-inquiry] RESEND_API_KEY not set — inquiry was NOT emailed. Falling back to log only.", inquiry);
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "Assigners <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [notifyEmail],
      reply_to: inquiry.workEmail,
      subject: `New Sales Inquiry — ${inquiry.vertical} — ${inquiry.companyName}`,
      text: formatInquiryText(inquiry),
      html: formatInquiryHtml(inquiry),
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    console.error("[sales-inquiry] Resend delivery failed", res.status, errorBody, inquiry);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = buyerIntakeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 422 });
  }

  // Honeypot: silently accept but discard obvious bot submissions.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { company_website: _honeypot, ...inquiry } = parsed.data;
  void _honeypot;

  if (process.env.NODE_ENV !== "production") {
    console.log("[sales-inquiry] new buyer inquiry", inquiry);
  }

  try {
    await deliverInquiry(inquiry);
  } catch (err) {
    // Never fail the submission for the buyer because of a delivery-side error —
    // log it so it's visible to us, but still confirm receipt to the form.
    console.error("[sales-inquiry] delivery error", err);
  }

  return NextResponse.json({ ok: true });
}
