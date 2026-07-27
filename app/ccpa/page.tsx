import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "CCPA Notice",
  description: "California Consumer Privacy Act (CCPA/CPRA) notice for Assigners.com, a brand of Quality Score LLC.",
  path: "/ccpa",
});

export default function CcpaPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "CCPA", path: "/ccpa" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">CCPA Notice</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Scope">
            <p>
              This notice applies to California residents and describes their rights under the California Consumer Privacy Act,
              as amended by the California Privacy Rights Act (CCPA/CPRA).
            </p>
          </LegalSection>

          <LegalSection title="2. Categories of Personal Information We Collect">
            <p>In the preceding 12 months, we have collected the following categories of personal information, as defined by the CCPA:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Identifiers — name, email address, phone number, and IP address</li>
              <li>Commercial information — campaign, inquiry, and submission details</li>
              <li>Internet or network activity — pages visited, form interactions, and similar usage data</li>
              <li>Professional information — company name and, where provided, job title</li>
              <li>Audio information — call recordings, where a call is recorded for quality or compliance purposes</li>
              <li>Inferences — conclusions about service interests drawn from form submissions and site activity</li>
            </ul>
            <p className="mt-2">
              We do not knowingly collect biometric information, precise geolocation, government identifiers (such as
              Social Security numbers), health information, or other sensitive personal information as defined by the
              CCPA. See our{" "}
              <a href="/privacy-policy" className="text-[var(--color-blue)] underline">
                Privacy Policy
              </a>{" "}
              for how each category is used.
            </p>
          </LegalSection>

          <LegalSection title="3. How We Use Personal Information">
            <p>
              To respond to inquiries, operate our business, evaluate buyer applications, and — where applicable — route
              consumer-submitted information to a matched buyer in accordance with disclosed consent.
            </p>
          </LegalSection>

          <LegalSection title="4. Your California Privacy Rights">
            <p>Subject to certain exceptions, California residents have the right to:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Know what personal information we collect, use, and disclose</li>
              <li>Delete personal information we&rsquo;ve collected, subject to exceptions</li>
              <li>Correct inaccurate personal information</li>
              <li>Receive a copy of your personal information in a portable format</li>
              <li>
                Opt out of the sale or sharing of personal information — see{" "}
                <a href="/do-not-sell-my-info" className="text-[var(--color-blue)] underline">
                  Do Not Sell My Info
                </a>
              </li>
              <li>Limit use of sensitive personal information</li>
              <li>
                Not be discriminated against for exercising these rights — including being denied goods or services,
                charged a different price, or given a different level or quality of service
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. How to Exercise Your Rights">
            <p>
              Submit a request by emailing{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>{" "}
              or calling {siteConfig.businessPhone}. We may need to verify your identity before completing certain
              requests, typically by matching the information you provide — such as your name and the email address or
              phone number associated with your submission — against our records. We will not fulfill a request we
              cannot reasonably verify.
            </p>
          </LegalSection>

          <LegalSection title="6. Response Timing">
            <p>
              We aim to respond to a verifiable request within 45 days of receipt. If more time is needed, we may extend
              this by up to an additional 45 days and will notify you of the reason for the extension. We don&rsquo;t
              charge a fee to process a request unless it&rsquo;s excessive, repetitive, or unfounded, in which case
              we&rsquo;ll explain why before proceeding. Requests to know or access are limited to twice in a 12-month
              period.
            </p>
          </LegalSection>

          <LegalSection title="7. Authorized Agents">
            <p>
              You may designate an authorized agent to submit a request on your behalf by providing the agent with signed
              written permission to do so. We may still require you to verify your own identity directly, or to confirm
              directly with us that you gave the agent permission to act on your behalf.
            </p>
          </LegalSection>

          <LegalSection title="8. Other State Privacy Rights">
            <p>
              Residents of other states with comprehensive privacy laws — such as Colorado, Connecticut, Virginia, and
              Utah — may have rights similar to those described above. Contact us using the information below and we
              will address your request under the law applicable to your state of residence. If we deny your request and
              your state&rsquo;s law provides a right to appeal, you may appeal by emailing{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>{" "}
              with &ldquo;Privacy Appeal&rdquo; in the subject line; we aim to respond to appeals within 45 days.
            </p>
          </LegalSection>

          <LegalSection title="9. Contact">
            <p>
              Questions about this notice can be directed to{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>
              .
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/ccpa" />
      </Container>
    </section>
  );
}
