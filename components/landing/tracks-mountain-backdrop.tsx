export function TracksMountainBackdrop() {
  return (
    <div className="tracks-mountain-bg" aria-hidden>
      <svg
        className="tracks-mountain-bg-svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="tracks-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.98 0.015 292)" />
            <stop offset="45%" stopColor="oklch(0.96 0.025 292)" />
            <stop offset="100%" stopColor="oklch(0.93 0.04 292)" />
          </linearGradient>
        </defs>

        <rect width="1200" height="900" fill="url(#tracks-sky)" />

        <path
          className="tracks-mountain-far"
          d="M0 900 L0 520 L180 420 L360 460 L540 360 L720 330 L900 300 L1080 360 L1200 400 L1200 900 Z"
        />
        <path
          className="tracks-mountain-mid"
          d="M0 900 L0 580 L240 500 L420 530 L600 450 L780 420 L960 450 L1200 500 L1200 900 Z"
        />
        <path
          className="tracks-mountain-near"
          d="M0 900 L0 640 L200 580 L400 600 L580 540 L760 520 L960 550 L1200 580 L1200 900 Z"
        />
      </svg>
    </div>
  );
}
