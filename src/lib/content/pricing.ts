/**
 * Pricing content — the single source of truth for the /pricing page, the home teaser,
 * structured data and llms.txt.
 *
 * The numbers are decided in the CRM repo's docs/PRICING-STRATEGY.md (evidence + rationale).
 * Change them THERE first, then mirror here. One ladder across all verticals:
 * same ₹ everywhere, only the feature bullets and unit swap.
 */

export type CycleKey = "monthly" | "yearly" | "threeYear";
export type PlanKey = "free" | "shop" | "business";
export type VerticalKey = "distribution" | "billing" | "restaurant";

export const CYCLES: { key: CycleKey; label: string; badge?: string }[] = [
  { key: "monthly", label: "Monthly" },
  { key: "yearly", label: "Yearly", badge: "3 months free" },
  { key: "threeYear", label: "3 years", badge: "Best value" },
];

/** What one billing cycle costs, in whole rupees (excl. GST). */
export type PlanPricing = {
  /** Month-to-month via UPI Autopay, cancel anytime. */
  monthly: number;
  /** One payment, covers 12 months. */
  yearly: number;
  /** One payment, covers 36 months. */
  threeYear: number;
};

export type Plan = {
  key: PlanKey;
  name: string;
  pitch: string;
  /** null = free plan. */
  prices: PlanPricing | null;
  cta: string;
  featured: boolean;
};

export const PLANS: Plan[] = [
  {
    key: "free",
    name: "Free",
    pitch: "Try Vrikso properly, for as long as you like.",
    prices: null,
    cta: "Start free",
    featured: false,
  },
  {
    key: "shop",
    name: "Shop",
    pitch: "For a single retail or wholesale counter.",
    prices: { monthly: 349, yearly: 2999, threeYear: 5999 },
    cta: "Start free",
    featured: false,
  },
  {
    key: "business",
    name: "Business",
    pitch: "For distributors & wholesalers with a team.",
    prices: { monthly: 999, yearly: 8999, threeYear: 17999 },
    cta: "Start free",
    featured: true,
  },
];

/** Extra users beyond the Business plan's 10. */
export const EXTRA_USER = { monthly: 119, yearly: 999 };

/** One line in a plan card. `out: true` renders it as honestly-not-included. */
export type FeatureItem = { text: string; out?: boolean };

/** Plan cards list features under short headings rather than one long run of ticks. */
export type FeatureGroup = { label: string; items: FeatureItem[] };

/** A cell in the detailed comparison: true = included, false = not included, string = detail ("3", "Soon"…). */
export type ComparisonValue = boolean | string;

export type ComparisonGroup = {
  title: string;
  rows: { label: string; free: ComparisonValue; shop: ComparisonValue; business: ComparisonValue }[];
};

export type PricingVertical = {
  key: VerticalKey;
  label: string;
  /** Short note shown under the toggle when this vertical is active. */
  note?: string;
  /** One line under each plan name, in this trade's own words. */
  pitches: Record<PlanKey, string>;
  /** Feature groups per plan — the only thing that changes between verticals. */
  features: Record<PlanKey, FeatureGroup[]>;
  /** Detailed what's-in / what's-not matrix, grouped by theme. */
  comparison: ComparisonGroup[];
  /** One honest competitor comparison line, shown under the cards. */
  compare: string;
};

