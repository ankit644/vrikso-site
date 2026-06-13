/* Mirror of My-business-crm/src/components/logo.tsx — keep in sync. */
export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id="vrikso-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#vrikso-bg)" />
      <path d="M32 52 V26" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M32 40 C27 37 22 34 19 28 M32 35 C37 32 42 29 45 23" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="24" r="5" fill="#fff" />
      <circle cx="46" cy="19" r="5" fill="#fff" />
      <circle cx="32" cy="17" r="6" fill="#fff" />
    </svg>
  );
}
