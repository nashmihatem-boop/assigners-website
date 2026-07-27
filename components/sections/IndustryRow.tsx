import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { KeywordChip } from "@/components/ui/KeywordChip";
import type { Industry } from "@/lib/constants";

export function IndustryRow({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries#${industry.slug}`}
      className="group grid grid-cols-1 gap-4 border-b border-[var(--color-border)] py-6 transition-colors hover:bg-[var(--color-surface)] sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-6 sm:px-2"
    >
      <span className="font-mono text-sm text-[var(--color-muted)]">{industry.index}</span>
      <div className="flex flex-col gap-2.5">
        <span className="font-heading text-xl font-bold text-[var(--color-navy)] sm:text-2xl">{industry.name}</span>
        <div className="flex flex-wrap gap-2">
          {industry.keywords.map((kw) => (
            <KeywordChip key={kw}>{kw}</KeywordChip>
          ))}
        </div>
      </div>
      <span
        aria-hidden
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-navy)] transition-colors group-hover:border-[var(--color-blue)] group-hover:bg-[var(--color-blue)] group-hover:text-white"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
