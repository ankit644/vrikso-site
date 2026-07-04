import type { VerticalContent } from "@/components/vertical-page";
import shotInvoice from "../../../../public/app/billing/m-invoice.png";
import shotInvoices from "../../../../public/app/billing/m-invoices.png";
import shotCustomers from "../../../../public/app/billing/m-customers.png";
import shotRecurring from "../../../../public/app/billing/m-recurring.png";
import shotDashboardM from "../../../../public/app/billing/m-dashboard.png";
import shotDashboardD from "../../../../public/app/billing/d-dashboard.png";

/** Vrikso Billing — standalone GST invoicing for any business that bills. */
export const BILLING: VerticalContent = {
  slug: "billing",
  metaTitle: "Vrikso Billing — GST invoicing software for Indian businesses",
  metaDescription:
    "Create GST invoices in seconds, share them on WhatsApp, track payments and outstanding, auto-bill retainers with recurring invoices, and export GSTR-1 — from any phone or laptop.",

  hero: {
    eyebrow: "Vrikso Billing · Live now",
    title: "GST billing in seconds,",
    titleAccent: "not in software training.",
    sub: "Invoices, estimates, challans, credit notes and recurring billing created in moments, shared on WhatsApp, and tracked until the last rupee is collected. On any phone or laptop.",
  },

  heroShots: [
    { src: shotInvoice, alt: "A GST invoice in Vrikso Billing" },
    { src: shotDashboardM, alt: "The Vrikso Billing dashboard on a phone" },
  ],

  waMessage: "Hi! I want a demo of Vrikso Billing for my business.",

  stats: [
    { k: "30 sec", v: "to raise a GST invoice" },
    { k: "7", v: "document types in one app" },
    { k: "1 tap", v: "to share on WhatsApp or print" },
    { k: "100%", v: "GST-correct, GSTR-1 ready" },
  ],

  featuresHeading: "Everything between “work done” and “payment received.”",
  features: [
    {
      icon: "invoice",
      h: "GST invoices in seconds",
      p: "Pick the customer, add items, done. CGST/SGST/IGST split, HSN/SAC codes, round-off and amount in words all computed for you, every time.",
    },
    {
      icon: "docs",
      h: "Every document, one place",
      p: "Estimates, proforma invoices, delivery challans, credit notes and debit notes each properly numbered, linked to its invoice, one tap to convert.",
    },
    {
      icon: "recurring",
      h: "Recurring invoices",
      p: "Retainers and AMCs bill themselves monthly or quarterly, the invoice is generated on schedule. Pause and resume anytime.",
    },
    {
      icon: "payments",
      h: "Payments & dues",
      p: "Record cash, UPI, cheque or bank transfer against any invoice. Partial payments, balance due and per-customer outstanding always current.",
    },
    {
      icon: "customers",
      h: "Customers with GST built in",
      p: "GSTIN, place of supply and registered/consumer treatment saved once, applied on every document. Inter-state IGST handled automatically.",
    },
    {
      icon: "reports",
      h: "GSTR-1 for your CA",
      p: "Export outward-supply data B2B, B2C, CDNR and HSN sheets as Excel in the government format. Filing month becomes a five-minute job.",
    },
    {
      icon: "template",
      h: "Invoices in your brand",
      p: "Pick a template, set your accent colour, add your logo, bank details and UPI ID every invoice goes out looking like your business.",
    },
    {
      icon: "order",
      h: "E-invoice & e-way ready",
      p: "Capture IRN and e-way bill details against the invoice when your turnover needs them no separate register to maintain.",
    },
    {
      icon: "language",
      h: "English + हिन्दी app",
      p: "Every screen switches between English and Hindi you and your accountant each use whichever reads faster.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not mockups.",
    titleAccent: "The live billing app.",
    p: "These are actual screens from Vrikso Billing the same app you'll open at the counter, and your accountant will open at filing time.",
    dashboard: shotDashboardD,
    dashboardAlt: "The Vrikso Billing dashboard on a laptop",
    dashboardCap:
      "Your money, one screen. Revenue this month, collections, outstanding and top customers live on any laptop or phone.",
    shots: [
      { img: shotInvoice, cap: "GST invoice", sub: "Correct split, share or print in a tap." },
      { img: shotInvoices, cap: "All invoices", sub: "Paid, partial, unpaid at a glance." },
      { img: shotRecurring, cap: "Recurring", sub: "Retainers & AMCs bill themselves." },
      { img: shotCustomers, cap: "Customers", sub: "GSTIN, ledger and dues per customer." },
    ],
  },

  workflow: {
    label: "How billing runs",
    title: "From work done to money in the bank.",
    steps: [
      { h: "Raise the invoice", p: "Pick the customer, add line items. GST splits itself CGST/SGST at home, IGST across state lines." },
      { h: "Share it instantly", p: "A clean PDF on WhatsApp, or print A4 at the counter. Your logo, bank details and UPI on every copy." },
      { h: "Record the payment", p: "Cash, UPI, cheque or bank against any invoice, partial or full. Balance due updates the moment you save." },
      { h: "File GST without drama", p: "GSTR-1 exports in the government format. Credit and debit notes already linked to their invoices." },
    ],
  },

  audience: {
    label: "Built for anyone who bills",
    title: "One billing app, every kind of business.",
    items: [
      { h: "Traders & shops", p: "Counter billing with the GST correct on every invoice, and dues per customer you can actually see." },
      { h: "Services & agencies", p: "Estimates that convert to invoices in a tap, and monthly retainers that bill themselves." },
      { h: "Freelancers & consultants", p: "Professional, branded invoices in seconds and polite, precise follow-up on what's unpaid." },
      { h: "Small manufacturers", p: "Delivery challans, e-way details, credit and debit notes the paperwork of goods, handled." },
    ],
  },

  outcomes: {
    label: "Why businesses switch",
    title: "What changes once you bill on Vrikso.",
    items: [
      { stat: "30 sec", h: "From work to invoice", p: "No Excel formatting, no desktop software, no waiting to reach the office. Bill from wherever you are." },
      { stat: "₹0", h: "Forgotten in old ledgers", p: "Every invoice carries its balance due; every customer shows their outstanding. Follow-up writes itself." },
      { stat: "Zero", h: "GST arithmetic errors", p: "Rates, HSN codes, inter-state splits and round-off are computed, not typed. Your CA gets clean data." },
    ],
  },

  faqs: [
    {
      q: "Is it properly GST-compliant?",
      a: "Yes. CGST/SGST for intra-state and IGST for inter-state supplies, HSN/SAC codes on line items, reverse charge, round-off and amount in words and a GSTR-1 export (B2B, B2C, CDNR, HSN) in the government format for filing.",
    },
    {
      q: "Can I send invoices on WhatsApp?",
      a: "Yes one tap shares the invoice PDF on WhatsApp, or you can print A4 at the counter. Your logo, bank details and UPI ID appear on every copy.",
    },
    {
      q: "Do estimates and quotations convert to invoices?",
      a: "Yes. Raise an estimate or proforma first, and convert it to a tax invoice in one tap when the customer confirms nothing is retyped.",
    },
    {
      q: "Can it bill my retainer clients automatically?",
      a: "Yes. Set up a recurring invoice monthly or quarterly and Vrikso generates it on schedule. Pause or resume a client anytime.",
    },
    {
      q: "Can my accountant and I use it at the same time?",
      a: "Yes it's cloud software. You bill from your phone at the counter while your accountant checks reports on a laptop, on the same live data.",
    },
    {
      q: "What about credit notes, debit notes and delivery challans?",
      a: "All built in, each with its own numbering series, and credit/debit notes stay linked to the invoice they adjust so the paper trail is always complete.",
    },
    {
      q: "Is my data locked in?",
      a: "No. Your data lives in a professionally managed cloud database with automatic backups, and you can export everything to Excel anytime.",
    },
  ],

  finalCta: {
    title: "Raise your first GST invoice tonight.",
    p: "Message us on WhatsApp we'll set up your business details and you'll be billing in ten minutes.",
  },
};
