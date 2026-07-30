import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { PhoneShot, BrowserShot } from "@/components/device";
import PostCover from "@/components/post-cover";
import { HOME as c } from "@/lib/content/home";
import { POSTS_BY_DATE, formatDate } from "@/lib/content/blog";
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
        <BlogTeaser />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Hero — light lavender ground; violet feature panel carrying the app ── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* soft ambient blooms */}
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-lilac blur-3xl" aria-hidden />
      <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-lilac/70 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-[1.04fr_0.96fr] md:gap-10 md:pt-20 md:pb-24">
        <div className="relative z-10">
          <p
            className="rise inline-flex items-center gap-2 rounded-full border border-lilac-line bg-paper-3 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.12em] text-violet-deep uppercase shadow-[var(--shadow-sm)]"
            style={d(0)}
          >
            {c.hero.eyebrow}
          </p>
          <h1 className="font-display display-xl rise mt-7 font-medium text-ink" style={d(120)}>
            {c.hero.titleA}{" "}
            <em className="text-brand-gradient font-semibold not-italic">{c.hero.titleAccent}</em>
            <br />
            {c.hero.titleB}
          </h1>
          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg" style={d(240)}>
            {c.hero.sub}
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={d(360)}>
            <a href={SITE.appUrl} className="btn-primary">{c.cta.start}</a>
            <a href={waLink(c.waMessage)} className="btn-ghost-dark">{c.cta.demo}</a>
          </div>

          {/* stat row — reference-style divided figures */}
          <dl className="rise mt-11 flex max-w-md flex-wrap gap-x-0 gap-y-4 border-t border-line pt-6" style={d(460)}>
            {c.hero.stats.map((s, i) => (
              <div key={s.k} className={i === 0 ? "pr-7" : "border-l border-line px-7"}>
                <dt className="font-display text-2xl font-semibold text-ink">{s.k}</dt>
                <dd className="mt-0.5 text-xs text-ink-faint">{s.v}</dd>
              </div>
            ))}
          </dl>

          <p className="rise mt-7 text-sm text-ink-faint italic" style={d(560)}>
            — {c.hero.proof}
          </p>
        </div>

        {/* violet feature panel — phone + floating proof cards */}
        <div className="rise relative" style={d(300)}>
          <div className="hero-night relative overflow-hidden rounded-[2.5rem] px-6 pt-9 pb-7 shadow-[var(--shadow-lg)] sm:px-9">
            <div className="relative z-10 mx-auto w-[64%] min-w-[210px] max-w-[260px]">
              <PhoneShot src={shotOrder} alt="Taking an order in the Vrikso app" width={260} priority />
            </div>

            {/* floating cards */}
            <div className="floaty-slow absolute top-9 right-4 z-20 rounded-2xl bg-paper-3 px-4 py-3 shadow-[var(--shadow-md)] sm:right-7">
              <p className="text-[0.62rem] font-bold tracking-widest text-ink-faint uppercase">GST invoice</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[0.8rem] font-semibold text-ink">
                <CheckDot /> Shared on WhatsApp
              </p>
            </div>
            <div className="floaty absolute top-[46%] left-3 z-20 rounded-2xl bg-paper-3 px-4 py-3 shadow-[var(--shadow-md)] sm:left-6">
              <p className="text-[0.62rem] font-bold tracking-widest text-ink-faint uppercase">Order placed</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[0.8rem] font-semibold text-ink">
                <CheckDot /> 90 seconds, at the shop
              </p>
            </div>

            {/* in-band feature pair, like the reference */}
            <div className="relative z-10 mt-7 grid grid-cols-2 gap-5 border-t border-white/20 pt-6 text-on-hero">
              <div>
                <p className="text-sm font-semibold">Orders from the field</p>
                <p className="mt-1 text-xs leading-relaxed text-on-hero-dim">
                  Salesmen order from any phone, even on 2G.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold">Live outstanding</p>
                <p className="mt-1 text-xs leading-relaxed text-on-hero-dim">
                  Every shop&rsquo;s udhaar, current to the minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* tiny violet check chip used in the hero's floating cards */
function CheckDot() {
  return (
    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lilac" aria-hidden>
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="M1.5 5.5 4 8l4.5-6" stroke="var(--violet)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
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
              <article className="group h-full rounded-[var(--radius-card)] border border-line-2 bg-paper-3 p-7 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                <p className="inline-flex rounded-full bg-lilac px-3 py-1 text-[0.68rem] font-bold tracking-wide text-violet-deep uppercase">
                  {item.kicker}
                </p>
                <h3 className="font-display mt-4 text-2xl leading-snug font-medium">{item.h}</h3>
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
              <figure className="flex h-full flex-col items-center rounded-[var(--radius-card)] border border-line-2 bg-paper-3 px-4 pt-6 pb-6 text-center shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                <PhoneShot src={p.src} alt={`${p.cap} — Vrikso app`} width={190} />
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
                {c.tree.branches.map((b) => {
                  const card = (
                    <div
                      className={`flex items-center justify-between rounded-2xl border px-5 py-3.5 transition-shadow ${
                        b.live
                          ? "border-violet/40 bg-lilac shadow-[0_8px_24px_-12px_rgba(124,58,237,0.45)] hover:shadow-[0_12px_32px_-12px_rgba(124,58,237,0.6)]"
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
                  );
                  return (
                    <li key={b.name} className="relative">
                      <span aria-hidden className="absolute top-1/2 -left-7 h-px w-7 bg-lilac-line" />
                      {"href" in b && b.href ? <Link href={b.href}>{card}</Link> : card}
                    </li>
                  );
                })}
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

/* ── Blog teaser — latest three field notes ── */
function BlogTeaser() {
  const posts = POSTS_BY_DATE.slice(0, 3);
  const t = c.blogTeaser;
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="rule-label text-violet-deep">{t.label}</p>
              <h2 className="font-display display-md mt-7 font-medium">{t.title}</h2>
              <p className="mt-3 max-w-xl text-[0.97rem] text-ink-soft">{t.p}</p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-violet-deep hover:underline">
              {t.all} →
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 110}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full overflow-hidden rounded-[var(--radius-card)] border border-line-2 bg-paper-3 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <PostCover
                    image={p.image}
                    cover={p.cover}
                    category={p.category}
                    alt={p.title}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-ink-faint">
                    <span className="text-violet-deep">{p.category}</span> · {formatDate(p.date)}
                  </p>
                  <h3 className="font-display mt-2 text-lg leading-snug font-medium group-hover:underline">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA — rounded violet band, tilted phone, reference-style ── */
function FinalCta() {
  return (
    <section className="bg-paper pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20">
        <Reveal>
          <div className="hero-night grain relative overflow-hidden rounded-[2.75rem] px-6 py-14 text-on-hero shadow-[var(--shadow-lg)] md:px-14 md:py-16">
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
              <div className="order-last mx-auto w-[200px] rotate-[-6deg] md:order-first md:w-[230px]">
                <PhoneShot src={shotInvoice} alt="A GST invoice in the Vrikso app" width={230} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-display display-lg font-medium">{c.final.title}</h2>
                <p className="mt-4 text-lg text-on-hero-dim">{c.final.p}</p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <a href={SITE.appUrl} className="btn-primary">{c.cta.start}</a>
                  <a href={waLink(c.waMessage)} className="btn-ghost-light">{c.cta.demo}</a>
                </div>
              </div>
            </div>
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
