import type { VerticalContent } from "@/components/vertical-page";
import shotOrder from "../../../../public/app/m-order-new.webp";
import shotInvoice from "../../../../public/app/m-invoice.webp";
import shotAging from "../../../../public/app/m-aging.webp";
import shotProducts from "../../../../public/app/m-products.webp";
import shotDashboardD from "../../../../public/app/d-dashboard.webp";

/**
 * FMCG segment landing page — Vrikso Distribution pitched to FMCG
 * distributors specifically. Same product, segment-specific copy.
 */
export const FMCG: VerticalContent = {
  slug: "fmcg-distributor-app",
  metaTitle: "FMCG Distributor App — Orders, Schemes & GST Billing on One Phone",
  metaDescription:
    "The FMCG distributor app for Indian trade: salesmen book orders on the beat, schemes apply automatically, the godown gets picking lists, GST invoices reach shops on WhatsApp. Free plan to start — no PC, no licence, no AMC.",

  hero: {
    eyebrow: "Vrikso for FMCG distribution · Live now",
    title: "The FMCG distributor app",
    titleAccent: "your beats actually run on.",
    sub: "Multi-company catalog, scheme discounts, beat-wise salesmen, same-day picking and GST billing — born inside a real FMCG distribution business, and priced for one.",
  },

  heroShots: [
    { src: shotOrder, alt: "Booking an FMCG order on the beat in Vrikso" },
    { src: shotAging, alt: "Outstanding aging report for an FMCG distributor" },
  ],

  waMessage: "Hi! I run an FMCG distribution business and want a demo of Vrikso.",

  stats: [
    { k: "90 sec", v: "to book an order on the beat, even on 2G" },
    { k: "10 min", v: "to set up and go live" },
    { k: "₹0", v: "to start — free plan, no PC needed" },
    { k: "2", v: "languages English & हिन्दी" },
  ],

  features: [
    {
      icon: "order",
      h: "Beat orders in 90 seconds",
      p: "Salesmen pick the shop, tap SKUs, place the order. Recent shops first, pack-size variants grouped, built to survive the market's weakest network.",
    },
    {
      icon: "route",
      h: "Beats & routes that report back",
      p: "Shops organised by route, each salesman sees his own beat — and you see every route's coverage, order value and outstanding, live.",
    },
    {
      icon: "warehouse",
      h: "Same-day picking & loading",
      p: "The morning's beat orders become picking and loading lists automatically. Mark delivered and stock decrements — nothing typed twice.",
    },
    {
      icon: "invoice",
      h: "GST invoices with schemes applied",
      p: "Scheme and quantity discounts apply on the order; delivery creates the GST invoice with CGST/SGST split and round-off. PDF to the shop on WhatsApp in one tap.",
    },
    {
      icon: "payments",
      h: "Collections on the beat",
      p: "Record cash, UPI or cheque against any bill, at the shop. Per-shop ledger, credit limits, and an aging report that shows where the money is stuck.",
    },
    {
      icon: "reports",
      h: "Company-wise sales, CA-ready GST",
      p: "Sales by company and by product — the numbers your ASM asks for — plus day books and GSTR-1 export in the government format.",
    },
    {
      icon: "wishlist",
      h: "Demand before you buy",
      p: "A shop asks for an SKU you don't carry? The salesman logs it on the spot. You see real market demand before committing stock.",
    },
    {
      icon: "language",
      h: "English + हिन्दी app",
      p: "Every screen switches between English and Hindi — your salesmen and godown staff use whichever is comfortable.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not screenshots from a brochure.",
    titleAccent: "The actual app.",
    p: "These are the live Vrikso screens — the same ones your salesman opens at the shop and you open at night to see where the day landed.",
    dashboard: shotDashboardD,
    dashboardAlt: "The Vrikso admin dashboard for an FMCG distributor on a laptop",
    dashboardCap:
      "Your control room. Today's orders, sales and outstanding, top products and company-wise sales — live, on any laptop or phone.",
    shots: [
      { img: shotOrder, cap: "Book a beat order", sub: "Tap SKUs, schemes apply, place — 90 seconds." },
      { img: shotInvoice, cap: "GST invoice", sub: "Auto-generated, shared on WhatsApp." },
      { img: shotAging, cap: "Outstanding", sub: "Who owes what, by age bucket." },
      { img: shotProducts, cap: "Catalog", sub: "Every SKU, pack-size, stock & price." },
    ],
  },

  workflow: {
    label: "How a beat day runs",
    title: "One unbroken flow — beat to bank.",
    steps: [
      { h: "Salesman works the beat", p: "Orders booked shop by shop on his own phone, schemes applied automatically, on whatever network the market has." },
      { h: "Godown picks & loads", p: "Picking and loading lists build themselves from the day's orders — by the time the beat is done, the van is being loaded." },
      { h: "Invoice on delivery", p: "Marking delivered creates the GST invoice and drops stock. The PDF reaches the shop on WhatsApp before the van leaves." },
      { h: "Payment & ledger update", p: "Cash, UPI or cheque recorded against the bill. The shop's outstanding and your aging report update instantly." },
    ],
  },

  audience: {
    label: "Built for your trade",
    title: "Every shape of FMCG distribution.",
    items: [
      { h: "Multi-brand distributors", p: "Several companies, several beats, one catalog — with sales reported company-wise for every ASM review." },
      { h: "Sub-distributors & rural beats", p: "Small territories run lean: one phone, the free plan, and every order captured from day one." },
      { h: "Super-stockists", p: "Serving sub-distributors and retailers across a territory, with credit limits and outstanding tracked per party." },
      { h: "C&F agents", p: "Stock, dispatch and statutory paperwork for the brands you carry — in one place." },
    ],
  },

  outcomes: {
    label: "Why FMCG distributors switch",
    title: "What changes once you're on Vrikso.",
    items: [
      { stat: "₹0", h: "Leakage from lost orders", p: "Every beat order is captured digitally the second it's taken — nothing slips through a diary or a missed phone call." },
      { stat: "Day 1", h: "Outstanding you can see", p: "A live per-shop ledger and aging report replace guesswork. You always know where your money is stuck on the beat." },
      { stat: "No PC", h: "Nothing to install or maintain", p: "No Windows machine, no licence, no AMC engineer. It runs on the phones your salesmen already carry." },
    ],
  },

  faqs: [
    {
      q: "Which app is best for an FMCG distributor in India?",
      a: "Depends who it's for. Enterprise platforms like Bizom and FieldAssist are bought by FMCG brands to monitor their distributor network. For a distributor running their own operation — beats, schemes, godown, GST billing, collections — Vrikso is built for exactly that, with published pricing from ₹0 to ₹799/month and nothing to install.",
    },
    {
      q: "Does it handle company schemes like 10+1 and quantity slabs?",
      a: "Yes. Scheme and quantity discounts apply automatically on the order, flow into the GST invoice, and show up in your sales reports — so what the company announces is what the shop actually gets, without the salesman doing maths in the market.",
    },
    {
      q: "Can my salesmen use it on cheap Android phones and weak networks?",
      a: "Yes. Vrikso is built mobile-first and stays fast on low-end phones and 2G/3G networks in the market. There's nothing to install — it runs in the browser and can be added to the home screen like an app.",
    },
    {
      q: "I distribute for multiple companies. Can one app handle all of them?",
      a: "Yes. All your companies live in one catalog, orders mix freely on the beat, and reports split sales company-wise — so each ASM gets his numbers without you running two systems.",
    },
    {
      q: "What about my existing data in Marg, Tally or Excel?",
      a: "We migrate your products, shops and opening balances for you — free. Most distributors are fully running within a day.",
    },
    {
      q: "Do I need a computer or a trained operator?",
      a: "No. Admin, salesmen, godown and accounts all work from phones; a laptop is optional for big-screen comfort. There's no operator to hire and no AMC engineer to call.",
    },
    {
      q: "What does it cost?",
      a: "Published pricing, no dealer quotes: Free (₹0 — 1 user, 200 orders/month), Shop (₹299/month) and Business (₹799/month for 10 users, ₹99 per extra user). No installation, training or AMC charges.",
    },
  ],

  finalCta: {
    title: "Your catalog and beats, loaded for you — today.",
    p: "Send us your product list on WhatsApp and we'll set up your account with your companies, SKUs and routes ready to go.",
  },
};
