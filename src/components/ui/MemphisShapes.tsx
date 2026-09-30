import React from "react";

// ── Unique SVG filter/gradient IDs to avoid conflicts when used multiple times ──
let _uid = 0;
function uid() {
  return `ms-${++_uid}`;
}

// ── 1. Top-Left & Accent: 4-Loop Lime 3D Zigzag / Coil Squiggle ──────────────
export const LimeSquiggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const g1 = uid(); const s = uid(); const h = uid();
  return (
    <svg viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={g1} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7ff66" />
          <stop offset="35%" stopColor="#d2fc00" />
          <stop offset="80%" stopColor="#8eb800" />
          <stop offset="100%" stopColor="#628500" />
        </linearGradient>
        <linearGradient id={h} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#d2fc00" stopOpacity="0" />
        </linearGradient>
        <filter id={s} x="-25%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="8" dy="16" stdDeviation="12" floodColor="#00186b" floodOpacity="0.38"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        {/* Main 4-loop volumetric coil path matching reference */}
        <path
          d="M 50 45
             C 75 35, 112 34, 120 52
             C 128 72, 85 82, 60 92
             C 38 102, 50 124, 82 128
             C 114 132, 134 146, 122 165
             C 110 184, 72 188, 92 205"
          stroke={`url(#${g1})`}
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Specular highlight ridge along the top edge */}
        <path
          d="M 50 40
             C 72 30, 108 28, 116 46
             C 124 64, 82 75, 58 84
             C 38 94, 50 116, 80 120
             C 110 124, 128 138, 118 155
             C 106 172, 72 178, 88 194"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  );
};

// ── 2. Middle-Left: White 3D Wavy Spring / Zigzag ─────────────────────────────
export const WhiteZigzag: React.FC<{ className?: string }> = ({ className = "" }) => {
  const g = uid(); const s = uid();
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={g} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#edf3fb" />
          <stop offset="100%" stopColor="#b4cbe6" />
        </linearGradient>
        <filter id={s} x="-25%" y="-25%" width="160%" height="160%">
          <feDropShadow dx="6" dy="12" stdDeviation="8" floodColor="#001a75" floodOpacity="0.35"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        <path
          d="M 28 32
             L 75 48
             L 32 78
             L 80 94
             L 42 120"
          stroke={`url(#${g})`}
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Highlight on top edge */}
        <path
          d="M 28 28
             L 72 44
             L 34 74
             L 78 89
             L 44 114"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        />
      </g>
    </svg>
  );
};

// ── 3. Bottom-Left: Volumetric White 3D Torus Ring ────────────────────────────
export const WhiteTorus: React.FC<{ className?: string }> = ({ className = "" }) => {
  const rg = uid(); const bg = uid(); const s = uid();
  return (
    <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={rg} x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="45%" stopColor="#f2f6fc"/>
          <stop offset="80%" stopColor="#c8d8ec"/>
          <stop offset="100%" stopColor="#9fb7d6"/>
        </linearGradient>
        <radialGradient id={bg} cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0d3cb8"/>
          <stop offset="70%" stopColor="#1852fe"/>
          <stop offset="100%" stopColor="#1240c9"/>
        </radialGradient>
        <filter id={s} x="-30%" y="-30%" width="170%" height="170%">
          <feDropShadow dx="8" dy="16" stdDeviation="14" floodColor="#00186b" floodOpacity="0.40"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(-18 80 60)">
        {/* Outer Donut body */}
        <ellipse cx="80" cy="60" rx="68" ry="46" fill={`url(#${rg})`}/>
        {/* Inner hole */}
        <ellipse cx="80" cy="60" rx="30" ry="20" fill={`url(#${bg})`}/>
        {/* Inner hole shadow overlay for 3D depth */}
        <ellipse cx="80" cy="58" rx="29" ry="18" fill="none" stroke="#7a98c2" strokeWidth="5" opacity="0.6"/>
        {/* Specular highlight crescent */}
        <path
          d="M 32 44 C 45 24, 95 20, 130 38"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </g>
    </svg>
  );
};

