import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SchemeCalculator from "@/components/scheme-calculator";
import { JsonLd } from "@/lib/jsonld";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scheme Discount Calculator — What 10+1 Really Costs (and Pays)",
  description:
    "Free calculator for Indian trade schemes: convert any buy-X-get-Y-free offer into its true effective discount (10+1 is 9.09%, not 10%) and compare it against a flat percentage discount before you commit.",
  alternates: { canonical: "/tools/scheme-discount-calculator" },
};

const FAQS = [
  {
    q: "What is the effective discount of a 10+1 scheme?",
    a: "9.09%, not 10%. One free unit on eleven supplied is 1 ÷ 11 = 9.09% off the effective rate. The free unit is part of the total you receive, so the divisor is buy-plus-free, not the buy quantity alone.",
  },
  {
    q: "How do I convert a buy-X-get-Y-free scheme to a percentage?",
    a: "Effective discount = free quantity ÷ (buy quantity + free quantity) × 100. So 5+1 is 16.67%, 12+1 is 7.69%, and 20+2 is 9.09% again.",
  },
  {
    q: "Which is better — a free-quantity scheme or a flat discount?",
    a: "Convert both to effective percentage and compare. If the flat discount equals or beats the scheme's effective rate, prefer the flat discount — cash off the bill is cleaner than extra stock, which ties up shelf space, carries expiry risk and complicates GST on the invoice. Take free quantity only when you're confident of selling through within the cycle.",
  },
  {
    q: "Why do schemes complicate GST and stock?",
    a: "Free units are goods that left the supplier's godown and must appear correctly on the invoice, and they enter your stock at a blended effective cost. Software that applies schemes at order time keeps the maths and the GST treatment consistent; schemes applied by hand on a notepad are where margin quietly leaks.",
  },
];

export default function SchemeCalculatorPage() {
  const url = `${SITE.url}/tools/scheme-discount-calculator`;
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
            { "@type": "ListItem", position: 3, name: "Scheme discount calculator", item: url },
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
              Scheme discount calculator
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Every 10+1 in the market gets called a 10% discount. It isn&rsquo;t — and at FMCG
              volumes the difference is real money. Convert any scheme to its true rate and compare
              it with a flat discount before you decide.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <SchemeCalculator />

            <div className="mt-14 flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-soft">
              <h2 className="font-display text-2xl leading-snug font-medium text-ink">
                The arithmetic the counter gets wrong
              </h2>
              <p>
                A free-quantity{" "}
                <Link href="/glossary/scheme" className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet">
                  scheme
                </Link>{" "}
                discounts the whole lot you receive, not the lot you paid for — so the divisor is
                buy-plus-free. Calling{" "}
                <Link href="/glossary/ten-plus-one" className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet">
                  10+1
                </Link>{" "}
                a 10% discount overstates what you received by roughly a tenth, and when the error
                repeats on every order of every SKU, it compounds into a margin illusion.
              </p>
              <p>
                The same logic protects you when passing schemes on: if the company gives you 10+1
                and you pass 12+1 to push volume, you gave away 7.69% against the 9.09% you
                received — a 1.4-point spread that is your entire net margin on some lines. This is
                why scheme maths belongs in{" "}
                <Link href="/fmcg-distributor-app" className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet">
                  software that applies it at order time
                </Link>
                , not in a salesman&rsquo;s head at the counter.
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
              Schemes applied automatically, on every order.
            </h2>
            <p className="mt-3 text-on-hero-dim">
              Vrikso applies 10+1s, slabs and company offers at order time and carries them
              correctly into the GST invoice. Free to start.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={SITE.appUrl} className="btn-primary">Start free</a>
              <a href={waLink("Hi! I used the scheme calculator and want a demo of Vrikso.")} className="btn-ghost-light">
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
