"use client";

import { useState } from "react";
import {
  CYCLES,
  PLANS,
  PRICING_VERTICALS,
  EXTRA_USER,
  type ComparisonValue,
  type CycleKey,
  type VerticalKey,
  type Plan,
} from "@/lib/content/pricing";
import { SITE } from "@/lib/site";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** Days covered by one payment on each cycle — drives the "a day" line. */
const DAYS: Record<CycleKey, number> = { monthly: 30, yearly: 365, threeYear: 1095 };

/**
 * Everything a card says about one plan on one cycle — computed, so the maths
 * is always honest and never drifts from the numbers in content/pricing.ts.
 */
function priceLines(plan: Plan, cycle: CycleKey) {
  if (!plan.prices) {
    return {
      was: null,
      headline: "₹0",
      unit: "forever",
      sub: "No card, no time limit.",
      perDay: null,
    };
  }
  const { monthly, yearly, threeYear } = plan.prices;
  const paid = cycle === "monthly" ? monthly : cycle === "yearly" ? yearly : threeYear;
  const perDay = `≈ ${inr(Math.round(paid / DAYS[cycle]))} a day`;

  if (cycle === "monthly") {
    return {
      was: null,
      headline: inr(monthly),
      unit: "/month",
      sub: "Month to month · UPI Autopay · cancel anytime",
      perDay,
    };
  }
  if (cycle === "yearly") {
    const strike = monthly * 12;
    return {
      was: { strike: inr(strike), note: `save ${inr(strike - yearly)} — like 3 months free` },
      headline: inr(Math.round(yearly / 12)),
      unit: "/month",
      sub: `One payment of ${inr(yearly)} a year`,
      perDay,
    };
  }
  const threeYearsOfYearly = yearly * 3;
  return {
    was: {
      strike: inr(threeYearsOfYearly),
      note: `save ${inr(threeYearsOfYearly - threeYear)} vs paying yearly`,
    },
    headline: inr(Math.round(threeYear / 36)),
    unit: "/month",
    sub: `One payment of ${inr(threeYear)} for 3 full years`,
    perDay,
  };
}

