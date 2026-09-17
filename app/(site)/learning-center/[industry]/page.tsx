import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { costEstimator, getCostIndustry } from "@/lib/cost-estimator";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return costEstimator.map((section) => ({ industry: section.industrySlug }));
}

function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustry(industrySlug);
  if (!industry) return buildMetadata({ title: "Learning Center", description: "Cost guides by industry.", path: "/learning-center" });

  return buildMetadata({
    title: `${industry.name} Cost Guides`,
    description: `Illustrative ${industry.name.toLowerCase()} cost guides and side-by-side comparisons to help you understand typical price ranges before you buy.`,
    path: `/learning-center/${industry.slug}`,
  });
}

export default async function LearningCenterIndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustry(industrySlug);
  const section = getCostIndustry(industrySlug);
  if (!industry || !section) notFound();

  const Icon = industryIcons[industry.slug];

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Learning Center", path: "/learning-center" },
              { name: industry.name, path: `/learning-center/${industry.slug}` },
            ]}
          />
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <SectionLabel index="—">{industry.name}{" "}Cost Guides</SectionLabel>
          </div>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            {industry.name}{" "}costs, <span className="text-gradient-brand">broken down.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{industry.description}</p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionLabel index="01">Categories</SectionLabel>
          <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
            Browse {industry.name.toLowerCase()}{" "}cost categories
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/learning-center/${industry.slug}/${category.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-base font-bold text-[var(--color-navy)]">{category.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </div>
                {category.lowEstimate && category.highEstimate && (
                  <div className="font-mono text-xs text-[var(--color-blue)]">
                    {category.lowEstimate}–{category.highEstimate} {category.unit}
                  </div>
                )}
                <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">{category.intro}</p>
                <div className="mt-2 font-mono text-xs text-[var(--color-muted)]">
                  {category.articles.length} {category.articles.length === 1 ? "guide" : "guides"}
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-muted)]">
            All figures shown are illustrative examples for general education, not quotes or guarantees of actual pricing.
            Actual costs vary by provider, location, and specific circumstances.
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
