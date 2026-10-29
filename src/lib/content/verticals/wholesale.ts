import type { VerticalContent } from "@/components/vertical-page";
import shotOrder from "../../../../public/app/m-order-new.webp";
import shotInvoice from "../../../../public/app/m-invoice.webp";
import shotAging from "../../../../public/app/m-aging.webp";
import shotProducts from "../../../../public/app/m-products.webp";
import shotDashboardD from "../../../../public/app/d-dashboard.webp";

/**
 * Wholesale segment landing page — Vrikso pitched to wholesale counters
 * and mandi traders. Same product, segment-specific copy.
 */
export const WHOLESALE: VerticalContent = {
  slug: "wholesale-billing-software",
  metaTitle: "Wholesale Billing Software — GST Bills, Party Ledgers & Stock",
  metaDescription:
    "Cloud wholesale billing software for Indian wholesale counters and mandi traders — fast GST billing, party-wise ledgers with credit limits, live stock, udhaar aging and WhatsApp invoices. Free plan to start; no PC, no licence, no AMC.",

  hero: {
    eyebrow: "Vrikso for wholesale · Live now",
    title: "Wholesale billing software",
    titleAccent: "as fast as your counter.",
    sub: "Bulk GST bills in moments, party-wise ledgers and credit limits, live stock and udhaar aging — on the phones and laptop you already own. Born inside a real wholesale-distribution business.",
  },

  heroShots: [
    { src: shotInvoice, alt: "A GST invoice generated in Vrikso wholesale billing" },
    { src: shotAging, alt: "Party-wise outstanding aging report" },
  ],

  waMessage: "Hi! I run a wholesale business and want a demo of Vrikso.",

  stats: [
    { k: "1 tap", v: "to send the bill PDF on WhatsApp" },
    { k: "10 min", v: "to set up and go live" },
    { k: "100%", v: "of bills backed up to the cloud" },
    { k: "2", v: "languages English & हिन्दी" },
  ],

  features: [
    {
      icon: "invoice",
      h: "Counter billing at counter speed",
      p: "Recent parties first, pack-size variants grouped, rates remembered per party. GST split, round-off and totals handled — the queue keeps moving.",
    },
    {
      icon: "payments",
      h: "Party ledgers & credit limits",
      p: "Every party gets a running ledger. Set credit limits, record cash, UPI, cheque or bank against any bill, and see exactly who owes what.",
    },
    {
      icon: "reports",
      h: "Udhaar aging that collects for you",
      p: "Outstanding by age bucket — 7, 15, 30, 60 days — so Saturday collection rounds start with a list, not a memory.",
    },
    {
      icon: "warehouse",
      h: "Stock that counts itself",
      p: "Delivery decrements stock automatically. Live quantities on every SKU and pack size — no evening guesswork at the godown.",
    },
    {
      icon: "order",
      h: "Orders from regulars, before they arrive",
      p: "Regular buyers' orders can be captured on a phone in the market or at the counter — billed and picked without re-entry.",
    },
    {
      icon: "route",
      h: "GSTR-1 in the government format",
      p: "GST applied correctly on every bill, HSN on every line, and GSTR-1 exported the way your CA wants it. E-invoice-era discipline, without an accountant on staff.",
    },
    {
      icon: "wishlist",
      h: "Demand you'd otherwise miss",
      p: "A buyer asks for something you don't stock? Log it in one tap and see real demand before your next purchase.",
    },
    {
      icon: "language",
      h: "English + हिन्दी app",
      p: "Every screen switches between English and Hindi — you, the counter boy and the godown use whichever is comfortable.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not screenshots from a brochure.",
    titleAccent: "The actual app.",
    p: "These are the live Vrikso screens — the same ones your counter runs during the rush and you open at night to see where the day landed.",
    dashboard: shotDashboardD,
    dashboardAlt: "The Vrikso admin dashboard for a wholesaler on a laptop",
    dashboardCap:
      "Your control room. Today's sales and outstanding, top products and top parties — live, on any laptop or phone.",
    shots: [
      { img: shotInvoice, cap: "GST bill", sub: "Generated in moments, shared on WhatsApp." },
      { img: shotAging, cap: "Udhaar aging", sub: "Who owes what, by age bucket." },
      { img: shotOrder, cap: "Take an order", sub: "Regulars' orders captured on any phone." },
      { img: shotProducts, cap: "Catalog", sub: "Every SKU, pack-size, stock & price." },
    ],
  },

  workflow: {
    label: "How a counter day runs",
    title: "One unbroken flow — counter to cash.",
    steps: [
      { h: "Party walks in, bill goes out", p: "Recent parties first, per-party rates remembered, GST handled. The PDF is on their WhatsApp before the loading starts." },
      { h: "Stock updates itself", p: "Every billed item decrements live stock — the godown and the counter always agree." },
      { h: "Udhaar goes on the ledger", p: "Part payment, full credit or cash — recorded against the bill, with the party's limit and balance in front of you." },
      { h: "Evening tells the truth", p: "Day book, outstanding by age, top parties and products — the whole day on one screen before you pull the shutter." },
    ],
  },

  audience: {
    label: "Built for your trade",
    title: "Made for the wholesale counter.",
    items: [
      { h: "Grocery & kirana-supply wholesalers", p: "High-volume counters billing kiranas on credit, where speed and the ledger are everything." },
      { h: "Electronics & mobile wholesale", p: "Serial-heavy, price-sensitive stock with per-party rates and tight margins to protect." },
      { h: "Apparel & textile wholesale", p: "Size and variant-heavy catalogs, seasonal buyers, and udhaar cycles that need watching." },
      { h: "FMCG & general-merchant wholesale", p: "Fast-rotating SKUs, scheme pricing and GST discipline — without hiring an operator." },
    ],
  },

  outcomes: {
    label: "Why wholesalers switch",
    title: "What changes once you're on Vrikso.",
    items: [
      { stat: "Day 1", h: "Udhaar you can see", p: "A live, party-wise ledger and aging report replace the bahi-khata. You always know where your money is parked." },
      { stat: "₹0", h: "Lost in unbilled sales", p: "Every sale is billed in seconds, so nothing leaves the counter unrecorded — and your GST filing matches reality." },
      { stat: "No PC", h: "Nothing to install or maintain", p: "No Windows machine, no licence, no AMC engineer. The counter phone and your own phone are the whole system." },
    ],
  },

  faqs: [
    {
      q: "Which billing software is best for a wholesale business in India?",
      a: "For an owner-run wholesale counter, the short answer is: something that bills fast, tracks party-wise udhaar with credit limits, and exports GSTR-1 — without needing a Windows PC and an operator. That's the gap Vrikso is built for, with a free plan to start. Desktop packages like Marg or BUSY suit counters that have a trained operator; billing apps like Vyapar suit smaller retail counters.",
    },
    {
      q: "Can it handle udhaar (credit) and party-wise outstanding?",
      a: "Yes — this is the heart of the product. Every party has a running ledger, you can set credit limits, and the aging report shows outstanding by age bucket so collection rounds start with a list, not a memory.",
    },
    {
      q: "Is it fast enough for a busy counter?",
      a: "Yes. Recent parties surface first, pack-size variants are grouped, per-party rates are remembered, and the GST math is automatic. Billing happens in moments on a phone or laptop — and the PDF goes to the party on WhatsApp in one tap.",
    },
    {
      q: "Does it handle GST properly?",
      a: "CGST/SGST/IGST split correctly on every bill, HSN on every line, and GSTR-1 export in the government format for your CA. Clean billing is also your best protection if UPI-data scrutiny ever brings a notice.",
    },
    {
      q: "What about my existing data in Excel or desktop software?",
      a: "We migrate your products, parties and opening balances for you — free. Most wholesale counters are fully running within a day.",
    },
    {
      q: "Do I need a computer?",
      a: "No. The counter, the godown and you can all work from phones; a laptop is optional for big-screen comfort. Your data lives in the cloud with automatic backups and one-click Excel export — no lock-in.",
    },
    {
      q: "What does it cost?",
      a: "Published pricing: Free (₹0 — 1 user, 200 orders/month), Shop (₹299/month) and Business (₹799/month for 10 users). No licence fee, no AMC, no engineer visits — cancel anytime.",
    },
  ],

  finalCta: {
    title: "Your parties and products, loaded for you — today.",
    p: "Send us your product list on WhatsApp and we'll set up your account with your catalog and parties ready to bill.",
  },
};