// ── 4. Top-Right: Lime 3D Cylinder / Pillar ──────────────────────────────────
export const LimeCylinder: React.FC<{ className?: string }> = ({ className = "" }) => {
  const g = uid(); const topG = uid(); const s = uid();
  return (
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={g} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5ff6c" />
          <stop offset="40%" stopColor="#d2fc00" />
          <stop offset="85%" stopColor="#8ebc00" />
          <stop offset="100%" stopColor="#678c00" />
        </linearGradient>
        <linearGradient id={topG} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f5ff75" />
          <stop offset="100%" stopColor="#d2fc00" />
        </linearGradient>
        <filter id={s} x="-30%" y="-20%" width="170%" height="150%">
          <feDropShadow dx="8" dy="18" stdDeviation="12" floodColor="#00186b" floodOpacity="0.40"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(8 60 90)">
        {/* Body */}
        <path d="M 20 40 Q 20 20 60 20 Q 100 20 100 40 L 100 135 Q 100 155 60 155 Q 20 155 20 135 Z" fill={`url(#${g})`}/>
        {/* Top Flat Oval Cap with bright reflection */}
        <ellipse cx="60" cy="40" rx="40" ry="18" fill={`url(#${topG})`}/>
        {/* Top Rim Highlight */}
        <ellipse cx="60" cy="38" rx="38" ry="16" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.8"/>
        {/* Bottom Shaded Rim */}
        <ellipse cx="60" cy="135" rx="40" ry="18" fill="#759c00" opacity="0.35"/>
      </g>
    </svg>
  );
};

// ── 5. Middle-Right: White 3D Pyramid / Tetrahedron ───────────────────────────
export const WhitePrism: React.FC<{ className?: string }> = ({ className = "" }) => {
  const f1 = uid(); const f2 = uid(); const f3 = uid(); const s = uid();
  return (
    <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Top / Left illuminated face */}
        <linearGradient id={f1} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eef4fc" />
        </linearGradient>
        {/* Right shaded face */}
        <linearGradient id={f2} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d5e3f5" />
          <stop offset="100%" stopColor="#8faecd" />
        </linearGradient>
        {/* Bottom edge shadow */}
        <linearGradient id={f3} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b2cbe6" />
          <stop offset="100%" stopColor="#6e8ea8" />
        </linearGradient>
        <filter id={s} x="-30%" y="-20%" width="170%" height="150%">
          <feDropShadow dx="8" dy="16" stdDeviation="10" floodColor="#00186b" floodOpacity="0.38"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(6 65 65)">
        {/* Left bright facet */}
        <polygon points="65,15 15,95 65,115" fill={`url(#${f1})`} />
        {/* Right shadowed facet */}
        <polygon points="65,15 65,115 118,85" fill={`url(#${f2})`} />
        {/* Bottom facet */}
        <polygon points="15,95 65,115 118,85" fill={`url(#${f3})`} opacity="0.5" />
        {/* Sharp center ridge highlight */}
        <line x1="65" y1="15" x2="65" y2="115" stroke="#ffffff" strokeWidth="2.5" opacity="0.9"/>
      </g>
    </svg>
  );
};

// ── 6. Bottom-Right: White 3D Spiral / Coiled Ribbon Tube ─────────────────────
export const WhiteSpiral: React.FC<{ className?: string }> = ({ className = "" }) => {
  const g = uid(); const s = uid();
  return (
    <svg viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={g} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#edf3fb" />
          <stop offset="75%" stopColor="#cadcf0" />
          <stop offset="100%" stopColor="#9fb9d6" />
        </linearGradient>
        <filter id={s} x="-25%" y="-20%" width="160%" height="150%">
          <feDropShadow dx="8" dy="16" stdDeviation="12" floodColor="#00186b" floodOpacity="0.38"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`}>
        {/* 4-loop volumetric coiled spring */}
        <path
          d="M 50 45
             C 75 35, 112 34, 120 52
             C 128 72, 85 82, 60 92
             C 38 102, 50 124, 82 128
             C 114 132, 134 146, 122 165
             C 110 184, 72 188, 92 205"
          stroke={`url(#${g})`}
          strokeWidth="34"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Top specular highlight */}
        <path
          d="M 50 40
             C 72 30, 108 28, 116 46
             C 124 64, 82 75, 58 84
             C 38 94, 50 116, 80 120
             C 110 124, 128 138, 118 155
             C 106 172, 72 178, 88 194"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        />
      </g>
    </svg>
  );
};

// ── Lime Torus Ring (used in other sections) ──────────────────────────────────
export const LimeTorus: React.FC<{ className?: string }> = ({ className = "" }) => {
  const rg = uid(); const s = uid(); const bg = uid();
  return (
    <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
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
        <filter id={s} x="-30%" y="-30%" width="170%" height="170%">
          <feDropShadow dx="8" dy="16" stdDeviation="12" floodColor="#00186b" floodOpacity="0.35"/>
        </filter>
      </defs>
      <g filter={`url(#${s})`} transform="rotate(-20 80 60)">
        <ellipse cx="80" cy="60" rx="68" ry="46" fill={`url(#${rg})`}/>
        <ellipse cx="80" cy="60" rx="30" ry="20" fill={`url(#${bg})`}/>
        <path d="M 32 44 Q 60 22 95 28" stroke="#f0ff80" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6"/>
      </g>
    </svg>
  );
};

// Keep aliases for backward compatibility
export const WhiteCone = WhitePrism;

