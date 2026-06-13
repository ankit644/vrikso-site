/**
 * Stylised recreation of the Vrikso order screen — pure CSS, no screenshot
 * to go stale. Mirrors the real app's layout: search, product rows with
 * qty steppers, sticky totals bar.
 */
export default function PhoneMockup() {
  const rows = [
    { name: "Parachute Coconut Oil", meta: "Marico · ₹49 / pcs", qty: 12 },
    { name: "Saffola Gold 1L", meta: "Marico · ₹214 / pcs", qty: 6 },
    { name: "Dettol Soap 75g", meta: "Reckitt · ₹38 / pcs", qty: 24 },
    { name: "Maggi Noodles 70g", meta: "Nestlé · ₹14 / pcs", qty: 48 },
  ];
  return (
    <div className="phone-frame relative w-[290px] p-2.5 sm:w-[310px]">
      <div className="overflow-hidden rounded-[1.9rem] bg-[#F4F5FA]">
        {/* status bar */}
        <div className="flex items-center justify-between bg-white px-5 pb-2 pt-3 text-[10px] font-semibold text-slate-700">
          <span>9:41</span>
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-400" />
          </span>
        </div>

        {/* app header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="bg-brand-gradient grid h-6 w-6 place-items-center rounded-lg text-[10px] font-bold text-white">V</span>
            <span className="text-[12px] font-semibold text-slate-900">New order · Sharma Store</span>
          </div>
        </div>

        {/* search */}
        <div className="px-3 pt-3">
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-400">
            Search products…
          </div>
        </div>

        {/* product rows */}
        <div className="space-y-2 px-3 py-3">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
              <div className="min-w-0">
                <p className="truncate text-[11.5px] font-semibold text-slate-900">{r.name}</p>
                <p className="text-[10px] text-slate-500">{r.meta}</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-slate-200 p-0.5">
                <span className="grid h-5 w-5 place-items-center rounded-full text-[11px] text-slate-600">−</span>
                <span className="w-5 text-center text-[11px] font-bold text-slate-900 tabular-nums">{r.qty}</span>
                <span className="bg-brand-gradient grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold text-white">+</span>
              </div>
            </div>
          ))}
        </div>

        {/* sticky totals bar */}
        <div className="border-t border-slate-200 bg-white/90 px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-wide text-slate-400">4 items · 90 qty</p>
              <p className="text-[13px] font-bold text-slate-900 tabular-nums">₹4,182</p>
            </div>
            <span className="bg-brand-gradient rounded-xl px-4 py-2 text-[11px] font-bold text-white shadow-md">
              Place order
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
