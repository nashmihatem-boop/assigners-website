"use client";

import { useReducedMotion } from "framer-motion";
import { PhoneForwarded, CheckCircle2, Search, PhoneCall, FileText, ShieldCheck, DollarSign } from "lucide-react";

const GLOW_ID = "pi-glow";

function GlowDefs({ id }: { id: string }) {
  return (
    <defs>
      <filter id={id} x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function TeamPill({ pulse }: { pulse?: boolean }) {
  return (
    <>
      <rect x="330" y="30" width="60" height="240" rx="16" fill="var(--color-navy)" />
      <text x="360" y="150" textAnchor="middle" fill="white" fontSize="11" fontFamily="var(--font-mono)" transform="rotate(-90 360 150)">
        YOUR TEAM
      </text>
      {pulse && (
        <circle cx="330" cy="150" r="6" fill="none" stroke="#A855F7" strokeWidth="2" opacity="0">
          <animate attributeName="r" values="6;28;6" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
      )}
    </>
  );
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={label}>
        {children}
      </svg>
    </div>
  );
}

export function WarmTransferIllustration() {
  const reduceMotion = useReducedMotion();
  const path = "M 60 150 C 150 150, 200 150, 330 150";

  return (
    <Frame label="A live call is screened against your criteria and warm-transferred directly to your team">
      <GlowDefs id={GLOW_ID} />

      <rect x="20" y="118" width="88" height="26" rx="13" fill="#FCE7F3" />
      <circle cx="36" cy="131" r="4" fill="#EC4899">
        {!reduceMotion && <animate attributeName="opacity" values="1;0.25;1" dur="1.4s" repeatCount="indefinite" />}
      </circle>
      <text x="48" y="135" fill="#BE185D" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="1">
        LIVE CALL
      </text>

      <path d={path} fill="none" stroke="#A855F7" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />

      <circle cx="60" cy="190" r="18" fill="white" stroke="#A855F7" strokeWidth="2" />
      <svg x="50" y="180" width="20" height="20" viewBox="0 0 24 24">
        <PhoneForwarded color="#A855F7" size={24} />
      </svg>

      <circle cx="200" cy="190" r="18" fill="white" stroke="#2563EB" strokeWidth="2" />
      <svg x="190" y="180" width="20" height="20" viewBox="0 0 24 24">
        <CheckCircle2 color="#2563EB" size={24} />
      </svg>
      <text x="200" y="228" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="var(--font-mono)">
        VERIFIED
      </text>

      {!reduceMotion &&
        [0, 1].map((i) => (
          <circle key={i} r="4" fill="#A855F7" filter={`url(#${GLOW_ID})`}>
            <animateMotion dur="2.6s" begin={`${i * 1.3}s`} repeatCount="indefinite" path={path} />
          </circle>
        ))}
      {reduceMotion && <circle cx="260" cy="150" r="4" fill="#A855F7" />}

      <TeamPill pulse={!reduceMotion} />
    </Frame>
  );
}

export function InboundCallIllustration() {
  const reduceMotion = useReducedMotion();
  const path = "M 60 150 C 150 150, 200 150, 330 150";

  return (
    <Frame label="A high-intent paid search call rings in and routes to your team in real time">
      <GlowDefs id={GLOW_ID} />

      <path d={path} fill="none" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />

      <circle cx="60" cy="150" r="18" fill="white" stroke="#38BDF8" strokeWidth="2" />
      <svg x="50" y="140" width="20" height="20" viewBox="0 0 24 24">
        <Search color="#38BDF8" size={24} />
      </svg>
      <text x="60" y="188" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="var(--font-mono)">
        PAID SEARCH
      </text>

      {!reduceMotion &&
        [0, 1, 2].map((i) => (
          <circle key={i} cx="200" cy="150" r="18" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0">
            <animate attributeName="r" values="18;46;18" dur="2s" begin={`${i * 0.66}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" begin={`${i * 0.66}s`} repeatCount="indefinite" />
          </circle>
        ))}
      <circle cx="200" cy="150" r="18" fill="white" stroke="#2563EB" strokeWidth="2" />
      <svg x="190" y="140" width="20" height="20" viewBox="0 0 24 24">
        <PhoneCall color="#2563EB" size={24} />
      </svg>

      {!reduceMotion &&
        [0, 1].map((i) => (
          <circle key={i} r="4" fill="#38BDF8" filter={`url(#${GLOW_ID})`}>
            <animateMotion dur="1.8s" begin={`${i * 0.9}s`} repeatCount="indefinite" path={path} />
          </circle>
        ))}
      {reduceMotion && <circle cx="260" cy="150" r="4" fill="#38BDF8" />}

      <TeamPill pulse={!reduceMotion} />

      <text x="200" y="260" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1">
        NO QUEUE — NO DELAY
      </text>
    </Frame>
  );
}

export function WebFormLeadIllustration() {
  const reduceMotion = useReducedMotion();
  const path = "M 150 150 C 220 150, 260 150, 330 150";
  const fields = [
    { y: 130, w: 70 },
    { y: 150, w: 90 },
    { y: 170, w: 55 },
  ];

  return (
    <Frame label="A web form lead is captured, validated, and posted to your team the moment it converts">
      <GlowDefs id={GLOW_ID} />

      <rect x="30" y="105" width="120" height="90" rx="14" fill="white" stroke="#2563EB" strokeOpacity="0.3" strokeWidth="2" />
      <svg x="42" y="115" width="18" height="18" viewBox="0 0 24 24">
        <FileText color="#2563EB" size={24} />
      </svg>

      {fields.map((f, i) => (
        <rect key={f.y} x="42" y={f.y} width={f.w} height="6" rx="3" fill="#2563EB" fillOpacity="0.18">
          {!reduceMotion && (
            <animate attributeName="fill-opacity" values="0.18;0.7;0.18" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          )}
        </rect>
      ))}

      <circle cx="138" cy="183" r="11" fill="white" stroke="#22C55E" strokeWidth="2">
        {!reduceMotion && <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2.4s" begin="1.5s" repeatCount="indefinite" />}
      </circle>
      <svg x="130" y="175" width="16" height="16" viewBox="0 0 24 24">
        <CheckCircle2 color="#22C55E" size={24} />
      </svg>

      <path d={path} fill="none" stroke="#2563EB" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />

      {!reduceMotion &&
        [0, 1].map((i) => (
          <circle key={i} r="4" fill="#2563EB" filter={`url(#${GLOW_ID})`}>
            <animateMotion dur="2.4s" begin={`${1.5 + i * 1.2}s`} repeatCount="indefinite" path={path} />
          </circle>
        ))}
      {reduceMotion && <circle cx="260" cy="150" r="4" fill="#2563EB" />}

      <TeamPill pulse={!reduceMotion} />

      <text x="150" y="230" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1">
        VALIDATED &amp; POSTED IN REAL TIME
      </text>
    </Frame>
  );
}

export function RevenueShareIllustration() {
  const reduceMotion = useReducedMotion();
  const path = "M 60 150 C 150 150, 200 150, 330 150";

  return (
    <Frame label="Unsold leads are scrubbed for compliance, warm-transferred by our agents, and paid out as revenue share">
      <GlowDefs id={GLOW_ID} />

      <rect x="10" y="30" width="60" height="240" rx="16" fill="var(--color-navy)" />
      <text x="40" y="150" textAnchor="middle" fill="white" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600" transform="rotate(-90 40 150)">
        YOUR UNSOLD LEADS
      </text>

      <path d={path} fill="none" stroke="#22C55E" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />

      <circle cx="125" cy="150" r="18" fill="white" stroke="#22C55E" strokeWidth="2" />
      <svg x="115" y="140" width="20" height="20" viewBox="0 0 24 24">
        <ShieldCheck color="#22C55E" size={24} />
      </svg>
      <text x="125" y="188" textAnchor="middle" fill="var(--color-muted)" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.3">
        COMPLIANCE
      </text>
      <text x="125" y="200" textAnchor="middle" fill="var(--color-muted)" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.3">
        SCRUB
      </text>

      <circle cx="275" cy="150" r="18" fill="white" stroke="#A855F7" strokeWidth="2" />
      <svg x="265" y="140" width="20" height="20" viewBox="0 0 24 24">
        <PhoneForwarded color="#A855F7" size={24} />
      </svg>
      <text x="275" y="188" textAnchor="middle" fill="var(--color-muted)" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.3">
        WARM
      </text>
      <text x="275" y="200" textAnchor="middle" fill="var(--color-muted)" fontSize="8.5" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.3">
        TRANSFER
      </text>

      {!reduceMotion &&
        [0, 1].map((i) => (
          <circle key={i} r="4" fill="#22C55E" filter={`url(#${GLOW_ID})`}>
            <animateMotion dur="2.6s" begin={`${i * 1.3}s`} repeatCount="indefinite" path={path} />
          </circle>
        ))}
      {reduceMotion && <circle cx="260" cy="150" r="4" fill="#22C55E" />}

      <rect x="330" y="30" width="60" height="240" rx="16" fill="var(--color-navy)" />
      <svg x="345" y="115" width="28" height="28" viewBox="0 0 24 24">
        <DollarSign color="#22C55E" size={28} />
      </svg>
      <text x="360" y="165" textAnchor="middle" fill="white" fontSize="16" fontFamily="var(--font-heading)" fontWeight="700">
        40%
      </text>
      <text x="360" y="180" textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="0.5">
        REV SHARE
      </text>

      <text x="200" y="260" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="1">
        SOLD FOR $100 — YOU KEEP $40
      </text>
    </Frame>
  );
}
