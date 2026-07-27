import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { WarmTransferIllustration, InboundCallIllustration, WebFormLeadIllustration } from "@/components/sections/ProductIllustrations";
import { LeadAvailabilityMap } from "@/components/sections/LeadAvailabilityMap";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/structured-data";
import type { Product } from "@/lib/products";

const productVisuals: Record<Product["slug"], React.ReactNode> = {
  "warm-transfers": <WarmTransferIllustration />,
  "inbound-calls": <InboundCallIllustration />,
  "webform-leads": <WebFormLeadIllustration />,
};

export function ProductTemplate({ product }: { product: Product }) {
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: product.name, description: product.metaDescription, path: `/${product.slug}` })} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: product.name, path: `/${product.slug}` }]} />
      </Container>
      <Hero
        eyebrow={product.heroEyebrow}
        title={
          <>
            {product.heroTitlePlain}
            <span className="text-gradient-brand">{product.heroTitleAccent}</span>
          </>
        }
        subhead={product.heroSubhead}
        primaryCta={{ label: "Talk to Sales", href: "/talk-to-sales" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        visual={productVisuals[product.slug]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionLabel index="01">How It&rsquo;s Sourced</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            From first click to <span className="text-gradient-brand">final delivery.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">{product.sourcingIntro}</p>

          <ol className="mt-10 flex flex-col gap-4">
            {product.sourcing.map((step, i) => (
              <li key={step} className="flex items-start gap-4 border-b border-[var(--color-border)] pb-4">
                <span className="font-mono text-sm text-[var(--color-blue)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-[var(--color-navy)] sm:text-base">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionLabel index="02">Qualification Criteria</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Built around <span className="text-gradient-brand">your rules.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Qualification criteria vary by campaign and are configured with your team before launch.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.qualification.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" aria-hidden />
                <span className="text-sm leading-relaxed text-[var(--color-navy)]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <LeadAvailabilityMap product={product.name} />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionLabel index="03">Delivery Method</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Delivered <span className="text-gradient-brand">your way.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {product.delivery.map((d, i) => (
              <div key={d.method} className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{d.method}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <SectionLabel index="04">Sample SLAs</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            What to <span className="text-gradient-brand">expect.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Sample metrics below are illustrative starting points — final SLAs are confirmed per campaign.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {product.sla.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-4">
                <div className="font-heading text-2xl font-bold text-[var(--color-navy)]">{metric.value}</div>
                <div className="text-sm text-[var(--color-muted)]">{metric.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title={`Ready to add ${product.shortName} to your pipeline?`}
        subhead="Share your target volume and delivery requirements — our sales team will follow up to talk through availability."
      />
    </>
  );
}
