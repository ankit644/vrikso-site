import type { VerticalContent } from "@/components/vertical-page";

/**
 * Vrikso Distribution — the flagship vertical.
 * Adding a future vertical (pharma, garments…) = one new file like this.
 */
export const DISTRIBUTION: VerticalContent = {
  slug: "distribution",
  metaTitle: "Vrikso Distribution — CRM for distributors & wholesalers",
  metaDescription:
    "Field order taking, warehouse picking, GST invoicing, payments and outstanding — the complete cloud CRM for Indian distribution businesses.",

  hero: {
    eyebrow: "Vrikso Distribution · Live now",
    title: "Built for the distribution trade,",
    titleAccent: "by the distribution trade.",
    sub: "From the salesman's first order of the morning to the evening's outstanding report — one app runs the whole day. Born inside a real FMCG distribution business.",
  },

  waMessage: "Hi! I run a distribution business and want a demo of Vrikso Distribution.",

  stats: [
    { k: "90 sec", v: "to place an order, even on 2G" },
    { k: "₹33", v: "per day — no licence, no AMC" },
    { k: "100%", v: "of orders backed up to the cloud" },
    { k: "2", v: "languages — English & हिन्दी" },
  ],

  features: [
    {
      icon: "order",
      h: "Orders from the field",
      p: "Salesmen pick the shop, tap products, place the order — 90 seconds on any phone. Recent shops first, pack-size variants grouped, works on slow networks.",
    },
    {
      icon: "route",
      h: "Routes & beats",
      p: "Shops organised by route. Each salesman sees his beat; you see every route's orders, value and coverage.",
    },
    {
      icon: "warehouse",
      h: "Warehouse that runs itself",
      p: "Picking lists and loading lists generate automatically from the day's orders. Mark delivered and stock decrements — no double entry, ever.",
    },
    {
      icon: "invoice",
      h: "GST invoices, automatically",
      p: "Delivery creates the GST invoice — CGST/SGST split, scheme discounts, round-off, your business details. Print A4 or share the PDF on WhatsApp in one tap.",
    },
    {
      icon: "payments",
      h: "Payments & outstanding",
      p: "Record cash, UPI, cheque or bank against any invoice. Per-shop ledger, credit limits, and an aging report that shows exactly where your money is stuck.",
    },
    {
      icon: "reports",
      h: "Reports your CA will love",
      p: "GSTR-1 export in the government format, sales by company and product, day books — Excel downloads included.",
    },
    {
      icon: "wishlist",
      h: "Stock wishlist",
      p: "Shop asked for something you don't carry? Salesman logs it on the spot; you see demand before you buy.",
    },
    {
      icon: "language",
      h: "English + हिन्दी app",
      p: "Every screen of the app switches between English and Hindi — your team uses whichever is comfortable.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not screenshots from a brochure.",
    titleAccent: "The actual app.",
    p: "This is the live Vrikso app — the same screens your salesman opens at the shop and you open at night to see where the day landed.",
    dashboardCap:
      "Your control room. Today's orders, sales and outstanding, top products and company-wise sales — live, on any laptop or phone.",
    shots: [
      { key: "order", cap: "Take an order", sub: "Tap products, set qty, place — 90 seconds." },
      { key: "invoice", cap: "GST invoice", sub: "Auto-generated, shared on WhatsApp." },
      { key: "aging", cap: "Outstanding", sub: "Who owes what, by age bucket." },
      { key: "products", cap: "Catalog", sub: "Every SKU, pack-size, stock & price." },
    ],
  },

  workflow: {
    label: "How a day runs",
    title: "One unbroken flow — order to cash.",
    steps: [
      { h: "Salesman books the order", p: "At the counter, on his own phone. Recent shops first, schemes applied, works on the weakest network." },
      { h: "Warehouse picks & loads", p: "Picking and loading lists build themselves from the day's orders. Nothing is typed twice." },
      { h: "Invoice on delivery", p: "Marking delivered creates the GST invoice and drops stock. The PDF goes to the shop on WhatsApp." },
      { h: "Payment & ledger update", p: "Record cash, UPI or cheque against the bill. The shop's outstanding and your aging report update instantly." },
    ],
  },

  audience: {
    label: "Built for your trade",
    title: "Made for every link in the distribution chain.",
    items: [
      { h: "FMCG distributors", p: "Multi-brand, multi-route operations with salesmen in the field every morning." },
      { h: "Wholesalers", p: "High-volume counters that need fast billing, clean ledgers and live stock." },
      { h: "Super-stockists", p: "Serving sub-distributors and retailers across a territory, with credit to track." },
      { h: "C&F agents", p: "Stock, dispatch and statutory paperwork for the brands you carry — in one place." },
    ],
  },

  outcomes: {
    label: "Why distributors switch",
    title: "What changes once you're on Vrikso.",
    items: [
      { stat: "₹0", h: "Leakage from lost orders", p: "Every order is captured digitally the second it's taken — nothing slips through a diary or a phone call." },
      { stat: "Day 1", h: "Outstanding you can see", p: "A live, per-shop ledger and an aging report replace guesswork. You always know where your money is stuck." },
      { stat: "No PC", h: "Nothing to install or maintain", p: "No Windows machine, no licence, no AMC engineer. It runs on the phones your team already carries." },
    ],
  },

  faqs: [
    {
      q: "Will it work on my salesmen's cheap Android phones?",
      a: "Yes. Vrikso is built mobile-first and stays fast on low-end phones and 2G/3G networks. There's nothing to install — it runs in the browser and can be added to the home screen like an app.",
    },
    {
      q: "What about my existing data in Excel or desktop software?",
      a: "We help you migrate products, shops and opening balances — free. Most businesses are fully running within a day.",
    },
    {
      q: "Is my data safe? What if I stop using Vrikso?",
      a: "Your data lives in a professionally managed cloud database with automatic backups, and it's yours — export everything to Excel anytime, no lock-in.",
    },
    {
      q: "Do I need a computer at all?",
      a: "No. Admin, salesmen, warehouse and accounts all work from phones. A laptop is optional for big-screen comfort.",
    },
    {
      q: "Does it handle schemes, discounts and GST returns?",
      a: "Yes. Scheme and quantity discounts apply automatically on the order, GST is split correctly on every invoice, and you can export GSTR-1 in the government format for your CA.",
    },
    {
      q: "Can I see which salesman took which order, on which route?",
      a: "Every order is tagged to its salesman and route. You see each route's coverage, order value and outstanding — and each salesman sees only his own beat.",
    },
    {
      q: "Can different people have different access?",
      a: "Yes. Admin, salesman, warehouse and accounts each get a role that shows only what they need — orders, picking, billing or ledgers.",
    },
  ],

  finalCta: {
    title: "See your own products in it, today.",
    p: "Send us your product list on WhatsApp and we'll set up your account with your catalog loaded.",
  },
};
