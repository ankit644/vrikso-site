import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple monthly pricing for Vrikso — Free, Shop and Business plans. No licence fees, no AMC, cancel anytime.",
};

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    per: "forever",
    pitch: "Try Vrikso properly, for as long as you like.",
    features: ["1 user", "200 orders / month", "GST invoices (Vrikso branding)", "All core features"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Shop",
    price: "₹299",
    per: "/month",
    pitch: "For a single retail or wholesale counter.",
    features: ["3 users", "Unlimited orders", "Clean GST invoices", "Payments & ledger", "WhatsApp invoice sharing"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Business",
    price: "₹799",
    per: "/month",
    pitch: "For distributors & wholesalers with a team.",
    features: [
      "10 users",
      "Unlimited orders",
      "Routes & salesman beats",
      "Warehouse picking & loading",
      "Aging, GSTR-1 & all reports",
      "Priority WhatsApp support",
    ],
    cta: "Start free",
    featured: true,
  },
];

const FAQS = [
  {
    q: "What does ₹799/month really cost per day?",
    a: "About ₹26 a day — less than two cups of chai, for the system running your whole business. Annual billing gets 2 months free.",
  },
  {
    q: "Any setup fee, licence fee or AMC?",
    a: "No, none. The monthly price is everything: hosting, backups, updates and support included. Compare that to desktop software at ₹8,000+ per year plus AMC visits.",
  },
  {
    q: "Can I change plans or cancel?",
    a: "Anytime. Upgrade when the team grows, downgrade or cancel whenever — and your data is always exportable to Excel.",
  },
  {
    q: "Need more than 10 users?",
    a: "Extra users are ₹99/month each on the Business plan. Message us on WhatsApp for larger teams.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
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
                    {p.featured && (
                      <span className="bg-brand-gradient absolute -top-3 left-7 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-wider text-white uppercase">
                        Most chosen
                      </span>
                    )}
                    <p className={`text-sm font-bold tracking-wide uppercase ${p.featured ? "text-on-hero-dim" : "text-ink-faint"}`}>
                      {p.name}
                    </p>
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
                      className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full font-semibold transition-transform hover:scale-[1.02] active:scale-95 ${
                        p.featured
                          ? "bg-brand-gradient text-white shadow-[0_12px_28px_-8px_rgba(124,58,237,0.5)]"
                          : "border border-ink/20 text-ink hover:bg-paper"
                      }`}
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
