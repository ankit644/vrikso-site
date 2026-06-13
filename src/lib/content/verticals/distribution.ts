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
  ],

  finalCta: {
    title: "See your own products in it, today.",
    p: "Send us your product list on WhatsApp and we'll set up your account with your catalog loaded.",
  },
};
