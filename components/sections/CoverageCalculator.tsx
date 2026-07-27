"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin, Layers, TrendingUp, Sparkles } from "lucide-react";
import { US_STATE_ORDER, US_STATE_NAMES } from "@/lib/us-states";
import { industries } from "@/lib/constants";
import { monthlyVolumes } from "@/lib/validation";
import { inputClass } from "@/components/ui/FormField";

const additionalStateOptions = [
  { value: 0, label: "None (1 state)" },
  { value: 1, label: "1 more (2 states)" },
  { value: 2, label: "2 more (3 states)" },
  { value: 3, label: "3 more (4 states)" },
  { value: 4, label: "4+ more (5+ states)" },
];

export function CoverageCalculator({
  defaultIndustrySlug,
  defaultState,
}: {
  defaultIndustrySlug?: string;
  defaultState?: string;
} = {}) {
  const [industrySlug, setIndustrySlug] = useState(defaultIndustrySlug ?? industries[0].slug);
  const [primaryState, setPrimaryState] = useState((defaultState ?? "tx").toLowerCase());
  const [additionalStates, setAdditionalStates] = useState(0);
  const [volume, setVolume] = useState<(typeof monthlyVolumes)[number]>(monthlyVolumes[0]);
  const [checked, setChecked] = useState(false);

  const industry = industries.find((i) => i.slug === industrySlug)!;
  const stateCount = additionalStates + 1;

  const salesHref = `/talk-to-sales?vertical=${encodeURIComponent(industry.name)}&state=${primaryState}&monthlyVolume=${encodeURIComponent(volume)}&states=${stateCount}`;

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_45px_-15px_rgba(10,15,44,0.12)] sm:p-8">
      <div className="flex items-center gap-2 text-[var(--color-blue)]">
        <Sparkles className="h-4 w-4" aria-hidden />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.16em]">Check Your Coverage</span>
      </div>
      <h3 className="mt-2 font-heading text-2xl font-bold text-[var(--color-navy)]">
        See what&rsquo;s available in your market.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
        Pick your vertical, states, and target volume — we&rsquo;ll confirm current availability.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="calc-industry" className="text-sm font-medium text-[var(--color-navy)]">
            Industry
          </label>
          <select
            id="calc-industry"
            className={inputClass(false)}
            value={industrySlug}
            onChange={(e) => {
              setIndustrySlug(e.target.value);
              setChecked(false);
            }}
          >
            {industries.map((ind) => (
              <option key={ind.slug} value={ind.slug}>
                {ind.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="calc-state" className="text-sm font-medium text-[var(--color-navy)]">
            Primary State
          </label>
          <select
            id="calc-state"
            className={inputClass(false)}
            value={primaryState}
            onChange={(e) => {
              setPrimaryState(e.target.value);
              setChecked(false);
            }}
          >
            {US_STATE_ORDER.map((abbr) => (
              <option key={abbr} value={abbr}>
                {US_STATE_NAMES[abbr]}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="calc-additional" className="text-sm font-medium text-[var(--color-navy)]">
            Additional States
          </label>
          <select
            id="calc-additional"
            className={inputClass(false)}
            value={additionalStates}
            onChange={(e) => {
              setAdditionalStates(Number(e.target.value));
              setChecked(false);
            }}
          >
            {additionalStateOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="calc-volume" className="text-sm font-medium text-[var(--color-navy)]">
            Target Monthly Volume
          </label>
          <select
            id="calc-volume"
            className={inputClass(false)}
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value as (typeof monthlyVolumes)[number]);
              setChecked(false);
            }}
          >
            {monthlyVolumes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!checked ? (
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] transition-transform hover:-translate-y-0.5"
        >
          Check Availability
        </button>
      ) : (
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue)]" aria-hidden />
            <div className="text-sm leading-relaxed text-[var(--color-navy)]">
              <strong>{industry.name}</strong>{" "}sourcing is active in{" "}
              <strong>
                {US_STATE_NAMES[primaryState]}
                {additionalStates > 0 ? ` + ${additionalStates} more state${additionalStates > 1 ? "s" : ""}` : ""}
              </strong>{" "}
              — our team can confirm real-time capacity at your target volume of <strong>{volume}</strong>.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-muted)]">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {stateCount}{" "}state{stateCount > 1 ? "s" : ""}{" "}requested
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" aria-hidden />
              Web Form Leads, Warm Transfers, Inbound Calls
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden />
              {volume}{" "}/ month target
            </div>
          </div>
          <Link
            href={salesHref}
            className="flex w-full items-center justify-center rounded-full bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] transition-transform hover:-translate-y-0.5"
          >
            Talk to Sales About This Coverage
          </Link>
          <p className="text-center text-[11px] text-[var(--color-muted)]">
            Pricing isn&rsquo;t published — it&rsquo;s set per campaign based on vertical, exclusivity, and qualification criteria.
            Our team will confirm real availability and a quote after this.
          </p>
        </div>
      )}
    </div>
  );
}
