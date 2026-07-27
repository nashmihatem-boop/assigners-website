import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { ConsumerLeadForm } from "@/components/forms/ConsumerLeadForm";
import { industries } from "@/lib/constants";
import { costEstimator, getCostCategory, getCostArticle, getCostIndustry, type CostOption } from "@/lib/cost-estimator";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return costEstimator.flatMap((section) =>
    section.categories.flatMap((category) =>
      category.articles.map((article) => ({
        industry: section.industrySlug,
        category: category.slug,
        article: article.slug,
      }))
    )
  );
}

function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; category: string; article: string }>;
}) {
  const { industry: industrySlug, category: categorySlug, article: articleSlug } = await params;
  const industry = getIndustry(industrySlug);
  const article = getCostArticle(industrySlug, categorySlug, articleSlug);
  if (!industry || !article) return buildMetadata({ title: "Learning Center", description: "Cost guides.", path: "/learning-center" });

  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/learning-center/${industry.slug}/${categorySlug}/${article.slug}`,
  });
}

function OptionCard({ option }: { option: CostOption }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-6">
      <div>
        <h3 className="font-heading text-xl font-bold text-[var(--color-navy)]">{option.name}</h3>
        <div className="mt-2 inline-flex items-baseline gap-2 rounded-lg bg-[var(--color-surface)] px-3 py-2">
          <span className="font-heading text-lg font-bold text-[var(--color-navy)]">
            {option.lowEstimate}–{option.highEstimate}
          </span>
          <span className="font-mono text-xs text-[var(--color-muted)]">{option.unit}</span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[var(--color-muted)]">{option.description}</p>
      <div>
        <div className="font-mono text-xs font-semibold uppercase tracking-wide text-[var(--color-blue)]">Pros</div>
        <ul className="mt-2 flex flex-col gap-2">
          {option.pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-navy)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-mono text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Cons</div>
        <ul className="mt-2 flex flex-col gap-2">
          {option.cons.map((con) => (
            <li key={con} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-navy)]">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-muted)]" aria-hidden />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function LearningCenterArticlePage({
  params,
}: {
  params: Promise<{ industry: string; category: string; article: string }>;
}) {
  const { industry: industrySlug, category: categorySlug, article: articleSlug } = await params;
  const industry = getIndustry(industrySlug);
  const category = getCostCategory(industrySlug, categorySlug);
  const article = getCostArticle(industrySlug, categorySlug, articleSlug);
  if (!industry || !category || !article) notFound();

  const otherArticles = category.articles.filter((a) => a.slug !== article.slug);
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
              { name: article.title, path: `/learning-center/${industry.slug}/${category.slug}/${article.slug}` },
            ]}
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-12">
            <div>
              <SectionLabel index="—">{category.title}</SectionLabel>
              <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{article.intro}</p>
            </div>

            <div className="lg:sticky lg:top-24">
              <ConsumerLeadForm industry={industry.name} category={category.title} categories={categoryTitles} />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className={article.optionB ? "grid grid-cols-1 gap-6 lg:grid-cols-2" : "max-w-xl"}>
            <OptionCard option={article.optionA} />
            {article.optionB && <OptionCard option={article.optionB} />}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="01">The Verdict</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Which one makes <span className="text-gradient-brand">sense for you?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-navy)]">{article.verdict}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">What Affects Cost</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Key <span className="text-gradient-brand">cost factors.</span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {article.factors.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                <span className="text-sm leading-relaxed text-[var(--color-navy)]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="03">Questions To Ask</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Before you <span className="text-gradient-brand">decide.</span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {article.questions.map((item) => (
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
            Frequently asked <span className="text-gradient-brand">questions.</span>
          </h2>
          <div className="mt-8">
            <Faq items={article.faq} />
          </div>
          <JsonLd data={faqJsonLd(article.faq)} />
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-muted)]">
            All figures on this page are illustrative examples for general education, not quotes, appraisals, or guarantees of
            actual pricing. Actual costs vary by provider, location, project scope, and market conditions — always get a
            specific quote before making a purchasing decision.
          </p>
        </Container>
      </section>

      {otherArticles.length > 0 && (
        <section className="border-t border-[var(--color-border)] py-16 sm:py-20">
          <Container>
            <SectionLabel index="—">More {category.title}{" "}Guides</SectionLabel>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/learning-center/${industry.slug}/${category.slug}/${a.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-navy)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
                >
                  {a.title}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ))}
              <Link
                href={`/learning-center/${industry.slug}`}
                className="rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                View All {industry.name}{" "}Categories
              </Link>
            </div>
          </Container>
        </section>
      )}

      <CTABand
        title={`Selling in ${industry.name.toLowerCase()}?`}
        subhead="Talk to our sales team about sourcing exclusive, real-time leads, warm transfers, and inbound calls."
        primaryHref={`/talk-to-sales?vertical=${encodeURIComponent(industry.name)}`}
      />
    </>
  );
}
