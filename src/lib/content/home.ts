/** All homepage copy in one place — edit copy here, not in JSX. */
export const HOME = {
  nav: { product: "Product", pricing: "Pricing", contact: "Contact" },
  cta: { start: "Start free", demo: "WhatsApp demo", login: "Login" },
  waMessage: "Hi! I want a demo of Vrikso for my business.",

  hero: {
    eyebrow: "For distributors · wholesalers · retailers",
    titleA: "Run your whole",
    titleAccent: "business",
    titleB: "from your phone.",
    sub: "Orders, GST billing, stock and payments — one clean app for your salesmen, warehouse and accounts. No computer. No backups. No tension.",
    proof: "Built inside a real distribution business — not a software lab.",
  },

  pains: {
    label: "Why Vrikso",
    items: [
      {
        kicker: "The register",
        h: "Paper ledgers lie.",
        p: "Outstanding scattered across diaries and memory. Vrikso keeps one live ledger — every order, invoice and payment, per shop, always current.",
      },
      {
        kicker: "The desktop",
        h: "Old software is chained to a desk.",
        p: "Desktop-era tools need a PC, licences and AMC visits. Vrikso runs on the phone already in your pocket — and your salesman's.",
      },
      {
        kicker: "The backup",
        h: "One crash, ten years of data.",
        p: "Cloud means every order is saved the second it happens, automatically. Lose the phone, not the business.",
      },
    ],
  },

  tour: {
    label: "A day on Vrikso",
    steps: [
      {
        k: "01",
        h: "Salesman takes the order at the shop",
        p: "Pick the shop, tap products, place order — 90 seconds on a phone, even on 2G. Recent shops appear first.",
      },
      {
        k: "02",
        h: "Warehouse picks and loads",
        p: "Picking and loading lists generate themselves. Mark delivered — stock decrements and the GST invoice is created automatically.",
      },
      {
        k: "03",
        h: "Invoice lands on WhatsApp",
        p: "A clean GST invoice PDF, sent to the shop in one tap. Payments recorded against it; outstanding always visible.",
      },
    ],
  },

  tree: {
    label: "One tree, many branches",
    title: "One platform.",
    titleAccent: "Every business.",
    p: "Vrikso is one system that takes the shape of your trade. Distribution is live today; every new line is the same trusted core wearing your industry's rules.",
    live: "Live now",
    soon: "Coming",
    branches: [
      { name: "Distribution", live: true },
      { name: "Kirana & Retail", live: false },
      { name: "Pharma", live: false },
      { name: "Garments", live: false },
      { name: "Hardware", live: false },
      { name: "Electronics", live: false },
    ],
  },

  compare: {
    label: "Vrikso vs desktop-era software",
    rows: [
      ["Works on any phone", "Needs a Windows PC"],
      ["Automatic cloud backup", "Manual backups, local files"],
      ["Salesmen take orders in the field", "Orders dictated over phone calls"],
      ["₹33 per day", "₹8,000+ per year plus AMC"],
    ],
    us: "Vrikso",
    them: "Desktop software",
  },

  pricing: {
    label: "Pricing",
    title: "Simple prices, in plain rupees.",
    note: "No licence fees. No AMC. Cancel anytime.",
    seeAll: "See full pricing",
    plans: [
      { name: "Free", price: "₹0", per: "forever", pitch: "Try it properly. 1 user.", featured: false },
      { name: "Shop", price: "₹299", per: "/month", pitch: "For a single store. 3 users.", featured: false },
      { name: "Business", price: "₹799", per: "/month", pitch: "Distributors & wholesalers. 10 users, routes, reports.", featured: true },
    ],
  },

  final: {
    title: "Your business, in your pocket, tonight.",
    p: "Set up in 10 minutes. Your first order placed in 11.",
  },

  footer: {
    tagline: "One platform. Every business.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    links: {
      distribution: "Vrikso Distribution",
      pricing: "Pricing",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    bottom: "Made in India, for Indian trade.",
  },
};

export type HomeContent = typeof HOME;
