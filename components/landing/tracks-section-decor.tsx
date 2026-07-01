export function TracksSectionDecor() {
  return (
    <div className="tracks-intro-decor" aria-hidden>
      <svg className="tracks-decor-piece tracks-decor-square" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="0" width="36" height="36" rx="7" fill="oklch(0.83 0.16 86)" />
        <rect
          x="10"
          y="6"
          width="36"
          height="36"
          rx="7"
          stroke="oklch(0.25 0.1 292)"
          strokeWidth="3"
        />
      </svg>

      <svg className="tracks-decor-piece tracks-decor-dots" viewBox="0 0 44 44" fill="none">
        {Array.from({ length: 9 }).map((_, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <circle
              key={i}
              cx={8 + col * 14}
              cy={8 + row * 14}
              r="3.5"
              fill="oklch(0.25 0.1 292)"
            />
          );
        })}
      </svg>

      <svg className="tracks-decor-piece tracks-decor-lines" viewBox="0 0 48 32" fill="none">
        <line x1="4" y1="8" x2="36" y2="24" stroke="oklch(0.25 0.1 292)" strokeWidth="4" strokeLinecap="round" />
        <line x1="4" y1="18" x2="36" y2="34" stroke="oklch(0.25 0.1 292)" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <svg className="tracks-decor-piece tracks-decor-diamond" viewBox="0 0 56 56" fill="none">
        <rect
          x="12"
          y="4"
          width="22"
          height="22"
          rx="2"
          transform="rotate(45 23 15)"
          fill="oklch(0.95 0.02 292)"
        />
        <rect
          x="16"
          y="8"
          width="22"
          height="22"
          rx="2"
          transform="rotate(45 27 19)"
          fill="oklch(0.78 0.1 180)"
        />
        <rect
          x="20"
          y="12"
          width="22"
          height="22"
          rx="2"
          transform="rotate(45 31 23)"
          stroke="oklch(0.25 0.1 292)"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <svg className="tracks-decor-piece tracks-decor-triangle" viewBox="0 0 52 48" fill="none">
        <path d="M8 6 L34 6 L21 30 Z" fill="oklch(0.83 0.16 86)" />
        <path
          d="M14 12 L40 12 L27 36 Z"
          stroke="oklch(0.25 0.1 292)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
}
