import Image, { type StaticImageData } from "next/image";

/**
 * Premium device frames that wrap REAL app screenshots captured from the
 * live Vrikso CRM. PhoneShot draws a titanium-style rail + faux iOS status
 * bar (so the app's own header isn't covered); BrowserShot is a macOS-style
 * window for desktop captures.
 */

export function PhoneShot({
  src,
  alt,
  width = 280,
  priority = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`phone-frame ${className}`} style={{ width }}>
      <div className="phone-island" aria-hidden />
      <div className="phone-screen">
        {/* faux status bar — keeps the real app header fully visible below */}
        <div className="flex items-center justify-between bg-[#0a0612] px-4 pt-1.5 pb-2.5 text-[9px] font-semibold text-white/90">
          <span className="tnum tracking-tight">9:41</span>
          <span aria-hidden className="flex items-center gap-1">
            <Bars />
            <Wifi />
            <span className="ml-0.5 flex h-2 w-3.5 items-center rounded-[2px] border border-white/60 px-px">
              <span className="h-1 w-full rounded-[1px] bg-white/90" />
            </span>
          </span>
        </div>
        <Image
          src={src}
          alt={alt}
          priority={priority}
          sizes={`${width}px`}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

export function BrowserShot({
  src,
  alt,
  url = "app.vrikso.com",
  priority = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  url?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`browser-frame ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot bg-[#ff5f57]" />
        <span className="browser-dot bg-[#febc2e]" />
        <span className="browser-dot bg-[#28c840]" />
        <span className="ml-3 hidden max-w-[60%] flex-1 truncate rounded-md bg-white/70 px-3 py-1 text-[11px] font-medium text-ink-faint sm:block">
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="block h-auto w-full"
      />
    </figure>
  );
}

function Bars() {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={i * 3.6}
          y={6 - i * 2}
          width="2.4"
          height={3 + i * 2}
          rx="0.6"
          fill="white"
          fillOpacity={0.9}
        />
      ))}
    </svg>
  );
}

function Wifi() {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden>
      <path d="M6 8.2 0.6 2.6A7.6 7.6 0 0 1 11.4 2.6Z" fill="white" fillOpacity="0.9" />
    </svg>
  );
}
