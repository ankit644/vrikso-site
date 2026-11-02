"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Site-wide behavioural tracking, mounted once in the root layout.
 *
 * - section_view: fired once per section per page view when a <section>
 *   becomes 40% visible, named after its first heading. No markup changes
 *   needed on pages; new sections are picked up automatically.
 * - whatsapp_click / phone_click / email_click / app_link_click: fired for
 *   any anchor pointing at wa.me, tel:, mailto: or app.vrikso.com, wherever
 *   it lives on the site.
 *
 * Everything funnels into GA4 via the dataLayer, so when NEXT_PUBLIC_GA_ID
 * is absent (local dev) these are harmless no-ops.
 */
export default function AnalyticsEvents() {
  const pathname = usePathname();

  // Section visibility — re-arm on every route change.
  useEffect(() => {
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const heading = el.querySelector("h1, h2, h3");
          const name =
            heading?.textContent?.trim().slice(0, 80) ||
            el.id ||
            "unnamed-section";
          if (seen.has(name)) continue;
          seen.add(name);
          sendGAEvent("event", "section_view", {
            section_name: name,
            page_path: pathname,
          });
          io.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    // Defer one frame so the new route's DOM is in place.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll("section").forEach((s) => io.observe(s));
    });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  // Click tracking — one capture-phase listener for the whole document.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor?.href) return;
      const href = anchor.href;
      const label = anchor.textContent?.trim().slice(0, 60) || href;
      const params = { link_text: label, page_path: window.location.pathname };

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        sendGAEvent("event", "whatsapp_click", params);
      } else if (href.startsWith("tel:")) {
        sendGAEvent("event", "phone_click", params);
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "email_click", params);
      } else if (href.includes("app.vrikso.com")) {
        sendGAEvent("event", "app_link_click", params);
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
