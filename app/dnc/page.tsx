import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Do Not Call Policy",
  description: "How Assigners maintains its internal Do Not Call list and honors suppression requests.",
  path: "/dnc",
});

export default function DncPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Do Not Call Policy", path: "/dnc" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">Do Not Call Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Our Commitment">
            <p>
              Assigners maintains an internal Do Not Call list and, where applicable, scrubs outbound campaigns against the
              National Do Not Call Registry before initiating contact. See our{" "}
              <a href="/tcpa" className="text-[var(--color-blue)] underline">
                TCPA Compliance
              </a>{" "}
              page for related consent information.
            </p>
          </LegalSection>

          <LegalSection title="2. Internal Suppression List">
            <p>
              Phone numbers associated with a suppression request are added to our internal Do Not Call list and excluded from
              future outbound contact initiated by Assigners&rsquo; owned-and-operated campaigns.
            </p>
          </LegalSection>

          <LegalSection title="3. How to Request Suppression">
            <p>
              To request that a phone number be added to our internal Do Not Call list, email{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>
              , call {siteConfig.businessPhone}, or mail a written request to {siteConfig.businessAddressLines.join(", ")}
              {" "}with the phone number you&rsquo;d like suppressed.
            </p>
          </LegalSection>

          <LegalSection title="4. Processing Time">
            <p>Suppression requests are processed within 10 business days of receipt.</p>
          </LegalSection>

          <LegalSection title="5. Exceptions">
            <p>
              Adding a number to our internal suppression list stops future outbound contact initiated by Assigners&rsquo;
              own campaigns. It does not affect calls or messages you&rsquo;ve separately consented to receive from a
              specific buyer or partner, or purely transactional and service-related communications tied to a submission
              you&rsquo;ve already made.
            </p>
          </LegalSection>

          <LegalSection title="6. Publisher & Buyer Obligations">
            <p>
              Publishers and buyers who initiate their own outbound contact are independently responsible for maintaining
              compliance with Do Not Call requirements applicable to their own calling activity.
            </p>
          </LegalSection>

          <LegalSection title="7. Training & Compliance">
            <p>
              Team members involved in outbound calling or campaign delivery are trained on our Do Not Call procedures,
              and violations of this policy are treated as a compliance issue subject to internal review.
            </p>
          </LegalSection>

          <LegalSection title="8. Contact">
            <p>
              Questions about this policy can be directed to{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>
              .
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/dnc" />
      </Container>
    </section>
  );
}
