import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";
import { PLANS, PRICING_FAQS as FAQS } from "@/lib/content/pricing";
import { JsonLd, softwareApplication, faqPage } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple monthly pricing for Vrikso — Free, Shop and Business plans. No licence fees, no AMC, cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={softwareApplication()} />
      <JsonLd data={faqPage(FAQS)} />
      <main>
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <Reveal>
              <p className="rule-label text-violet-deep">Pricing</p>
              <h1 className="font-display display-lg mt-6 max-w-2xl font-medium">
                Simple prices, in <em className="text-brand-gradient not-italic">plain rupees.</em>
              </h1>
              <p className="mt-4 max-w-xl text-ink-soft">
                No licence fees. No AMC. No surprises. Every plan includes hosting,
                automatic backups, updates and support.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {PLANS.map((p, i) => (
                <Reveal key={p.name} delay={i * 110}>
                  <div
                    className={`flex h-full flex-col rounded-[var(--radius-card)] border p-7 ${
                      p.featured
                        ? "hero-night relative overflow-hidden border-transparent text-on-hero shadow-[var(--shadow-lg)]"
                        : "border-line bg-paper-3 shadow-[var(--shadow-sm)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className={`text-sm font-bold tracking-wide uppercase ${p.featured ? "text-on-hero-dim" : "text-ink-faint"}`}>
                        {p.name}
                      </p>
                      {p.featured && (
                        <span className="bg-brand-gradient rounded-full px-3 py-1 text-[0.62rem] font-bold tracking-wider text-white uppercase shadow-[0_8px_20px_-8px_rgba(124,58,237,0.7)]">
                          Most chosen
                        </span>
                      )}
                    </div>
                    <p className="font-display mt-3 text-5xl font-semibold">
                      {p.price}
                      <span className={`ml-1 text-base font-normal ${p.featured ? "text-on-hero-dim" : "text-ink-faint"}`}>
                        {p.per}
                      </span>
                    </p>
                    <p className={`mt-3 text-sm ${p.featured ? "text-on-hero-dim" : "text-ink-soft"}`}>{p.pitch}</p>
                    <ul className={`mt-6 flex-1 space-y-2.5 text-sm ${p.featured ? "text-on-hero" : "text-ink-soft"}`}>
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className={p.featured ? "text-purple" : "text-violet"}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={SITE.appUrl}
                      className={
                        p.featured
                          ? "btn-primary relative z-10 mt-8 w-full"
                          : "mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-ink/20 font-semibold text-ink transition-transform hover:scale-[1.02] hover:bg-paper active:scale-95"
                      }
                    >
                      {p.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-10 text-sm text-ink-faint">
                Founding-member offer: the first 50 businesses get 50% off, for life.{" "}
                <a className="font-semibold text-violet-deep hover:underline" href={waLink("Hi! I want the Vrikso founding-member offer.")}>
                  Claim on WhatsApp →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper-2">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
            <Reveal>
              <p className="rule-label text-violet-deep">Pricing questions</p>
            </Reveal>
            <div className="mt-8 space-y-4">
              {FAQS.map((f) => (
                <Reveal key={f.q}>
                  <details className="group rounded-[var(--radius-card)] border border-line bg-paper px-5 py-4">
                    <summary className="cursor-pointer list-none font-semibold">
                      <span className="flex items-center justify-between gap-4">
                        {f.q}
                        <span className="text-violet transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
