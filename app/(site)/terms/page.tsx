import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalSection } from "@/components/ui/LegalNotice";
import { RelatedPolicies } from "@/components/sections/RelatedPolicies";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of Service for Assigners.com, a brand of Quality Score LLC.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Terms of Service", path: "/terms" }]} />

        <p className="mt-4 font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
          Assigners by Quality Score LLC
        </p>
        <h1 className="mt-1 font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {siteConfig.legalLastUpdated}</p>

        <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          <LegalSection title="1. Acceptance of Terms">
            <p>
              By accessing or using this website, operated by {siteConfig.legalEntity}{" "}(&ldquo;Assigners,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;), you agree to these Terms of Service.
            </p>
          </LegalSection>

          <LegalSection title="2. No Guaranteed Conversions">
            <p>
              Assigners does not guarantee that any call, transfer, or lead will result in a sale, appointment, policy, contract, or
              other conversion. Results depend on many factors, including campaign criteria, market conditions, offer quality, sales
              process, follow-up, and buyer performance.
            </p>
          </LegalSection>

          <LegalSection title="3. Campaign Terms">
            <p>
              Pricing, availability, targeting, qualification criteria, exclusivity, and delivery terms are established per campaign
              and are subject to a separate insertion order or agreement between Assigners and the buyer. See our{" "}
              <a href="/lead-credit-policy" className="text-[var(--color-blue)] underline">
                Lead Credit Policy
              </a>{" "}
              for how invalid leads and calls are handled.
            </p>
          </LegalSection>

          <LegalSection title="4. Buyer & Partner Responsibilities">
            <p>
              Buyers and traffic partners are responsible for ensuring their own compliance with applicable laws, regulations, and
              industry requirements related to their use of Assigners&rsquo; products and services, including the{" "}
              <a href="/tcpa" className="text-[var(--color-blue)] underline">
                TCPA
              </a>{" "}
              and any professional advertising rules applicable to their industry (see our{" "}
              <a href="/aba-disclaimer" className="text-[var(--color-blue)] underline">
                ABA Disclaimer
              </a>{" "}
              for law firm buyers).
            </p>
          </LegalSection>

          <LegalSection title="5. Acceptable Use">
            <p>
              You agree to use this site only for lawful purposes. If you submit contact information belonging to someone
              other than yourself, you confirm that you have that person&rsquo;s permission to share it with us, and you
              agree to indemnify Assigners against claims arising from the unauthorized submission of third-party data.
            </p>
            <p className="mt-2">You also agree not to:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Reverse engineer, decompile, or attempt to extract the source code of this site or its underlying systems</li>
              <li>Use bots, scrapers, crawlers, or other automated means to access or collect data from this site, except standard search engine indexing</li>
              <li>Submit false, fraudulent, or misleading information through our forms</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
              <li>Interfere with or disrupt the site, its servers, or its networks, including by introducing malware</li>
              <li>Use the site in any way that violates applicable federal, state, or local law</li>
            </ul>
          </LegalSection>

          <LegalSection title="6. Business & Employment Data">
            <p>
              These Terms and our Privacy Policy address consumer-facing use of this site. Business contact information
              and employee data submitted in connection with a campaign agreement are handled under the terms of that
              separate agreement, not this general Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection title="7. Intellectual Property">
            <p>
              All content on this site, including the Assigners name and logo, is the property of {siteConfig.legalEntity}
              {" "}and may not be used without permission.
            </p>
          </LegalSection>

          <LegalSection title="8. Disclaimer of Warranties">
            <p>
              This site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
              warranties of any kind, express or implied. Assigners does not warrant that the site will be uninterrupted,
              error-free, or free of harmful components.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Assigners and {siteConfig.legalEntity}
              {" "}disclaim liability for indirect, incidental, or consequential damages arising from use of this site or our services.
            </p>
          </LegalSection>

          <LegalSection title="10. Indemnification">
            <p>
              You agree to indemnify and hold Assigners, {siteConfig.legalEntity}, and their officers, employees, and
              affiliates harmless from any claims, damages, or expenses arising from your use of this site, your
              submission of information through it, or your breach of these Terms.
            </p>
          </LegalSection>

          <LegalSection title="11. Governing Law & Venue">
            <p>
              These Terms are governed by the laws of {siteConfig.governingLaw}, without regard to conflict-of-law principles.
              Subject to Section 12 (Dispute Resolution), you agree that any legal action or proceeding arising out of or
              relating to these Terms that is not subject to arbitration will be brought exclusively in the state or
              federal courts located in New Castle County, Delaware, and you consent to the personal jurisdiction of
              those courts.
            </p>
          </LegalSection>

          <LegalSection title="12. Dispute Resolution">
            <p>
              Except as described below, any dispute, claim, or controversy arising out of or relating to these Terms or
              your use of this site will be resolved by binding arbitration administered by the American Arbitration
              Association (AAA) under its rules then in effect, rather than in court. Either party may instead bring an
              individual claim in small claims court where the claim qualifies. Arbitration will proceed on an individual
              basis only — class, collective, and representative actions or arbitrations are not permitted, and the
              arbitrator has no authority to combine more than one person&rsquo;s claims into a single proceeding. Nothing
              in this section prevents either party from seeking injunctive or other equitable relief in court to protect
              its intellectual property or confidential information.
            </p>
          </LegalSection>

          <LegalSection title="13. Statute of Limitations">
            <p>
              To the extent permitted by applicable law, any claim or cause of action arising out of or related to your
              use of this site or these Terms must be filed within one (1) year after the claim or cause of action
              arose, or it will be permanently barred.
            </p>
          </LegalSection>

          <LegalSection title="14. Severability">
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or
              eliminated to the minimum extent necessary so that the remaining provisions of these Terms will remain in
              full force and effect.
            </p>
          </LegalSection>

          <LegalSection title="15. Changes to These Terms">
            <p>
              We may update these Terms of Service from time to time. Changes are effective once posted to this page with
              an updated &ldquo;Last updated&rdquo; date. Continued use of this site after changes are posted constitutes
              acceptance of the revised Terms.
            </p>
          </LegalSection>

          <LegalSection title="16. Contact Us">
            <p>
              Questions about these Terms can be directed to{" "}
              <a href={`mailto:${siteConfig.legalEmail}`} className="text-[var(--color-blue)] underline">
                {siteConfig.legalEmail}
              </a>
              .
            </p>
          </LegalSection>
        </div>

        <RelatedPolicies currentHref="/terms" />
      </Container>
    </section>
  );
}
