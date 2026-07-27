import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { getCostIndustry } from "@/lib/cost-estimator";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Learning Center",
  description: "Illustrative cost guides and side-by-side comparisons across Legal, Financial Services, Insurance, Home Services, Real Estate, and Education.",
  path: "/learning-center",
});

export default function LearningCenterPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Learning Center", path: "/learning-center" }]} />
          <SectionLabel index="—">Learning Center</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            What things cost, <span className="text-gradient-brand">explained clearly.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Independent, illustrative cost guides and side-by-side comparisons to help consumers and buyers understand typical
            price ranges before they talk to a provider. Pick an industry to get started.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const section = getCostIndustry(industry.slug);
              const categoryCount = section?.categories.length ?? 0;
              return (
                <IndustryCard
                  key={industry.slug}
                  href={`/learning-center/${industry.slug}`}
                  icon={industryIcons[industry.slug]}
                  name={industry.name}
                  badge={`${categoryCount} cost ${categoryCount === 1 ? "guide" : "guides"}`}
                  description={industry.description}
                  ctaLabel="Browse Guides"
                />
              );
            })}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-muted)]">
            All figures shown throughout the Learning Center are illustrative examples for general education, not quotes,
            appraisals, or guarantees of actual pricing. Actual costs vary by provider, location, project scope, and market
            conditions — always get a specific quote before making a purchasing decision.
          </p>
        </Container>
      </section>

      <CTABand
        title="Selling in one of these industries?"
        subhead="Talk to our sales team about sourcing exclusive, real-time leads, warm transfers, and inbound calls."
      />
    </>
  );
}
