import Link from "next/link";
import { Target, Eye, ShieldCheck, Zap, TrendingUp, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { ImageTextSplit } from "@/components/sections/ImageTextSplit";
import { TeamIllustration } from "@/components/ui/illustrations";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About Us: Performance Marketing & Lead Gen",
  description: "Assigners is a B2B lead and call acquisition brand powered by Quality Score LLC, built around source transparency and real-time delivery.",
  path: "/about",
});

const values = [
  { title: "Quality", icon: Target, description: "We'd rather send fewer, better opportunities than flood your pipeline with noise." },
  { title: "Transparency", icon: Eye, description: "You always know whether volume came from an O&O property or a vetted publisher." },
  { title: "Accountability", icon: ShieldCheck, description: "We stand behind our sourcing and delivery process, campaign by campaign." },
  { title: "Responsiveness", icon: Zap, description: "Campaign adjustments and account support happen on your timeline, not ours." },
  { title: "Continuous Improvement", icon: TrendingUp, description: "Every campaign is monitored and optimized against real delivery performance." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
          <SectionLabel index="—">About Assigners</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Customer acquisition, <span className="text-gradient-brand">built on better sourcing.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Assigners is a performance marketing brand {siteConfig.ownerLine}. We help businesses connect with prospective customers
            through web form leads, warm transfers, and inbound calls.
          </p>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-navy)]">
              <Compass className="h-3.5 w-3.5 text-[var(--color-blue)]" aria-hidden />
              Our Mission
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
              Make customer acquisition something buyers can actually trust — every call, transfer, and lead{" "}
              <span className="text-gradient-brand">assigned with intent, not sold off a list.</span>
            </h2>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ImageTextSplit
            index="—"
            eyebrow="How We Operate"
            title={
              <>
                We assign opportunities. <span className="text-gradient-brand">We don&rsquo;t just sell them.</span>
              </>
            }
            copy="Our team manages sourcing, qualification, and routing end to end — so every call, transfer, and lead that reaches a buyer was actively assigned to them, not pulled off a shared list."
            visual={<TeamIllustration />}
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <SectionLabel index="01">Who We Are</SectionLabel>
            <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              Assigners is the customer acquisition brand of {siteConfig.legalEntity}. We build and manage the campaigns, landing
              pages, and paid-search programs that generate the calls, transfers, and leads we deliver to buyers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel index="02">What We Do</SectionLabel>
            <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              We operate the full pipeline from ad click to delivery — running paid search, managing owned-and-operated landing pages,
              vetting a limited set of top-tier publishers, and routing qualified opportunities to buyers in real time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel index="03">Our Approach to Quality</SectionLabel>
            <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              Every source is owned or vetted — no co-registration, no aggregators, no recycled data. Campaigns are monitored
              continuously so delivery quality improves over time.{" "}
              <Link href="/tactical-wisdom" className="text-[var(--color-blue)] underline">
                See how we optimize
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel index="04">Transparency Principles</SectionLabel>
            <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              Buyers always know whether a given order came from an O&O property, a vetted publisher, or a paid-search campaign we run
              directly. We document consent and sourcing so you can evaluate us with confidence.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-navy)] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel index="05">Company Values</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              What we hold <span className="text-gradient-brand">ourselves to.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              These values shape how we source, qualify, and deliver every campaign — not just words on a page.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 rounded-2xl bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand-soft text-[var(--color-blue)]">
                  <v.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand title="Want to work with our team directly?" subhead="Reach out and we'll walk through how Assigners can fit your pipeline." />
    </>
  );
}
