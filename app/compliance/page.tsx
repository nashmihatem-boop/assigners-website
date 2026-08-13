import Link from "next/link";
import { ShieldCheck, FileCheck, Database, PhoneOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { ImageTextSplit } from "@/components/sections/ImageTextSplit";
import { ReviewIllustration } from "@/components/ui/illustrations";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Lead Sources & Compliance",
  description:
    "How Assigners sources web form leads, warm transfers, and inbound calls — owned-and-operated properties, vetted publishers, paid search, and our approach to consent and data handling.",
  path: "/compliance",
});

const pillars = [
  {
    icon: FileCheck,
    title: "Source Transparency",
    description:
      "Every order is fulfilled from our owned-and-operated (O&O) properties or a limited set of top-tier publishers we've individually reviewed — never aggregators, co-registration networks, or resold lists.",
  },
  {
    icon: ShieldCheck,
    title: "Consent & Documentation",
    description:
      "Consent language is displayed at the point of capture on every O&O property and required of publisher partners. See our TCPA Compliance page for how consent is documented per submission.",
  },
  {
    icon: PhoneOff,
    title: "DNC & Suppression",
    description:
      "Do-not-call and suppression checks run prior to delivery on applicable campaigns. See our Do Not Call Policy for how to request suppression.",
  },
  {
    icon: Database,
    title: "Data Handling",
    description:
      "Consumer data is retained for 5 years, or as required by applicable law, and handled in line with our Privacy Policy.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Lead Sources & Compliance", path: "/compliance" }]} />
          <SectionLabel index="—">Lead Sources & Compliance</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Quality, transparency, and <span className="text-gradient-brand">responsible sourcing.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Vendor due-diligence material for buyers evaluating Assigners as a lead and call source.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="01">Where Volume Comes From</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Owned properties. <span className="text-gradient-brand">Vetted partners.</span>{" "}Paid search.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 text-sm leading-relaxed text-[var(--color-muted)] sm:grid-cols-3 sm:text-base">
            <p>
              <strong className="text-[var(--color-navy)]">Owned-and-operated (O&O) properties</strong>{" "}
              are landing pages and websites we build and control directly, giving us close oversight of messaging,
              targeting, and user experience.
            </p>
            <p>
              <strong className="text-[var(--color-navy)]">Top-tier publishers</strong>{" "}
              are a limited set of partners reviewed for source transparency, campaign fit, and traffic quality before
              they&rsquo;re approved to send volume.
            </p>
            <p>
              <strong className="text-[var(--color-navy)]">Paid search</strong>{" "}
              campaigns we run directly generate inbound calls and webform submissions from consumers actively searching
              for your offer.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ImageTextSplit
            index="—"
            eyebrow="Ongoing Review"
            title={
              <>
                Campaigns are reviewed, <span className="text-gradient-brand">not set and forgotten.</span>
              </>
            }
            copy="Source quality, consent language, and delivery performance are checked on an ongoing basis, not just at onboarding — so the sourcing documentation you review reflects how a campaign actually runs."
            visual={<ReviewIllustration />}
            reverse
          />
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">Compliance Pillars</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Built around <span className="text-gradient-brand">responsible marketing.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft text-[var(--color-blue)]">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
            <h2 className="font-heading text-lg font-bold text-[var(--color-navy)]">Legal Disclaimer</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              Assigners.com and Quality Score LLC do not provide legal advice. Buyers, publishers, advertisers, and other partners are
              responsible for ensuring that their campaigns, consent language, data practices, communications, and business activities
              comply with all applicable laws, regulations, contracts, and industry requirements. Nothing on this page constitutes a
              guarantee of legal compliance, government certification, or certification under any specific regulatory framework.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 text-sm text-[var(--color-muted)] sm:grid-cols-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-navy)]">Compliance Contact</div>
              <div className="mt-1">
                <a href={`mailto:${siteConfig.legalEmail}`} className="text-[var(--color-blue)] underline">
                  {siteConfig.legalEmail}
                </a>
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-navy)]">Data Request Process</div>
              <div className="mt-1">
                Email us your request — see our{" "}
                <Link href="/privacy-policy" className="text-[var(--color-blue)] underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-navy)]">Suppression Requests</div>
              <div className="mt-1">
                See our{" "}
                <Link href="/dnc" className="text-[var(--color-blue)] underline">
                  Do Not Call Policy
                </Link>{" "}
                for how to request suppression.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title="Have compliance questions before you buy?"
        subhead="Our team can walk through source documentation and campaign-specific consent language."
      />
    </>
  );
}
