import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { PhoneShot, BrowserShot } from "@/components/device";
import { SITE, waLink } from "@/lib/site";
import shotOrder from "../../public/app/m-order-new.png";
import shotInvoice from "../../public/app/m-invoice.png";
import shotAging from "../../public/app/m-aging.png";
import shotProducts from "../../public/app/m-products.png";
import shotDashboardD from "../../public/app/d-dashboard.png";

const SCREENS = {
  order: shotOrder,
  invoice: shotInvoice,
  aging: shotAging,
  products: shotProducts,
} as const;
type ScreenKey = keyof typeof SCREENS;

/** Shape of a vertical's content file — one file per industry, one template.
    Sections marked optional render only when the content file provides them. */
export type VerticalContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; titleAccent: string; sub: string };
  waMessage: string;
  stats?: { k: string; v: string }[];
  features: { h: string; p: string; icon?: FeatureIconName }[];
  featuresHeading?: string;
  screens?: { label: string; title: string; titleAccent: string; p: string; shots: { key: ScreenKey; cap: string; sub: string }[]; dashboardCap?: string };
  workflow?: { label: string; title: string; steps: { h: string; p: string }[] };
  audience?: { label: string; title: string; items: { h: string; p: string }[] };
  outcomes?: { label: string; title: string; items: { stat: string; h: string; p: string }[] };
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

        {/* Stats band */}
        {v.stats && (
          <section className="border-b border-line bg-paper-2">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-12 sm:px-6 md:grid-cols-4 md:py-14">
              {v.stats.map((s, i) => (
                <Reveal key={s.v} delay={i * 80}>
                  <div className="text-center md:text-left">
                    <p className="font-display text-brand-gradient text-4xl font-semibold md:text-5xl">{s.k}</p>
                    <p className="mt-1.5 text-[0.82rem] leading-snug text-ink-soft">{s.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Features — attractive icon-card grid */}
        <section className="relative overflow-hidden border-b border-line bg-paper">
          <div className="dotgrid absolute inset-0 opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <Reveal>
              <p className="rule-label text-violet-deep">Everything the day needs</p>
              <h2 className="font-display display-md mt-7 max-w-2xl font-medium">
                {v.featuresHeading ? (
                  <>{v.featuresHeading}</>
                ) : (
                  <>From the first order to the last rupee, <em className="text-brand-gradient not-italic">one app does it all.</em></>
                )}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {v.features.map((f, i) => (
                <Reveal key={f.h} delay={(i % 3) * 90}>
                  <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1.5 hover:border-lilac-line hover:shadow-[var(--shadow-md)]">
                    <span className="bg-brand-gradient grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_10px_24px_-10px_rgba(124,58,237,0.8)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <FeatureIcon name={f.icon} index={i} />
                    </span>
                    <h3 className="font-display mt-5 text-xl leading-snug font-medium">{f.h}</h3>
                    <p className="mt-2.5 text-[0.93rem] leading-relaxed text-ink-soft">{f.p}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* App screens gallery — real product */}
        {v.screens && (
          <section className="relative overflow-hidden border-b border-line bg-paper-2">
            <div className="dotgrid absolute inset-0 opacity-50" aria-hidden />
            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
              <Reveal>
                <p className="rule-label text-violet-deep">{v.screens.label}</p>
                <h2 className="font-display display-md mt-7 max-w-2xl font-medium">
                  {v.screens.title} <em className="text-brand-gradient not-italic">{v.screens.titleAccent}</em>
                </h2>
                <p className="mt-4 max-w-xl text-[0.97rem] leading-relaxed text-ink-soft">{v.screens.p}</p>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative mt-12">
                  <div className="absolute -inset-x-8 -top-8 bottom-8 -z-0 rounded-[32px] bg-violet/10 blur-2xl" aria-hidden />
                  <BrowserShot src={shotDashboardD} alt="The Vrikso admin dashboard on a laptop" className="relative z-10" />
                  {v.screens.dashboardCap && (
                    <p className="mt-4 max-w-md text-sm text-ink-soft">{v.screens.dashboardCap}</p>
                  )}
                </div>
              </Reveal>

              <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
                {v.screens.shots.map((s, i) => (
                  <Reveal key={s.cap} delay={i * 90}>
                    <figure className="flex flex-col items-center text-center">
                      <PhoneShot src={SCREENS[s.key]} alt={`${s.cap} — Vrikso`} width={210} />
                      <figcaption className="mt-5">
                        <p className="font-display text-lg font-medium">{s.cap}</p>
                        <p className="mt-1 text-[0.82rem] leading-snug text-ink-faint">{s.sub}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How it works — operational flow */}
        {v.workflow && (
          <section className="border-b border-line bg-paper">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
              <Reveal>
                <p className="rule-label text-violet-deep">{v.workflow.label}</p>
                <h2 className="font-display display-md mt-7 max-w-2xl font-medium">{v.workflow.title}</h2>
              </Reveal>
              <div className="mt-14 grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
                {v.workflow.steps.map((s, i) => (
                  <Reveal key={s.h} delay={i * 90}>
                    <div className="relative">
                      <span className="font-display text-brand-gradient text-5xl font-semibold">{`0${i + 1}`}</span>
                      <span
                        aria-hidden
                        className="mt-3 hidden h-px w-full bg-gradient-to-r from-lilac-line to-transparent lg:block"
                      />
                      <h3 className="font-display mt-4 text-xl leading-snug font-medium">{s.h}</h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{s.p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Who it's for */}
        {v.audience && (
          <section className="border-b border-line bg-paper-2">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
              <Reveal>
                <p className="rule-label text-violet-deep">{v.audience.label}</p>
                <h2 className="font-display display-md mt-7 max-w-2xl font-medium">{v.audience.title}</h2>
              </Reveal>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {v.audience.items.map((a, i) => (
                  <Reveal key={a.h} delay={i * 80}>
                    <div className="h-full rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-sm)]">
                      <h3 className="font-display text-lg font-medium">{a.h}</h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{a.p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Outcomes — why distributors switch */}
        {v.outcomes && (
          <section className="border-b border-line bg-paper">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
              <Reveal>
                <p className="rule-label text-violet-deep">{v.outcomes.label}</p>
                <h2 className="font-display display-md mt-7 max-w-2xl font-medium">{v.outcomes.title}</h2>
              </Reveal>
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {v.outcomes.items.map((o, i) => (
                  <Reveal key={o.h} delay={i * 100}>
                    <div className="hero-night grain relative h-full overflow-hidden rounded-[var(--radius-card)] p-7 text-on-hero shadow-[var(--shadow-lg)]">
                      <p className="font-display relative z-10 text-brand-gradient text-4xl font-semibold">{o.stat}</p>
                      <h3 className="font-display relative z-10 mt-3 text-xl font-medium">{o.h}</h3>
                      <p className="relative z-10 mt-2 text-[0.92rem] leading-relaxed text-on-hero-dim">{o.p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

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

/* ── Feature icons ──────────────────────────────────────────────────────
   Clean 24px line icons, drawn in currentColor (white on the gradient chip). */
const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const FEATURE_ICONS = {
  order: (
    <svg {...ICON_PROPS}>
      <path d="M3 4h2l1.6 9.2a1.5 1.5 0 0 0 1.5 1.3h8a1.5 1.5 0 0 0 1.5-1.2L20 7H6" />
      <circle cx="9" cy="19" r="1.3" />
      <circle cx="17" cy="19" r="1.3" />
      <path d="M13 5.5h4M15 3.5v4" />
    </svg>
  ),
  route: (
    <svg {...ICON_PROPS}>
      <circle cx="6" cy="5.5" r="2.2" />
      <circle cx="18" cy="18.5" r="2.2" />
      <path d="M6 7.7v4.3a4 4 0 0 0 4 4h4a2 2 0 0 1 0 0" />
      <path d="M18 7.5c0 2.5-2.4 3.8-2.4 3.8S13.2 10 13.2 7.5a2.4 2.4 0 0 1 4.8 0Z" />
    </svg>
  ),
  warehouse: (
    <svg {...ICON_PROPS}>
      <path d="M3 9.5 12 4l9 5.5V20a.8.8 0 0 1-.8.8H3.8A.8.8 0 0 1 3 20Z" />
      <path d="M7 20.5v-6h10v6M7 17.5h10" />
    </svg>
  ),
  invoice: (
    <svg {...ICON_PROPS}>
      <path d="M6 2.5h8.5L19 7v13.2a1.3 1.3 0 0 1-1.3 1.3H6a1.3 1.3 0 0 1-1.3-1.3V3.8A1.3 1.3 0 0 1 6 2.5Z" />
      <path d="M14 2.5V7h4.5M8 12h8M8 15.5h8M8 8.5h3" />
    </svg>
  ),
  payments: (
    <svg {...ICON_PROPS}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7.5 14.5h2.5M14.5 14.5h2.5" />
    </svg>
  ),
  reports: (
    <svg {...ICON_PROPS}>
      <path d="M4 4v15.5a.5.5 0 0 0 .5.5H20" />
      <path d="M8 16v-3M12 16V8M16 16v-5" />
    </svg>
  ),
  wishlist: (
    <svg {...ICON_PROPS}>
      <path d="m12 4 2.3 4.7 5.2.8-3.7 3.6.9 5.1L12 15.8 7.3 18.3l.9-5.1L4.5 9.5l5.2-.8Z" />
    </svg>
  ),
  language: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.8 12 3.5Z" />
    </svg>
  ),
} as const;

export type FeatureIconName = keyof typeof FEATURE_ICONS;

/** Resolve an icon by explicit name, else fall back to a sensible order by index. */
function FeatureIcon({ name, index }: { name?: FeatureIconName; index: number }) {
  const order = Object.keys(FEATURE_ICONS) as FeatureIconName[];
  const key = name ?? order[index % order.length];
  return FEATURE_ICONS[key];
}
