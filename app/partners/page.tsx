import { ShieldCheck, LineChart, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Partners",
  description: "How Assigners evaluates traffic and publishing partners for owned-and-operated and vetted-source campaigns.",
  path: "/partners",
});

const criteria = [
  {
    icon: ShieldCheck,
    title: "Source Transparency",
    description: "We work with a limited set of partners who can clearly document where and how their traffic is generated.",
  },
  {
    icon: LineChart,
    title: "Consistent Quality",
    description: "Traffic is evaluated on contact rate, validity, and downstream performance — not volume alone.",
  },
  {
    icon: Handshake,
    title: "Compliance-Ready",
    description: "Partners must be able to represent that consent capture and data handling meet applicable requirements.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Partners", path: "/partners" }]} />
          <SectionLabel index="—">Partners</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            A small, <span className="text-gradient-brand">vetted partner network.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Most of our volume runs through our own owned-and-operated properties. We supplement it with a limited set of
            top-tier publishing partners — never open marketplaces or aggregators.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="01">What We Look For</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Quality and transparency, <span className="text-gradient-brand">not just volume.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {criteria.map((c) => (
              <div key={c.title} className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft text-[var(--color-blue)]">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <SectionLabel index="02">Already Generating Leads?</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Monetize what you <span className="text-gradient-brand">can&rsquo;t sell or use.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            If you&rsquo;re already generating leads and have unsold or excess volume, our{" "}
            <a href="/revenue-share" className="text-[var(--color-blue)] underline">
              Revenue Share
            </a>{" "}
            program is a separate path to working together: send us the leads you can&rsquo;t use, and earn 40% revenue share
            on every one we successfully sell as a warm transfer or call.
          </p>
          <Button href="/revenue-share" size="md" variant="secondary" className="mt-6">
            See How Revenue Share Works
          </Button>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionLabel index="03">Interested in Partnering?</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">
            Tell us about <span className="text-gradient-brand">your traffic.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Email{" "}
            <a href={`mailto:${siteConfig.infoEmail}`} className="text-[var(--color-blue)] underline">
              {siteConfig.infoEmail}
            </a>{" "}
            with an overview of your traffic sources, volume, and verticals. Our team reviews new partner applications on a
            rolling basis. Submitting information does not guarantee acceptance or access to campaigns.
          </p>
        </Container>
      </section>

      <CTABand title="Have questions before you reach out?" subhead="Our Lead Sources & Compliance page covers how we vet every partner and property." primaryLabel="See Our Compliance Approach" primaryHref="/compliance" />
    </>
  );
}
