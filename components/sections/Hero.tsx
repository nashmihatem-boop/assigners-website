import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero({
  eyebrow,
  title,
  subhead,
  primaryCta,
  secondaryCta,
  visual,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-brand-soft blur-3xl" />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col gap-6 animate-fade-up">
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">{subhead}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        {visual && <div className="animate-fade-up">{visual}</div>}
      </Container>
    </section>
  );
}
