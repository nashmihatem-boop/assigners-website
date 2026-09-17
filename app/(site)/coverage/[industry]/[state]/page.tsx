import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, FileText, PhoneForwarded, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeywordChip } from "@/components/ui/KeywordChip";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { CoverageCalculator } from "@/components/sections/CoverageCalculator";
import { getStateArticles } from "@/lib/state-articles";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { US_STATE_ORDER, US_STATE_NAMES, stateSlug, STATE_SLUG_TO_ABBR } from "@/lib/us-states";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return industries.flatMap((industry) =>
    US_STATE_ORDER.map((abbr) => ({ industry: industry.slug, state: stateSlug(abbr) }))
  );
}

function resolve(industrySlug: string, stateSlugParam: string) {
  const industry = industries.find((i) => i.slug === industrySlug);
  const abbr = STATE_SLUG_TO_ABBR[stateSlugParam];
  if (!industry || !abbr) return null;
  return { industry, abbr, stateName: US_STATE_NAMES[abbr] };
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string; state: string }> }) {
  const { industry: industrySlug, state } = await params;
  const resolved = resolve(industrySlug, state);
  if (!resolved) return buildMetadata({ title: "Coverage", description: "Coverage by state.", path: "/coverage" });

  const { industry, stateName } = resolved;
  return buildMetadata({
    title: `${industry.name} Leads, Transfers & Calls in ${stateName}`,
    description: `Source ${industry.name.toLowerCase()} web form leads, warm transfers, and inbound calls targeting ${stateName}, delivered in real time by Assigners.`,
    path: `/coverage/${industry.slug}/${state}`,
  });
}

const products = [
  { slug: "webform-leads", name: "Web Form Leads", icon: FileText, blurb: "Real-time submissions from O&O properties and vetted publishers." },
  { slug: "warm-transfers", name: "Warm Transfers", icon: PhoneForwarded, blurb: "Live, pre-qualified calls handed directly to your team." },
  { slug: "inbound-calls", name: "Inbound Calls", icon: PhoneCall, blurb: "Paid-search generated calls routed the moment they connect." },
];

