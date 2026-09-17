import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { ImageTextSplit } from "@/components/sections/ImageTextSplit";
import { ResultsIllustration } from "@/components/ui/illustrations";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Case Studies & Results",
  description: "Blended performance metrics and buyer results for Assigners' web form leads, warm transfers, and inbound calls.",
  path: "/case-studies",
});

const metrics = [
  { label: "Conversion Rate", value: "60%", note: "Blended avg., active campaigns" },
  { label: "Contact Rate", value: "63%", note: "Blended avg., active campaigns" },
  { label: "CPA Improvement", value: "90%", note: "Blended avg., active campaigns" },
];

const reasons = [
  {
    title: "Source Transparency",
    description: "Every order is fulfilled from our owned-and-operated properties or a limited set of vetted publishers — never aggregators or resold lists.",
    href: "/compliance",
    linkLabel: "See our sourcing",
  },
  {
    title: "Documented Consent",
    description: "Consent is captured and documented at the point of submission, and applicable campaigns are scrubbed against Do Not Call lists before outbound contact.",
    href: "/tcpa",
    linkLabel: "See our TCPA approach",
  },
  {
    title: "Credit & Replacement Policy",
    description: "Invalid contacts, duplicates, and out-of-criteria submissions are eligible for credit within 5 business days of delivery.",
    href: "/lead-credit-policy",
    linkLabel: "See our credit policy",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Case Studies", path: "/case-studies" }]} />
          <SectionLabel index="—">Case Studies</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Results, <span className="text-gradient-brand">not guesses.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Blended performance figures below reflect active Assigners campaigns. Detailed, named buyer case studies will be added here
            as they&rsquo;re documented and approved.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ImageTextSplit
            index="01"
            eyebrow="Blended Performance"
            title={
              <>
                What buyers see <span className="text-gradient-brand">across active campaigns.</span>
              </>
            }
            copy="These figures are blended averages across active Assigners campaigns — not a guarantee for any individual buyer. Actual results vary by vertical, geography, offer quality, and how quickly your team follows up."
            visual={<ResultsIllustration />}
          >
            <div className="mt-2 grid grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-white p-4">
                  <div className="font-heading text-2xl font-bold text-[var(--color-navy)]">{m.value}</div>
                  <div className="text-xs font-medium text-[var(--color-navy)]">{m.label}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wide text-[var(--color-muted)]">{m.note}</div>
                </div>
              ))}
            </div>
          </ImageTextSplit>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">Why Buyers Choose Assigners</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Built on <span className="text-gradient-brand">transparency, not promises.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{r.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{r.description}</p>
                <a href={r.href} className="mt-auto text-sm font-medium text-[var(--color-blue)] underline">
                  {r.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand title="Want to be our next case study?" subhead="Launch a campaign with Assigners and let's build your results together." />
    </>
  );
}
