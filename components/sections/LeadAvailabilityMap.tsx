"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight, TrendingUp, PhoneCall, Target } from "lucide-react";
import { statePaths, stateCircles, US_MAP_VIEWBOX } from "@/lib/us-map-data";
import { US_STATE_NAMES, US_STATE_ORDER } from "@/lib/us-states";
import { industries, trustStats } from "@/lib/constants";
import { industryIcons } from "@/lib/industry-icons";
import { cn } from "@/lib/utils";

const statIcons = [TrendingUp, PhoneCall, Target];

export function LeadAvailabilityMap({ product }: { product: string }) {
  const [selected, setSelected] = useState("tx");
  const [industryIndex, setIndustryIndex] = useState(0);

  const stateName = US_STATE_NAMES[selected] ?? "Your State";
  const industry = industries[industryIndex];
  const Icon = industryIcons[industry.slug];

  const nextIndustry = () => setIndustryIndex((i) => (i + 1) % industries.length);
  const prevIndustry = () => setIndustryIndex((i) => (i - 1 + industries.length) % industries.length);

  const salesHref = `/talk-to-sales?state=${selected}&vertical=${encodeURIComponent(industry.name)}&product=${encodeURIComponent(product)}`;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-6 sm:p-10">
      <div aria-hidden className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#38BDF8]/20 blur-3xl" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" />
          </span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white">Live Availability</span>
        </div>

        <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
          Receive {product}{" "}in <span className="whitespace-nowrap">{stateName}</span>{" "}today!
        </h2>
        <div className="mt-6 border-t border-white/20" />

        <div className="mt-6 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-white" aria-hidden />
          <label htmlFor="state-select" className="sr-only">
            Choose a state
          </label>
          <select
            id="state-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="rounded-md border-none bg-transparent text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {US_STATE_ORDER.map((abbr) => (
              <option key={abbr} value={abbr} className="text-[var(--color-navy)]">
                {US_STATE_NAMES[abbr]}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <svg viewBox={US_MAP_VIEWBOX} className="h-auto w-full" role="img" aria-label="Clickable map of U.S. states">
            <defs>
              <filter id="state-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {statePaths.map((s) => (
              <path
                key={`${s.abbr}-${s.d.slice(0, 8)}`}
                d={s.d}
                onClick={() => setSelected(s.abbr)}
                className="cursor-pointer transition-colors duration-150 hover:fill-white/70"
                fill={selected === s.abbr ? "#ffffff" : "rgba(255,255,255,0.35)"}
                stroke="#2563EB"
                strokeWidth="1"
                filter={selected === s.abbr ? "url(#state-glow)" : undefined}
                role="button"
                aria-label={US_STATE_NAMES[s.abbr]}
              >
                <title>{US_STATE_NAMES[s.abbr]}</title>
              </path>
            ))}
            {stateCircles.map((c) => (
              <circle
                key={c.abbr}
                cx={c.cx}
                cy={c.cy}
                r={c.r}
                onClick={() => setSelected(c.abbr)}
                className="cursor-pointer transition-colors duration-150 hover:fill-white/70"
                fill={selected === c.abbr ? "#ffffff" : "rgba(255,255,255,0.6)"}
                stroke="#2563EB"
                strokeWidth="1"
                filter={selected === c.abbr ? "url(#state-glow)" : undefined}
                role="button"
                aria-label={US_STATE_NAMES[c.abbr]}
              >
                <title>{US_STATE_NAMES[c.abbr]}</title>
              </circle>
            ))}
          </svg>

          <div className="rounded-2xl bg-white p-6 shadow-[0_20px_45px_-15px_rgba(10,15,44,0.35)] ring-1 ring-white/40">
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Available Industries
              </span>
              <span className="rounded-full bg-[var(--color-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-blue)]">
                {industryIndex + 1}/{industries.length}
              </span>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3 text-center">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)]">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="font-heading text-xl font-bold text-[var(--color-navy)]">{industry.name}</div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{industry.description}</p>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={prevIndustry}
                aria-label="Previous industry"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {industries.map((ind, i) => (
                  <span
                    key={ind.slug}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-200",
                      i === industryIndex ? "w-4 bg-[var(--color-blue)]" : "w-1.5 bg-[var(--color-border)]"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextIndustry}
                aria-label="Next industry"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <Link
              href={salesHref}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.7)]"
            >
              Talk to Sales About {stateName}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:grid-cols-3">
          {trustStats.slice(0, 3).map((stat, i) => {
            const StatIcon = statIcons[i];
            return (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
                {StatIcon && (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                    <StatIcon className="h-4 w-4" aria-hidden />
                  </span>
                )}
                <div className="font-heading text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-[11px] text-white/50">
          Figures reflect blended performance across active Assigners campaigns and are not a guarantee for any individual
          campaign. Availability varies by state, vertical, and buyer requirements.
        </p>
      </div>
    </div>
  );
}
