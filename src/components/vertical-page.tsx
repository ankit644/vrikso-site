import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";

/** Shape of a vertical's content file — one file per industry, one template. */
export type VerticalContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; titleAccent: string; sub: string };
  waMessage: string;
  features: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
  finalCta: { title: string; p: string };
};

export default function VerticalPage({ v }: { v: VerticalContent }) {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <p className="rise rule-label max-w-md text-on-hero-dim">{v.hero.eyebrow}</p>
            <h1
              className="font-display rise mt-6 max-w-3xl text-4xl leading-[1.08] font-medium sm:text-5xl md:text-6xl"
              style={{ ["--rise-delay" as string]: "120ms" }}
            >
              {v.hero.title}{" "}
              <em className="text-brand-gradient not-italic">{v.hero.titleAccent}</em>
            </h1>
            <p
              className="rise mt-6 max-w-2xl text-base leading-relaxed text-on-hero-dim sm:text-lg"
              style={{ ["--rise-delay" as string]: "240ms" }}
            >
              {v.hero.sub}
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ ["--rise-delay" as string]: "360ms" }}>
              <a
                href={SITE.appUrl}
                className="bg-brand-gradient inline-flex min-h-12 items-center rounded-full px-7 font-semibold text-white shadow-[0_12px_32px_-8px_rgba(124,58,237,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
              >
                Start free
              </a>
              <a
                href={waLink(v.waMessage)}
                className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-7 font-semibold transition-colors hover:bg-white/10"
              >
                WhatsApp demo
              </a>
            </div>
          </div>
        </section>

        {/* Features — editorial two-column list */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <Reveal>
              <p className="rule-label text-violet-deep">Everything the day needs</p>
            </Reveal>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {v.features.map((f, i) => (
                <Reveal key={f.h} delay={(i % 2) * 100}>
                  <article className="border-t border-line pt-5">
                    <h3 className="font-display text-xl font-medium">{f.h}</h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{f.p}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-b border-line bg-paper-2">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24">
            <Reveal>
              <p className="rule-label text-violet-deep">Questions, answered</p>
            </Reveal>
            <div className="mt-10 space-y-4">
              {v.faqs.map((f) => (
                <Reveal key={f.q}>
                  <details className="group rounded-[var(--radius-card)] border border-line bg-paper px-5 py-4 open:shadow-sm">
                    <summary className="cursor-pointer list-none font-semibold marker:hidden">
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

        {/* Final CTA */}
        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight font-medium md:text-4xl">
                {v.finalCta.title}
              </h2>
              <p className="mt-4 text-on-hero-dim">{v.finalCta.p}</p>
              <a
                href={waLink(v.waMessage)}
                className="bg-brand-gradient mt-8 inline-flex min-h-12 items-center rounded-full px-8 font-semibold text-white shadow-[0_12px_32px_-8px_rgba(124,58,237,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
              >
                WhatsApp demo
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
