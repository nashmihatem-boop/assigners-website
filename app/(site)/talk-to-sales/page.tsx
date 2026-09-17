import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BuyerIntakeForm } from "@/components/forms/BuyerIntakeForm";
import { buildMetadata } from "@/lib/metadata";
import { US_STATE_NAMES } from "@/lib/us-states";

export const metadata = buildMetadata({
  title: "Talk to Sales",
  description: "Tell us about your campaign and connect with the Assigners sales team about web form leads, warm transfers, and inbound calls.",
  path: "/talk-to-sales",
});

export default async function TalkToSalesPage({
  searchParams,
}: {
  searchParams: Promise<{ vertical?: string; product?: string; state?: string; monthlyVolume?: string; states?: string }>;
}) {
  const params = await searchParams;

  const stateName = params.state ? US_STATE_NAMES[params.state.toLowerCase()] : undefined;
  const additionalStates = params.states ? Number(params.states) - 1 : 0;
  const defaultMessage =
    stateName &&
    `Coverage request from the availability checker: ${stateName}${additionalStates > 0 ? ` + ${additionalStates} more state${additionalStates > 1 ? "s" : ""}` : ""}.`;

  return (
    <section className="py-16 sm:py-20">
      <Container className="pb-6">
        <Breadcrumbs items={[{ name: "Talk to Sales", path: "/talk-to-sales" }]} />
      </Container>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28">
          <SectionLabel index="—">Talk to Sales</SectionLabel>
          <h1 className="max-w-md font-heading text-4xl font-bold leading-[1.1] text-[var(--color-navy)] sm:text-5xl">
            Tell us what you need. <span className="text-gradient-brand">We&rsquo;ll do the rest.</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-[var(--color-muted)]">
            Share your vertical, target volume, and delivery requirements. Our sales team will review your request and follow up
            — typically within one business day.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
          <BuyerIntakeForm
            defaultVertical={params.vertical}
            defaultProductInterest={params.product}
            defaultMonthlyVolume={params.monthlyVolume}
            defaultMessage={defaultMessage}
          />
        </div>
      </Container>
    </section>
  );
}
