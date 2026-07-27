import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Do Not Sell My Info",
  description: "How to opt out of the sale or sharing of your personal information under CCPA.",
  path: "/do-not-sell-my-info",
});

export default function DoNotSellPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Do Not Sell My Info", path: "/do-not-sell-my-info" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">Do Not Sell or Share My Personal Information</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Your Right to Opt Out">
            <p>
              Under the CCPA/CPRA, California residents have the right to opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo;
              of their personal information. See our{" "}
              <a href="/ccpa" className="text-[var(--color-blue)] underline">
                CCPA Notice
              </a>{" "}
              for the full list of California privacy rights.
            </p>
          </LegalSection>

          <LegalSection title="2. What This Covers">
            <p>
              When a consumer submits information through one of our owned-and-operated properties, that information may be
              routed to a matched buyer in accordance with the consent and disclosures presented at the point of submission. We
              treat this matching and routing activity as a &ldquo;sale&rdquo; and/or &ldquo;sharing&rdquo; of personal
              information under the CCPA/CPRA, and an opt-out request submitted on this page applies to that activity going
              forward.
            </p>
          </LegalSection>

          <LegalSection title="3. How to Submit a Request">
            <p>
              Email{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>{" "}
              with the subject line &ldquo;Do Not Sell My Info,&rdquo; or call {siteConfig.businessPhone}
              {" "}during office hours ({siteConfig.officeHours}). Please include the name, email, and/or phone number
              associated with your submission so we can locate your record.
            </p>
          </LegalSection>

          <LegalSection title="4. Verification">
            <p>
              We may need to verify your identity before completing your request, typically by matching the name, email, or
              phone number you provide against the submission on file. We will not fulfill a request we cannot reasonably
              verify.
            </p>
          </LegalSection>

          <LegalSection title="5. Response Time">
            <p>We will confirm receipt of your request and respond within 1–3 business days.</p>
          </LegalSection>

          <LegalSection title="6. Contact">
            <p>
              Questions about this page can be directed to{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>
              .
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/do-not-sell-my-info" />
      </Container>
    </section>
  );
}
