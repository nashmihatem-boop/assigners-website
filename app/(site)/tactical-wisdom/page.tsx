import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StepCard } from "@/components/sections/StepCard";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { OptimizeIllustration } from "@/components/ui/illustrations";
import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Tactical Wisdom",
  description:
    "How Assigners' sourcing and delivery team tests traffic sources head-to-head, scores quality in real time, and continuously tunes campaigns for better contact rate, conversion rate, and CPA.",
  path: "/tactical-wisdom",
});

const tactics = [
  {
    title: "Source-Level Testing",
    description:
      "Owned-and-operated properties are tested head-to-head against vetted publisher sources on every active campaign, so volume shifts toward whichever source is performing best against your criteria.",
  },
  {
    title: "Real-Time Quality Scoring",
    description:
      "Source, intent signals, contact validity, and geographic fit are evaluated before a call, transfer, or lead is ever routed — not after the fact.",
  },
  {
    title: "Continuous Delivery Tuning",
    description:
      "Targeting, qualification logic, and routing rules are adjusted on an ongoing basis as a campaign runs, not just set once at launch.",
  },
];

export default function TacticalWisdomPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-navy)] pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-brand-soft blur-3xl"
        />
        <Container className="relative">
          <Breadcrumbs items={[{ name: "Tactical Wisdom", path: "/tactical-wisdom" }]} />
        </Container>
        <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#38BDF8]">Tactical Wisdom</span>
            <h1 className="max-w-xl font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              Specialized sourcing <span className="text-gradient-brand">and optimization teams.</span>
            </h1>
            <div className="flex max-w-xl flex-col gap-4 text-base leading-relaxed text-white/60">
              <p>
                Our sourcing and delivery team continuously reviews campaign performance and studies consumer intent, source
                quality, and delivery trends across every active program.
              </p>
              <p>
                We test traffic sources head-to-head — comparing owned-and-operated properties against vetted publishers — and
                shift volume toward whichever source performs best against your criteria.
              </p>
              <p>
                With expertise in paid search, landing page optimization, qualification logic, and real-time routing, we&rsquo;re able
                to improve not just volume, but contact rate, conversion rate, and cost per acquisition.
              </p>
              <p>
                As a campaign scales, we keep testing and tuning — refining targeting, adjusting delivery rules, and finding new
                ways to improve quality without you having to ask.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/talk-to-sales" size="lg">
                Talk to Sales
              </Button>
              <Button href="/contact" size="lg" variant="secondary" className="border-white/20 bg-transparent text-white hover:border-white hover:text-white">
                Talk to Our Team
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <OptimizeIllustration />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">How We Optimize</span>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Every campaign, <span className="text-gradient-brand">tuned on purpose.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {tactics.map((t, i) => (
              <StepCard key={t.title} index={String(i + 1).padStart(2, "0")} prefix="" title={t.title} description={t.description} />
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Optimization tactics vary by campaign, vertical, and available volume. Testing and tuning support campaign
            decision-making but do not guarantee conversion or sales outcomes.
          </p>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <SectionLabel index="—">Guides</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Buyer education, <span className="text-gradient-brand">before you spend a dollar.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Straight answers to the questions every buyer should ask before evaluating a lead vendor.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/tactical-wisdom/${guide.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-blue)]">
                    {guide.industry ?? "General"}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{guide.title}</h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">{guide.intro}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Want this level of optimization on your campaign?"
        subhead="Tell us your vertical and target volume — our team will walk through how sourcing and delivery are tuned for buyers like you."
      />
    </>
  );
}
