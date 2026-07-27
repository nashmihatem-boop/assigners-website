"use client";

import { useReducedMotion } from "framer-motion";
import { FileText, PhoneForwarded, PhoneCall } from "lucide-react";

const lanes = [
  { id: "leads", y: 70, label: "Web Form Leads", icon: FileText, color: "#2563EB", dur: 3.2, delay: 0 },
  { id: "transfers", y: 150, label: "Warm Transfers", icon: PhoneForwarded, color: "#A855F7", dur: 2.8, delay: 0.6 },
  { id: "calls", y: 230, label: "Inbound Calls", icon: PhoneCall, color: "#38BDF8", dur: 3.6, delay: 1.1 },
] as const;

function lanePath(y: number) {
  return `M 40 ${y} C 160 ${y}, 200 ${y}, 320 ${y}`;
}

export function PipelineFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        role="img"
        aria-label="Diagram of leads, transfers, and calls flowing in real time from Assigners to your team"
      >
        <defs>
          <filter id="pf-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lanes.map((lane) => (
          <path
            key={lane.id}
            d={lanePath(lane.y)}
            fill="none"
            stroke={lane.color}
            strokeOpacity="0.15"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 8"
          />
        ))}

        {lanes.map((lane) => (
          <g key={`node-${lane.id}`}>
            <circle cx="40" cy={lane.y} r="18" fill="white" stroke={lane.color} strokeWidth="2" />
            <svg x="30" y={lane.y - 10} width="20" height="20" viewBox="0 0 24 24">
              <lane.icon color={lane.color} size={24} />
            </svg>
          </g>
        ))}

        {!reduceMotion &&
          lanes.map((lane) =>
            [0, 1].map((i) => (
              <circle key={`${lane.id}-${i}`} r="4" fill={lane.color} filter="url(#pf-glow)">
                <animateMotion
                  dur={`${lane.dur}s`}
                  begin={`${lane.delay + i * (lane.dur / 2)}s`}
                  repeatCount="indefinite"
                  path={lanePath(lane.y)}
                />
              </circle>
            ))
          )}

        {reduceMotion && lanes.map((lane) => <circle key={`static-${lane.id}`} cx="180" cy={lane.y} r="4" fill={lane.color} />)}

        <rect x="330" y="30" width="60" height="240" rx="16" fill="var(--color-navy)" />
        <text x="360" y="150" textAnchor="middle" fill="white" fontSize="11" fontFamily="var(--font-mono)" transform="rotate(-90 360 150)">
          YOUR TEAM
        </text>
      </svg>

      <div className="mt-2 flex flex-col gap-1.5">
        {lanes.map((lane) => (
          <div key={lane.id} className="flex items-center gap-2 text-xs font-medium text-[var(--color-navy)]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: lane.color }} aria-hidden />
            {lane.label}
          </div>
        ))}
      </div>
    </div>
  );
}
