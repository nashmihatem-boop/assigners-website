import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { industries } from "@/lib/constants";
import { US_STATE_NAMES, stateSlug, STATE_SLUG_TO_ABBR } from "@/lib/us-states";
import { stateArticles, getStateArticles } from "@/lib/state-articles";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return stateArticles.flatMap((set) => {
    const slug = stateSlug(set.stateAbbr);
    return [...set.b2b, ...set.consumer].map((article) => ({
      industry: set.industrySlug,
      state: slug,
      article: article.slug,
    }));
  });
}

function resolve(industrySlug: string, stateSlugParam: string, articleSlug: string) {
  const industry = industries.find((i) => i.slug === industrySlug);
  const abbr = STATE_SLUG_TO_ABBR[stateSlugParam];
  if (!industry || !abbr) return null;
  const articleSet = getStateArticles(industrySlug, abbr);
  if (!articleSet) return null;
  const isB2B = articleSet.b2b.some((a) => a.slug === articleSlug);
  const article = [...articleSet.b2b, ...articleSet.consumer].find((a) => a.slug === articleSlug);
  if (!article) return null;
  return { industry, abbr, stateName: US_STATE_NAMES[abbr], article, isB2B, articleSet };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; state: string; article: string }>;
}) {
  const { industry: industrySlug, state, article: articleSlug } = await params;
  const resolved = resolve(industrySlug, state, articleSlug);
  if (!resolved) return buildMetadata({ title: "Coverage", description: "Coverage by state.", path: "/coverage" });

  const { industry, article } = resolved;
  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/coverage/${industry.slug}/${state}/${article.slug}`,
  });
}

export default async function StateArticlePage({
  params,
}: {
  params: Promise<{ industry: string; state: string; article: string }>;
}) {
  const { industry: industrySlug, state, article: articleSlug } = await params;
  const resolved = resolve(industrySlug, state, articleSlug);
  if (!resolved) notFound();

  const { industry, abbr, stateName, article, isB2B, articleSet } = resolved;
  const otherArticles = [...articleSet.b2b, ...articleSet.consumer].filter((a) => a.slug !== article.slug);

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Coverage", path: "/coverage" },
              { name: industry.name, path: `/coverage/${industry.slug}` },
              { name: stateName, path: `/coverage/${industry.slug}/${state}` },
              { name: article.title, path: `/coverage/${industry.slug}/${state}/${article.slug}` },
            ]}
          />
          <SectionLabel index="—">{isB2B ? "For Buyers" : "For Consumers"}</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            {article.title}
          </h1>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="flex max-w-3xl flex-col gap-4">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-[var(--color-muted)]">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="—">FAQ</SectionLabel>
          <div className="mt-6 max-w-3xl">
            <Faq items={[article.faq]} />
          </div>
          <JsonLd data={faqJsonLd([article.faq])} />
          {isB2B ? (
            <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-muted)]">
              Campaign availability, pricing, and qualification criteria vary and are confirmed per campaign — this page is
              educational, not a quote or guarantee of availability.
            </p>
          ) : (
            <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--color-muted)]">
              This page is general educational information, not legal advice, and does not create an attorney-client
              relationship. Consult a licensed attorney about your specific situation.
            </p>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="—">More {stateName}{" "}Guides</SectionLabel>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/coverage/${industry.slug}/${state}/${a.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-navy)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                {a.title}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
            <Link
              href={`/coverage/${industry.slug}/${state}`}
              className="rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Back to {stateName}{" "}Coverage
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        title={isB2B ? `Ready for ${industry.name.toLowerCase()} opportunities in ${stateName}?` : "Selling in this industry?"}
        subhead={
          isB2B
            ? "Tell us your target volume and delivery requirements — our sales team will confirm current availability."
            : "Talk to our sales team about sourcing exclusive, real-time leads, warm transfers, and inbound calls."
        }
        primaryHref={`/talk-to-sales?state=${abbr}&vertical=${encodeURIComponent(industry.name)}`}
      />
    </>
  );
}
