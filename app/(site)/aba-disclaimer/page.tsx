import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "ABA Disclaimer",
  description: "Disclosure for law firms evaluating Assigners' legal-intake web form leads, warm transfers, and inbound calls.",
  path: "/aba-disclaimer",
});

export default function AbaDisclaimerPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "ABA Disclaimer", path: "/aba-disclaimer" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">ABA Disclaimer</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Important Disclosure">
            <p>
              This page is a commercial disclosure directed at law firms and legal professionals evaluating Assigners as a source
              of legal-intake web form leads, warm transfers, and inbound calls within our Legal vertical.
            </p>
          </LegalSection>

          <LegalSection title="2. Assigners Is Not a Law Firm">
            <p>
              Assigners is a performance marketing brand of {siteConfig.legalEntity}. We are a lead and call generation company —
              not a law firm, lawyer referral service, or provider of legal services. Nothing on this website should be
              interpreted as legal advice.
            </p>
          </LegalSection>

          <LegalSection title="3. No Attorney-Client Relationship">
            <p>
              Use of this website, submission of a buyer inquiry, or receipt of a call, transfer, or lead from Assigners does not
              create an attorney-client relationship between Assigners and any party.
            </p>
          </LegalSection>

          <LegalSection title="4. Professional Responsibility">
            <p>
              Law firms that purchase leads, transfers, or calls from Assigners remain solely responsible for their own
              compliance with applicable rules of professional conduct, including licensing requirements, confidentiality
              obligations, conflict checks, and truthful communications with prospective clients.
            </p>
          </LegalSection>

          <LegalSection title="5. Advertising Compliance">
            <p>
              Law firm buyers are responsible for ensuring that their own use of leads, transfers, and calls sourced through
              Assigners — including any related advertising or intake communications — complies with ABA Model Rule 7.2 and the
              equivalent advertising and solicitation rules of the state bar(s) in which they practice.
            </p>
          </LegalSection>

          <LegalSection title="6. State-Specific Notices">
            <p>
              Attorney advertising and referral rules vary by state. Law firm buyers bear sole responsibility for confirming that
              their use of Assigners&rsquo; products complies with the requirements of their state bar association(s). No
              additional state-specific notices are included on this page at this time; this section will be updated if a
              specific state bar requirement is identified.
            </p>
          </LegalSection>

          <LegalSection title="7. Contact">
            <p>
              Questions about this disclosure can be directed to{" "}
              <a href={`mailto:${siteConfig.legalEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.legalEmail}
              </a>
              .
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/aba-disclaimer" />
      </Container>
    </section>
  );
}
