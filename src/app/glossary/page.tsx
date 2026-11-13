import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { JsonLd } from "@/lib/jsonld";
import { SITE, waLink } from "@/lib/site";
import {
  GLOSSARY_INDEX,
  CATEGORY_ORDER,
  TERMS,
  TERMS_SORTED,
  termsByCategory,
  plainTerm,
} from "@/lib/content/glossary";

export const metadata: Metadata = {
  title: "Distribution Glossary — Indian Trade Terms Explained",
  description:
    "Beat, udhaar, PTR, super stockist, e-way bill, 10+1, ageing — a plain-English glossary of the terms Indian distributors, wholesalers and retailers use every day, with what each one means for your business.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryIndexPage() {
  const setJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE.url}/glossary#termset`,
    name: "Vrikso Distribution Glossary",
    description:
      "The vocabulary of Indian distribution, wholesale and retail trade — defined plainly for distributors, wholesalers and shopkeepers.",
    url: `${SITE.url}/glossary`,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#organization` },
    hasDefinedTerm: TERMS_SORTED.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE.url}/glossary/${t.slug}#term`,
      name: t.term,
      description: plainTerm(t.short),
      url: `${SITE.url}/glossary/${t.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE.url}/glossary` },
    ],
  };

  return (
    <>
      <SiteHeader />
      <JsonLd data={setJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <main>
        {/* Header */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-4xl px-4 pt-14 pb-12 sm:px-6 md:pt-20">
            <p className="rule-label text-violet-deep">{GLOSSARY_INDEX.eyebrow}</p>
            <h1 className="font-display mt-5 text-3xl leading-[1.12] font-medium md:text-[2.9rem]">
              {GLOSSARY_INDEX.title}{" "}
              <span className="text-brand-gradient">{GLOSSARY_INDEX.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {GLOSSARY_INDEX.sub}
            </p>
            <p className="mt-6 font-mono text-xs tracking-wider text-ink-faint uppercase">
              {TERMS.length} terms · {CATEGORY_ORDER.length} categories
            </p>
          </div>
        </section>

        {/* Terms by category */}
        <section className="bg-paper">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
            <div className="flex flex-col gap-14">
              {CATEGORY_ORDER.map((category) => {
                const terms = termsByCategory(category);
                if (!terms.length) return null;
                return (
                  <div key={category}>
                    <h2 className="font-display border-b border-line pb-3 text-2xl leading-snug font-medium">
                      {category}
                    </h2>
                    <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {terms.map((t) => (
                        <li key={t.slug}>
                          <Link
                            href={`/glossary/${t.slug}`}
                            className="group block rounded-[var(--radius-card)] border border-transparent p-3 -m-3 transition-colors hover:border-line hover:bg-paper-2"
                          >
                            <span className="font-medium text-ink group-hover:text-violet-deep">
                              {t.term}
                            </span>
                            {t.hindi && (
                              <span className="ml-2 text-sm text-ink-faint">{t.hindi}</span>
                            )}
                            <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                              {plainTerm(t.short)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl leading-tight font-medium md:text-3xl">
              Every one of these words is a screen in Vrikso.
            </h2>
            <p className="mt-3 text-on-hero-dim">
              Beats, schemes, ageing, e-way bills and claims — running on the phones your team
              already carries. Free to start.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={SITE.appUrl} className="btn-primary">
                Start free
              </a>
              <a
                href={waLink("Hi! I'd like a demo of Vrikso for my distribution business.")}
                className="btn-ghost-light"
              >
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
