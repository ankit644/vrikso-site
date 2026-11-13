import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import InlineText from "@/components/inline-text";
import { JsonLd } from "@/lib/jsonld";
import { SITE, waLink } from "@/lib/site";
import { TERMS, getTerm, relatedTerms, plainTerm } from "@/lib/content/glossary";

export function generateStaticParams() {
  return TERMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return { title: "Not found" };
  const description = plainTerm(term.short);
  // Matches both "what is X" and "X meaning" phrasings, which is how the trade searches.
  const title = `What is ${term.term}? Meaning in Indian trade`;
  return {
    title,
    description,
    keywords: [term.term, ...(term.aka ?? []), ...(term.hindi ? [term.hindi] : [])],
    alternates: { canonical: `/glossary/${term.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE.url}/glossary/${term.slug}`,
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const related = relatedTerms(slug, 4);
  const url = `${SITE.url}/glossary/${term.slug}`;

  const termJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name: term.term,
    description: plainTerm(term.short),
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE.url}/glossary#termset`,
      name: "Vrikso Distribution Glossary",
      url: `${SITE.url}/glossary`,
    },
    ...(term.aka?.length ? { alternateName: term.aka } : {}),
    termCode: term.slug,
  };

  /* The definition is a direct answer to "what is X" — expose it as such. */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${term.term.toLowerCase()} in distribution?`,
        acceptedAnswer: { "@type": "Answer", text: plainTerm(term.short) },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE.url}/glossary` },
      { "@type": "ListItem", position: 3, name: term.term, item: url },
    ],
  };

  return (
    <>
      <SiteHeader />
      <JsonLd data={termJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <main>
        {/* Term header + definition */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-3xl px-4 pt-12 pb-12 sm:px-6 md:pt-16">
            <Link
              href="/glossary"
              className="text-sm font-medium text-ink-faint transition-colors hover:text-ink"
            >
              ← All terms
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-ink-faint">
              <span className="rounded-full bg-lilac px-2.5 py-1 font-semibold text-violet-deep">
                {term.category}
              </span>
              {term.hindi && <span className="text-sm text-ink-soft">{term.hindi}</span>}
            </div>

            <h1 className="font-display mt-5 text-3xl leading-[1.12] font-medium md:text-[2.9rem]">
              {term.term}
            </h1>

            {term.aka?.length ? (
              <p className="mt-3 text-sm text-ink-faint">
                Also called {term.aka.join(", ")}
              </p>
            ) : null}

            {/* The quotable definition. */}
            <p className="mt-6 border-l-2 border-violet pl-5 text-lg leading-relaxed text-ink">
              {plainTerm(term.short)}
            </p>
          </div>
        </section>

        {/* Explanation */}
        <article className="bg-paper">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
            <div className="flex flex-col gap-5">
              {term.body.map((p, i) => (
                <p key={i} className="text-[1.05rem] leading-relaxed text-ink-soft">
                  <InlineText x={p} />
                </p>
              ))}
            </div>

            {related.length > 0 && (
              <div className="mt-12 border-t border-line pt-8">
                <p className="rule-label text-violet-deep">Related terms</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/glossary/${r.slug}`}
                        className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-paper-2 p-4 transition-colors hover:border-lilac-line hover:bg-paper-3"
                      >
                        <span className="font-medium text-ink group-hover:text-violet-deep">
                          {r.term}
                        </span>
                        <span className="mt-1 text-sm leading-relaxed text-ink-soft">
                          {plainTerm(r.short)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        {/* CTA */}
        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl leading-tight font-medium md:text-3xl">
              Run the whole trade day on one system.
            </h2>
            <p className="mt-3 text-on-hero-dim">
              Orders, schemes, GST invoices, stock and outstanding — on the phones your team already
              carries. Free to start, nothing to install.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={SITE.appUrl} className="btn-primary">
                Start free
              </a>
              <a
                href={waLink(`Hi! I'd like a demo of Vrikso for my business.`)}
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