export const PRICING_VERTICALS: PricingVertical[] = [
  {
    key: "distribution",
    label: "Distribution",
    pitches: {
      free: "Try Vrikso properly, for as long as you like.",
      shop: "For a single counter — retail or wholesale.",
      business: "For distributors & wholesalers with a team.",
    },
    features: {
      free: [
        {
          label: "What you get",
          items: [
            { text: "1 user" },
            { text: "200 orders a month" },
            { text: "GST invoices with Vrikso branding" },
            { text: "Stock, payments & outstanding" },
            { text: "WhatsApp sharing & support" },
          ],
        },
        {
          label: "Not on Free",
          items: [
            { text: "Your own branding on invoices", out: true },
            { text: "Full reports & GSTR-1 export", out: true },
            { text: "Routes, beats & offline orders", out: true },
          ],
        },
      ],
      shop: [
        {
          label: "Everything in Free, plus",
          items: [
            { text: "3 users" },
            { text: "Unlimited orders & invoices" },
            { text: "Your name on invoices, not ours" },
            { text: "Bulk invoice printing" },
            { text: "Payment reminders on WhatsApp + UPI" },
            { text: "Aging report & every sales report" },
          ],
        },
        {
          label: "Not on Shop",
          items: [
            { text: "Routes, beats & offline orders", out: true },
            { text: "Warehouse picking & loading lists", out: true },
            { text: "GSTR-1 export & multiple companies", out: true },
          ],
        },
      ],
      business: [
        {
          label: "Everything in Shop, plus",
          items: [
            { text: "10 users — salesmen, godown, counter" },
            { text: "Routes & beats, orders work offline" },
            { text: "Warehouse picking & loading lists" },
            { text: "Sub-distributors & scheme discounts" },
            { text: "GSTR-1 export & multiple companies" },
            { text: "Priority WhatsApp support" },
          ],
        },
      ],
    },
    comparison: [
      {
        title: "Team & platform",
        rows: [
          { label: "Users", free: "1", shop: "3", business: "10 +" },
          { label: "Android, iPhone & computer", free: true, shop: true, business: true },
          { label: "English & हिन्दी", free: true, shop: true, business: true },
          { label: "Daily cloud backups", free: true, shop: true, business: true },
        ],
      },
      {
        title: "Orders & field sales",
        rows: [
          { label: "Orders", free: "200/mo", shop: "Unltd", business: "Unltd" },
          { label: "Order taking on the phone", free: true, shop: true, business: true },
          { label: "Routes & salesman beats", free: false, shop: false, business: true },
          { label: "Orders work offline (no internet)", free: false, shop: false, business: true },
          { label: "Sub-distributor logins", free: false, shop: false, business: true },
          { label: "Scheme / per-item discounts", free: false, shop: false, business: true },
        ],
      },
      {
        title: "Billing & GST",
        rows: [
          { label: "GST invoices", free: "Vrikso", shop: "Yours", business: "Yours" },
          { label: "WhatsApp invoice sharing", free: true, shop: true, business: true },
          { label: "Bulk invoice printing", free: false, shop: true, business: true },
          { label: "GSTR-1 export", free: false, shop: false, business: true },
          { label: "e-invoice & e-way bill", free: false, shop: false, business: "Soon" },
        ],
      },
      {
        title: "Stock & warehouse",
        rows: [
          { label: "Stock tracking & purchase entry", free: true, shop: true, business: true },
          { label: "Warehouse picking & loading lists", free: false, shop: false, business: true },
        ],
      },
      {
        title: "Payments & collections",
        rows: [
          { label: "Payments, ledger & outstanding", free: true, shop: true, business: true },
          { label: "WhatsApp payment reminders + UPI", free: false, shop: true, business: true },
          { label: "Aging report (0–30 / 31–60 / 60+)", free: false, shop: true, business: true },
        ],
      },
      {
        title: "Reports & support",
        rows: [
          { label: "Daily sales summary", free: true, shop: true, business: true },
          { label: "All reports (sales, salesman, route, item)", free: false, shop: true, business: true },
          { label: "Multiple companies", free: false, shop: false, business: true },
          { label: "WhatsApp support", free: true, shop: true, business: "Priority" },
        ],
      },
    ],
    compare:
      "Compare: Marg ERP + its eOrder app costs ₹20,000+ in year one via a dealer, on a Windows PC. Vrikso Business: ₹8,999 a year, everything included, on the phones you already own.",
  },
  {
    key: "billing",
    label: "Billing",
    pitches: {
      free: "Unlimited GST invoices, free for good.",
      shop: "For one shop that bills every single day.",
      business: "For back offices and more than one GSTIN.",
    },
    features: {
      free: [
        {
          label: "What you get",
          items: [
            { text: "1 user" },
            { text: "Unlimited GST invoices" },
            { text: "Vrikso branding on invoices" },
            { text: "Payments, ledger & outstanding" },
            { text: "Android, iPhone & computer" },
          ],
        },
        {
          label: "Not on Free",
          items: [
            { text: "Your own branding on invoices", out: true },
            { text: "Estimates, quotations & bulk printing", out: true },
            { text: "GSTR-1 export & full reports", out: true },
          ],
        },
      ],
      shop: [
        {
          label: "Everything in Free, plus",
          items: [
            { text: "3 users" },
            { text: "Your branding on invoices, not ours" },
            { text: "Estimates & quotations" },
            { text: "GSTR-1 export & HSN summary" },
            { text: "Payment reminders on WhatsApp + UPI" },
            { text: "Statements, aging & every report" },
          ],
        },
        {
          label: "Not on Shop",
          items: [
            { text: "Stock & inventory tracking", out: true },
            { text: "Multiple companies / GSTINs", out: true },
            { text: "Tally-friendly exports", out: true },
          ],
        },
      ],
      business: [
        {
          label: "Everything in Shop, plus",
          items: [
            { text: "10 users across counter & back office" },
            { text: "Multiple companies / GSTINs" },
            { text: "Stock & inventory tracking" },
            { text: "Tally-friendly exports" },
            { text: "e-invoice & e-way bill (rolling out)" },
            { text: "Priority WhatsApp support" },
          ],
        },
      ],
    },
    comparison: [
      {
        title: "Team & platform",
        rows: [
          { label: "Users", free: "1", shop: "3", business: "10 +" },
          { label: "Android, iPhone & computer", free: true, shop: true, business: true },
          { label: "English & हिन्दी", free: true, shop: true, business: true },
          { label: "Daily cloud backups", free: true, shop: true, business: true },
        ],
      },
      {
        title: "Invoicing",
        rows: [
          { label: "GST invoices", free: "Unltd", shop: "Unltd", business: "Unltd" },
          { label: "Invoice branding", free: "Vrikso", shop: "Yours", business: "Yours" },
          { label: "Estimates & quotations", free: false, shop: true, business: true },
          { label: "WhatsApp invoice sharing", free: true, shop: true, business: true },
          { label: "Bulk invoice printing", free: false, shop: true, business: true },
        ],
      },
      {
        title: "GST & compliance",
        rows: [
          { label: "GSTR-1 export", free: false, shop: true, business: true },
          { label: "HSN-wise summary", free: false, shop: true, business: true },
          { label: "e-invoice & e-way bill", free: false, shop: false, business: "Soon" },
          { label: "Multiple GSTINs / companies", free: false, shop: false, business: true },
        ],
      },
      {
        title: "Payments & customers",
        rows: [
          { label: "Payments, ledger & outstanding", free: true, shop: true, business: true },
          { label: "WhatsApp payment reminders + UPI", free: false, shop: true, business: true },
          { label: "Customer statements & aging", free: false, shop: true, business: true },
        ],
      },
      {
        title: "Stock, reports & support",
        rows: [
          { label: "Stock & inventory tracking", free: false, shop: false, business: true },
          { label: "All sales & item reports", free: false, shop: true, business: true },
          { label: "Tally-friendly exports", free: false, shop: false, business: true },
          { label: "WhatsApp support", free: true, shop: true, business: "Priority" },
        ],
      },
    ],
    compare:
      "Compare: Swipe charges ₹7,499 per user per year on its e-invoice plan; myBillBook locks its web and iPhone apps behind the top tier. Vrikso Business: ₹8,999 for the whole business, every platform included.",
  },
  {
    key: "restaurant",
    label: "Restaurant",
    note: "Business plan is per outlet.",
    pitches: {
      free: "Try it on tonight's counter rush.",
      shop: "For one café, dhaba or takeaway counter.",
      business: "For a full floor — tables, kitchen & delivery.",
    },
    features: {
      free: [
        {
          label: "What you get",
          items: [
            { text: "1 user" },
            { text: "Counter billing & GST bills" },
            { text: "Menu management" },
            { text: "Customer khata (credit)" },
            { text: "Runs on the phone you already have" },
          ],
        },
        {
          label: "Not on Free",
          items: [
            { text: "Your own branding on bills", out: true },
            { text: "Day book & sales reports", out: true },
            { text: "Tables, KOTs & kitchen board", out: true },
          ],
        },
      ],
      shop: [
        {
          label: "Everything in Free, plus",
          items: [
            { text: "3 users" },
            { text: "Your branding on bills, not ours" },
            { text: "Day book & cash summary" },
            { text: "Sales & item reports" },
          ],
        },
        {
          label: "Not on Shop",
          items: [
            { text: "Tables, KOTs & kitchen board", out: true },
            { text: "Dine-in, takeaway & delivery orders", out: true },
            { text: "Multi-outlet reports", out: true },
          ],
        },
      ],
      business: [
        {
          label: "Everything in Shop, plus",
          items: [
            { text: "10 users — waiters, kitchen, counter" },
            { text: "Tables, KOTs & kitchen board" },
            { text: "Dine-in, takeaway, delivery & aggregator" },
            { text: "Per-outlet reports" },
            { text: "Priority WhatsApp support" },
          ],
        },
      ],
    },
    comparison: [
      {
        title: "Team & platform",
        rows: [
          { label: "Users", free: "1", shop: "3", business: "10 +" },
          { label: "Android, iPhone & computer", free: true, shop: true, business: true },
          { label: "English & हिन्दी", free: true, shop: true, business: true },
          { label: "Daily cloud backups", free: true, shop: true, business: true },
        ],
      },
      {
        title: "Billing & counter",
        rows: [
          { label: "Counter billing & GST bills", free: true, shop: true, business: true },
          { label: "Bill branding", free: "Vrikso", shop: "Yours", business: "Yours" },
          { label: "Menu management", free: true, shop: true, business: true },
          { label: "Customer khata (credit)", free: true, shop: true, business: true },
          { label: "Day book & cash summary", free: false, shop: true, business: true },
        ],
      },
      {
        title: "Floor & kitchen",
        rows: [
          { label: "Tables & floor view", free: false, shop: false, business: true },
          { label: "KOTs & kitchen board", free: false, shop: false, business: true },
          { label: "Dine-in, takeaway, delivery & aggregator", free: false, shop: false, business: true },
        ],
      },
      {
        title: "Reports & support",
        rows: [
          { label: "Sales & item reports", free: false, shop: true, business: true },
          { label: "Multi-outlet reports", free: false, shop: false, business: true },
          { label: "WhatsApp support", free: true, shop: true, business: "Priority" },
        ],
      },
    ],
    compare:
      "Compare: typical restaurant POS packages start around ₹10,000 a year plus setup and per-module charges. Vrikso Business: ₹8,999 all-in, ₹0 setup.",
  },
];

