"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper: adds .is-visible when the element enters the
 * viewport. All animation lives in CSS (globals.css .reveal); this only
 * flips a class, once, then disconnects — zero scroll-time JS cost.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("is-visible");

    // No IntersectionObserver (very old browser, some in-app webviews): the
    // content must never stay at opacity 0, so just show it.
    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    // Anything already level with or above the fold is shown straight away.
    // This covers the browser restoring a deep scroll position on reload or
    // back-navigation, where blocks further up would otherwise never scroll
    // into view again and would stay invisible for good.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          show();
          io.disconnect();
        }
      },
      {
        // threshold 0 — fire on the first visible pixel. A ratio-based
        // threshold is unsafe here: an element taller than viewport/threshold
        // can never reach it, so tall blocks (the pricing plans stacked on a
        // phone) would stay blank forever.
        threshold: 0,
        // Top margin keeps blocks scrolled past counted as intersecting if the
        // scroll position is restored after this effect runs; the negative
        // bottom margin just delays the entrance until the block is properly
        // on screen.
        rootMargin: "9999px 0px -10% 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}
