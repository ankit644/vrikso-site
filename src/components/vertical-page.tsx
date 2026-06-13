import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { PhoneShot } from "@/components/device";
import { SITE, waLink } from "@/lib/site";
import shotOrder from "../../public/app/m-order-new.png";
import shotAging from "../../public/app/m-aging.png";

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
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="relative z-10">
              <p className="rise rule-label max-w-md text-on-hero-dim">{v.hero.eyebrow}</p>
              <h1
                className="font-display display-lg rise mt-6 max-w-3xl font-medium"
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
                <a href={SITE.appUrl} className="btn-primary">Start free</a>
                <a href={waLink(v.waMessage)} className="btn-ghost-light">WhatsApp demo</a>
              </div>
            </div>

            <div className="rise relative mx-auto w-full max-w-[380px]" style={{ ["--rise-delay" as string]: "300ms" }}>
              <div className="absolute -inset-6 rounded-full bg-violet/25 blur-3xl" aria-hidden />

              {/* mobile: one full phone in flow */}
              <div className="relative z-10 mx-auto w-[68%] min-w-[220px] max-w-[280px] sm:hidden">
                <PhoneShot src={shotOrder} alt="Taking an order in Vrikso" width={280} priority />
              </div>

              {/* sm+: floating cluster */}
              <div className="relative hidden h-[440px] sm:block">
                <div className="floaty-slow absolute top-10 left-0 z-0 w-[190px]" style={{ ["--rot" as string]: "-7deg" }}>
                  <PhoneShot src={shotAging} alt="Payment aging report" width={190} />
                </div>
                <div className="floaty absolute top-0 right-0 z-10 w-[240px] md:w-[260px]" style={{ ["--rot" as string]: "4deg" }}>
                  <PhoneShot src={shotOrder} alt="Taking an order in Vrikso" width={260} />
                </div>
              </div>
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
              <a href={waLink(v.waMessage)} className="btn-primary mt-8">WhatsApp demo</a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
