import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LeadFormsWidget } from "@/components/forms/LeadFormsWidget";
import { TrustSection } from "@/components/home-hub/TrustSection";
import { getCostCategory } from "@/lib/cost-estimator";
import { leadFormsTokens } from "@/lib/lead-forms-tokens";

export function ServiceQuoteContent({
  categorySlug,
  eyebrow,
  heading,
  subhead,
}: {
  categorySlug: string;
  eyebrow: string;
  heading: React.ReactNode;
  subhead: string;
}) {
  const category = getCostCategory("home-services", categorySlug);
  const formToken = leadFormsTokens[categorySlug];

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_460px] lg:items-start lg:gap-12">
            <div>
              <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-blue)]">
                {eyebrow}
              </span>
              <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
                {heading}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">{subhead}</p>

              {category?.lowEstimate && category.highEstimate && (
                <div className="mt-6 inline-flex items-baseline gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
                  <span className="font-heading text-2xl font-bold text-[var(--color-navy)]">
                    {category.lowEstimate}–{category.highEstimate}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-muted)]">{category.unit} · illustrative</span>
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-24">{formToken && <LeadFormsWidget formToken={formToken} />}</div>
          </div>
        </Container>
      </section>

      {category?.intro && (
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
          <Container>
            <SectionLabel index="—">Overview</SectionLabel>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-navy)]">{category.intro}</p>
          </Container>
        </section>
      )}

      {category && category.factors.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionLabel index="01">What Affects Cost</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
              Key <span className="text-gradient-brand">cost factors.</span>
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {category.factors.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                  <span className="text-sm leading-relaxed text-[var(--color-navy)]">{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {category && category.articles.length > 0 && (
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
          <Container>
            <SectionLabel index="02">Learn More</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
              {eyebrow} <span className="text-gradient-brand">comparisons.</span>
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {category.articles.slice(0, 6).map((a) => (
                <Link
                  key={a.slug}
                  href={`/learning-center/home-services/${category.slug}/${a.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-blue)]"
                >
                  <span className="font-heading text-base font-bold text-[var(--color-navy)]">{a.title}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-blue)]"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <TrustSection />
    </>
  );
}
