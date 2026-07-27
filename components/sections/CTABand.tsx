import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTABand({
  title,
  subhead,
  primaryLabel = "Talk to Sales",
  primaryHref = "/talk-to-sales",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: {
  title: string;
  subhead: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-xl lg:grid-cols-2">
          <div className="relative flex flex-col justify-center gap-6 overflow-hidden bg-[var(--color-navy)] p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-30 blur-3xl"
            />
            <div className="relative flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/50">Next Step</span>
              <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
                Assigners
              </span>
            </div>
            <h2 className="relative max-w-md font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="relative max-w-md text-base leading-relaxed text-white/70">{subhead}</p>
          </div>

          <div className="flex flex-col justify-center gap-5 bg-[var(--color-surface)] p-8 sm:p-12">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">Get Started</span>
            <p className="font-heading text-xl font-bold leading-snug text-[var(--color-navy)] sm:text-2xl">
              We typically respond within one business day.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} size="lg" variant="secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
