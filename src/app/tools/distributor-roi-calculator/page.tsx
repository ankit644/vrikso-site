import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import RoiCalculator from "@/components/roi-calculator";
import { JsonLd } from "@/lib/jsonld";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Distributor ROI Calculator — Is Your Distributorship Earning Enough?",
  description:
    "Free ROI calculator for Indian distributors: enter your stock, retailer credit, deposits and monthly net earnings to see your return on investment against the 12–20% benchmark FMCG companies use.",
  alternates: { canonical: "/tools/distributor-roi-calculator" },
};

const FAQS = [
  {
    q: "How is distributor ROI calculated?",
    a: "Annual net earnings divided by total capital deployed, times 100. Capital deployed is your average stock plus the money parked in retailer credit plus security deposits. Example: ₹18,000 a month net on ₹12 lakh capital is ₹2.16 lakh a year, which is an 18% ROI.",
  },
  {
    q: "What is a good ROI for an FMCG distributor in India?",
    a: "Most companies consider 12–20% a healthy annual return on a distributor's total capital. Below 12% the business is underperforming — usually because of slow rotation or stuck credit rather than low margin. Above 20% typically means fast rotation and tight credit discipline.",
  },
  {
    q: "Why is my ROI low even though my margin is normal?",
    a: "Because ROI is driven by rotation, not margin. The same ₹10 lakh rotated eighteen times a year at 4% earns far more than rotated ten times at 5%. The usual culprits are dead stock sitting in the godown and outstanding ageing past 30 days — both park capital without earning on it.",
  },
  {
    q: "What counts as capital deployed in a distributorship?",
    a: "Average stock in the godown (at cost), the money continuously parked in retailer credit (udhaar), and security deposits held by companies. First-time distributors routinely budget the stock and forget the credit float — which is why they feel squeezed within months.",
  },
];

export default function RoiCalculatorPage() {
  const url = `${SITE.url}/tools/distributor-roi-calculator`;
  return (
    <>
      <SiteHeader />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Free tools", item: `${SITE.url}/tools` },
            { "@type": "ListItem", position: 3, name: "Distributor ROI calculator", item: url },
          ],
        }}
      />
      <main>
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-3xl px-4 pt-12 pb-10 sm:px-6 md:pt-16">
            <Link href="/tools" className="text-sm font-medium text-ink-faint transition-colors hover:text-ink">
              ← All tools
            </Link>
            <p className="rule-label mt-6 text-violet-deep">Free tool</p>
            <h1 className="font-display mt-5 text-3xl leading-[1.12] font-medium md:text-[2.7rem]">
              Distributor ROI calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              The number an area sales manager runs before appointing a distributor — and the one
              you should run on your own business every quarter. Enter real figures; the maths is
              done the way the trade does it.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <RoiCalculator />

            <div className="mt-14 flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-soft">
              <h2 className="font-display text-2xl leading-snug font-medium text-ink">
                Why ROI, not margin, is the number that matters
              </h2>
              <p>
                FMCG distribution runs on 3–5% gross margin, and nobody negotiates their way to 8%.
                What separates a distributorship that compounds from one that treads water is how
                many times a year the capital rotates. ROI captures that in one figure, which is why
                companies use the 12–20% band when they evaluate territories — and why you should
                use it before accepting a new agency, a bigger territory or a quarter-end stock
                load.
              </p>
              <p>
                If your result is low, the levers are rarely price: collect faster (watch the{" "}
                <Link href="/glossary/aging" className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet">
                  ageing report
                </Link>{" "}
                weekly), carry less{" "}
                <Link href="/glossary/dead-stock" className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet">
                  dead stock
                </Link>
                , and refuse loading you cannot clear in a cycle. The full arithmetic — investment
                bands, margin truth, financing — is in our guide to{" "}
                <Link href="/blog/become-fmcg-distributor-india-cost-margin" className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet">
                  becoming an FMCG distributor
                </Link>
                .
              </p>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <h2 className="font-display text-2xl leading-snug font-medium">Frequently asked questions</h2>
              <div className="mt-6 flex flex-col gap-6">
                {FAQS.map((f) => (
                  <div key={f.q} className="rounded-[var(--radius-card)] border border-line bg-paper-2 p-5">
                    <h3 className="font-medium text-ink">{f.q}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl leading-tight font-medium md:text-3xl">
              Raise the rotation, and ROI follows.
            </h2>
            <p className="mt-3 text-on-hero-dim">
              Vrikso keeps collections, stock and orders on one live system — the three levers this
              calculator just showed you. Free to start.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={SITE.appUrl} className="btn-primary">Start free</a>
              <a href={waLink("Hi! I used the ROI calculator and want a demo of Vrikso.")} className="btn-ghost-light">
                WhatsApp demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
