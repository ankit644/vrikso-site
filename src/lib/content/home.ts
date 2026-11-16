/** All homepage copy in one place — edit copy here, not in JSX. */
export const HOME = {
  nav: {
    home: "Home",
    software: "Software",
    pricing: "Pricing",
    blog: "Blog",
    contact: "Contact",
  },

  /** The product lines shown under the "Software" nav dropdown. */
  softwareMenu: [
    { href: "/distribution", name: "Vrikso Distribution", desc: "Orders, warehouse & GST billing for distributors" },
    { href: "/billing", name: "Vrikso Billing", desc: "GST invoicing, payments & GSTR-1 for any business" },
    { href: "/restaurant", name: "Vrikso Restaurant", desc: "POS, KOTs, tables & bills for eateries" },
    { href: "/jewellery-software", name: "Vrikso Jewellery", desc: "Tags, HUID, old gold, schemes & girvi for jewellers" },
  ],
  cta: { start: "Start free", demo: "WhatsApp demo", login: "Login" },
  waMessage: "Hi! I want a demo of Vrikso for my business.",

  hero: {
    eyebrow: "Distribution · Billing · Restaurant · Jewellery",
    titleA: "Run your whole",
    titleAccent: "business",
    titleB: "from your phone.",
    sub: "One clean system that takes the shape of your trade — distributor, shop, restaurant or jewellery showroom. GST billing, stock, payments and your team's whole day, on the phones you already own.",
    proof: "Born inside a real distribution business — now running four trades.",
    stats: [
      { k: "4", v: "trades, one platform" },
      { k: "10 min", v: "to go live" },
      { k: "100%", v: "cloud-backed, always" },
    ],
  },

  /* Honest value-props that scroll in the trust strip (no false endorsements). */
  strip: [
    "GST invoices, automatically",
    "Works on any Android phone",
    "Automatic cloud backup",
    "Hindi + English",
    "Live outstanding, per customer",
    "No PC · No licence · No AMC",
    "Built for Bharat's trade",
  ],

  /** The four product lines, each shown with its own real screenshots. */
  products: {
    label: "Pick your trade",
    title: "Four products.",
    titleAccent: "One calm core.",
    p: "Every line below is the same trusted system wearing your industry's rules — shown in real screenshots of the live app, not mockups.",
    dashboardCap: "Your control room",
    dashboardSub: "Today's sales, outstanding and top items — live, on any laptop or phone, whatever your trade.",
    explore: "Explore",
    items: [
      {
        key: "distribution",
        href: "/distribution",
        name: "Distribution",
        desc: "Orders, warehouse & GST billing for distributors and wholesalers.",
        points: ["Salesman order app, beats & routes", "Picking lists & automatic GST invoices", "Outstanding & aging, per shop"],
      },
      {
        key: "billing",
        href: "/billing",
        name: "Billing",
        desc: "GST invoicing for any business, from any phone.",
        points: ["Invoices, estimates & challans in seconds", "Recurring billing & payment tracking", "GSTR-1 export for your CA"],
      },
      {
        key: "restaurant",
        href: "/restaurant",
        name: "Restaurant",
        desc: "POS, KOTs, tables & bills for eateries.",
        points: ["Tables, KOTs & a live kitchen board", "Zomato / Swiggy orders in one place", "GST bills & customer khata"],
      },
      {
        key: "jewellery",
        href: "/jewellery-software",
        name: "Jewellery",
        desc: "Tags, rates, old gold & schemes for jewellers.",
        points: ["Tags with HUID & net weight", "Daily rates — making & wastage maths done", "Old gold, savings schemes & girvi"],
      },
    ],
  },

  pains: {
    label: "Why Vrikso",
    items: [
      {
        kicker: "The register",
        h: "Paper ledgers lie.",
        p: "Outstanding scattered across diaries and memory. Vrikso keeps one live ledger — every order, invoice and payment, per customer, always current.",
      },
      {
        kicker: "The desktop",
        h: "Old software is chained to a desk.",
        p: "Desktop-era tools need a PC, licences and AMC visits. Vrikso runs on the phone already in your pocket and your salesman's.",
      },
      {
        kicker: "The backup",
        h: "One crash, ten years of data.",
        p: "Cloud means every order is saved the second it happens, automatically. Lose the phone, not the business.",
      },
    ],
  },

  tour: {
    label: "One platform, three trade days",
    steps: [
      {
        k: "01",
        h: "The distributor's morning",
        p: "A salesman picks the shop, taps products, places the order — 90 seconds on a phone, even on 2G. Back at the godown, the picking list builds itself.",
      },
      {
        k: "02",
        h: "The restaurant's lunch rush",
        p: "Orders fly to the kitchen board as KOTs, tables turn, and every bill lands as a clean GST invoice — no shouting across the pass, no paper slips.",
      },
      {
        k: "03",
        h: "The jeweller's evening sale",
        p: "Scan the tag and the bill does the gold maths — today's rate, making and wastage — with the customer's old gold tested and credited on the same invoice.",
      },
    ],
  },

  tree: {
    label: "One tree, many branches",
    title: "One platform.",
    titleAccent: "Every business.",
    p: "Vrikso is one system that takes the shape of your trade. Distribution, Billing, Restaurant and Jewellery are live today; every new line is the same trusted core wearing your industry's rules.",
    live: "Live now",
    soon: "Coming",
    branches: [
      { name: "Distribution", live: true, href: "/distribution" },
      { name: "Billing", live: true, href: "/billing" },
      { name: "Restaurant", live: true, href: "/restaurant" },
      { name: "Jewellery", live: true, href: "/jewellery-software" },
      { name: "Kirana & Retail", live: false },
      { name: "Pharma", live: false },
      { name: "Garments", live: false },
    ],
  },

  compare: {
    label: "Vrikso vs desktop-era software",
    rows: [
      ["Works on any phone", "Needs a Windows PC"],
      ["Automatic cloud backup", "Manual backups, local files"],
      ["Your team works from the market, kitchen or counter", "Everything queues behind one PC"],
      ["Updates & support included", "Paid AMC for every update"],
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
      { name: "Shop", price: "₹250", per: "/mo · billed yearly", pitch: "₹2,999 a year (or ₹349 month-to-month). For a single store. 3 users.", featured: false },
      { name: "Business", price: "₹750", per: "/mo · billed yearly", pitch: "₹8,999 a year (or ₹999 month-to-month). For teams — distributors, restaurants, showrooms. 10 users, roles, reports.", featured: true },
    ],
  },

  final: {
    title: "Your business, in your pocket, tonight.",
    p: "Set up in 10 minutes. Your first order placed in 11.",
  },

  blogTeaser: {
    label: "From the journal",
    title: "Field notes for Indian trade.",
    p: "Practical guides on GST, collections, stock and field sales — written for traders, not accountants.",
    all: "Read all articles",
  },

  footer: {
    tagline: "One platform. Every business.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    links: {
      distribution: "Vrikso Distribution",
      billing: "Vrikso Billing",
      restaurant: "Vrikso Restaurant",
      jewellery: "Vrikso Jewellery",
      fmcg: "For FMCG distributors",
      wholesale: "For wholesalers",
      superStockist: "For super stockists",
      pricing: "Pricing",
      blog: "Blog",
      glossary: "Trade glossary",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    bottom: "Made in India, for Indian trade.",
  },
};

export type HomeContent = typeof HOME;
