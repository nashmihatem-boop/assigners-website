import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeywordChip } from "@/components/ui/KeywordChip";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { LiveNetworkIllustration } from "@/components/ui/illustrations";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Assigners delivers web form leads, warm transfers, and inbound calls across legal, financial services, insurance, home services, real estate, and education.",
  path: "/industries",
});

const vendorGaps = [
  "Recycled leads resold to multiple buyers with no exclusivity guarantee",
  "Blind aggregator lists with no visibility into where volume originates",
  "Generic intake criteria that doesn't match your actual buy box",
  "Delayed delivery that lets high-intent consumers go cold",
  "A dashboard and a support ticket queue — no dedicated team",
];

const assignersAdvantages = [
  "Campaign-specific qualification matched to your exact buy box",
  "100% owned-and-operated or vetted top-tier publisher sourcing",
  "Real-time delivery via API, CRM push, ping-post, or live transfer",
  "Exclusivity terms set per campaign, confirmed before you launch",
  "A dedicated sales and account team, not just a support queue",
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />
          <SectionLabel index="—">Industries</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Industries <span className="text-gradient-brand">we serve.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Flexible web form lead, warm transfer, and inbound call programs across our six core verticals.
          </p>
        </Container>
      </section>

      <section className="pb-20 pt-16 sm:pt-20">
        <Container>
          <SectionLabel index="—">All Verticals</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Six verticals. <span className="text-gradient-brand">One assignment engine.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.slug];
              return (
                <div
                  key={industry.slug}
                  id={industry.slug}
                  className="group relative scroll-mt-24 flex flex-col gap-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-blue)]/40 hover:shadow-xl sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-brand-soft blur-2xl transition-transform duration-500 group-hover:scale-125"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg transition-transform group-hover:scale-105">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Vertical {industry.index}
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">{industry.name}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="relative text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">{industry.description}</p>

                  <div className="relative flex flex-wrap gap-2">
                    {industry.keywords.map((kw) => (
                      <KeywordChip key={kw}>{kw}</KeywordChip>
                    ))}
                  </div>

                  <dl className="relative grid grid-cols-1 gap-4 border-t border-[var(--color-border)] pt-5 sm:grid-cols-3">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]">Solutions</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-[var(--color-navy)] sm:text-sm">
                        Web Form Leads, Warm Transfers, Inbound Calls
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]">Targeting</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-[var(--color-navy)] sm:text-sm">
                        State / regional, schedule-based, custom filters
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]">Compliance</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-[var(--color-navy)] sm:text-sm">
                        Vertical-specific consent, TCPA, and DNC requirements apply
                      </dd>
                    </div>
                  </dl>

                  <div className="relative flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-5">
                    <Button href={`/talk-to-sales?vertical=${encodeURIComponent(industry.name)}`} size="md">
                      Talk to Sales
                    </Button>
                    <Button href={`/coverage/${industry.slug}`} size="md" variant="secondary">
                      View Coverage
                    </Button>
                    <Button href={`/learning-center/${industry.slug}`} size="md" variant="secondary">
                      Learning Center
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-xs text-[var(--color-muted)]">
            Campaign availability, targeting options, and qualification criteria vary by vertical, geography, buyer requirements, and
            applicable regulations. Not every solution is available in every state or vertical at all times.
          </p>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionLabel index="—">Why Assigners</SectionLabel>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
              Stop settling for shared leads. <span className="text-gradient-brand">Start owning your vertical.</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
              See how Assigners compares to the recycled-list vendors most buyers are used to.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px_1fr] lg:items-center lg:gap-10">
            <div className="order-first flex items-center justify-center lg:order-2">
              <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full shadow-lg sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <LiveNetworkIllustration />
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:order-1">
              <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Typical Lead Vendors
              </div>
              {vendorGaps.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[0_3px_9px_rgba(63,74,126,0.05),0_1px_29px_rgba(63,74,126,0.1)]"
                >
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-muted)]" aria-hidden />
                  <span className="text-sm leading-relaxed text-[var(--color-muted)]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 lg:order-3">
              <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">Assigners</div>
              {assignersAdvantages.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[0_3px_9px_rgba(63,74,126,0.05),0_1px_29px_rgba(63,74,126,0.1)]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                  <span className="text-sm leading-relaxed text-[var(--color-navy)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title="Don't see your vertical listed?"
        subhead="We evaluate new verticals regularly. Tell us what you're looking for and we'll confirm availability."
      />
    </>
  );
}
