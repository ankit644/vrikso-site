import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PhoneMockup from "@/components/phone-mockup";
import Reveal from "@/components/reveal";
import { HOME as c } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Pains />
        <Tour />
        <Tree />
        <Compare />
        <PricingTeaser />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Hero — ink-violet night, editorial serif, phone rising from below ── */
function Hero() {
  return (
    <section className="hero-night grain relative overflow-hidden text-on-hero">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-0 pt-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-6 md:pt-24">
        <div className="relative z-10 pb-16 md:pb-28">
          <p className="rise rule-label max-w-md text-on-hero-dim" style={{ ["--rise-delay" as string]: "0ms" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="font-display rise mt-6 text-[2.7rem] leading-[1.04] font-medium sm:text-6xl md:text-[4.2rem]"
            style={{ ["--rise-delay" as string]: "120ms" }}
          >
            {c.hero.titleA}{" "}
            <em className="text-brand-gradient not-italic font-semibold">{c.hero.titleAccent}</em>
            <br />
            {c.hero.titleB}
          </h1>
          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-on-hero-dim sm:text-lg"
            style={{ ["--rise-delay" as string]: "240ms" }}
          >
            {c.hero.sub}
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ ["--rise-delay" as string]: "360ms" }}>
            <a
              href={SITE.appUrl}
              className="bg-brand-gradient inline-flex min-h-12 items-center rounded-full px-7 text-[0.95rem] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(124,58,237,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              {c.cta.start}
            </a>
            <a
              href={waLink(c.waMessage)}
              className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-7 text-[0.95rem] font-semibold text-on-hero transition-colors hover:bg-white/10"
            >
              {c.cta.demo}
            </a>
          </div>
          <p className="rise mt-10 text-sm text-on-hero-dim/80 italic" style={{ ["--rise-delay" as string]: "480ms" }}>
            — {c.hero.proof}
          </p>
        </div>

        <div className="rise relative mx-auto -mb-10 md:mb-0 md:translate-y-10" style={{ ["--rise-delay" as string]: "300ms" }}>
          <div className="absolute -inset-10 rounded-full bg-violet/25 blur-3xl" aria-hidden />
          <div className="relative rotate-[2.5deg]">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pains — three editorial columns on paper ── */
function Pains() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.pains.label}</p>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {c.pains.items.map((item, i) => (
            <Reveal key={item.h} delay={i * 120}>
              <article className="border-t-2 border-ink pt-5">
                <p className="font-display text-sm font-semibold tracking-wide text-violet-deep uppercase">
                  {item.kicker}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-snug font-medium">{item.h}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{item.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tour — numbered day-in-the-life, alternating offsets ── */
function Tour() {
  return (
    <section className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.tour.label}</p>
        </Reveal>
        <div className="mt-14 space-y-14 md:space-y-20">
          {c.tour.steps.map((s, i) => (
            <Reveal key={s.k} delay={60}>
              <div
                className={`grid items-baseline gap-4 md:grid-cols-[120px_1fr] md:gap-10 ${
                  i % 2 === 1 ? "md:ml-24" : ""
                }`}
              >
                <span className="font-display text-brand-gradient text-5xl font-semibold md:text-6xl">
                  {s.k}
                </span>
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl leading-snug font-medium md:text-3xl">{s.h}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">{s.p}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tree — THE brand moment: branches grow from one trunk line ── */
function Tree() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.tree.label}</p>
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <Reveal delay={80}>
            <h2 className="font-display text-4xl leading-[1.08] font-medium md:text-5xl">
              {c.tree.title}
              <br />
              <em className="text-brand-gradient not-italic">{c.tree.titleAccent}</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.97rem] leading-relaxed text-ink-soft">{c.tree.p}</p>
          </Reveal>

          {/* trunk + branch chips */}
          <Reveal delay={200}>
            <div className="relative pl-7">
              <span aria-hidden className="absolute top-1 bottom-1 left-0 w-[3px] rounded-full bg-gradient-to-b from-violet to-purple/30" />
              <ul className="space-y-3.5">
                {c.tree.branches.map((b) => (
                  <li key={b.name} className="relative">
                    <span aria-hidden className="absolute top-1/2 -left-7 h-px w-7 bg-lilac-line" />
                    <div
                      className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 ${
                        b.live
                          ? "border-violet/40 bg-lilac shadow-[0_8px_24px_-12px_rgba(124,58,237,0.45)]"
                          : "border-line bg-paper-2/60"
                      }`}
                    >
                      <span className={`font-semibold ${b.live ? "text-ink" : "text-ink-faint"}`}>
                        Vrikso {b.name}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold tracking-wide uppercase ${
                          b.live ? "bg-brand-gradient text-white" : "border border-line text-ink-faint"
                        }`}
                      >
                        {b.live ? c.tree.live : c.tree.soon}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Compare — two-column ledger, us vs them ── */
function Compare() {
  return (
    <section className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.compare.label}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-sm">
            <div className="grid grid-cols-2 border-b border-line text-sm font-bold">
              <div className="bg-brand-gradient px-5 py-3.5 text-white">{c.compare.us}</div>
              <div className="px-5 py-3.5 text-ink-faint">{c.compare.them}</div>
            </div>
            {c.compare.rows.map(([us, them]) => (
              <div key={us} className="grid grid-cols-2 border-b border-line text-[0.93rem] last:border-0">
                <div className="flex items-start gap-2 px-5 py-4 font-medium">
                  <span className="mt-0.5 text-violet">✓</span> {us}
                </div>
                <div className="flex items-start gap-2 px-5 py-4 text-ink-faint">
                  <span className="mt-0.5">✕</span> {them}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Pricing teaser ── */
function PricingTeaser() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.pricing.label}</p>
          <h2 className="font-display mt-8 text-3xl font-medium md:text-4xl">{c.pricing.title}</h2>
          <p className="mt-2 text-ink-soft">{c.pricing.note}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {c.pricing.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div
                className={`rounded-[var(--radius-card)] border p-6 ${
                  p.featured
                    ? "hero-night border-transparent text-on-hero shadow-[0_24px_48px_-20px_rgba(20,14,38,0.5)]"
                    : "border-line bg-paper-2/50"
                }`}
              >
                <p className={`text-sm font-bold tracking-wide uppercase ${p.featured ? "text-on-hero-dim" : "text-ink-faint"}`}>
                  {p.name}
                </p>
                <p className="font-display mt-3 text-4xl font-semibold">
                  {p.price}
                  <span className={`ml-1 text-base font-normal ${p.featured ? "text-on-hero-dim" : "text-ink-faint"}`}>
                    {p.per}
                  </span>
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${p.featured ? "text-on-hero-dim" : "text-ink-soft"}`}>
                  {p.pitch}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center gap-1.5 font-semibold text-violet-deep hover:underline"
          >
            {c.pricing.seeAll} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Final CTA band ── */
function FinalCta() {
  return (
    <section className="hero-night grain relative overflow-hidden text-on-hero">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight font-medium md:text-5xl">{c.final.title}</h2>
          <p className="mt-4 text-lg text-on-hero-dim">{c.final.p}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.appUrl}
              className="bg-brand-gradient inline-flex min-h-12 items-center rounded-full px-8 text-[0.95rem] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(124,58,237,0.55)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              {c.cta.start}
            </a>
            <a
              href={waLink(c.waMessage)}
              className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-8 text-[0.95rem] font-semibold transition-colors hover:bg-white/10"
            >
              {c.cta.demo}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
