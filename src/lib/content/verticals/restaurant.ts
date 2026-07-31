import type { VerticalContent } from "@/components/vertical-page";
import shotOrder from "../../../../public/app/restaurant/m-order.webp";
import shotTables from "../../../../public/app/restaurant/m-tables.webp";
import shotKitchen from "../../../../public/app/restaurant/m-kitchen.webp";
import shotTickets from "../../../../public/app/restaurant/m-tickets.webp";
import shotDashboardD from "../../../../public/app/restaurant/d-dashboard.webp";

/** Vrikso Restaurant — POS, KOTs, tables and billing for eateries. */
export const RESTAURANT: VerticalContent = {
  slug: "restaurant",
  metaTitle: "Vrikso Restaurant — POS, KOT & billing software for restaurants",
  metaDescription:
    "Tables, KOTs, kitchen board, menu, Zomato/Swiggy orders, GST bills and khata — a complete restaurant POS that runs on the phones your staff already carry.",

  hero: {
    eyebrow: "Vrikso Restaurant · Live now",
    title: "Run the floor, the kitchen",
    titleAccent: "and the bills — one app.",
    sub: "Waiters punch orders at the table, KOTs land on the kitchen board, bills settle in a tap cash, UPI, split or khata. Dine-in, takeaway, delivery and Zomato/Swiggy, together.",
  },

  heroShots: [
    { src: shotOrder, alt: "Taking a table order in Vrikso Restaurant" },
    { src: shotKitchen, alt: "The kitchen KOT board" },
  ],

  waMessage: "Hi! I run a restaurant and want a demo of Vrikso Restaurant.",

  stats: [
    { k: "0 shouts", v: "to the kitchen KOTs go themselves" },
    { k: "1 tap", v: "to bill & settle a table" },
    { k: "4", v: "order types dine-in, takeaway, delivery, aggregator" },
    { k: "2", v: "languages English & हिन्दी" },
  ],

  featuresHeading: "Everything between the first guest and the last bill.",
  features: [
    {
      icon: "tables",
      h: "Tables at a glance",
      p: "Your whole floor main hall, garden, family room as live cards. Free or busy, items on the ticket, tap a table to take its order.",
    },
    {
      icon: "order",
      h: "Orders in seconds",
      p: "Tap dishes from the menu grid, mark half/full portions, send the KOT. Recent items first, veg badges, search when the menu is long.",
    },
    {
      icon: "kitchen",
      h: "KOTs on a kitchen board",
      p: "Every fired round appears on the kitchen display, oldest first with a separate board for the bar. One tap marks it served.",
    },
    {
      icon: "invoice",
      h: "Bills that settle themselves",
      p: "GST computed on every bill, service charge optional. Settle by cash, UPI, card, bank or split payment and print or share the bill.",
    },
    {
      icon: "route",
      h: "Zomato & Swiggy in the same flow",
      p: "Aggregator orders ride the same tickets with their order ID and commission tracked so platform sales stop being a separate register.",
    },
    {
      icon: "customers",
      h: "Khata for your regulars",
      p: "The office group that pays monthly? Put their bills on khata, see each customer's outstanding, settle when they do.",
    },
    {
      icon: "menu",
      h: "Menu you control live",
      p: "Categories, half/full variants, veg marks, kitchen or bar station and an out-of-stock toggle when the dal runs out mid-service.",
    },
    {
      icon: "warehouse",
      h: "Ingredient inventory",
      p: "Recipes link dishes to ingredients so every order draws down stock. Low-stock alerts and a wastage log keep the store honest.",
    },
    {
      icon: "qr",
      h: "QR menus on every table",
      p: "Print a QR code per table guests scan and browse the live menu with photos, prices and veg marks. No reprints when prices change.",
    },
  ],

  screens: {
    label: "See the real app",
    title: "Not mockups.",
    titleAccent: "A real service, mid-rush.",
    p: "These are actual screens from Vrikso Restaurant the same app your waiter, your kitchen and your cashier will use tonight.",
    dashboard: shotDashboardD,
    dashboardAlt: "The Vrikso Restaurant dashboard on a laptop",
    dashboardCap:
      "Tonight at a glance. Sales, open tickets, tables busy and every recent bill live on any laptop or phone at the counter.",
    shots: [
      { img: shotOrder, cap: "Take the order", sub: "Tap dishes, send the KOT." },
      { img: shotTables, cap: "The floor", sub: "Every table, free or busy, live." },
      { img: shotKitchen, cap: "Kitchen board", sub: "Fired KOTs, oldest first." },
      { img: shotTickets, cap: "Tickets & bills", sub: "Open and settled, all day long." },
    ],
  },

  workflow: {
    label: "How a service runs",
    title: "From “table for four” to a settled bill.",
    steps: [
      { h: "Seat & punch the order", p: "Tap the table, tap the dishes, send. The KOT reaches the kitchen board before the waiter leaves the table." },
      { h: "Kitchen cooks the queue", p: "KOTs stack oldest-first, kitchen and bar on separate boards. Done means served no lost slips, no shouting." },
      { h: "Add rounds as they come", p: "Second helpings and desserts fire as new KOT rounds on the same ticket. The bill builds itself." },
      { h: "Bill, settle, next table", p: "GST and service charge computed. Cash, UPI, split or khata the table frees up the second you settle." },
    ],
  },

  audience: {
    label: "Built for food businesses",
    title: "From a 6-table café to a family restaurant.",
    items: [
      { h: "Family restaurants", p: "Dine-in floors with areas, waiters and KOT rounds where table turns decide the night." },
      { h: "Cafés & QSRs", p: "Fast counter billing, takeaway tickets and a menu that changes with the season." },
      { h: "Cloud kitchens", p: "Zomato/Swiggy order flow with commissions tracked and ingredient stock that depletes per order." },
      { h: "Dhabas & canteens", p: "Khata for regulars, simple daily totals and billing that works on one phone." },
    ],
  },

  outcomes: {
    label: "Why restaurants switch",
    title: "What changes on your first Friday night.",
    items: [
      { stat: "0", h: "Lost or misread KOTs", p: "Every order reaches the kitchen as a clean digital ticket, timed and in order. The runner stops running slips." },
      { stat: "Live", h: "Tonight's number, always", p: "Sales, open tables and settled bills update as they happen you know the night's total before closing." },
      { stat: "1 app", h: "Dine-in + Zomato + khata", p: "Every rupee dine-in, takeaway, aggregator or credit lands in one system, not three registers." },
    ],
  },

  faqs: [
    {
      q: "Do I need special POS hardware or a KOT printer?",
      a: "No. Vrikso runs in the browser on the phones and tablets your team already has. The kitchen board replaces printed KOTs put any old tablet or phone in the kitchen. Printing bills works with any regular printer.",
    },
    {
      q: "Can waiters take orders at the table?",
      a: "Yes that's the whole point. Each waiter uses his own phone, taps the table and the dishes, and the KOT fires to the kitchen instantly.",
    },
    {
      q: "How do Zomato and Swiggy orders work?",
      a: "Punch them as aggregator tickets with the platform's order ID. Commission percentage is tracked per order, so you see platform sales and what they actually net you.",
    },
    {
      q: "Does it handle GST on restaurant bills?",
      a: "Yes GST is computed on every bill with your scheme (regular or composition) respected, service charge is optional per ticket, and your GSTIN and details appear on the printed bill.",
    },
    {
      q: "Can I run a khata (credit) for regular customers?",
      a: "Yes. Settle any bill to a named customer's khata and their outstanding accumulates until they pay perfect for office groups and monthly regulars.",
    },
    {
      q: "What happens when a dish runs out mid-service?",
      a: "Toggle it out of stock in the menu it greys out on every order screen instantly, and the QR menu guests see updates too.",
    },
    {
      q: "Will it work in Hindi?",
      a: "Yes every screen switches between English and हिन्दी, so each waiter and the kitchen use whichever is faster for them.",
    },
  ],

  finalCta: {
    title: "Ready before tonight's dinner rush.",
    p: "Send us your menu on WhatsApp we'll load it, set your tables, and your first KOT fires tonight.",
  },
};
