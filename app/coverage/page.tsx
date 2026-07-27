import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { CoverageCalculator } from "@/components/sections/CoverageCalculator";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Coverage by Industry & State",
  description:
    "Where Assigners can source and deliver web form leads, warm transfers, and inbound calls — browse coverage by industry and by state.",
  path: "/coverage",
});

export default function CoveragePage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Coverage", path: "/coverage" }]} />
          <SectionLabel index="—">Coverage</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Coverage by <span className="text-gradient-brand">industry and state.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Browse where Assigners can source and deliver web form leads, warm transfers, and inbound calls. Pick an industry to
            see state-by-state coverage.
          </p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <CoverageCalculator />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionLabel index="—">Browse By Industry</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight text-[var(--color-navy)] sm:text-3xl">
            Or explore state-by-state coverage directly.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                href={`/coverage/${industry.slug}`}
                icon={industryIcons[industry.slug]}
                name={industry.name}
                badge="All 50 states + DC"
                description={industry.description}
                ctaLabel="View Coverage"
              />
            ))}
          </div>
          <p className="mt-8 text-xs text-[var(--color-muted)]">
            Campaign availability, targeting options, and qualification criteria vary by vertical, geography, buyer requirements,
            and applicable regulations.
          </p>
        </Container>
      </section>

      <CTABand
        title="Don't see the coverage you need?"
        subhead="Tell us your vertical, target states, and volume — our team will confirm what's available."
      />
    </>
  );
}
