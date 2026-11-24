"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/** Scheme effective-discount calculator.
 *  A "buy X get Y free" scheme's real discount is Y/(X+Y) — 10+1 is 9.09%,
 *  not 10%. Compares the scheme against a flat % offer so a distributor can
 *  pick the better deal at the counter. */

function parse(v: string): number {
  const n = Number(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

const COMMON: [buy: number, free: number][] = [
  [5, 1],
  [10, 1],
  [12, 1],
  [20, 2],
  [24, 2],
];

export default function SchemeCalculator() {
  const [buy, setBuy] = useState("10");
  const [free, setFree] = useState("1");
  const [flat, setFlat] = useState("8");
  const [touched, setTouched] = useState(false);

  const b = parse(buy);
  const f = parse(free);
  const flatPct = parse(flat);
  const effective = b + f > 0 ? (f / (b + f)) * 100 : 0;

  const comparison =
    b > 0 && f > 0 && flatPct > 0
      ? effective > flatPct
        ? `The ${b}+${f} scheme (${effective.toFixed(2)}%) beats the ${flatPct}% flat discount — take the free quantity, if you can sell it before expiry.`
        : effective < flatPct
          ? `The ${flatPct}% flat discount beats the ${b}+${f} scheme (${effective.toFixed(2)}%) — and cash off the bill is cleaner than stock on the rack.`
          : `Both offers are worth the same ${flatPct}% — prefer the flat discount; it doesn't tie up shelf space.`
      : null;

  function onUse() {
    if (!touched) {
      setTouched(true);
      sendGAEvent("event", "tool_use", { tool: "scheme_calculator" });
    }
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-md)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Buy quantity</span>
          <input
            type="text"
            inputMode="numeric"
            className="field-input"
            value={buy}
            onChange={(e) => {
              onUse();
              setBuy(e.target.value);
            }}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Free quantity</span>
          <input
            type="text"
            inputMode="numeric"
            className="field-input"
            value={free}
            onChange={(e) => {
              onUse();
              setFree(e.target.value);
            }}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Compare with flat discount (%)</span>
          <input
            type="text"
            inputMode="decimal"
            className="field-input"
            value={flat}
            onChange={(e) => {
              onUse();
              setFlat(e.target.value);
            }}
          />
        </label>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
          Effective discount of {b > 0 && f > 0 ? `${b}+${f}` : "the scheme"}
        </p>
        <p className="font-display text-brand-gradient mt-1 text-4xl font-semibold">
          {b + f > 0 && f > 0 ? `${effective.toFixed(2)}%` : "—"}
        </p>
        {b > 0 && f > 0 && (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {f} free on {b + f} supplied = {f}/{b + f} = {effective.toFixed(2)}% — not{" "}
            {((f / b) * 100).toFixed(0)}%. The free units are part of the total you receive.
          </p>
        )}
      </div>

      {comparison && (
        <div className="mt-5 rounded-[var(--radius-ctrl)] border border-lilac-line bg-lilac px-4 py-3.5 text-sm leading-relaxed text-ink">
          <span className="font-semibold">Which is better?</span> {comparison}
        </div>
      )}

      {/* quick reference */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs font-semibold tracking-wide text-ink-faint uppercase">
              <th className="py-2 pr-4">Scheme</th>
              <th className="py-2 pr-4">Looks like</th>
              <th className="py-2">Really is</th>
            </tr>
          </thead>
          <tbody>
            {COMMON.map(([cb, cf]) => (
              <tr key={`${cb}+${cf}`} className="border-b border-line last:border-0">
                <td className="py-2 pr-4 font-medium text-ink">
                  {cb}+{cf}
                </td>
                <td className="py-2 pr-4 text-ink-faint">{((cf / cb) * 100).toFixed(0)}%</td>
                <td className="py-2 font-semibold text-violet-deep">
                  {((cf / (cb + cf)) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
