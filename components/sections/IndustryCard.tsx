import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IndustryCardProps = {
  href: string;
  icon: LucideIcon;
  name: string;
  badge: string;
  description: string;
  ctaLabel: string;
};

export function IndustryCard({ href, icon: Icon, name, badge, description, ctaLabel }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand-soft blur-2xl transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex items-center justify-between">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg">
          <Icon className="h-7 w-7" aria-hidden />
        </span>
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          {badge}
        </span>
      </div>

      <div className="relative">
        <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
      </div>

      <div className="relative mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-[var(--color-blue)]">
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </div>
    </Link>
  );
}
