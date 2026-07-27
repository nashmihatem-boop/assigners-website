import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Assigners.com, a brand of Quality Score LLC.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />

        <h1 className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Who We Are">
            <p>
              This website is operated by {siteConfig.legalEntity}, a company organized under the laws of{" "}
              {siteConfig.stateOfFormation}, with a business address at {siteConfig.businessAddressLines.join(", ")}. Assigners
              is a brand of {siteConfig.legalEntity}.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p>
              We may collect information you submit through our forms (such as name, company, work email, and phone number),
              along with technical and usage data collected automatically through cookies and similar technologies. Our forms
              collect U.S. phone numbers only.
            </p>
          </LegalSection>

          <LegalSection title="3. Cookies & Analytics">
            <p>
              We use cookies and similar technologies to operate this site and understand how visitors use it, including
              standard web analytics platforms (such as Google Analytics) where enabled. You can control cookies through
              your browser settings; disabling them may affect site functionality.
            </p>
          </LegalSection>

          <LegalSection title="4. Session Recording & Analytics Tools">
            <p>
              We may use session recording or heatmap tools — which can capture mouse movement, clicks, scrolling, and
              form field interactions — to understand how visitors use this site and improve its design, where such
              tools are enabled. These tools do not capture information beyond what&rsquo;s visible on the page.
            </p>
          </LegalSection>

          <LegalSection title="5. Advertising">
            <p>
              We may work with advertising platforms — such as Google Ads, Meta Ads, LinkedIn Ads, or Microsoft
              Advertising — where active, to measure and improve campaign performance. These platforms may set their own
              cookies subject to their respective privacy policies.
            </p>
          </LegalSection>

          <LegalSection title="6. Text Message (SMS) Communications">
            <p>
              If you provide a mobile number and opt in to receive text messages, we may use it to send updates,
              scheduling information, or marketing messages related to your inquiry. Message and data rates may apply.
              You can opt out at any time by replying STOP, or by following the instructions in any message you receive
              from us. Opting out of texts doesn&rsquo;t automatically opt you out of other contact methods — see our{" "}
              <a href="/dnc" className="text-[var(--color-blue)] underline">
                Do Not Call Policy
              </a>{" "}
              to stop calls as well.
            </p>
          </LegalSection>

          <LegalSection title="7. How We Use Information">
            <p>
              Information collected through this site is used to respond to inquiries, evaluate buyer applications, operate our
              business, and route calls, transfers, and leads in accordance with campaign-specific consent. See our{" "}
              <a href="/tcpa" className="text-[var(--color-blue)] underline">
                TCPA Compliance
              </a>{" "}
              page for how consent is documented for calls and texts.
            </p>
          </LegalSection>

          <LegalSection title="8. Disclosure & Sharing of Information">
            <p>We may share information in the following situations:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>With service providers who help us operate this site and our business, such as hosting, email delivery, and analytics providers</li>
              <li>With the buyer, law firm, or contractor your submission is matched to, in accordance with the consent and disclosures shown at the point of submission</li>
              <li>In connection with a merger, acquisition, financing, or sale of business assets</li>
              <li>With our affiliates, who are required to honor this Privacy Policy</li>
              <li>With government or public authorities, where required by law, subpoena, or other legal process</li>
              <li>With your consent, for any other purpose</li>
            </ul>
            <p className="mt-2">
              We require service providers who process personal information on our behalf to handle it consistent with this
              Privacy Policy and applicable law.
            </p>
          </LegalSection>

          <LegalSection title="9. Data Retention">
            <p>
              We retain information for 5 years, or as required by applicable law. How long we keep a given piece of
              information depends on its sensitivity, the purpose it was collected for, and whether a longer period is
              needed to meet a legal or reporting obligation.
            </p>
          </LegalSection>

          <LegalSection title="10. Sensitive Information">
            <p>
              Our forms are not designed to collect sensitive personal information — such as health data, racial or ethnic
              origin, religious beliefs, sexual orientation, or biometric data. Please do not submit this type of
              information through our Site. If sensitive information is inadvertently submitted, we will delete it
              promptly upon discovery.
            </p>
          </LegalSection>

          <LegalSection title="11. Information You Submit About Others">
            <p>
              If you submit contact information belonging to someone other than yourself, you confirm that you have that
              person&rsquo;s permission to share it with us. We don&rsquo;t independently verify this, and you&rsquo;re
              responsible for making sure any information you submit is accurate and that you&rsquo;re authorized to
              share it.
            </p>
          </LegalSection>

          <LegalSection title="12. Children's Privacy">
            <p>
              This site is intended for business use by adults and is not directed to children under 16. We do not
              knowingly collect personal information from children under 16; if we learn that we have, we will take steps
              to delete it.
            </p>
          </LegalSection>

          <LegalSection title="13. Security & Data Breach Notification">
            <p>
              We maintain commercially reasonable technical and administrative safeguards designed to protect your
              information from unauthorized access or disclosure. No method of transmission or storage is completely
              secure, so we can&rsquo;t guarantee absolute security. If we become aware of a security breach affecting
              your personal information, we will notify affected individuals as required by applicable law.
            </p>
          </LegalSection>

          <LegalSection title="14. California Residents (CCPA/CPRA)">
            <p>
              California residents have specific rights regarding their personal information, including the right to know,
              delete, correct, and opt out of certain disclosures of personal information. See our{" "}
              <a href="/ccpa" className="text-[var(--color-blue)] underline">
                CCPA Notice
              </a>{" "}
              and{" "}
              <a href="/do-not-sell-my-info" className="text-[var(--color-blue)] underline">
                Do Not Sell My Info
              </a>{" "}
              pages for details on how to exercise these rights.
            </p>
          </LegalSection>

          <LegalSection title="15. Your Rights & Requests">
            <p>
              To request access to, correction of, deletion of, or a portable copy of your information, email{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.businessPhoneHref}`} className="text-[var(--color-blue)] underline">
                {siteConfig.businessPhone}
              </a>
              . To stop receiving calls, see our{" "}
              <a href="/dnc" className="text-[var(--color-blue)] underline">
                Do Not Call Policy
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="16. International Visitors">
            <p>
              This Site is operated in the United States. If you access it from outside the United States, understand
              that your information will be transferred to, processed, and stored in the United States, where data
              protection laws may differ from those in your country.
            </p>
          </LegalSection>

          <LegalSection title="17. Governing Law">
            <p>This Privacy Policy is governed by the laws of {siteConfig.governingLaw}, without regard to conflict-of-law principles.</p>
          </LegalSection>

          <LegalSection title="18. Contact Us">
            <p>
              Questions about this Privacy Policy can be directed to{" "}
              <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.infoEmail}
              </a>
              , {siteConfig.businessPhone}, or {siteConfig.officeHours}.
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/privacy-policy" />
      </Container>
    </section>
  );
}