/** The three promises that sit under the plan cards — every plan, every price. */
export const PRICING_PROMISES: { icon: "rupee" | "devices" | "exit"; title: string; body: string }[] = [
  {
    icon: "rupee",
    title: "The price is the price",
    body: "₹0 setup fee. Hosting, daily backups and every new feature are already in it. No licence fee, no AMC, no dealer visit to pay for.",
  },
  {
    icon: "devices",
    title: "Runs on what you own",
    body: "Android, iPhone and computer — all included, in English and हिन्दी. Nothing to install on a PC, nothing to keep running.",
  },
  {
    icon: "exit",
    title: "Leave whenever you like",
    body: "Cancel any time and take your data with you to Excel. We would rather earn next month than lock you into it.",
  },
];

export const PRICING_FAQS = [
  {
    q: "Monthly or yearly — which should I pick?",
    a: "Monthly (₹349 Shop / ₹999 Business) is full-featured and cancel-anytime — perfect for trying with real work. Yearly is one payment of ₹2,999 or ₹8,999 and works out ~25% cheaper, like getting 3 months free. The 3-year plan is one payment at roughly 2× the yearly price — 36 months for the cost of 24.",
  },
  {
    q: "What does Business really cost per day?",
    a: "On the yearly plan, ₹8,999 ÷ 365 ≈ ₹25 a day — less than two cups of chai, for the system running your whole business: orders, billing, stock, payments and reports.",
  },
  {
    q: "Any setup fee, licence fee or AMC?",
    a: "No, none. The price is everything: hosting, backups, updates and support included. Compare that to desktop software at ₹12,000–25,000 up front plus a yearly AMC and dealer visits.",
  },
  {
    q: "Why is the price the same for Distribution, Billing and Restaurant?",
    a: "Because it's one platform. You pick the product that fits your business; the plan and price stay the same simple card. For restaurants, the Business plan is per outlet.",
  },
  {
    q: "Need more than 10 users?",
    a: "Extra users are ₹999/year (or ₹119/month) each on the Business plan. Message us on WhatsApp for larger teams.",
  },
  {
    q: "Can I change plans or cancel?",
    a: "Anytime. Upgrade when the team grows, switch monthly → yearly and we credit your unused days, downgrade or cancel whenever — and your data is always exportable to Excel.",
  },
];
