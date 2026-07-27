"use client";

import { useReducedMotion, motion } from "framer-motion";

const GRADIENT_STOPS = (
  <>
    <stop offset="0%" stopColor="#E98BFF" />
    <stop offset="45%" stopColor="#A855F7" />
    <stop offset="100%" stopColor="#2563EB" />
  </>
);

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {GRADIENT_STOPS}
        </linearGradient>
        <filter id={`glow-${id}`} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="480" height="360" fill="#F7F9FC" />
      {children}
    </svg>
  );
}

export function MatchIllustration() {
  const reduceMotion = useReducedMotion();
  return (
    <Frame id="match">
      <rect x="70" y="90" width="180" height="180" rx="24" fill="#0A0F2C" />
      <rect x="230" y="90" width="180" height="180" rx="24" fill="url(#grad-match)" />

      {!reduceMotion && (
        <>
          <circle r="5" fill="#60A5FA" filter="url(#glow-match)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 150 150 C 190 140, 210 160, 240 180" />
          </circle>
          <circle r="5" fill="#A855F7" filter="url(#glow-match)">
            <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M 150 210 C 190 200, 210 190, 240 180" />
          </circle>
        </>
      )}

      <circle cx="240" cy="180" r="46" fill="#F7F9FC" stroke="#E5EAF2" strokeWidth="2" />
      <path d="M222 180 l12 14 l24 -28" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {!reduceMotion && (
        <circle cx="240" cy="180" r="46" fill="none" stroke="#2563EB" strokeWidth="2" opacity="0">
          <animate attributeName="r" values="46;62;46" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
      )}
      <rect x="96" y="220" width="60" height="10" rx="5" fill="white" fillOpacity="0.35" />
      <rect x="270" y="130" width="70" height="10" rx="5" fill="white" fillOpacity="0.35" />
    </Frame>
  );
}

export function ResultsIllustration() {
  const reduceMotion = useReducedMotion();
  const bars = [
    { x: 90, h: 70, fill: "#0A0F2C" },
    { x: 158, h: 120, fill: "url(#grad-results)" },
    { x: 226, h: 95, fill: "#0A0F2C" },
    { x: 294, h: 160, fill: "url(#grad-results)" },
    { x: 362, h: 130, fill: "url(#grad-results)" },
  ];
  return (
    <Frame id="results">
      <line x1="60" y1="280" x2="420" y2="280" stroke="#E5EAF2" strokeWidth="2" />
      {bars.map((b, i) =>
        reduceMotion ? (
          <rect key={b.x} x={b.x} y={280 - b.h} width="44" height={b.h} rx="10" fill={b.fill} />
        ) : (
          <motion.rect
            key={b.x}
            x={b.x}
            width="44"
            rx="10"
            fill={b.fill}
            initial={{ y: 280, height: 0 }}
            animate={{ y: 280 - b.h, height: b.h }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          />
        )
      )}
      <path
        d="M90 220 L158 150 L226 175 L294 100 L362 130"
        stroke="#2563EB"
        strokeWidth="4"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
      >
        {!reduceMotion && <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.2s" repeatCount="indefinite" />}
      </path>
      <circle cx="362" cy="90" r="34" fill="url(#grad-results)" />
      <path d="M350 92 l8 8 l16 -18" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Frame>
  );
}

export function TeamIllustration() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { cx: 240, cy: 120 },
    { cx: 150, cy: 220 },
    { cx: 330, cy: 220 },
  ];
  const links = [
    { from: nodes[0], to: nodes[1] },
    { from: nodes[0], to: nodes[2] },
    { from: nodes[1], to: nodes[2] },
  ];
  return (
    <Frame id="team">
      {links.map((link, i) => (
        <line
          key={i}
          x1={link.from.cx}
          y1={link.from.cy}
          x2={link.to.cx}
          y2={link.to.cy}
          stroke="#2563EB"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      ))}
      <line x1="240" y1="120" x2="240" y2="190" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="240" cy="190" r="14" fill="#2563EB" fillOpacity="0.15" />

      {!reduceMotion &&
        links.map((link, i) => (
          <circle key={i} r="4" fill="#A855F7" filter="url(#glow-team)">
            <animateMotion
              dur="2.6s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
              path={`M ${link.from.cx} ${link.from.cy} L ${link.to.cx} ${link.to.cy}`}
            />
          </circle>
        ))}

      <circle cx="240" cy="120" r="38" fill="url(#grad-team)" />
      <circle cx="150" cy="220" r="34" fill="#0A0F2C" />
      <circle cx="330" cy="220" r="34" fill="#0A0F2C" />
      <circle cx="240" cy="120" r="12" fill="white" fillOpacity="0.9" />
      <circle cx="150" cy="220" r="10" fill="white" fillOpacity="0.7" />
      <circle cx="330" cy="220" r="10" fill="white" fillOpacity="0.7" />
    </Frame>
  );
}

