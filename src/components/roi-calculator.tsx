"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/** Interactive distributor ROI calculator.
 *  ROI = annual net earnings ÷ total capital deployed (stock + retailer
 *  credit + deposits). The 12–20% band is the benchmark FMCG companies
 *  themselves use when evaluating a distributorship. */

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

function parse(v: string): number {
  const n = Number(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function RoiCalculator() {
  const [stock, setStock] = useState("800000");
  const [credit, setCredit] = useState("300000");
  const [deposit, setDeposit] = useState("100000");
  const [monthly, setMonthly] = useState("18000");
  const [touched, setTouched] = useState(false);

  const capital = parse(stock) + parse(credit) + parse(deposit);
  const annual = parse(monthly) * 12;
  const roi = capital > 0 ? (annual / capital) * 100 : 0;

  const verdict =
    capital === 0 || annual === 0
      ? null
      : roi < 12
        ? {
            tone: "bad" as const,
            label: "Below the healthy band",
            note: "Companies consider 12–20% healthy. Before blaming margin, check rotation: faster collections and less dead stock raise ROI without a single rupee more margin.",
          }
        : roi <= 20
          ? {
              tone: "good" as const,
              label: "Healthy — inside the 12–20% band",
              note: "This is the range FMCG companies themselves target when appointing a distributor. Protect it by watching ageing weekly and resisting quarter-end stock loading.",
            }
          : {
              tone: "great" as const,
              label: "Excellent — above the typical band",
              note: "Above 20% usually means fast rotation and tight credit. Verify the earnings figure is truly net of schemes passed on, damages and interest.",
            };

  function onUse() {
    if (!touched) {
      setTouched(true);
      sendGAEvent("event", "tool_use", { tool: "roi_calculator" });
    }
  }

  const fields: [string, string, string, (v: string) => void][] = [
    ["Average stock in the godown (₹)", "e.g. 8,00,000", stock, setStock],
    ["Money parked in retailer credit (₹)", "e.g. 3,00,000", credit, setCredit],
    ["Security deposits with companies (₹)", "e.g. 1,00,000", deposit, setDeposit],
    ["Monthly net earnings, after all expenses (₹)", "e.g. 18,000", monthly, setMonthly],
  ];

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-md)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(([label, placeholder, value, set]) => (
          <label key={label} className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
            <input
              type="text"
              inputMode="numeric"
              className="field-input"
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                onUse();
                set(e.target.value);
              }}
            />
          </label>
        ))}
      </div>

      {/* result */}
      <div className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Capital deployed</p>
          <p className="font-display mt-1 text-2xl font-semibold text-ink">{inr(capital)}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Annual net earnings</p>
          <p className="font-display mt-1 text-2xl font-semibold text-ink">{inr(annual)}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Your ROI</p>
          <p className="font-display text-brand-gradient mt-1 text-3xl font-semibold">
            {capital > 0 ? `${roi.toFixed(1)}%` : "—"}
          </p>
        </div>
      </div>

      {verdict && (
        <div
          className={`mt-5 rounded-[var(--radius-ctrl)] border px-4 py-3.5 text-sm leading-relaxed ${
            verdict.tone === "bad"
              ? "border-[#e9c4c0] bg-[#fbf0ef] text-[#7c2d24]"
              : "border-lilac-line bg-lilac text-ink"
          }`}
        >
          <span className="font-semibold">{verdict.label}.</span> {verdict.note}
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-ink-faint">
        Formula: annual net earnings ÷ (average stock + retailer credit + deposits) × 100. Earnings
        must be net of schemes passed on, damages, fuel, salaries and interest — gross margin is not
        take-home.
      </p>
    </div>
  );
}
