/**
 * On-brand SVG cover art for blog posts — no external images, no broken links,
 * always crisp. Six palettes (selected by post.cover) over a layered violet
 * field with a branch-and-orbit motif that nods to the Vrikso logo (a tree).
 */

const PALETTES = [
  { a: "#7C3AED", b: "#9333EA", bg1: "#160E29", bg2: "#2A1B4D" },
  { a: "#9333EA", b: "#C026D3", bg1: "#1A0E2E", bg2: "#311B52" },
  { a: "#6D28D9", b: "#7C3AED", bg1: "#120A24", bg2: "#241543" },
  { a: "#8B5CF6", b: "#A855F7", bg1: "#1B1138", bg2: "#3A2466" },
  { a: "#A855F7", b: "#7C3AED", bg1: "#140E26", bg2: "#2D1B57" },
  { a: "#7C3AED", b: "#D946EF", bg1: "#170F2B", bg2: "#341A57" },
];

export default function BlogCover({
  cover = 0,
  category,
  className = "",
  priority = false,
}: {
  cover?: number;
  category?: string;
  className?: string;
  priority?: boolean;
}) {
  const p = PALETTES[cover % PALETTES.length];
  const id = `bc${cover}`;
  return (
    <svg
      viewBox="0 0 480 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={category ? `${category} — cover illustration` : "Cover illustration"}
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.bg1} />
          <stop offset="1" stopColor={p.bg2} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="78%" cy="18%" r="70%">
          <stop offset="0" stopColor={p.a} stopOpacity="0.55" />
          <stop offset="1" stopColor={p.a} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.a} />
          <stop offset="1" stopColor={p.b} />
        </linearGradient>
      </defs>

      <rect width="480" height="300" fill={`url(#${id}-bg)`} />
      <rect width="480" height="300" fill={`url(#${id}-glow)`} />

      {/* faint orbit rings */}
      <g fill="none" stroke="#fff" strokeOpacity="0.06">
        <circle cx="370" cy="70" r="120" />
        <circle cx="370" cy="70" r="180" />
        <circle cx="370" cy="70" r="250" />
      </g>

      {/* branch motif — a trunk splitting into branches with seed dots */}
      <g
        stroke={`url(#${id}-stroke)`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        transform="translate(60 250) scale(1.15)"
      >
        <path d="M0 0 V-70" />
        <path d="M0 -34 C-26 -50 -46 -66 -56 -96 M0 -50 C26 -66 46 -82 58 -112" strokeWidth="4.4" />
        <path d="M0 -16 C-18 -26 -34 -34 -42 -54" strokeWidth="3.6" strokeOpacity="0.8" />
      </g>
      <g fill={`url(#${id}-stroke)`} transform="translate(60 250) scale(1.15)">
        <circle cx="-58" cy="-100" r="8" />
        <circle cx="60" cy="-116" r="9" />
        <circle cx="-44" cy="-58" r="6" />
        <circle cx="6" cy="-74" r="7" fill="#fff" fillOpacity="0.85" />
      </g>

      {/* category chip */}
      {category && (
        <g transform="translate(40 44)">
          <text
            x="0"
            y="0"
            fill="#fff"
            fillOpacity="0.92"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="13"
            fontWeight="700"
            letterSpacing="2.4"
          >
            {category.toUpperCase()}
          </text>
        </g>
      )}

      {/* corner spark */}
      <g transform="translate(430 250)" fill="#fff" fillOpacity="0.85">
        <path d="M0 -10 L2.4 -2.4 L10 0 L2.4 2.4 L0 10 L-2.4 2.4 L-10 0 L-2.4 -2.4 Z" />
      </g>
    </svg>
  );
}
