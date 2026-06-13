import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { PhoneShot, BrowserShot } from "@/components/device";
import { HOME as c } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

import shotOrder from "../../public/app/m-order-new.png";
import shotInvoice from "../../public/app/m-invoice.png";
import shotAging from "../../public/app/m-aging.png";
import shotProducts from "../../public/app/m-products.png";
import shotPicking from "../../public/app/m-picking.png";
import shotDashboardD from "../../public/app/d-dashboard.png";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Strip />
        <Pains />
        <Gallery />
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

/* ── Hero — ink-violet night, editorial serif, real app on a device cluster ── */
function Hero() {
  return (
    <section className="hero-night grain relative overflow-hidden text-on-hero">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-16 pb-4 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:gap-8 md:pt-24 md:pb-0">
        <div className="relative z-10 pb-10 md:pb-28">
          <p className="rise rule-label max-w-md text-on-hero-dim" style={d(0)}>
            {c.hero.eyebrow}
          </p>
          <h1 className="font-display display-xl rise mt-6 font-medium" style={d(120)}>
            {c.hero.titleA}{" "}
            <em className="text-brand-gradient font-semibold not-italic">{c.hero.titleAccent}</em>
            <br />
            {c.hero.titleB}
          </h1>
          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-on-hero-dim sm:text-lg" style={d(240)}>
            {c.hero.sub}
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={d(360)}>
            <a href={SITE.appUrl} className="btn-primary">{c.cta.start}</a>
            <a href={waLink(c.waMessage)} className="btn-ghost-light">{c.cta.demo}</a>
          </div>

          {/* stat row */}
          <dl className="rise mt-11 flex max-w-md flex-wrap gap-x-8 gap-y-4 border-t border-white/12 pt-6" style={d(460)}>
            {c.hero.stats.map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl font-semibold text-on-hero">{s.k}</dt>
                <dd className="text-xs text-on-hero-dim">{s.v}</dd>
              </div>
            ))}
          </dl>

          <p className="rise mt-7 text-sm text-on-hero-dim/80 italic" style={d(560)}>
            — {c.hero.proof}
          </p>
        </div>

        {/* device cluster — mobile: single phone in flow; sm+: floating cluster */}
        <div className="rise relative mx-auto w-full max-w-[420px]" style={d(300)}>
          <div className="absolute -inset-6 rounded-full bg-violet/25 blur-3xl" aria-hidden />

          {/* mobile: one full, un-clipped phone */}
          <div className="relative z-10 mx-auto w-[68%] min-w-[220px] max-w-[280px] pb-2 sm:hidden">
            <PhoneShot src={shotOrder} alt="Taking an order in the Vrikso app" width={280} priority />
          </div>

          {/* sm+: layered floating cluster */}
          <div className="relative hidden h-[520px] sm:block md:h-[600px]">
            <div
              className="floaty-slow absolute top-6 left-0 z-0 w-[200px] opacity-95 md:top-16"
              style={{ ["--rot" as string]: "-7deg" }}
            >
              <PhoneShot src={shotInvoice} alt="GST invoice in the Vrikso app" width={200} />
            </div>
            <div
              className="floaty absolute top-0 right-0 z-10 w-[240px] md:right-6 md:w-[272px]"
              style={{ ["--rot" as string]: "3deg" }}
            >
              <PhoneShot src={shotOrder} alt="Taking an order in the Vrikso app" width={272} />
            </div>
            {/* <div className="glass absolute bottom-4 left-0 z-20 rounded-2xl px-4 py-3 text-on-hero shadow-lg md:bottom-12 md:left-6">
              <p className="text-[0.6rem] font-semibold tracking-widest text-on-hero-dim uppercase">Total outstanding</p>
              <p className="font-display text-xl font-semibold">₹6,133.00</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Trust strip — scrolling value-props ── */
function Strip() {
  const items = [...c.strip, ...c.strip];
  return (
    <div className="overflow-hidden border-y border-line bg-paper-2/60 py-3.5">
      <div className="marquee-track flex w-max flex-nowrap items-center">
        {items.map((s, i) => (
          <span key={i} className="flex shrink-0 items-center whitespace-nowrap text-sm font-medium text-ink-soft">
            <span className="px-7">{s}</span>
            <span className="text-violet/50" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
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
              <article className="group border-t-2 border-ink pt-5">
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

/* ── Gallery — the premium product proof: real screens in real frames ── */
function Gallery() {
  const g = c.gallery;
  const phones = [
    { src: shotOrder, ...g.shots.order },
    { src: shotInvoice, ...g.shots.invoice },
    { src: shotAging, ...g.shots.aging },
    { src: shotProducts, ...g.shots.products },
  ];
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-2">
      <div className="dotgrid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{g.label}</p>
          <h2 className="font-display display-md mt-7 max-w-2xl font-medium">
            {g.title} <em className="text-brand-gradient not-italic">{g.titleAccent}</em>
          </h2>
          <p className="mt-4 max-w-xl text-[0.97rem] leading-relaxed text-ink-soft">{g.p}</p>
        </Reveal>

        {/* desktop dashboard in a browser frame */}
        <Reveal delay={120}>
          <div className="relative mt-12">
            <div className="absolute -inset-x-8 -top-8 bottom-8 -z-0 rounded-[32px] bg-violet/10 blur-2xl" aria-hidden />
            <BrowserShot
              src={shotDashboardD}
              alt="The Vrikso admin dashboard on a laptop"
              className="relative z-10"
            />
            <p className="mt-4 max-w-md text-sm text-ink-soft">
              <span className="font-semibold text-ink">{g.shots.dashboard.cap}.</span>{" "}
              {g.shots.dashboard.sub}
            </p>
          </div>
        </Reveal>

        {/* phone row */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {phones.map((p, i) => (
            <Reveal key={p.cap} delay={i * 90}>
              <figure className="flex flex-col items-center text-center">
                <PhoneShot src={p.src} alt={`${p.cap} — Vrikso app`} width={210} />
                <figcaption className="mt-5">
                  <p className="font-display text-lg font-medium">{p.cap}</p>
                  <p className="mt-1 text-[0.82rem] leading-snug text-ink-faint">{p.sub}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tour — numbered day-in-the-life, each step paired with a real screen ── */
function Tour() {
  const shots = [shotOrder, shotPicking, shotInvoice];
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.tour.label}</p>
        </Reveal>
        <div className="mt-14 space-y-20 md:space-y-28">
          {c.tour.steps.map((s, i) => (
            <Reveal key={s.k} delay={60}>
              <div
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>figure]:order-first" : ""
                }`}
              >
                <div className="max-w-lg">
                  <span className="font-display text-brand-gradient text-6xl font-semibold md:text-7xl">{s.k}</span>
                  <h3 className="font-display mt-4 text-2xl leading-snug font-medium md:text-3xl">{s.h}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">{s.p}</p>
                </div>
                <figure className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full bg-violet/10 blur-2xl" aria-hidden />
                    <PhoneShot src={shots[i]} alt={s.h} width={236} className="relative" />
                  </div>
                </figure>
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
    <section className="relative overflow-hidden border-b border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.tree.label}</p>
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <Reveal delay={80}>
            <h2 className="font-display display-md font-medium">
              {c.tree.title}
              <br />
              <em className="text-brand-gradient not-italic">{c.tree.titleAccent}</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.97rem] leading-relaxed text-ink-soft">{c.tree.p}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative pl-7">
              <span aria-hidden className="absolute top-1 bottom-1 left-0 w-[3px] rounded-full bg-gradient-to-b from-violet to-purple/30" />
              <ul className="space-y-3.5">
                {c.tree.branches.map((b) => (
                  <li key={b.name} className="relative">
                    <span aria-hidden className="absolute top-1/2 -left-7 h-px w-7 bg-lilac-line" />
                    <div
                      className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 transition-shadow ${
                        b.live
                          ? "border-violet/40 bg-lilac shadow-[0_8px_24px_-12px_rgba(124,58,237,0.45)]"
                          : "border-line bg-paper/70"
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
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.compare.label}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 shadow-[var(--shadow-md)]">
            <div className="grid grid-cols-2 border-b border-line text-sm font-bold">
              <div className="bg-brand-gradient px-5 py-4 text-white">{c.compare.us}</div>
              <div className="px-5 py-4 text-ink-faint">{c.compare.them}</div>
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
    <section className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="rule-label text-violet-deep">{c.pricing.label}</p>
          <h2 className="font-display display-md mt-8 font-medium">{c.pricing.title}</h2>
          <p className="mt-2 text-ink-soft">{c.pricing.note}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {c.pricing.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div
                className={`h-full rounded-[var(--radius-card)] border p-6 ${
                  p.featured
                    ? "hero-night relative overflow-hidden border-transparent text-on-hero shadow-[var(--shadow-lg)]"
                    : "border-line bg-paper-3 shadow-[var(--shadow-sm)]"
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
          <Link href="/pricing" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-violet-deep hover:underline">
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
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
        <Reveal>
          <h2 className="font-display display-lg font-medium">{c.final.title}</h2>
          <p className="mt-4 text-lg text-on-hero-dim">{c.final.p}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={SITE.appUrl} className="btn-primary">{c.cta.start}</a>
            <a href={waLink(c.waMessage)} className="btn-ghost-light">{c.cta.demo}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* small helper for staggered load delays */
function d(ms: number) {
  return { ["--rise-delay" as string]: `${ms}ms` };
}
