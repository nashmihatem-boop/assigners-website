import { ShieldCheck, LineChart, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { StepCard } from "@/components/sections/StepCard";
import { CTABand } from "@/components/sections/CTABand";
import { RevenueShareIllustration } from "@/components/sections/ProductIllustrations";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";

const pageDescription =
  "Send us the leads you can't sell or use. We scrub them for compliance, work them through our calling platform, and pay you 40% revenue share on every sold warm transfer.";

export const metadata = buildMetadata({
  title: "Revenue Share — Monetize Your Unsold Leads",
  description: pageDescription,
  path: "/revenue-share",
});

const steps = [
  {
    title: "Send Us Your Unsold Leads",
    description: "Route the leads you can't sell or use to us via a simple API integration — no manual exports or spreadsheets.",
  },
  {
    title: "We Scrub for Compliance",
    description: "Every lead is checked against Do-Not-Call and litigation lists before an agent ever touches it, so your unsold inventory doesn't become a compliance liability.",
  },
  {
    title: "Our Agents Work the Leads",
    description: "Cleared leads are routed into our calling platform, where trained agents contact them and complete warm transfers into active buyer campaigns.",
  },
  {
    title: "Track Results in Ringba",
    description: "Every completed transfer is sent through Ringba, where you get publisher-level access to monitor performance and track results in real time.",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Monetize What You'd Otherwise Write Off",
    description: "Turn leads that didn't convert or that you couldn't use into a new, ongoing revenue line — without changing how you generate them.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Handled Before It's Worked",
    description: "DNC and litigation scrubbing happens before any lead reaches a calling agent, reducing your exposure on inventory you've already tried to sell.",
  },
  {
    icon: LineChart,
    title: "Full Visibility, Not a Black Box",
    description: "Ringba pub access means you can see exactly what's happening with your leads — call outcomes, transfer status, and payout — as it happens.",
  },
];

export default function RevenueSharePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Revenue Share",
          description: pageDescription,
          path: "/revenue-share",
        })}
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "Revenue Share", path: "/revenue-share" }]} />
      </Container>

      <Hero
        eyebrow="Solution — Revenue Share"
        title={
          <>
            Your unsold leads, <span className="text-gradient-brand">turned into revenue.</span>
          </>
        }
        subhead="Send us the leads you can't sell or use. We scrub them for compliance, work them through our calling platform, and pay you 40% revenue share on every sold warm transfer or call."
        primaryCta={{ label: "Talk to Sales", href: "/talk-to-sales?product=Revenue+Share+(Sell+My+Leads)" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        visual={<RevenueShareIllustration />}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionLabel index="01">How It Works</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            From unsold lead <span className="text-gradient-brand">to paid transfer.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            A straightforward pipeline for your excess or unsold leads — you send them, we do the rest.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map((step, i) => (
              <StepCard key={step.title} index={String(i + 1).padStart(2, "0")} title={step.title} description={step.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionLabel index="02">The Economics</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            You keep <span className="text-gradient-brand">40% of every sale.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Revenue share is paid on every warm transfer or call we successfully sell from your submitted leads — not on leads submitted, so
            you&rsquo;re only ever sharing in real, completed sales.
          </p>

          <div className="mt-10 max-w-xl rounded-3xl border border-[var(--color-border)] bg-white p-8">
            <div className="flex items-center justify-between text-sm text-[var(--color-muted)]">
              <span>Example: warm transfer sold for</span>
              <span className="font-heading text-2xl font-bold text-[var(--color-navy)]">$100</span>
            </div>
            <div className="mt-5 flex h-4 w-full overflow-hidden rounded-full bg-[var(--color-surface)]">
              <div className="h-full bg-gradient-brand" style={{ width: "40%" }} />
              <div className="h-full bg-[var(--color-border)]" style={{ width: "60%" }} />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div>
                <div className="font-heading text-xl font-bold text-[var(--color-navy)]">$40</div>
                <div className="text-[var(--color-muted)]">Your revenue share (40%)</div>
              </div>
              <div className="text-right">
                <div className="font-heading text-xl font-bold text-[var(--color-navy)]">$60</div>
                <div className="text-[var(--color-muted)]">Assigners</div>
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-[var(--color-muted)]">
            Illustrative example — actual sale price and payout vary by vertical, lead quality, and buyer demand. Final revenue share terms
            are confirmed per partner agreement.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionLabel index="03">Why Partner With Us</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Built for lead generators <span className="text-gradient-brand">sitting on unsold volume.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <reason.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{reason.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Ready to monetize your unsold leads?"
        subhead="Tell us your vertical and volume — our team will walk you through the API integration and revenue share terms."
      />
    </>
  );
}
