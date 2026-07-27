import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BuyerIntakeForm } from "@/components/forms/BuyerIntakeForm";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the Assigners team about buying leads, warm transfers, or inbound calls.",
  path: "/contact",
});

const contactCards = [
  { icon: Mail, label: "General", value: siteConfig.infoEmail },
  { icon: Phone, label: "Phone", value: siteConfig.businessPhone },
  { icon: MapPin, label: "Address", value: siteConfig.businessAddressLines.join(", ") },
  { icon: Clock, label: "Office Hours", value: siteConfig.officeHours },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pb-14 pt-14 sm:pb-16 sm:pt-20">
        <Container>
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
          <SectionLabel index="—">Contact</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Talk to <span className="text-gradient-brand">our team.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            The form below routes directly to our sales team for availability and campaign questions.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <div key={c.label} className="flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <c.icon className="h-5 w-5 text-[var(--color-blue)]" aria-hidden />
                <div className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]">{c.label}</div>
                <div className="text-sm font-medium text-[var(--color-navy)]">{c.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-3xl">
          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
            <BuyerIntakeForm />
          </div>
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            For compliance-specific inquiries, see our{" "}
            <a href="/compliance" className="text-[var(--color-blue)] underline">
              Lead Sources &amp; Compliance
            </a>{" "}
            page for the dedicated contact process.
          </p>
        </Container>
      </section>
    </>
  );
}
