import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeywordChip } from "@/components/ui/KeywordChip";
import { CTABand } from "@/components/sections/CTABand";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { US_STATE_ORDER, US_STATE_NAMES, stateSlug } from "@/lib/us-states";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustry(industrySlug);
  if (!industry) return buildMetadata({ title: "Coverage", description: "Coverage by state.", path: "/coverage" });

  return buildMetadata({
    title: `${industry.name} Leads, Transfers & Calls by State`,
    description: `Where Assigners can source and deliver ${industry.name.toLowerCase()} web form leads, warm transfers, and inbound calls — browse all 50 states and DC.`,
    path: `/coverage/${industry.slug}`,
  });
}

export default async function IndustryCoveragePage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustry(industrySlug);
  if (!industry) notFound();

  const Icon = industryIcons[industry.slug];

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Coverage", path: "/coverage" }, { name: industry.name, path: `/coverage/${industry.slug}` }]} />
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <SectionLabel index="—">{industry.name}{" "}Coverage</SectionLabel>
          </div>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            {industry.name}{" "}leads, transfers &amp; calls, <span className="text-gradient-brand">state by state.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{industry.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {industry.keywords.map((kw) => (
              <KeywordChip key={kw}>{kw}</KeywordChip>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionLabel index="01">Select a State</SectionLabel>
          <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
            {industry.name}{" "}coverage in all 50 states + DC
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
            {US_STATE_ORDER.map((abbr) => (
              <Link
                key={abbr}
                href={`/coverage/${industry.slug}/${stateSlug(abbr)}`}
                className="group flex items-center justify-between gap-2 border-b border-[var(--color-border)] py-3 text-sm text-[var(--color-navy)] hover:text-[var(--color-blue)]"
              >
                {US_STATE_NAMES[abbr]}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </Link>
            ))}
          </div>

          <p className="mt-8 text-xs text-[var(--color-muted)]">
            Campaign availability, targeting options, and qualification criteria vary by state, buyer requirements, and applicable
            regulations. See our{" "}
            <Link href="/compliance" className="text-[var(--color-blue)] underline">
              Lead Sources &amp; Compliance
            </Link>{" "}
            page for more detail.
          </p>
        </Container>
      </section>

      <CTABand
        title={`Ready to receive ${industry.name.toLowerCase()} opportunities?`}
        subhead="Tell us your target states and volume — our team will confirm current availability."
      />
    </>
  );
}
