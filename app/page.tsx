import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hero } from "@/components/sections/Hero";
import { PipelineFlow } from "@/components/sections/PipelineFlow";
import { TrustBar } from "@/components/sections/TrustBar";
import { StepCard } from "@/components/sections/StepCard";
import { IndustryTabs } from "@/components/sections/IndustryTabs";
import { ImageTextSplit } from "@/components/sections/ImageTextSplit";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { MatchIllustration, ResultsIllustration } from "@/components/ui/illustrations";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { whyUs, howItWorks } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Web Form Leads, Warm Transfers & Inbound Calls",
  description:
    "Assigners delivers exclusive web form leads, warm transfers, and inbound calls sourced from owned-and-operated properties and vetted top-tier publishers — delivered in real time.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="We Don't Just Sell Leads — We Assign Them"
        title={
          <>
            We assign the right lead <span className="text-gradient-brand">to the right business.</span>
          </>
        }
        subhead="Every web form lead, warm transfer, and inbound call is matched against your campaign criteria and assigned to your team — not sold blind off a list. Sourced from owned-and-operated properties and vetted top-tier publishers."
        primaryCta={{ label: "Talk to Sales", href: "/talk-to-sales" }}
        secondaryCta={{ label: "See How It Works", href: "#how-it-works" }}
        visual={<PipelineFlow />}
      />

      <TrustBar />

      <section className="py-20 sm:py-28">
        <Container>
          <ImageTextSplit
            index="—"
            eyebrow="Assigned, Not Sold"
            title={
              <>
                We don&rsquo;t sell you a list. <span className="text-gradient-brand">We assign the opportunity.</span>
              </>
            }
            copy="Most vendors hand you a list and move on. Assigners matches every web form lead, warm transfer, and inbound call against your specific criteria — geography, schedule, qualification rules — and assigns it directly to your team in real time."
            visual={<MatchIllustration />}
          >
            <ul className="mt-2 flex flex-col gap-2.5">
              {[
                "Assigned by your campaign-specific criteria",
                "Assigned in real time — not batched or delayed",
                "Assigned exclusively where your campaign calls for it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-navy)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </ImageTextSplit>
        </Container>
      </section>

      <section id="products" className="border-t border-[var(--color-border)] py-20 sm:py-28">
        <Container>
          <SectionLabel index="01">Why Buyers Choose Assigners</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            The highest-intent pipeline <span className="text-gradient-brand">there is.</span>
          </h2>
          <p className="mt-3 max-w-xl text-base text-[var(--color-muted)]">
            Every source in our network is owned or vetted — built to make your acquisition pipeline more predictable.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {whyUs.map((item, i) => (
              <StepCard key={item.title} index={String(i + 1).padStart(2, "0")} prefix="" title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <SectionLabel index="02">How It Works</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            From <span className="text-gradient-brand">click</span>{" "}to conversion.
          </h2>
          <p className="mt-3 max-w-xl text-base text-[var(--color-muted)]">
            A transparent pipeline from ad click to delivery — every step under our control.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {howItWorks.map((step) => (
              <StepCard key={step.step} index={step.step} title={step.title} description={step.description} />
            ))}
          </div>
        </Container>
      </section>

      <BrandStatement
        title="Assigned with precision. Every time."
        subhead="Every opportunity is matched, verified, and routed to the right buyer before it ever reaches your inbox."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionLabel index="03">Industries We Serve</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
                Industries <span className="text-gradient-brand">we serve.</span>
              </h2>
            </div>
            <Button href="/industries" variant="secondary">
              View All Industries
            </Button>
          </div>

          <div className="mt-10">
            <IndustryTabs />
          </div>
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Campaign availability, targeting options, and qualification criteria vary by vertical, geography, buyer requirements, and
            applicable regulations.
          </p>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <ImageTextSplit
            index="04"
            eyebrow="Proven Results"
            title={
              <>
                Performance that holds up <span className="text-gradient-brand">across campaigns.</span>
              </>
            }
            copy="Blended across active Assigners campaigns, buyers see a 60% conversion rate, 63% contact rate, and a 90% CPA improvement versus prior sources. Individual results vary by vertical, geography, and how quickly your team follows up."
            visual={<ResultsIllustration />}
            reverse
          >
            <Button href="/case-studies" variant="secondary" className="mt-2 w-fit">
              See Case Studies
            </Button>
          </ImageTextSplit>
        </Container>
      </section>

      <CTABand
        title="Ready to see what your pipeline could look like?"
        subhead="Tell us your vertical, target volume, and delivery requirements — our sales team will follow up to talk through availability."
      />
    </>
  );
}
