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
 * One grid template shared by the comparison matrix header and every body row.
 * Keeping it in a single constant is what guarantees the pinned header stays
 * lined up with the columns it labels — they cannot drift apart.
 */
const MATRIX_COLS =
  "grid grid-cols-[minmax(0,1fr)_4.25rem_4.25rem_4.75rem] md:grid-cols-[minmax(220px,410fr)_repeat(3,minmax(0,256fr))]";

/** Offset of the sticky site header: the 3.75rem pill plus its 0.75rem top padding. */
const STICKY_TOP = "top-[4.5rem]";

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


      {/* One table: the plans ARE the top row and they pin while every feature
          scrolls underneath, so the price and the Start-free button stay
          reachable from anywhere in the matrix.
          overflow-clip, not overflow-hidden: `hidden` would make this a scroll
          container, which silently stops the row below from sticking. */}
      <div className="mt-12 overflow-clip rounded-[var(--radius-card)] border border-line bg-paper-3">
        {/* Sticky only from md up: the block is tall, and on a phone pinning it
            would cover most of the screen. */}
        <div
          className={`${MATRIX_COLS} ${STICKY_TOP} z-20 border-b border-line bg-paper-3 md:sticky md:shadow-[0_14px_22px_-20px_rgba(17,12,34,0.6)]`}
        >
          <div className="border-line px-5 py-6 md:border-r md:px-7">
            <h2 className="font-display text-2xl font-semibold">Choose your plan</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Same price for Distribution, Billing, Restaurant and Jewellery.{" "}
              <span className="font-semibold text-ink">Everything each plan includes.</span>
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[0.7rem] font-semibold text-ink-faint">
              <span>No card needed</span>
              <span aria-hidden>·</span>
              <span>UPI &amp; cards</span>
              <span aria-hidden>·</span>
              <span>Cancel anytime</span>
            </p>
          </div>

          {PLANS.map((plan) => {
            const line = priceLines(plan, cycle);
            const feat = plan.featured;
            return (
              <div
                key={plan.key}
                className={`flex flex-col items-center border-line px-3 py-6 text-center md:border-l ${
                  feat ? "bg-lilac/40" : ""
                }`}
              >
                <p
                  className={`font-display text-lg font-semibold ${
                    feat ? "text-violet-deep" : "text-ink"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="mt-1 min-h-4 text-xs text-ink-faint">
                  {line.was ? <s>{line.was.strike}</s> : " "}
                </p>
                <p className="font-display mt-0.5 text-3xl font-semibold tracking-tight tabular-nums">
                  {line.headline}
                  <span className="ml-1 align-middle text-sm font-normal text-ink-faint">
                    {line.unit}
                  </span>
                </p>
                <p className="mt-1.5 min-h-8 text-[0.72rem] leading-relaxed text-ink-soft">
                  {line.sub}
                </p>
                <p className="mt-1.5">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold ${
                      feat
                        ? "bg-violet/15 text-violet-deep"
                        : "bg-lilac text-violet-deep ring-1 ring-lilac-line"
                    }`}
                  >
                    {line.perDay ?? "Free forever"}
                  </span>
                </p>
                <a
                  href={SITE.appUrl}
                  className={
                    feat
                      ? "btn-primary mt-4 !min-h-10 w-full !text-sm"
                      : "mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-full border border-ink/20 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] hover:bg-paper active:scale-95"
                  }
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Every row renders a cell per column — group headers included — so the
            tint on the featured column runs unbroken down the whole table. */}
        {activeVertical.comparison.map((group) => (
          <div key={group.title}>
            <div className={`${MATRIX_COLS} border-b border-line bg-paper`}>
              <p className="px-4 py-2.5 text-[0.7rem] font-bold tracking-wider text-ink-faint uppercase sm:px-6">
                {group.title}
                <span className="ml-2 font-medium tracking-normal text-ink-faint/70 normal-case">
                  {group.rows.length} {group.rows.length === 1 ? "item" : "items"}
                </span>
              </p>
              {PLANS.map((plan) => (
                <span
                  key={plan.key}
                  className={`border-line md:border-l ${plan.featured ? "bg-lilac/40" : ""}`}
                />
              ))}
            </div>
            {group.rows.map((row) => (
              <div
                key={row.label}
                className={`${MATRIX_COLS} items-stretch border-b border-line/60 text-sm last:border-b-0`}
              >
                <span className="px-4 py-2.5 text-ink-soft sm:px-6 md:pl-10">{row.label}</span>
                <Cell value={row.free} />
                <Cell value={row.shop} />
                <Cell value={row.business} featured />
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-ink-faint">
        Business includes everything in Shop; Shop includes everything in Free. A &ldquo;—&rdquo;
        means honestly not included; &ldquo;Soon&rdquo; means it&apos;s being rolled out.
      </p>
      <p className="mt-3 text-center text-sm text-ink-soft">
        Extra users on Business: {inr(EXTRA_USER.yearly)}/year or {inr(EXTRA_USER.monthly)}/month
        each. All prices + 18% GST.
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft">
        {activeVertical.compare}
      </p>
    </div>
  );
}

/**
 * One matrix cell. The featured column tints the whole cell rather than an
 * inner pill, so the stripe joins up row to row into one continuous column.
 */
function Cell({ value, featured = false }: { value: ComparisonValue; featured?: boolean }) {
  const base = `flex items-center justify-center border-line px-2 py-2.5 text-center md:border-l ${
    featured ? "bg-lilac/40" : ""
  }`;
  if (value === true) {
    return (
      <span className={base}>
        <span className={featured ? "font-semibold text-violet-deep" : "text-violet"}>✓</span>
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
    <span
      className={`${base} text-[0.7rem] leading-tight font-medium ${
        featured ? "text-violet-deep" : "text-ink-soft"
      }`}
    >
      {value}
    </span>
  );
}
