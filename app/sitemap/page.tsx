import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { industries, footerNav, legalPages } from "@/lib/constants";
import { US_STATE_ORDER, US_STATE_NAMES, stateSlug } from "@/lib/us-states";
import { costEstimator } from "@/lib/cost-estimator";
import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sitemap",
  description: "A full, browsable map of every section of Assigners.com — solutions, industries, coverage by state, learning center, and legal pages.",
  path: "/sitemap",
});

function SitemapColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-blue)]">{title}</div>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const solutions = footerNav.products;
  const mainPages = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Coverage", href: "/coverage" },
    { label: "Learning Center", href: "/learning-center" },
    { label: "Tactical Wisdom", href: "/tactical-wisdom" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Talk to Sales", href: "/talk-to-sales" },
  ];
  const companyPages = footerNav.company.filter((l) => !mainPages.some((m) => m.href === l.href));

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Sitemap", path: "/sitemap" }]} />
          <SectionLabel index="—">Sitemap</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Every page, <span className="text-gradient-brand">in one place.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            A full map of Assigners.com — solutions, industries, coverage by state, learning center, and legal pages. Looking
            for the XML version for search engines?{" "}
            <a href="/sitemap.xml" className="text-[var(--color-blue)] underline">
              View sitemap.xml
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <SitemapColumn title="Main" links={mainPages} />
            <SitemapColumn title="Solutions" links={solutions} />
            <SitemapColumn title="Company" links={companyPages} />
            <SitemapColumn
              title="Legal & Compliance"
              links={legalPages}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="01">Coverage by State</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight text-[var(--color-navy)] sm:text-3xl">
            Every industry, <span className="text-gradient-brand">every state.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-10">
            {industries.map((industry) => (
              <div key={industry.slug}>
                <Link
                  href={`/coverage/${industry.slug}`}
                  className="font-heading text-lg font-bold text-[var(--color-navy)] hover:text-[var(--color-blue)] hover:underline"
                >
                  {industry.name}{" "}Coverage
                </Link>
                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-6">
                  {US_STATE_ORDER.map((abbr) => (
                    <Link
                      key={abbr}
                      href={`/coverage/${industry.slug}/${stateSlug(abbr)}`}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] hover:underline"
                    >
                      {US_STATE_NAMES[abbr]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">Learning Center</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight text-[var(--color-navy)] sm:text-3xl">
            Cost guides <span className="text-gradient-brand">by category.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-10">
            {costEstimator.map((section) => {
              const industry = industries.find((i) => i.slug === section.industrySlug);
              if (!industry) return null;
              return (
                <div key={section.industrySlug}>
                  <Link
                    href={`/learning-center/${section.industrySlug}`}
                    className="font-heading text-lg font-bold text-[var(--color-navy)] hover:text-[var(--color-blue)] hover:underline"
                  >
                    {industry.name}{" "}Learning Center
                  </Link>
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-4">
                    {section.categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/learning-center/${section.industrySlug}/${category.slug}`}
                        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] hover:underline"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="03">Tactical Wisdom Guides</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight text-[var(--color-navy)] sm:text-3xl">
            Buyer education, <span className="text-gradient-brand">start to finish.</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/tactical-wisdom/${guide.slug}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] hover:underline"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