export default async function StateCoveragePage({ params }: { params: Promise<{ industry: string; state: string }> }) {
  const { industry: industrySlug, state } = await params;
  const resolved = resolve(industrySlug, state);
  if (!resolved) notFound();

  const { industry, abbr, stateName } = resolved;
  const Icon = industryIcons[industry.slug];
  const articleSet = getStateArticles(industry.slug, abbr);

  const idx = US_STATE_ORDER.indexOf(abbr);
  const nearby = [
    US_STATE_ORDER[(idx + 1) % US_STATE_ORDER.length],
    US_STATE_ORDER[(idx + 2) % US_STATE_ORDER.length],
    US_STATE_ORDER[(idx + 3) % US_STATE_ORDER.length],
    US_STATE_ORDER[(idx + 4) % US_STATE_ORDER.length],
  ];

  const faqItems = [
    {
      question: `Do you have ${industry.name.toLowerCase()} coverage in ${stateName}?`,
      answer: `Yes — Assigners can source web form leads, warm transfers, and inbound calls for ${industry.name.toLowerCase()} campaigns targeting ${stateName}, subject to current availability and your qualification criteria.`,
    },
    {
      question: `Are ${stateName} leads and calls exclusive?`,
      answer:
        "Exclusivity is set per campaign, not site-wide. Some programs are delivered exclusively to a single buyer; others are shared. Confirm exclusivity terms with our sales team before launch.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Web form leads are typically posted within seconds of capture, warm transfers are connected live, and inbound calls route in real time — see each solution page for delivery method options.",
    },
    {
      question: `Can I target specific cities or regions within ${stateName}?`,
      answer: `Yes. Campaigns can be filtered by city, zip code, or radius within ${stateName} where volume supports it.`,
    },
    {
      question: "Do you guarantee conversions on leads or calls in this state?",
      answer:
        "No. Assigners does not guarantee that any call, transfer, or lead will result in a sale, appointment, policy, contract, or other conversion. Results depend on campaign criteria, market conditions, offer quality, and buyer follow-up.",
    },
    {
      question: "How do I get started?",
      answer: `Talk to our sales team with your target volume and campaign requirements, and we'll confirm current ${stateName} availability.`,
    },
  ];

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Coverage", path: "/coverage" },
              { name: industry.name, path: `/coverage/${industry.slug}` },
              { name: stateName, path: `/coverage/${industry.slug}/${state}` },
            ]}
          />
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <SectionLabel index="—">{stateName}{" "}Coverage</SectionLabel>
          </div>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            {industry.name}{" "}leads, transfers &amp; calls <span className="text-gradient-brand">in {stateName}.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Assigners sources {industry.name.toLowerCase()}{" "}web form leads, warm transfers, and inbound calls targeting consumers
            in {stateName}{" "}— assigned to your team based on your campaign criteria, not sold blind off a shared list.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {industry.keywords.map((kw) => (
              <KeywordChip key={kw}>{kw}</KeywordChip>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <CoverageCalculator defaultIndustrySlug={industry.slug} defaultState={abbr} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="01">Where {stateName}{" "}Volume Comes From</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Owned properties. <span className="text-gradient-brand">Vetted partners.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Consumer demand in {stateName}{" "}is captured on our owned-and-operated landing pages, sourced from a limited set of
            vetted top-tier publishers, or generated directly through paid-search campaigns targeting {stateName}{" "}search intent —
            never aggregators or resold lists. {industry.description}
          </p>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">Available Solutions</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Choose your <span className="text-gradient-brand">delivery model.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft text-[var(--color-blue)]">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">
                  {p.name}{" "}in {stateName}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{p.blurb}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="03">Sourcing &amp; Compliance</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Transparent by <span className="text-gradient-brand">design.</span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              `Campaigns are configured with your ${stateName}-specific targeting and qualification rules before launch`,
              "Consent is captured and documented at the point of submission on O&O properties",
              "Publisher partners are vetted for source transparency before being approved to send volume",
              "Do-not-call and suppression checks run prior to delivery on applicable campaigns",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                <span className="text-sm leading-relaxed text-[var(--color-navy)]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
            Assigners.com and Quality Score LLC do not provide legal advice. Buyers are responsible for ensuring their own
            campaigns and communications comply with all laws applicable in {stateName}. See our{" "}
            <Link href="/compliance" className="text-[var(--color-blue)] underline">
              Lead Sources &amp; Compliance
            </Link>
            ,{" "}
            <Link href="/tcpa" className="text-[var(--color-blue)] underline">
              TCPA Compliance
            </Link>
            , and{" "}
            <Link href="/dnc" className="text-[var(--color-blue)] underline">
              Do Not Call Policy
            </Link>{" "}
            pages for more detail.
          </p>
        </Container>
      </section>

      {articleSet && (
        <>
          <section className="py-16 sm:py-20">
            <Container>
              <SectionLabel index="04">For Buyers</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
                Buying {industry.name.toLowerCase()}{" "}leads <span className="text-gradient-brand">in {stateName}.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                What buyers evaluating {stateName}{" "}campaigns should know before they spend.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {articleSet.b2b.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/coverage/${industry.slug}/${state}/${article.slug}`}
                    className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40"
                  >
                    <h3 className="font-heading text-base font-bold text-[var(--color-navy)]">{article.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">{article.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
            <Container>
              <SectionLabel index="05">For Consumers</SectionLabel>
              <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
                {stateName}{" "}guides <span className="text-gradient-brand">for consumers.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                General, plain-language guides for {stateName}{" "}consumers researching this topic.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {articleSet.consumer.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/coverage/${industry.slug}/${state}/${article.slug}`}
                    className="group flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40"
                  >
                    <h3 className="font-heading text-base font-bold text-[var(--color-navy)]">{article.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">{article.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="06">FAQ</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            {stateName} <span className="text-gradient-brand">questions, answered.</span>
          </h2>
          <div className="mt-8">
            <Faq items={faqItems} />
          </div>
          <JsonLd data={faqJsonLd(faqItems)} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="—">Nearby States</SectionLabel>
          <h2 className="mt-4 font-heading text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
            {industry.name}{" "}coverage in other states
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {nearby.map((nearbyAbbr) => (
              <Link
                key={nearbyAbbr}
                href={`/coverage/${industry.slug}/${stateSlug(nearbyAbbr)}`}
                className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-navy)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                {US_STATE_NAMES[nearbyAbbr]}
              </Link>
            ))}
            <Link
              href={`/coverage/${industry.slug}`}
              className="rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              View All States
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        title={`Ready for ${industry.name.toLowerCase()} opportunities in ${stateName}?`}
        subhead="Tell us your target volume and delivery requirements — our sales team will confirm current availability."
        primaryHref={`/talk-to-sales?state=${abbr}&vertical=${encodeURIComponent(industry.name)}&product=${encodeURIComponent("Multiple Solutions")}`}
      />
    </>
  );
}
