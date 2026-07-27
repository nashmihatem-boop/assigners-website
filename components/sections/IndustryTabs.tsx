"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { cn } from "@/lib/utils";

export function IndustryTabs() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active) ?? industries[0];

  return (
    <div>
      <div role="tablist" aria-label="Industries" className="flex flex-wrap gap-x-8 gap-y-4 border-b border-[var(--color-border)]">
        {industries.map((industry) => {
          const Icon = industryIcons[industry.slug];
          const isActive = industry.slug === active;
          return (
            <button
              key={industry.slug}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(industry.slug)}
              className={cn(
                "group flex flex-col items-center gap-2 pb-4 text-sm font-medium transition-colors",
                isActive ? "text-[var(--color-blue)]" : "text-[var(--color-muted)] hover:text-[var(--color-navy)]"
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full transition-all",
                  isActive
                    ? "bg-gradient-brand text-white shadow-lg"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-muted)] group-hover:border-[var(--color-blue)]/40 group-hover:text-[var(--color-blue)]"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              {industry.name}
              <span className={cn("h-0.5 w-full rounded-full transition-colors", isActive ? "bg-[var(--color-blue)]" : "bg-transparent")} />
            </button>
          );
        })}
      </div>

      <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
        What people are searching for
      </p>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {current.keywords.map((kw) => (
          <div
            key={kw}
            className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-brand-soft text-[var(--color-blue)]">
              <Search className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="truncate font-mono text-sm text-[var(--color-navy)]">{kw}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="max-w-md text-sm text-[var(--color-muted)]">{current.description}</p>
        <Link
          href={`/industries#${current.slug}`}
          className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[var(--color-blue)] hover:underline"
        >
          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
