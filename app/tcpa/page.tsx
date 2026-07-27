import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "TCPA Compliance",
  description: "How Assigners approaches Telephone Consumer Protection Act (TCPA) consent, documentation, and Do-Not-Call scrubbing.",
  path: "/tcpa",
});

export default function TcpaPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "TCPA Compliance", path: "/tcpa" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">TCPA Compliance</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Our Approach">
            <p>
              Assigners designs its consent capture and call-routing processes with the Telephone Consumer Protection Act (TCPA)
              and applicable FCC rules in mind. This page describes our general approach — it is not a guarantee of compliance for
              any specific campaign, and buyers remain responsible for their own use of the calls, transfers, and leads they
              receive. See our{" "}
              <a href="/dnc" className="text-[var(--color-blue)] underline">
                Do Not Call Policy
              </a>{" "}
              for related information.
            </p>
          </LegalSection>

          <LegalSection title="2. Prior Express Written Consent">
            <p>
              Where required, consent to be contacted is captured at the point of submission on our owned-and-operated properties,
              with clear disclosure of the nature of the communication. Vetted publisher partners are required to represent that
              they capture consent in a comparable manner. On our own forms, consumers see disclosure language substantially
              similar to: &ldquo;By submitting, you agree to be contacted by phone, text, or email about your project, including
              by automated means, even if your number is on a do-not-call list. Consent is not a condition of purchase.&rdquo;
            </p>
          </LegalSection>

          <LegalSection title="3. One-to-One Consent">
            <p>
              Consumer-facing consent language on O&amp;O properties is structured to identify the specific buyer(s) authorized to
              contact the consumer for a given submission, consistent with a one-to-one consent approach. The FCC&rsquo;s
              one-to-one consent requirement under the TCPA has been the subject of ongoing regulatory and court activity;
              counsel should confirm the current effective status of this rule before this section is treated as final.
            </p>
          </LegalSection>

          <LegalSection title="4. Consent Documentation">
            <p>Depending on the source and campaign, consent may be documented through one or more of the following:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Timestamped form submission records</li>
              <li>IP address and user-agent capture at the point of consent</li>
              <li>Recorded consent language displayed to the consumer</li>
              <li>Third-party consent verification or lead certification tools (such as TrustedForm or Jornaya), where used for a specific campaign</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Do-Not-Call Scrubbing">
            <p>
              Applicable campaigns are scrubbed against the National Do Not Call Registry and Assigners&rsquo; internal
              suppression list prior to outbound contact, where required by the campaign type. See our{" "}
              <a href="/dnc" className="text-[var(--color-blue)] underline">
                Do Not Call Policy
              </a>{" "}
              for how to request suppression.
            </p>
          </LegalSection>

          <LegalSection title="6. Buyer & Partner Obligations">
            <p>
              Buyers are responsible for ensuring their own outbound communications comply with the TCPA and applicable state
              telemarketing laws, including honoring opt-out requests they receive directly. Publishers and traffic partners are
              required to represent and warrant that their consent capture practices meet applicable legal requirements.
            </p>
          </LegalSection>

          <LegalSection title="7. Questions">
            <p>
              Compliance questions can be directed to{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>{" "}
              or {siteConfig.businessPhone}.
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/tcpa" />
      </Container>
    </section>
  );
}
