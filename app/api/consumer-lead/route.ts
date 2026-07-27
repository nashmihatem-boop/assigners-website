import { NextResponse } from "next/server";
import { consumerLeadSchema, type ConsumerLeadInput } from "@/lib/validation";
import { siteConfig } from "@/lib/constants";

function formatLeadText(lead: Omit<ConsumerLeadInput, "website">) {
  return [
    `New consumer lead from ${siteConfig.name} Learning Center`,
    "",
    `Category: ${lead.category} (${lead.industry})`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Zip Code: ${lead.zipCode}`,
    `Timing: ${lead.projectTiming}`,
  ].join("\n");
}

function formatLeadHtml(lead: Omit<ConsumerLeadInput, "website">) {
  const rows: [string, string][] = [
    ["Category", `${lead.category} (${lead.industry})`],
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Zip Code", lead.zipCode],
    ["Timing", lead.projectTiming],
  ];
  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#6b7280;font-family:sans-serif;font-size:13px;">${label}</td><td style="padding:6px 12px;color:#0a0f2c;font-family:sans-serif;font-size:13px;font-weight:600;">${value}</td></tr>`
    )
    .join("");
  return `<h2 style="font-family:sans-serif;color:#0a0f2c;">New consumer lead from ${siteConfig.name} Learning Center</h2><table>${tableRows}</table>`;
}

async function deliverLead(lead: Omit<ConsumerLeadInput, "website">) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONSUMER_LEAD_EMAIL || siteConfig.infoEmail;

  if (!apiKey) {
    console.warn("[consumer-lead] RESEND_API_KEY not set — lead was NOT emailed. Falling back to log only.", lead);
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
      reply_to: lead.email,
      subject: `New Consumer Lead — ${lead.category} — ${lead.zipCode}`,
      text: formatLeadText(lead),
      html: formatLeadHtml(lead),
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    console.error("[consumer-lead] Resend delivery failed", res.status, errorBody, lead);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = consumerLeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 422 });
  }

  // Honeypot: silently accept but discard obvious bot submissions.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { website: _honeypot, ...lead } = parsed.data;
  void _honeypot;

  if (process.env.NODE_ENV !== "production") {
    console.log("[consumer-lead] new consumer lead", lead);
  }

  try {
    await deliverLead(lead);
  } catch (err) {
    console.error("[consumer-lead] delivery error", err);
  }

  return NextResponse.json({ ok: true });
}
