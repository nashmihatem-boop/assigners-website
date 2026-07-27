import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/ui/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { guides, getGuide } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return buildMetadata({ title: "Tactical Wisdom", description: "Buyer guides.", path: "/tactical-wisdom" });

  return buildMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/tactical-wisdom/${guide.slug}`,
  });
}

export default async function TacticalWisdomGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Tactical Wisdom", path: "/tactical-wisdom" },
              { name: guide.title, path: `/tactical-wisdom/${guide.slug}` },
            ]}
          />
          <SectionLabel index="—">{guide.industry ?? "General"}{" "}Guide</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">{guide.intro}</p>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="flex max-w-3xl flex-col gap-10">
            {guide.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">{section.heading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed text-[var(--color-muted)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="—">FAQ</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Frequently asked <span className="text-gradient-brand">questions.</span>
          </h2>
          <div className="mt-8 max-w-3xl">
            <Faq items={guide.faq} />
          </div>
          <JsonLd data={faqJsonLd(guide.faq)} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="—">More Guides</SectionLabel>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/tactical-wisdom/${g.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-navy)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                {g.title}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {guide.industry === "Revenue Share" ? (
        <CTABand
          title="Ready to monetize your unsold leads?"
          subhead="Tell us your vertical and volume — our team will walk you through the API integration and revenue share terms."
          primaryHref="/revenue-share"
          primaryLabel="See Revenue Share"
        />
      ) : (
        <CTABand
          title="Ready to see this in practice?"
          subhead="Tell us your vertical and target volume — our team will walk through sourcing, qualification, and delivery for buyers like you."
        />
      )}
    </>
  );
}
