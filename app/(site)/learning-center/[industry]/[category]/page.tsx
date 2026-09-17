import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { ConsumerLeadForm } from "@/components/forms/ConsumerLeadForm";
import { LeadFormsWidget } from "@/components/forms/LeadFormsWidget";
import { industries } from "@/lib/constants";
import { costEstimator, getCostCategory, getCostIndustry } from "@/lib/cost-estimator";
import { leadFormsTokens } from "@/lib/lead-forms-tokens";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return costEstimator.flatMap((section) =>
    section.categories.map((category) => ({ industry: section.industrySlug, category: category.slug }))
  );
}

function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string; category: string }> }) {
  const { industry: industrySlug, category: categorySlug } = await params;
  const industry = getIndustry(industrySlug);
  const category = getCostCategory(industrySlug, categorySlug);
  if (!industry || !category) return buildMetadata({ title: "Learning Center", description: "Cost guides.", path: "/learning-center" });

  return buildMetadata({
    title: category.title.toLowerCase().includes("cost") ? category.title : `${category.title} Cost`,
    description: category.metaDescription,
    path: `/learning-center/${industry.slug}/${category.slug}`,
  });
}

export default async function LearningCenterCategoryPage({ params }: { params: Promise<{ industry: string; category: string }> }) {
  const { industry: industrySlug, category: categorySlug } = await params;
  const industry = getIndustry(industrySlug);
  const category = getCostCategory(industrySlug, categorySlug);
  if (!industry || !category) notFound();

  const categoryTitles = getCostIndustry(industrySlug)?.categories.map((c) => c.title) ?? [category.title];

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Learning Center", path: "/learning-center" },
              { name: industry.name, path: `/learning-center/${industry.slug}` },
              { name: category.title, path: `/learning-center/${industry.slug}/${category.slug}` },
            ]}
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-12">
            <div>
              <SectionLabel index="—">{industry.name}</SectionLabel>
              <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
                {category.title.toLowerCase().includes("cost") ? (
                  category.title
                ) : (
                  <>
                    {category.title} <span className="text-gradient-brand">cost guide.</span>
                  </>
                )}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{category.intro}</p>
              {category.lowEstimate && category.highEstimate && (
                <div className="mt-6 inline-flex items-baseline gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
                  <span className="font-heading text-2xl font-bold text-[var(--color-navy)]">
                    {category.lowEstimate}–{category.highEstimate}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-muted)]">{category.unit}{" "}· illustrative</span>
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-24">
              {leadFormsTokens[category.slug] ? (
                <LeadFormsWidget formToken={leadFormsTokens[category.slug]} />
              ) : (
                <ConsumerLeadForm industry={industry.name} category={category.title} categories={categoryTitles} />
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
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

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">Guides</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            {category.title} <span className="text-gradient-brand">comparisons.</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {category.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/learning-center/${industry.slug}/${category.slug}/${article.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-base font-bold text-[var(--color-navy)]">{article.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </div>
                <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">{article.intro}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="03">Questions To Ask</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Before you <span className="text-gradient-brand">hire or buy.</span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {category.questions.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                <span className="text-sm leading-relaxed text-[var(--color-navy)]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="04">FAQ</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            {category.title} <span className="text-gradient-brand">questions, answered.</span>
          </h2>
          <div className="mt-8">
            <Faq items={category.faq} />
          </div>
          <JsonLd data={faqJsonLd(category.faq)} />
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-muted)]">
            Figures on this page are illustrative examples for general education, not quotes or guarantees of actual pricing.
            Actual costs vary by provider, location, and specific project scope — always get a specific quote before making a
            purchasing decision.
          </p>
        </Container>
      </section>

      <CTABand
        title={`Selling in ${industry.name.toLowerCase()}?`}
        subhead="Talk to our sales team about sourcing exclusive, real-time leads, warm transfers, and inbound calls."
        primaryHref={`/talk-to-sales?vertical=${encodeURIComponent(industry.name)}`}
      />
    </>
  );
}
