import React from "react";

// ── Unique SVG filter/gradient IDs to avoid conflicts when used multiple times ──
let _uid = 0;
function uid() {
  return `ms-${++_uid}`;
}

// ── Lime 3D Cylinder (standing upright, pill-shaped) ──────────────────────────
export const LimeCylinder: React.FC<{ className?: string }> = ({ className = "" }) => {
  const g = uid(); const s = uid();
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#f0ff60" />
          <stop offset="45%" stopColor="#d2fc00" />
          <stop offset="100%" stopColor="#9fc800" />
        </linearGradient>
        <filter id={s}>
          <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.18"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        {/* body */}
        <path d="M10 30 Q10 18 40 18 Q70 18 70 30 L70 88 Q70 100 40 100 Q10 100 10 88 Z" fill={`url(#${g})`}/>
        {/* top cap highlight ellipse */}
        <ellipse cx="40" cy="30" rx="30" ry="12" fill="#eeff80"/>
        {/* subtle shadow bottom */}
        <ellipse cx="40" cy="88" rx="30" ry="12" fill="#a5cc00" opacity="0.55"/>
      </g>
    </svg>
  );
};

// ── Lime Squiggle / S-Worm ─────────────────────────────────────────────────────
export const LimeSquiggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const g = uid(); const s = uid();
  return (
    <svg viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#eeff6a" />
          <stop offset="50%" stopColor="#d2fc00" />
          <stop offset="100%" stopColor="#90c200" />
        </linearGradient>
        <filter id={s}>
          <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.22"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        <path
          d="M15 100 C 18 70 40 68 50 88 C 60 108 82 102 82 75 C 82 48 58 38 64 12"
          stroke={`url(#${g})`}
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

// ── White 3D Torus / Donut Ring ───────────────────────────────────────────────
export const WhiteTorus: React.FC<{ className?: string }> = ({ className = "" }) => {
  const rg = uid(); const s = uid(); const bg = uid();
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={rg} cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#ffffff"/>
          <stop offset="55%"  stopColor="#dde6f5"/>
          <stop offset="100%" stopColor="#b8c8dc"/>
        </radialGradient>
        <radialGradient id={bg} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1a50e8"/>
          <stop offset="100%" stopColor="#1234bb"/>
        </radialGradient>
        <filter id={s}>
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#000" floodOpacity="0.18"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(-15 60 40)">
        {/* outer donut */}
        <ellipse cx="60" cy="40" rx="52" ry="36" fill={`url(#${rg})`}/>
        {/* inner hole */}
        <ellipse cx="60" cy="40" rx="24" ry="16" fill={`url(#${bg})`}/>
        {/* highlight arc top-left */}
        <path d="M 22 28 Q 40 12 62 18" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </g>
    </svg>
  );
};

// ── White 3D Right-Pointing Arrow / Prism ─────────────────────────────────────
// Matches the Figma "pointing right" white 3D shape in hero right-middle
export const WhitePrism: React.FC<{ className?: string }> = ({ className = "" }) => {
  const s = uid(); const gL = uid(); const gR = uid();
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={gL} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e8eef8"/>
        </linearGradient>
        <linearGradient id={gR} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#d8e4f0"/>
          <stop offset="100%" stopColor="#9fb8cc"/>
        </linearGradient>
        <filter id={s}>
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.20"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(-10 50 40)">
        {/* top face */}
        <polygon points="10,52 50,10 90,52" fill={`url(#${gL})`}/>
        {/* bottom/right shadow face */}
        <polygon points="10,52 50,70 90,52" fill={`url(#${gR})`}/>
        {/* highlight edge */}
        <line x1="10" y1="52" x2="90" y2="52" stroke="#fff" strokeWidth="1.5" opacity="0.6"/>
      </g>
    </svg>
  );
};

// ── White Zigzag / Lightning Spring ──────────────────────────────────────────
export const WhiteZigzag: React.FC<{ className?: string }> = ({ className = "" }) => {
  const s = uid();
  return (
    <svg viewBox="0 0 60 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id={s}>
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.22"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        <polyline
          points="10,10 50,30 10,50 50,70 10,90"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

// ── White Spiral S-Ribbon ─────────────────────────────────────────────────────
export const WhiteSpiral: React.FC<{ className?: string }> = ({ className = "" }) => {
  const s = uid();
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id={s}>
          <feDropShadow dx="2" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.22"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        <path
          d="M15 20 C 40 5, 68 18, 65 42 C 62 66, 20 60, 18 80 C 16 100, 55 105, 65 100"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

// ── Lime Torus Ring (used in Creator CTA bottom) ──────────────────────────────
export const LimeTorus: React.FC<{ className?: string }> = ({ className = "" }) => {
  const rg = uid(); const s = uid(); const bg = uid();
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={rg} cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#f5ff7a"/>
          <stop offset="55%"  stopColor="#d2fc00"/>
          <stop offset="100%" stopColor="#8db400"/>
        </radialGradient>
        <radialGradient id={bg} cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#1a50e8"/>
          <stop offset="100%" stopColor="#1234bb"/>
        </radialGradient>
        <filter id={s}>
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.22"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(-20 60 40)">
        <ellipse cx="60" cy="40" rx="52" ry="34" fill={`url(#${rg})`}/>
        <ellipse cx="60" cy="40" rx="22" ry="14" fill={`url(#${bg})`}/>
        <path d="M 22 30 Q 40 14 62 20" stroke="#f0ff80" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </g>
    </svg>
  );
};

// Keep old WhiteCone as alias of WhitePrism for backward compat
export const WhiteCone = WhitePrism;