export function ReviewIllustration() {
  const reduceMotion = useReducedMotion();
  const lines = [64, 82, 100, 118, 136];
  return (
    <Frame id="review">
      <rect x="120" y="60" width="200" height="240" rx="16" fill="white" stroke="#E5EAF2" strokeWidth="2" />
      {lines.map((y, i) => (
        <rect
          key={y}
          x="144"
          y={y}
          width={i === lines.length - 1 ? 90 : 152}
          height="10"
          rx="5"
          fill="#0A0F2C"
          fillOpacity={i === 0 ? 0.85 : 0.15}
        />
      ))}
      <rect x="144" y="176" width="152" height="72" rx="10" fill="#F7F9FC" stroke="#E5EAF2" strokeWidth="1.5" />
      <rect x="160" y="192" width="70" height="8" rx="4" fill="#0A0F2C" fillOpacity="0.15" />
      <rect x="160" y="210" width="100" height="8" rx="4" fill="#0A0F2C" fillOpacity="0.15" />
      <rect x="160" y="228" width="56" height="8" rx="4" fill="#0A0F2C" fillOpacity="0.15" />

      {!reduceMotion && (
        <g clipPath="inset(0)">
          <rect x="120" y="60" width="200" height="10" fill="#2563EB" opacity="0.18">
            <animate attributeName="y" values="60;280;60" dur="3.6s" repeatCount="indefinite" />
          </rect>
        </g>
      )}

      <circle cx="330" cy="270" r="42" fill="url(#grad-review)" />
      <path d="M312 270 l14 14 l24 -30" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Frame>
  );
}

function pointOnCircle(deg: number, r: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: Math.round((200 + r * Math.cos(rad)) * 100) / 100, y: Math.round((200 + r * Math.sin(rad)) * 100) / 100 };
}

export function LiveNetworkIllustration() {
  const reduceMotion = useReducedMotion();
  const angles = [0, 60, 120, 180, 240, 300];
  const r = 150;

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-live-network" x1="0%" y1="0%" x2="100%" y2="100%">
          {GRADIENT_STOPS}
        </linearGradient>
        <filter id="glow-live-network" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="400" height="400" fill="#0A0F2C" />
      <circle cx="200" cy="200" r="190" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="200" cy="200" r={r} fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 7" />

      <g>
        {angles.map((deg) => {
          const { x: cx, y: cy } = pointOnCircle(deg, r);
          return (
            <g key={deg}>
              <line x1="200" y1="200" x2={cx} y2={cy} stroke="url(#grad-live-network)" strokeOpacity="0.25" strokeWidth="1.5" />
              <circle cx={cx} cy={cy} r="6" fill="url(#grad-live-network)" />
            </g>
          );
        })}
        {!reduceMotion && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="24s"
            repeatCount="indefinite"
          />
        )}
      </g>

      {!reduceMotion &&
        angles.slice(0, 3).map((deg, i) => {
          const { x, y } = pointOnCircle(deg, r);
          return (
            <circle key={deg} r="4" fill="#60A5FA" filter="url(#glow-live-network)">
              <animateMotion dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" path={`M 200 200 L ${x} ${y}`} />
            </circle>
          );
        })}

      <circle cx="200" cy="200" r="56" fill="url(#grad-live-network)" />
      {!reduceMotion && (
        <circle cx="200" cy="200" r="56" fill="none" stroke="url(#grad-live-network)" strokeWidth="2" opacity="0">
          <animate attributeName="r" values="56;84;56" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" />
        </circle>
      )}
      <path d="M182 200 l12 14 l24 -28" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function OptimizeIllustration() {
  const reduceMotion = useReducedMotion();
  const pathA = "M 130 20 C 130 90, 130 110, 230 150";
  const pathB = "M 330 20 C 330 90, 330 110, 250 150";

  return (
    <svg viewBox="0 0 460 360" className="h-full w-full" role="img" aria-label="Two traffic sources, A and B, tested and merged into one optimized delivery path">
      <defs>
        <linearGradient id="grad-optimize" x1="0%" y1="0%" x2="100%" y2="100%">
          {GRADIENT_STOPS}
        </linearGradient>
        <filter id="glow-optimize" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d={pathA} fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeWidth="3" />
      <path d={pathB} fill="none" stroke="#A855F7" strokeOpacity="0.3" strokeWidth="3" />

      {!reduceMotion && (
        <>
          {[0, 1, 2].map((i) => (
            <circle key={`a${i}`} r="4" fill="#38BDF8" filter="url(#glow-optimize)">
              <animateMotion dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" path={pathA} />
            </circle>
          ))}
          {[0, 1, 2].map((i) => (
            <circle key={`b${i}`} r="4" fill="#A855F7" filter="url(#glow-optimize)">
              <animateMotion dur="2.4s" begin={`${0.4 + i * 0.8}s`} repeatCount="indefinite" path={pathB} />
            </circle>
          ))}
        </>
      )}

      <rect x="98" y="20" width="64" height="64" rx="16" fill="#0F1A3D" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1.5" />
      <text x="130" y="62" textAnchor="middle" fill="#38BDF8" fontSize="26" fontFamily="var(--font-heading)" fontWeight="700">
        A
      </text>
      <rect x="298" y="20" width="64" height="64" rx="16" fill="#0F1A3D" stroke="#A855F7" strokeOpacity="0.4" strokeWidth="1.5" />
      <text x="330" y="62" textAnchor="middle" fill="#A855F7" fontSize="26" fontFamily="var(--font-heading)" fontWeight="700">
        B
      </text>

      <path
        d="M 240 160 L 240 220"
        fill="none"
        stroke="url(#grad-optimize)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="2 8"
      >
        {!reduceMotion && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />}
      </path>

      <rect x="150" y="220" width="180" height="80" rx="20" fill="url(#grad-optimize)" />
      <text x="240" y="255" textAnchor="middle" fill="white" fontSize="12" fontFamily="var(--font-mono)" letterSpacing="1">
        OPTIMIZED
      </text>
      <text x="240" y="278" textAnchor="middle" fill="white" fontSize="12" fontFamily="var(--font-mono)" letterSpacing="1">
        DELIVERY
      </text>
    </svg>
  );
}
