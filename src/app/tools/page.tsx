import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/lib/jsonld";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Tools for Indian Trade — Calculators for Distributors & Retailers",
  description:
    "Free calculators built for Indian distribution: distributor ROI against the 12–20% benchmark, and the true effective discount of any buy-X-get-Y-free trade scheme. No sign-up.",
  alternates: { canonical: "/tools" },
};

const TOOLS = [
  {
    href: "/tools/distributor-roi-calculator",
    name: "Distributor ROI calculator",
    desc: "Stock + retailer credit + deposits versus your monthly net earnings — the return-on-investment maths companies run before appointing a distributor, against the healthy 12–20% band.",
  },
  {
    href: "/tools/scheme-discount-calculator",
    name: "Scheme discount calculator",
    desc: "Convert any buy-X-get-Y-free scheme into its true effective discount (10+1 is 9.09%, not 10%) and compare it against a flat percentage offer before you commit.",
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Free tools", item: `${SITE.url}/tools` },
          ],
        }}
      />
      <main>
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-4xl px-4 pt-14 pb-12 sm:px-6 md:pt-20">
            <p className="rule-label text-violet-deep">Free tools</p>
            <h1 className="font-display mt-5 text-3xl leading-[1.12] font-medium md:text-[2.9rem]">
              The trade&rsquo;s arithmetic, <span className="text-brand-gradient">done properly.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Small calculators for the numbers Indian distributors and retailers work out on paper
              every day — free, no sign-up, built by the team behind Vrikso.
            </p>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {TOOLS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <h2 className="font-display text-xl font-medium text-ink group-hover:text-violet-deep">
                    {t.name}
                  </h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{t.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-violet-deep group-hover:underline">
                    Open the calculator →
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-sm leading-relaxed text-ink-faint">
              Want a calculator we haven&rsquo;t built? Tell us on{" "}
              <a className="font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 hover:decoration-violet" href={waLink("Hi! Suggestion for a free tool on vrikso.com:")}>
                WhatsApp
              </a>{" "}
              — the useful ones get built.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
