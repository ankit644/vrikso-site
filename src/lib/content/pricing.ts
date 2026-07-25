/** Pricing content — shared by the /pricing page, structured data and llms.txt. */

export type Plan = {
  name: string;
  price: string;
  /** Numeric price in INR for structured data. */
  priceINR: number;
  per: string;
  pitch: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Free",
    price: "₹0",
    priceINR: 0,
    per: "forever",
    pitch: "Try Vrikso properly, for as long as you like.",
    features: ["1 user", "200 orders / month", "GST invoices (Vrikso branding)", "All core features"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Shop",
    price: "₹299",
    priceINR: 299,
    per: "/month",
    pitch: "For a single retail or wholesale counter.",
    features: ["3 users", "Unlimited orders", "Clean GST invoices", "Payments & ledger", "WhatsApp invoice sharing"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Business",
    price: "₹799",
    priceINR: 799,
    per: "/month",
    pitch: "For distributors & wholesalers with a team.",
    features: [
      "10 users",
      "Unlimited orders",
      "Routes & salesman beats",
      "Warehouse picking & loading",
      "Aging, GSTR-1 & all reports",
      "Priority WhatsApp support",
    ],
    cta: "Start free",
    featured: true,
  },
];

export const PRICING_FAQS = [
  {
    q: "What does ₹799/month really cost per day?",
    a: "About ₹26 a day — less than two cups of chai, for the system running your whole business. Annual billing gets 2 months free.",
  },
  {
    q: "Any setup fee, licence fee or AMC?",
    a: "No, none. The monthly price is everything: hosting, backups, updates and support included. Compare that to desktop software at ₹8,000+ per year plus AMC visits.",
  },
  {
    q: "Can I change plans or cancel?",
    a: "Anytime. Upgrade when the team grows, downgrade or cancel whenever — and your data is always exportable to Excel.",
  },
  {
    q: "Need more than 10 users?",
    a: "Extra users are ₹99/month each on the Business plan. Message us on WhatsApp for larger teams.",
  },
];