function TogglePill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-colors ${
        active ? "bg-ink text-paper shadow-[var(--shadow-sm)]" : "text-ink-soft hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

export default function PricingSection() {
  const [vertical, setVertical] = useState<VerticalKey>("distribution");
  const [cycle, setCycle] = useState<CycleKey>("yearly");

  const activeVertical = PRICING_VERTICALS.find((v) => v.key === vertical) ?? PRICING_VERTICALS[0];

  return (
    <div>
      {/* Two independent choices, side by side — business, then billing cycle. */}
      <div className="mt-10 flex flex-wrap items-start justify-center gap-x-8 gap-y-6">
        <div className="text-center">
          <p className="text-[0.68rem] font-bold tracking-wider text-ink-faint uppercase">
            Your business
          </p>
          <div className="mt-2 inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-paper-3 p-1 shadow-[var(--shadow-sm)]">
            {PRICING_VERTICALS.map((v) => (
              <TogglePill key={v.key} active={v.key === vertical} onClick={() => setVertical(v.key)}>
                {v.label}
              </TogglePill>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-[0.68rem] font-bold tracking-wider text-ink-faint uppercase">
            How you pay
          </p>
          <div className="mt-2 inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-paper-3 p-1 shadow-[var(--shadow-sm)]">
            {CYCLES.map((cyc) => (
              <TogglePill key={cyc.key} active={cyc.key === cycle} onClick={() => setCycle(cyc.key)}>
                {cyc.label}
                {cyc.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold tracking-wide uppercase ${
                      cyc.key === cycle ? "bg-paper/20 text-paper" : "bg-violet/10 text-violet-deep"
                    }`}
                  >
                    {cyc.badge}
                  </span>
                )}
              </TogglePill>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-sm text-ink-faint">
        Same price for every product — only the features change.
        {activeVertical.note ? ` ${activeVertical.note}` : ""}
      </p>

      {/* The three plans */}
      <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
        {PLANS.map((plan) => {
          const line = priceLines(plan, cycle);
          const groups = activeVertical.features[plan.key];
          const hero = plan.featured;
          return (
            <div
              key={plan.key}
              className={`flex h-full flex-col rounded-[var(--radius-card)] border p-7 ${
                hero
                  ? "hero-night relative overflow-hidden border-transparent text-on-hero shadow-[var(--shadow-lg)] md:-my-4 md:py-11"
                  : "border-line bg-paper-3 shadow-[var(--shadow-sm)]"
              }`}
            >
              <div className="relative z-10 flex h-full flex-col">
                {/* Name + badge */}
                <div className="flex items-center justify-center gap-2.5">
                  <p
                    className={`font-display text-2xl font-semibold ${
                      hero ? "text-on-hero" : "text-ink"
                    }`}
                  >
                    {plan.name}
                  </p>
                  {hero && (
                    <span className="bg-brand-gradient rounded-full px-2.5 py-1 text-[0.58rem] font-bold tracking-wider text-white uppercase shadow-[0_8px_20px_-8px_rgba(236,72,153,0.7)]">
                      Most chosen
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 min-h-10 text-center text-sm leading-relaxed ${
                    hero ? "text-on-hero-dim" : "text-ink-soft"
                  }`}
                >
                  {activeVertical.pitches[plan.key]}
                </p>

                {/* Price */}
                <div className="mt-6 text-center">
                  <p className={`min-h-6 text-sm ${hero ? "text-on-hero-dim" : "text-ink-faint"}`}>
                    {line.was ? <s>{line.was.strike}</s> : " "}
                  </p>
                  <p className="font-display text-6xl font-semibold tracking-tight tabular-nums">
                    {line.headline}
                    <span
                      className={`ml-1.5 align-middle text-base font-normal tracking-normal ${
                        hero ? "text-on-hero-dim" : "text-ink-faint"
                      }`}
                    >
                      {line.unit}
                    </span>
                  </p>
                  <p
                    className={`mt-2 min-h-10 text-sm leading-relaxed ${
                      hero ? "text-on-hero" : "text-ink"
                    }`}
                  >
                    {line.sub}
                  </p>

                  {/* The line Indian buyers actually budget in. */}
                  <p className="mt-3 min-h-7 text-center">
                    {line.perDay ? (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          hero
                            ? "bg-white/15 text-on-hero"
                            : "bg-lilac text-violet-deep ring-1 ring-lilac-line"
                        }`}
                      >
                        {line.perDay}
                      </span>
                    ) : (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          hero ? "bg-white/15 text-on-hero" : "bg-lilac text-violet-deep ring-1 ring-lilac-line"
                        }`}
                      >
                        Free forever
                      </span>
                    )}
                  </p>

                  {line.was && (
                    <p
                      className={`mt-3 text-xs font-semibold ${
                        hero ? "text-on-hero" : "text-violet-deep"
                      }`}
                    >
                      {line.was.note}
                    </p>
                  )}
                </div>

                {/* Decide here, read the detail below. */}
                <a
                  href={SITE.appUrl}
                  className={
                    hero
                      ? "btn-primary mt-7 w-full"
                      : "mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-ink/20 font-semibold text-ink transition-transform hover:scale-[1.02] hover:bg-paper active:scale-95"
                  }
                >
                  {plan.cta}
                </a>

                {/* What's in it — and what honestly isn't */}
                <div
                  className={`mt-7 flex-1 border-t pt-6 ${hero ? "border-white/15" : "border-line"}`}
                >
                  {groups.map((group) => (
                    <div key={group.label} className="mb-5 last:mb-0">
                      <p
                        className={`text-[0.65rem] font-bold tracking-wider uppercase ${
                          hero ? "text-on-hero-dim" : "text-ink-faint"
                        }`}
                      >
                        {group.label}
                      </p>
                      <ul className="mt-2.5 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item.text}
                            className={`flex gap-2.5 text-sm leading-relaxed ${
                              item.out
                                ? hero
                                  ? "text-on-hero-dim/70"
                                  : "text-ink-faint"
                                : hero
                                  ? "text-on-hero"
                                  : "text-ink-soft"
                            }`}
                          >
                            <span aria-hidden className={markClass(item.out, hero)}>
                              {item.out ? "✕" : "✓"}
                            </span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-ink-soft">
        Extra users on Business: {inr(EXTRA_USER.yearly)}/year or {inr(EXTRA_USER.monthly)}/month
        each. All prices + 18% GST.
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft">
        {activeVertical.compare}
      </p>

      {/* The detailed what's-in / what's-not matrix */}
      <div className="mt-20">
        <div className="text-center">
          <h2 className="font-display display-md font-medium">
            Every feature, <em className="text-brand-gradient not-italic">line by line.</em>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-soft">
            All of Vrikso {activeVertical.label}, plan by plan. A &ldquo;—&rdquo; means honestly not
            included; &ldquo;Soon&rdquo; means it&apos;s being rolled out.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3">
          {/* header row */}
          <div className="grid grid-cols-[minmax(0,1fr)_3.75rem_3.75rem_4.25rem] border-b border-line bg-paper px-4 py-3 text-xs font-bold tracking-wide uppercase sm:grid-cols-[minmax(0,1fr)_6rem_6rem_7rem] sm:px-6">
            <span className="text-ink-faint">Feature</span>
            <span className="text-center text-ink-faint">Free</span>
            <span className="text-center text-ink-faint">Shop</span>
            <span className="rounded-md bg-violet/10 py-0.5 text-center text-violet-deep">
              Business
            </span>
          </div>
          {activeVertical.comparison.map((group) => (
            <div key={group.title}>
              <p className="border-b border-line bg-paper px-4 py-2.5 text-[0.7rem] font-bold tracking-wider text-ink-faint uppercase sm:px-6">
                {group.title}
              </p>
              {group.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[minmax(0,1fr)_3.75rem_3.75rem_4.25rem] items-center border-b border-line/60 px-4 py-2.5 text-sm last:border-b-0 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_7rem] sm:px-6"
                >
                  <span className="pr-2 text-ink-soft">{row.label}</span>
                  <Cell value={row.free} />
                  <Cell value={row.shop} />
                  <Cell value={row.business} highlight />
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ink-faint">
          Business includes everything in Shop; Shop includes everything in Free.
        </p>
      </div>
    </div>
  );
}

function markClass(out: boolean | undefined, hero: boolean) {
  if (out) return hero ? "text-on-hero-dim/60" : "text-ink-faint/70";
  // Violet-on-violet disappears inside the band, so ticks lift to pale pink —
  // the same move globals.css makes for .hero-night .text-brand-gradient.
  return hero ? "text-[color:var(--pink-2)]" : "text-violet";
}

function Cell({ value, highlight = false }: { value: ComparisonValue; highlight?: boolean }) {
  const base = `flex min-h-6 items-center justify-center text-center ${
    highlight ? "rounded-md bg-violet/5" : ""
  }`;
  if (value === true) {
    return (
      <span className={base}>
        <span className={highlight ? "font-semibold text-violet-deep" : "text-violet"}>✓</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className={base}>
        <span className="text-ink-faint/60">—</span>
      </span>
    );
  }
  return (
    <span className={`${base} px-1 text-[0.7rem] leading-tight font-medium ${highlight ? "text-violet-deep" : "text-ink-soft"}`}>
      {value}
    </span>
  );
}
