import type { VerticalContent } from "@/components/vertical-page";
import shotOrder from "../../../../public/app/m-order-new.webp";
import shotInvoice from "../../../../public/app/m-invoice.webp";
import shotAging from "../../../../public/app/m-aging.webp";
import shotProducts from "../../../../public/app/m-products.webp";
import shotDashboardD from "../../../../public/app/d-dashboard.webp";

/**
 * Super stockist segment landing page — Vrikso pitched at the tier that
 * supplies distributors and sub-distributors rather than retail counters.
 */
export const SUPER_STOCKIST: VerticalContent = {
  slug: "super-stockist-software",
  metaTitle: "Super Stockist Software — Stock, Dispatch & Party Ledgers",
  metaDescription:
    "Cloud super stockist software for Indian trade: supply distributors and sub-distributors, track party-wise credit and outstanding, raise GST invoices with e-way bills, and see stock across godowns. Published pricing from ₹0.",

  hero: {
    eyebrow: "Vrikso for super stockists · Live now",
    title: "Super stockist software",
    titleAccent: "for the tier that supplies the trade.",
    sub: "Orders from your distributors, dispatch from your godown, GST invoices with e-way bills, and party-wise outstanding you can actually see — on the phones and laptop you already own.",
  },

  heroShots: [
    { src: shotInvoice, alt: "A GST invoice raised for a distributor in Vrikso" },
    { src: shotAging, alt: "Party-wise outstanding ageing across distributors" },
  ],

  waMessage: "Hi! I run a super stockist business and want a demo of Vrikso.",

  stats: [
    { k: "Live", v: "stock across every godown" },
    { k: "10 min", v: "to set up and go live" },
    { k: "₹0", v: "to start — published pricing, no dealer" },
    { k: "2", v: "languages English & हिन्दी" },
  ],

  features: [
    {
      icon: "order",
      h: "Orders from your distributors",
      p: "Sub-distributors and distributors place orders from their own phones. You see every order the moment it is booked, by party and by company.",
    },
    {
      icon: "warehouse",
      h: "Dispatch that builds itself",
      p: "Picking and loading lists generate from the day's orders. Mark dispatched and stock decrements across the right godown — nothing typed twice.",
    },
    {
      icon: "invoice",
      h: "GST invoices with e-way bills",
      p: "Dispatch raises the GST invoice with the correct CGST/SGST or IGST split, and the e-way bill details ride along with the consignment. PDF on WhatsApp in one tap.",
    },
    {
      icon: "payments",
      h: "Credit limits that hold",
      p: "Every distributor gets a limit and a running ledger. Record cash, cheque, UPI or bank transfer against specific invoices, so ageing stays meaningful.",
    },
    {
      icon: "reports",
      h: "Company-wise and party-wise reporting",
      p: "Sales split by company, by party and by product — plus day books and GSTR-1 export in the government format for your CA.",
    },
    {
      icon: "route",
      h: "Multiple godowns, one stock figure",
      p: "Hold stock across more than one location and still get a single live quantity per SKU, with transfers recorded properly rather than guessed.",
    },
    {
      icon: "wishlist",
      h: "Demand you would otherwise miss",
      p: "A distributor asks for an SKU you do not carry? It is logged on the spot, so you see real demand before committing capital to stock.",
    },
    {
      icon: "language",
      h: "English + हिन्दी",
      p: "Every screen switches between English and Hindi — your godown team and accounts staff use whichever is comfortable.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not screenshots from a brochure.",
    titleAccent: "The actual app.",
    p: "These are the live Vrikso screens — the same ones your godown works from and you open at night to see where the day landed.",
    dashboard: shotDashboardD,
    dashboardAlt: "The Vrikso admin dashboard for a super stockist on a laptop",
    dashboardCap:
      "Your control room. Today's orders, dispatches and outstanding, top products and company-wise sales — live, on any laptop or phone.",
    shots: [
      { img: shotOrder, cap: "Take an order", sub: "From a distributor, on any phone." },
      { img: shotInvoice, cap: "GST invoice", sub: "Auto-generated, shared on WhatsApp." },
      { img: shotAging, cap: "Outstanding", sub: "Party-wise, by age bucket." },
      { img: shotProducts, cap: "Catalog", sub: "Every SKU, pack-size, stock & price." },
    ],
  },

  workflow: {
    label: "How a day runs",
    title: "One unbroken flow — order to collection.",
    steps: [
      { h: "Distributor places the order", p: "From his own phone, against his credit limit, with your rates and schemes already applied." },
      { h: "Godown picks & loads", p: "Picking and loading lists build themselves from the day's orders, godown by godown." },
      { h: "Invoice on dispatch", p: "Dispatch creates the GST invoice and drops stock, with e-way bill details for the consignment." },
      { h: "Payment & ledger update", p: "Receipts recorded against specific invoices. The party's outstanding and your ageing report update instantly." },
    ],
  },

  audience: {
    label: "Built for your tier",
    title: "Made for everyone who supplies the suppliers.",
    items: [
      { h: "Super stockists", p: "Serving distributors and sub-distributors across a region, with large credit exposure per party." },
      { h: "C&F agents", p: "Stock, dispatch and statutory paperwork for the brands you carry, in one place." },
      { h: "Regional distributors", p: "Multi-district operations supplying both retail beats and smaller sub-distributors." },
      { h: "Importers & national brands", p: "Appointing and supplying a distributor network without an enterprise DMS deployment." },
    ],
  },

  outcomes: {
    label: "Why super stockists switch",
    title: "What changes once you're on Vrikso.",
    items: [
      { stat: "One", h: "Live stock figure", p: "Across every godown, updated by dispatch rather than by a monthly count that nobody quite trusts." },
      { stat: "Day 1", h: "Credit exposure you can see", p: "Party-wise ledgers and an ageing report replace guesswork — critical when a single distributor's balance runs into lakhs." },
      { stat: "No PC", h: "Nothing to install or maintain", p: "No Windows machine, no licence, no AMC engineer. It runs in the browser on the devices you already have." },
    ],
  },

  faqs: [
    {
      q: "What is super stockist software?",
      a: "Super stockist software runs the business of supplying distributors and sub-distributors rather than retail counters: taking their orders, dispatching from one or more godowns, raising GST invoices with e-way bills, and tracking party-wise credit limits and outstanding. It differs from retail billing software in that the parties are businesses buying in bulk on credit, so ledgers and credit control matter more than counter speed.",
    },
    {
      q: "What is the difference between a super stockist and a distributor?",
      a: "A distributor buys from the company and sells to retail outlets in a territory. A super stockist buys in bulk and supplies distributors and sub-distributors across a wider region, without usually servicing retail counters directly. Margins are thinner for a super stockist but volumes and territory are larger, and credit exposure concentrates in fewer, bigger parties.",
    },
    {
      q: "Which software is best for a super stockist in India?",
      a: "You need three things most billing apps lack: party-wise credit limits with ageing, multi-godown stock with proper transfers, and GST invoicing with e-way bills for interstate consignments. Desktop ERPs like Marg, BUSY and SWIL handle this with a trained operator on a Windows PC. Vrikso does it in the browser on existing devices, with published pricing from ₹0 to ₹8,999 a year.",
    },
    {
      q: "Can my distributors place orders themselves?",
      a: "Yes. Each party can place orders from their own phone against their credit limit and your rates, and you see every order the moment it is booked. That removes the phone-call-and-notepad step where most ordering errors originate.",
    },
    {
      q: "Does it handle multiple godowns?",
      a: "Yes. Stock is held per location with a single live quantity per SKU, and transfers between your own godowns are recorded on a delivery challan rather than guessed at month end.",
    },
    {
      q: "Does it generate e-way bills?",
      a: "GST invoices carry the details needed for the consignment, including the correct CGST/SGST or IGST split and HSN per line. E-way bills are triggered by movement rather than by sale, so transfers between your own godowns can need one too — our e-way bill guide covers the cases distributors most often get wrong.",
    },
    {
      q: "What does it cost?",
      a: "Published pricing, no dealer quotes: Free (₹0 — 1 user, 200 orders/month), Shop (₹2,999/year) and Business (₹8,999/year for 10 users, ₹999 per extra user), with monthly plans available. No installation, training or AMC charges.",
    },
  ],

  finalCta: {
    title: "Your companies and parties, loaded for you — today.",
    p: "Send us your product list on WhatsApp and we'll set up your account with your SKUs, godowns and distributor accounts ready to go.",
  },
};
