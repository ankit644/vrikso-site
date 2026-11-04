import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import PricingSection from "@/components/pricing-section";
import { SITE, waLink } from "@/lib/site";
import { PRICING_FAQS as FAQS, PRICING_PROMISES } from "@/lib/content/pricing";
import { JsonLd, softwareApplication, faqPage } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple published pricing for Vrikso — Free, Shop (₹2,999/yr) and Business (₹8,999/yr) plans, monthly or yearly. Same price for Distribution, Billing and Restaurant. No licence fees, no AMC, cancel anytime.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={softwareApplication()} />
      <JsonLd data={faqPage(FAQS)} />
      <main>
        {/* Hero + plans */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="rule-label justify-center text-violet-deep">Pricing</p>
                <h1 className="font-display display-lg mt-6 font-medium">
                  Simple prices, in{" "}
                  <em className="text-brand-gradient not-italic">plain rupees.</em>
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  Two choices, that&apos;s it: pick your business, pick how you pay. The price is
                  the same for every product — no licence fees, no AMC, no surprises.
                </p>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <PricingSection />
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-10 text-center text-sm text-ink-faint">
                Founding-member offer: the first 50 businesses get 50% off, for life.{" "}
                <a
                  className="font-semibold text-violet-deep hover:underline"
                  href={waLink("Hi! I want the Vrikso founding-member offer.")}
                >
                  Claim on WhatsApp →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* What every plan promises, whatever you pay */}
        <section className="border-b border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-5 md:grid-cols-3">
              {PRICING_PROMISES.map((promise, i) => (
                <Reveal key={promise.title} delay={i * 90}>
                  <div className="h-full rounded-[var(--radius-card)] border border-line bg-paper-3 p-7 shadow-[var(--shadow-sm)]">
                    <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-ctrl)] bg-lilac text-violet-deep ring-1 ring-lilac-line">
                      <PromiseIcon name={promise.icon} />
                    </span>
                    <h2 className="font-display mt-5 text-lg font-semibold">{promise.title}</h2>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                      {promise.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
            <Reveal>
              <div className="text-center">
                <h2 className="font-display display-md font-medium">
                  Pricing <em className="text-brand-gradient not-italic">questions.</em>
                </h2>
                <p className="mt-3 text-ink-soft">
                  The things people ask before they pay. Anything else — just message us.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 space-y-4">
              {FAQS.map((f) => (
                <Reveal key={f.q}>
                  <details className="group rounded-[var(--radius-card)] border border-line bg-paper-3 px-5 py-4">
                    <summary className="cursor-pointer list-none font-semibold">
                      <span className="flex items-center justify-between gap-4">
                        {f.q}
                        <span className="text-violet transition-transform group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="bg-paper-2 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20">
            <Reveal>
              <div className="hero-night grain relative overflow-hidden rounded-[2.75rem] px-6 py-14 text-center text-on-hero shadow-[var(--shadow-lg)] md:px-14 md:py-16">
                <div className="relative z-10 mx-auto max-w-xl">
                  <h2 className="font-display display-md font-medium">
                    Start on Free. Pay when it earns its keep.
                  </h2>
                  <p className="mt-4 text-lg text-on-hero-dim">
                    No card to begin, no setup fee, and a real person on WhatsApp if you get stuck
                    moving your data across.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                    <a href={SITE.appUrl} className="btn-primary">
                      Start free
                    </a>
                    <a
                      href={waLink("Hi! I have a question about Vrikso pricing.")}
                      className="btn-ghost-light"
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function PromiseIcon({ name }: { name: "rupee" | "devices" | "exit" }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "rupee") {
    return (
      <svg {...common}>
        <path d="M7 5h10M7 9.5h10M15.5 5c0 3.6-2.6 4.5-5.5 4.5h-.5L16 19" />
      </svg>
    );
  }
  if (name === "devices") {
    return (
      <svg {...common}>
        <rect x="2.5" y="4.5" width="13" height="10" rx="1.5" />
        <path d="M6 19h7" />
        <rect x="17" y="9" width="4.5" height="10" rx="1.2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14" />
      <path d="M10 8.5 13.5 12 10 15.5M13 12H4" />
    </svg>
  );
}
