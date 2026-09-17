import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Lead Credit Policy",
  description: "When and how Assigners buyers can request credit for invalid leads, transfers, or calls.",
  path: "/lead-credit-policy",
});

export default function LeadCreditPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Lead Credit Policy", path: "/lead-credit-policy" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">Lead Credit Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Overview">
            <p>
              Assigners reviews credit requests for web form leads, warm transfers, and inbound calls that do not meet the
              qualification criteria agreed to for a campaign. This policy describes our general approach — specific credit
              terms are confirmed in each buyer&rsquo;s campaign agreement.
            </p>
          </LegalSection>

          <LegalSection title="2. Generally Eligible for Credit">
            <ul className="mt-2 list-disc pl-5">
              <li>Invalid or disconnected contact information</li>
              <li>Duplicate submissions delivered to the same buyer within 10 days after the end of each month</li>
              <li>Submissions clearly outside agreed geographic or qualification criteria</li>
              <li>Calls or transfers that disconnect before reaching the minimum duration defined in the campaign</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Generally Not Eligible for Credit">
            <ul className="mt-2 list-disc pl-5">
              <li>Consumer declined to move forward after a valid, qualified contact or connection</li>
              <li>Delayed follow-up by the buyer&rsquo;s sales team</li>
              <li>Consumer preference or budget changes unrelated to lead/call validity</li>
              <li>Requests submitted after the credit request window has closed</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Credit Request Window">
            <p>
              Credit requests must be submitted within 5 business days of delivery, along with supporting detail (e.g., call
              recording, CRM note, or invalid contact confirmation).
            </p>
          </LegalSection>

          <LegalSection title="5. How to Request Credit">
            <p>
              Email{" "}
              <a href={`mailto:${process.env.SALES_EMAIL || "sales@assigners.com"}`} className="text-[var(--color-blue)] underline">
                {process.env.SALES_EMAIL || "sales@assigners.com"}
              </a>{" "}
              with your account details, the order or delivery ID, and the reason for the request.
            </p>
          </LegalSection>

          <LegalSection title="6. Review Process">
            <p>Requests are reviewed against the qualification criteria and delivery records for the applicable campaign. Approved credits are applied per the terms of your campaign agreement.</p>
          </LegalSection>

          <LegalSection title="7. Contact">
            <p>
              Questions about this policy can be directed to{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>
              .
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/lead-credit-policy" />
      </Container>
    </section>
  );
}
