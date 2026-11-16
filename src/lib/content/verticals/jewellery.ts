import type { VerticalContent } from "@/components/vertical-page";
import shotSale from "../../../../public/app/jewellery/m-sale.webp";
import shotTags from "../../../../public/app/jewellery/m-tags.webp";
import shotRates from "../../../../public/app/jewellery/m-rates.webp";
import shotSchemes from "../../../../public/app/jewellery/m-schemes.webp";
import shotDashboardD from "../../../../public/app/jewellery/d-dashboard.webp";

/**
 * Vrikso Jewellery — the fourth product line.
 *
 * Screens captured from the "Shree Test Jewellers" demo tenant
 * (scripts/seed-jewellery-demo.ts in the CRM repo). Re-seed and re-capture
 * when the screens change; never borrow another vertical's screenshots.
 */
export const JEWELLERY: VerticalContent = {
  slug: "jewellery-software",
  metaTitle: "Jewellery Software — Tags, HUID, Old Gold, Girvi & Schemes",
  metaDescription:
    "Cloud jewellery software for Indian showrooms: tag every piece with HUID and weight, set the day's rate once, bill with making and wastage calculated, take old gold on exchange, and run schemes, girvi and karigar work in one system. Free plan to start.",

  hero: {
    eyebrow: "Vrikso Jewellery · Live now",
    title: "Jewellery software",
    titleAccent: "that speaks your counter's language.",
    sub: "Tags with HUID and net weight, today's rate set once, making and wastage applied automatically, old gold tested and credited on the same bill — plus schemes, girvi and karigar work in the same system.",
  },

  heroShots: [
    { src: shotSale, alt: "Billing a gold necklace in Vrikso — rate, wastage and making calculated" },
    { src: shotTags, alt: "The tag register, with HUID and weight on every piece" },
  ],

  waMessage: "Hi! I run a jewellery business and want a demo of Vrikso Jewellery.",

  stats: [
    { k: "22K", v: "rates by purity, set once a day" },
    { k: "HUID", v: "captured per piece, with the tag" },
    { k: "₹0", v: "to start — published pricing, no dealer" },
    { k: "2", v: "languages English & हिन्दी" },
  ],

  features: [
    {
      icon: "qr",
      h: "Tag every piece, scan at the counter",
      p: "Tag code with a QR, gross, net and stone weight, purity and touch, HUID for hallmarked pieces, making charge per gram, flat or percentage, and wastage. Print labels and import your existing stock in bulk.",
    },
    {
      icon: "reports",
      h: "Today's rate, set once",
      p: "Enter the board rate per purity each morning — gold and platinum per 10 grams, silver per kilo — and every bill, estimate and old-gold valuation uses it. No rate typed twice, no rate forgotten.",
    },
    {
      icon: "invoice",
      h: "Billing that does the gold maths",
      p: "Pick a tag and the bill builds itself: metal value on net weight at today's rate, making by your chosen method, wastage, stone charges, GST and round-off. Print it or send the PDF on WhatsApp.",
    },
    {
      icon: "warehouse",
      h: "Old gold, tested and credited",
      p: "Record gross weight and tested touch, and the fine weight and credit calculate themselves at the rate you offer. The customer's ownership declaration and PAN are captured with it, so the metal register stands up.",
    },
    {
      icon: "recurring",
      h: "Savings schemes that run themselves",
      p: "Your own monthly plan — eleven instalments and your bonus month — tracked per customer with the maturity date promised up front, and redeemed straight against a sale when it matures.",
    },
    {
      icon: "payments",
      h: "Girvi, properly recorded",
      p: "Pledge loans against a named, KYC'd customer: numbered loan, pledged items listed, simple interest per started month at your rate, part payments recorded, and a clean record of what was released or waived.",
    },
    {
      icon: "customers",
      h: "Karigar work you can account for",
      p: "Issue metal to your karigar, record what comes back, and keep the running account straight — so job work stops living in a notebook and a memory.",
    },
    {
      icon: "docs",
      h: "Repairs and customer history",
      p: "Log repair jobs against the customer who brought them in, and keep every purchase, exchange, scheme and pledge on one customer record you can pull up at the counter.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not screenshots from a brochure.",
    titleAccent: "The actual app.",
    p: "These are the live Vrikso Jewellery screens — the same ones your counter works from and you open at night to see where the day landed.",
    dashboard: shotDashboardD,
    dashboardAlt: "The Vrikso Jewellery dashboard on a laptop, showing today's rates and recent sales",
    dashboardCap:
      "Your control room. Today's rate board by purity, stock in pieces, the day book and recent sales — live, on any laptop or phone.",
    shots: [
      { img: shotSale, cap: "Bill a piece", sub: "Scan the tag; metal, making and wastage calculate." },
      { img: shotTags, cap: "Tag register", sub: "Every piece with weight, purity and HUID." },
      { img: shotRates, cap: "Rate board", sub: "Set the day's rates once, per purity." },
      { img: shotSchemes, cap: "Savings schemes", sub: "Instalments paid, matured and ready to redeem." },
    ],
  },

  workflow: {
    label: "How a counter day runs",
    title: "One unbroken flow — rate to receipt.",
    steps: [
      { h: "Set the morning rate", p: "One entry per purity. Every valuation, estimate and bill for the day uses it, so nobody is working off yesterday's board." },
      { h: "Scan the tag", p: "The piece's net weight, purity, making method and HUID come with it. No weighing twice, no reading a tag out loud across the counter." },
      { h: "Take the old gold", p: "Gross weight and tested touch in; fine weight, credit and the customer's declaration recorded against the same sale." },
      { h: "Bill and settle", p: "Metal, making, wastage, stones, GST and old-gold credit net off on one invoice. Scheme maturity applies here too, if the customer is redeeming." },
    ],
  },

  audience: {
    label: "Built for your counter",
    title: "Made for the Indian jewellery trade.",
    items: [
      { h: "Retail showrooms", p: "Tagged stock, daily rates, hallmarking details and billing that handles making and wastage without a calculator." },
      { h: "Family jewellers", p: "Schemes, girvi and repairs — the parts of the business that usually live in registers — on the same system as billing." },
      { h: "Silver and imitation counters", p: "Silver quoted per kilo, weight-based billing, and stock tagged the same way as gold." },
      { h: "Shops with karigar work", p: "Metal issued and received tracked as an account rather than an argument." },
    ],
  },

  outcomes: {
    label: "Why jewellers switch",
    title: "What changes once you're on Vrikso.",
    items: [
      { stat: "One", h: "Rate, everywhere", p: "Set each morning and used by every bill, estimate and old-gold valuation — the commonest source of counter disputes, removed." },
      { stat: "Per piece", h: "Stock you can actually trace", p: "Tag code, weights, purity and HUID on every item, so what is in the showcase and what is in the system agree." },
      { stat: "No PC", h: "Nothing to install or maintain", p: "No Windows machine, no licence, no AMC engineer. It runs in the browser on the devices you already have." },
    ],
  },

  faqs: [
    {
      q: "Which software is best for a jewellery shop in India?",
      a: "A jewellery shop needs things general billing software does not have: per-piece tags with gross, net and stone weight, purity and touch, daily metal rates by purity, making charges by gram, flat or percentage, wastage, HUID capture for hallmarked pieces, and old-gold exchange on the same bill. Vrikso is built around exactly that, and adds schemes, girvi and karigar accounts, with pricing published openly and a free plan to start.",
    },
    {
      q: "Does it handle HUID and hallmarking details?",
      a: "Yes. Each tag can carry its six-character HUID along with purity, touch percentage and a hallmarked flag, so the hallmarking detail stays attached to the specific piece rather than being looked up separately at billing time.",
    },
    {
      q: "How does old gold exchange work in the software?",
      a: "You record the gross weight and the tested touch, and the system calculates fine weight and the credit at the old-gold rate you offer, which jewellers typically set a few percent below the board rate. The customer's ownership declaration and PAN can be captured with the intake, and the credit nets off against the sale on the same invoice.",
    },
    {
      q: "Can it run my monthly savings scheme?",
      a: "Yes. Schemes are set up per named customer with your monthly amount, the number of instalments and your bonus month, and the maturity date is recorded at the start so the customer knows the redemption date. At maturity the scheme is applied directly against a sale.",
    },
    {
      q: "Does it track girvi (gold loan) against pledged items?",
      a: "Yes. Each pledge is a numbered loan against a named customer, with the pledged items listed, simple interest calculated per started month at your rate — the way the trade actually charges it — and part payments recorded against the loan until it is released.",
    },
    {
      q: "Can I import my existing tagged stock?",
      a: "Yes, tags can be imported in bulk rather than keyed one at a time, and labels can be printed from the system. We help with the first import as part of setup.",
    },
    {
      q: "What does it cost?",
      a: "Published pricing, no dealer quotes: Free (₹0 — 1 user, 200 orders/month), Shop (₹2,999/year) and Business (₹8,999/year for 10 users, ₹999 per extra user), with monthly plans available. No installation, training or AMC charges.",
    },
  ],

  finalCta: {
    title: "Your tags and rates, set up for you — today.",
    p: "Send us your stock list on WhatsApp and we'll set up your account with tags, purities and today's rates ready to bill.",
  },
};
