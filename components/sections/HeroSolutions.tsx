import Link from "next/link";
import { ArrowUpRight, PhoneForwarded, PhoneCall, FileText, DollarSign, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/constants";

const solutionIcons: Record<string, LucideIcon> = {
  "/warm-transfers": PhoneForwarded,
  "/inbound-calls": PhoneCall,
  "/webform-leads": FileText,
  "/revenue-share": DollarSign,
};

export function HeroSolutions({
  eyebrow,
  title,
  subhead,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const solutions = primaryNav.find((item) => item.label === "Solutions")?.children ?? [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-navy)] via-[#161b47] to-[#33165f] pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-[-12%] h-[380px] w-[380px] rounded-full bg-[var(--color-purple)]/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-[-12%] h-[420px] w-[420px] rounded-full bg-[var(--color-blue)]/25 blur-3xl" />

      <Container className="relative flex flex-col items-center text-center">
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-white/80 backdrop-blur animate-fade-up">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] animate-fade-up">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-up">{subhead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              size="lg"
              variant="secondary"
              className="border-white/25 bg-white/5 text-white hover:border-white/50 hover:text-white"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => {
            const Icon = solutionIcons[item.href];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-2xl bg-white p-5 text-left shadow-[0_20px_45px_-20px_rgba(4,6,25,0.55)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_55px_-18px_rgba(4,6,25,0.6)]"
              >
                {Icon && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                )}
                <div>
                  <div className="flex items-center gap-1.5 font-heading text-base font-bold text-[var(--color-navy)]">
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-blue)]" />
                  </div>
                  <p className="mt-1 text-sm leading-snug text-[var(--color-muted)]">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 text-[var(--color-surface)]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-12 w-full sm:h-16">
          <path d="M0,40 C240,90 480,90 720,50 C960,10 1200,10 1440,55 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
