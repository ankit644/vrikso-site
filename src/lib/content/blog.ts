/** All blog content in one place. Edit copy here, not in JSX.
    Body is structured blocks so the article template stays presentational. */

export type BlogBlock =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "quote"; x: string }
  | { t: "callout"; x: string }
  | { t: "shot"; name: "order" | "invoice" | "aging" | "products" | "dashboard"; cap?: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO yyyy-mm-dd
  readMins: number;
  cover: number; // 0-5 palette selector for BlogCover
  tags: string[];
  body: BlogBlock[];
};

export const BLOG_INDEX = {
  eyebrow: "The Vrikso Journal",
  title: "Field notes for Indian trade.",
  titleAccent: "Run a tighter business.",
  sub: "Practical guides on orders, GST, stock, collections and field sales — written for distributors, wholesalers and retailers, not accountants.",
};

export const POSTS: BlogPost[] = [
  {
    slug: "digitise-distribution-business-2026",
    title: "How to Digitise Your Distribution Business in 2026 (Without Buying a Computer)",
    description:
      "A step-by-step playbook to move your distribution business from paper registers to a phone-first system — orders, billing, stock and collections — in a single day.",
    category: "Playbooks",
    author: "Vrikso Team",
    date: "2026-05-28",
    readMins: 7,
    cover: 0,
    tags: ["distribution", "digitisation", "small business"],
    body: [
      { t: "p", x: "For most distributors, the business already works. Orders come in, goods go out, money comes back. The problem is that it all lives in three places at once: a diary, a desktop in the corner, and the owner's head. The day that memory takes a holiday, the business limps." },
      { t: "p", x: "Digitising does not mean ripping all that out. It means putting one reliable record under it — so every order, invoice and payment is captured the moment it happens, on the phones your team already carries. Here is how to do it in a day." },
      { t: "h2", x: "Step 1 — Load your catalog and your shops" },
      { t: "p", x: "Start with the two lists that never change much: your products (with pack sizes, MRP and GST rate) and your shops (with GSTIN and credit terms). Most teams export these from Excel or their old software; a good app will import them for you." },
      { t: "h2", x: "Step 2 — Put order-taking on the salesman's phone" },
      { t: "p", x: "This is where the day is won or lost. If a salesman can pick a shop, tap products and place an order in 90 seconds — even on a weak network — adoption takes care of itself. If it takes five minutes, he will go back to the diary." },
      { t: "shot", name: "order", cap: "Field order entry — recent shops first, schemes applied automatically." },
      { t: "h2", x: "Step 3 — Let billing and stock follow automatically" },
      { t: "p", x: "The whole point of one system is that you stop typing the same thing twice. When the warehouse marks an order delivered, stock should drop and a GST invoice should generate on its own. No re-keying, no mismatch between the bill and the godown." },
      { t: "h2", x: "Step 4 — Make outstanding visible to everyone who needs it" },
      { t: "p", x: "A live, per-shop ledger turns 'how much does Sharma Store owe?' from a 20-minute hunt into a two-second glance. That single change is usually what pays for the software in the first month." },
      { t: "callout", x: "Rule of thumb: if a step needs a computer, a licence key or an engineer visit, it will slow you down. Pick tools that run in a browser and update themselves." },
      { t: "h2", x: "Step 5 — Go live with one route, then expand" },
      { t: "p", x: "Don't switch the whole company on Monday morning. Run one salesman and one route for a week, fix the small things, then roll out. By the second week the diary quietly disappears — because the app is simply faster." },
      { t: "p", x: "Digitisation done right is invisible. Nobody learns 'software'; they just take orders, deliver goods and collect money the way they always did — only now it is all written down, backed up, and impossible to lose." },
    ],
  },
  {
    slug: "gst-invoicing-guide-for-distributors",
    title: "GST Invoicing for Distributors: A Plain-English Guide",
    description:
      "What a compliant GST invoice must contain, how CGST/SGST and IGST split works, when to issue an e-invoice, and how to stop billing mistakes before they reach your CA.",
    category: "GST & Compliance",
    author: "Vrikso Team",
    date: "2026-05-12",
    readMins: 8,
    cover: 1,
    tags: ["GST", "invoicing", "compliance"],
    body: [
      { t: "p", x: "A GST invoice is not just a bill — it is the document your buyer uses to claim input tax credit, and the record the department checks against your returns. Get the basics right and filing becomes routine. Get them wrong and you spend month-end fixing mismatches." },
      { t: "h2", x: "What every tax invoice must show" },
      { t: "ul", items: [
        "Your name, address and GSTIN",
        "A unique, sequential invoice number and the date",
        "The buyer's name, address and GSTIN (for B2B)",
        "HSN code for each item",
        "Taxable value, tax rate, and the tax amount split by head",
        "Place of supply, especially for inter-state sales",
      ] },
      { t: "h2", x: "CGST/SGST vs IGST — the one rule to remember" },
      { t: "p", x: "If the supply is within your state, the tax splits into CGST and SGST (half each). If it crosses state lines, it becomes a single IGST at the full rate. Your software should decide this automatically from the place of supply — doing it by hand is where errors creep in." },
      { t: "shot", name: "invoice", cap: "A compliant GST invoice generated automatically on delivery." },
      { t: "h2", x: "Schemes, discounts and round-off" },
      { t: "p", x: "Trade schemes and quantity discounts must be shown on the invoice to be valid for GST. A discount given after the sale only reduces tax if it was agreed beforehand and linked to the invoice. Keep scheme logic inside your billing so the taxable value is always correct." },
      { t: "h2", x: "When do you need an e-invoice?" },
      { t: "p", x: "Businesses above the notified turnover threshold must generate e-invoices with an IRN and QR code. Even if you are below it today, build the habit of clean, structured invoices now — crossing the threshold later becomes a non-event instead of a scramble." },
      { t: "callout", x: "The cheapest compliance is the kind that happens automatically. If your invoice is created the moment goods are delivered, there is nothing to forget and nothing to back-date." },
      { t: "h2", x: "Share it where your customer already is" },
      { t: "p", x: "A clean PDF on WhatsApp beats a printout that gets lost. It reaches the shop instantly, sits in the chat as a record, and makes follow-up on payment a single message away." },
    ],
  },
  {
    slug: "cut-outstanding-collect-faster",
    title: "How to Cut Outstanding and Collect Faster from Your Shops",
    description:
      "Outstanding (udhaar) quietly eats a distributor's working capital. Here is a practical system — credit limits, aging buckets and disciplined follow-up — to get your money back sooner.",
    category: "Cash Flow",
    author: "Vrikso Team",
    date: "2026-04-30",
    readMins: 6,
    cover: 2,
    tags: ["collections", "cash flow", "credit"],
    body: [
      { t: "p", x: "Every distributor knows the feeling: the business is 'profitable' on paper, but the bank balance is thin because lakhs are stuck across a hundred shops. The goods left the godown; the money never came back. Fixing this is less about being strict and more about being organised." },
      { t: "h2", x: "1. Know the number, per shop, in real time" },
      { t: "p", x: "You cannot collect what you cannot see. The first win is a live, per-shop ledger: every invoice and every payment, always current. When a salesman walks into a shop, he should already know the exact balance before he asks." },
      { t: "shot", name: "aging", cap: "Aging report — outstanding grouped by 0-30, 31-60, 61-90 and 90+ days." },
      { t: "h2", x: "2. Use aging buckets, not gut feel" },
      { t: "p", x: "Group what is owed into 0-30, 31-60, 61-90 and 90+ day buckets. The 90+ column is your warning light — it is where money turns into a bad debt. Chase those first, every single week." },
      { t: "h2", x: "3. Set credit limits and let the system enforce them" },
      { t: "p", x: "A credit limit only works if it blocks the next order automatically when crossed. A polite 'this shop is over limit' on the salesman's screen prevents the awkward conversation later — and stops good money chasing bad." },
      { t: "h2", x: "4. Make paying easy" },
      { t: "p", x: "Record cash, UPI, cheque or bank against the exact invoice, and send a receipt on WhatsApp. The faster a shopkeeper sees his balance update, the more willing he is to clear it." },
      { t: "callout", x: "A weekly 15-minute review of the aging report does more for cash flow than any discount scheme. Sort by 90+ days, assign each to a salesman, follow up. Repeat." },
    ],
  },
  {
    slug: "field-sales-order-book-to-app",
    title: "From Order Book to App: Modernising Field Sales in a Day",
    description:
      "Your salesmen are your eyes in the market. Here is how to move them from paper order books to a fast mobile app — without slowing them down or losing a single order.",
    category: "Field Sales",
    author: "Vrikso Team",
    date: "2026-04-15",
    readMins: 6,
    cover: 3,
    tags: ["field sales", "salesman app", "orders"],
    body: [
      { t: "p", x: "The order book has survived for decades because it is fast and never crashes. Any app that replaces it has to clear a high bar: it must be quicker than a pen, work without signal, and be learnable in five minutes. Most fail on at least one of these." },
      { t: "h2", x: "Speed is the only feature that matters" },
      { t: "p", x: "A salesman makes 30-40 calls a day. If each order takes two extra minutes, that is over an hour lost — and he will resent the app. The target is 90 seconds per order: pick the shop, tap products, set quantities, place. Recent shops and fast-movers should float to the top automatically." },
      { t: "shot", name: "order", cap: "Tap products, set quantity, place — built to beat a pen." },
      { t: "h2", x: "It has to work on a weak network" },
      { t: "p", x: "Markets have basement shops and dead zones. An app that freezes on 2G is useless. Order-taking should feel instant regardless of signal, syncing quietly when the connection returns." },
      { t: "h2", x: "Give the owner the view, the salesman the beat" },
      { t: "p", x: "Each salesman should see only his own route and shops — less clutter, faster work. The owner sees every route's orders, value and coverage in one place. Now 'how did the market do today?' has an answer by evening, not next week." },
      { t: "h2", x: "Roll out with your best salesman first" },
      { t: "p", x: "Pick the salesman who is respected by the others and put him on the app first. When the team sees their toughest colleague finishing his beat faster, the rest follow without a training session." },
      { t: "callout", x: "Don't digitise the order book. Digitise the order — capture demand at the counter, and let billing, stock and ledgers update themselves from it." },
    ],
  },
  {
    slug: "stock-management-for-wholesalers",
    title: "Stock Management for Wholesalers: Stop Guessing, Start Counting",
    description:
      "Dead stock ties up cash; stock-outs lose sales. A simple, phone-first approach to inventory for wholesalers — reorder points, fast-mover tracking and counts that actually match the godown.",
    category: "Inventory",
    author: "Vrikso Team",
    date: "2026-03-26",
    readMins: 6,
    cover: 4,
    tags: ["inventory", "stock", "wholesale"],
    body: [
      { t: "p", x: "For a wholesaler, stock is cash sitting on a shelf. Too much of the wrong item and your money is frozen; too little of the right one and you turn customers away. The goal is not a perfect warehouse — it is knowing, at any moment, what you actually have." },
      { t: "h2", x: "Make stock update itself" },
      { t: "p", x: "Manual stock registers are wrong within a week. The fix is to tie stock to the transactions you already record: a purchase adds stock, a delivered order subtracts it. When inventory is a by-product of billing, it stays accurate without anyone counting." },
      { t: "shot", name: "products", cap: "Live catalog with stock, pack-size and price for every SKU." },
      { t: "h2", x: "Watch your fast movers and your dead stock" },
      { t: "p", x: "Twenty percent of your SKUs drive most of your turnover. Know them, never run out of them. At the other end, items that haven't moved in 90 days are frozen capital — discount them, return them, or stop reordering them." },
      { t: "h2", x: "Set reorder points, not reorder panic" },
      { t: "p", x: "For each key item, decide the level at which you reorder. A low-stock signal turns purchasing from a last-minute scramble into a calm, planned decision — and stops the 'we're out of the best-seller' phone call from a salesman in the field." },
      { t: "h2", x: "Capture demand you can't yet supply" },
      { t: "p", x: "When a shop asks for something you don't stock, that is market intelligence. Log it on the spot. A running wishlist of unmet demand tells you what to add before a competitor does." },
      { t: "callout", x: "You don't need a barcode scanner and a warehouse team to control stock. You need every order and purchase to touch the same inventory record — automatically." },
    ],
  },
  {
    slug: "choosing-distribution-software-india",
    title: "Choosing Distribution Software in India: 7 Things to Check First",
    description:
      "Before you pay for distribution or billing software, run it through this 7-point checklist — mobile-first, GST-ready, offline-capable, no lock-in — so you buy once and buy right.",
    category: "Buyer's Guide",
    author: "Vrikso Team",
    date: "2026-03-08",
    readMins: 7,
    cover: 5,
    tags: ["software", "buyer's guide", "distribution"],
    body: [
      { t: "p", x: "Most distributors buy software twice: once for the wrong tool, then again for the right one. The wasted year hurts more than the wasted money. This checklist helps you get it right the first time." },
      { t: "h2", x: "1. Does it run on a phone — really?" },
      { t: "p", x: "Your salesmen, warehouse staff and you are mobile. 'Mobile support' that is really a shrunk-down desktop screen will not survive a day in the field. The core actions must be built for a phone first." },
      { t: "h2", x: "2. Is it GST-ready out of the box?" },
      { t: "p", x: "CGST/SGST/IGST handled automatically, HSN on every line, GSTR-1 export in the government format. If GST is an add-on or a manual step, walk away." },
      { t: "h2", x: "3. Does it work on a weak network?" },
      { t: "p", x: "Test it on 2G, not office Wi-Fi. The market is where the work happens, and the market has bad signal." },
      { t: "h2", x: "4. Where does your data live, and can you take it out?" },
      { t: "p", x: "Insist on automatic cloud backups and a one-click export to Excel. Your data is yours; any tool that holds it hostage is a future headache." },
      { t: "h2", x: "5. What is the true cost?" },
      { t: "p", x: "Add up licence fees, per-user charges, AMC, and the engineer visit to install an update. A clear monthly price with everything included almost always wins over a 'cheap' licence with hidden extras." },
      { t: "h2", x: "6. How long to go live?" },
      { t: "p", x: "If onboarding takes weeks, you will never finish it. The best tools load your catalog and shops for you and have you running the same day." },
      { t: "h2", x: "7. Is it in your team's language?" },
      { t: "p", x: "An app your warehouse staff can use in Hindi will be used. One that forces English on everyone will quietly be abandoned." },
      { t: "callout", x: "Score each tool out of 7. Anything that fails on mobile, GST or data-export should be off the list — those three are not negotiable." },
    ],
  },
  {
    slug: "routes-and-beats-planning",
    title: "Routes & Beats: Planning Your Salesmen's Week",
    description:
      "A well-planned beat means more shops covered, fewer wasted kilometres and predictable orders. How to organise routes, assign beats and measure coverage for your field team.",
    category: "Field Sales",
    author: "Vrikso Team",
    date: "2026-02-19",
    readMins: 5,
    cover: 0,
    tags: ["routes", "beats", "field sales"],
    body: [
      { t: "p", x: "A salesman without a fixed beat improvises — and improvisation means missed shops, repeat visits to easy ones, and orders that swing wildly week to week. A beat plan turns the same effort into far more coverage." },
      { t: "h2", x: "Group shops into routes that make geographic sense" },
      { t: "p", x: "Cluster shops by locality so a salesman finishes an area before moving on. Less travel, more selling time, lower fuel. Assign each route a fixed day so shopkeepers learn when to expect their order." },
      { t: "h2", x: "Give each salesman his beat — and only his beat" },
      { t: "p", x: "When the app shows a salesman just today's route, he moves faster and skips fewer shops. You, meanwhile, see every route's coverage and order value side by side." },
      { t: "h2", x: "Measure coverage, not just sales" },
      { t: "ul", items: [
        "How many shops on the beat were actually visited?",
        "How many of those placed an order (the strike rate)?",
        "Which shops haven't ordered in three cycles?",
      ] },
      { t: "p", x: "A shop that stops ordering is a problem you can fix this week — if you can see it. Buried in a diary, it becomes a customer you lost without noticing." },
      { t: "callout", x: "Coverage is a leading indicator; sales is a lagging one. Fix coverage and sales follow." },
    ],
  },
  {
    slug: "signs-desktop-billing-software-holding-you-back",
    title: "5 Signs Your Desktop Billing Software Is Holding You Back",
    description:
      "If your billing still lives on one PC in the corner, it may be costing you more than you think. Five warning signs it's time to move to a cloud, phone-first system.",
    category: "Playbooks",
    author: "Vrikso Team",
    date: "2026-02-04",
    readMins: 5,
    cover: 1,
    tags: ["legacy software", "cloud", "billing"],
    body: [
      { t: "p", x: "Desktop billing software did its job for twenty years. But the business has moved to the phone, and tools chained to a single computer now create as many problems as they solve. Here are the signs you have outgrown yours." },
      { t: "h2", x: "1. Everything stops if that one PC is busy or down" },
      { t: "p", x: "If billing halts because someone else is on the computer — or because it crashed — your business has a single point of failure sitting in the corner." },
      { t: "h2", x: "2. Backups are a thing you have to remember" },
      { t: "p", x: "Manual backups to a pen drive are backups that don't happen. One hard-disk failure and years of ledgers are gone. Cloud means every entry is saved the second it's made." },
      { t: "h2", x: "3. Your salesmen can't use it" },
      { t: "p", x: "Orders dictated over phone calls and typed in later are orders waiting to be entered wrong. If the field can't reach the system, the field isn't really on the system." },
      { t: "h2", x: "4. Updates need an engineer visit" },
      { t: "p", x: "Paying an AMC and waiting for someone to come and install a patch is a tax on staying current. Cloud tools update themselves, overnight, for free." },
      { t: "h2", x: "5. You can't see the business unless you're at that desk" },
      { t: "p", x: "If checking today's sales or outstanding means physically sitting at one machine, you are tied to a chair. The owner should see the whole business from a phone, anywhere." },
      { t: "callout", x: "You don't have to throw away what works. You have to move the record-keeping somewhere that travels with you — and backs itself up." },
    ],
  },
  {
    slug: "gstr1-filing-made-simple",
    title: "GSTR-1 Filing Made Simple for Distributors",
    description:
      "GSTR-1 doesn't have to mean a stressful month-end. Understand what it captures, the common mistakes that cause mismatches, and how to file it straight from your sales data.",
    category: "GST & Compliance",
    author: "Vrikso Team",
    date: "2026-01-22",
    readMins: 6,
    cover: 2,
    tags: ["GSTR-1", "GST", "filing"],
    body: [
      { t: "p", x: "GSTR-1 is simply the statement of your outward supplies — everything you sold in the period. If your sales are recorded cleanly through the month, filing is a download. If they aren't, month-end becomes a reconciliation marathon." },
      { t: "h2", x: "What GSTR-1 actually reports" },
      { t: "ul", items: [
        "B2B invoices, with the buyer's GSTIN",
        "B2C sales, summarised",
        "Credit and debit notes",
        "HSN-wise summary of goods sold",
      ] },
      { t: "h2", x: "Why mismatches happen" },
      { t: "p", x: "Almost every GSTR-1 headache traces back to messy source data: wrong GSTINs, missing HSN codes, invoices edited after the fact, or a tax split done by hand. Fix the invoice and you fix the return." },
      { t: "h2", x: "File from your sales data, not a separate spreadsheet" },
      { t: "p", x: "The cleanest workflow is to export GSTR-1 directly in the government format from the same system that raised the invoices. No re-typing into a template, no copy-paste, no version confusion." },
      { t: "shot", name: "dashboard", cap: "When every invoice is captured cleanly, the return is just an export." },
      { t: "callout", x: "Good filing is a year-round habit, not a month-end event. Clean invoices in, clean return out." },
    ],
  },
  {
    slug: "warehouse-picking-loading-without-chaos",
    title: "Warehouse Picking & Loading Without the Chaos",
    description:
      "Wrong items on the truck, double-counted stock, drivers waiting — most warehouse pain comes from re-typing the same order. Here's how to make picking and loading run themselves.",
    category: "Operations",
    author: "Vrikso Team",
    date: "2026-01-09",
    readMins: 5,
    cover: 3,
    tags: ["warehouse", "operations", "logistics"],
    body: [
      { t: "p", x: "The warehouse is where good order-taking goes to die. The salesman captures a perfect order; someone copies it onto a loading sheet by hand; an item gets missed; the shop gets the wrong delivery. Every manual hop adds an error." },
      { t: "h2", x: "Generate picking lists from the orders themselves" },
      { t: "p", x: "The day's orders already contain everything the warehouse needs. A picking list should build itself from them — consolidated by product, so a picker pulls each item once for all shops." },
      { t: "h2", x: "Loading lists per route, not per guess" },
      { t: "p", x: "Group what goes on each vehicle by route. The loader checks against a list that matches the orders exactly, the driver leaves with a clear manifest, and nobody is recounting cartons at 9am." },
      { t: "h2", x: "Close the loop on delivery" },
      { t: "p", x: "When an order is marked delivered, stock should drop and the invoice should generate automatically. One action, three correct outcomes — no double entry, no end-of-day reconciliation." },
      { t: "callout", x: "Count the number of times one order gets re-typed between the shop and the truck. Every hop you remove is an error you prevent." },
    ],
  },
  {
    slug: "whatsapp-for-distribution-business",
    title: "Using WhatsApp to Send Invoices and Order Updates",
    description:
      "Your shops already live on WhatsApp. Here's how to use it professionally — sharing GST invoices, payment reminders and order confirmations — without it becoming a mess.",
    category: "Playbooks",
    author: "Vrikso Team",
    date: "2025-12-18",
    readMins: 5,
    cover: 4,
    tags: ["WhatsApp", "customer communication", "invoicing"],
    body: [
      { t: "p", x: "Email is for cities and corporates. In Indian trade, the conversation happens on WhatsApp — and that is a gift. Your customers are already there, they read it instantly, and it keeps a record everyone trusts." },
      { t: "h2", x: "Send the invoice where it gets seen" },
      { t: "p", x: "A GST invoice as a clean PDF on WhatsApp beats a printout that ends up under a counter. It arrives the moment goods are delivered, sits in the chat as proof, and makes the payment conversation natural." },
      { t: "h2", x: "Reminders that aren't awkward" },
      { t: "p", x: "A short, polite message with the exact outstanding and a UPI option collects more than an in-person ask. It is on record, it is specific, and it lets the shopkeeper pay on his own time." },
      { t: "h2", x: "Keep it professional" },
      { t: "ul", items: [
        "Send documents, not screenshots of documents",
        "One clear message per purpose — invoice, reminder, confirmation",
        "Always include the shop name and invoice number for reference",
      ] },
      { t: "callout", x: "WhatsApp isn't a replacement for a system of record — it's the delivery channel on top of one. Generate the invoice properly, then share it where it's read." },
    ],
  },
  {
    slug: "kirana-to-distributor-scaling",
    title: "From Kirana to Distributor: Scaling Without Losing Control",
    description:
      "Growing from a single counter to a multi-route distribution business changes everything about how you track orders, stock and money. A practical guide to scaling without chaos.",
    category: "Growth",
    author: "Vrikso Team",
    date: "2025-12-02",
    readMins: 6,
    cover: 5,
    tags: ["growth", "scaling", "retail"],
    body: [
      { t: "p", x: "A single shop runs on the owner's memory. A distribution business cannot. The moment you add salesmen, routes and credit, the informal systems that served you for years start to crack — and the cracks cost money." },
      { t: "h2", x: "What breaks first when you grow" },
      { t: "ul", items: [
        "Outstanding scatters across people and diaries",
        "Stock is never quite what the register says",
        "Orders depend on whoever took them remembering",
        "You can't be in three places, so you lose visibility",
      ] },
      { t: "h2", x: "Put a single record under the business" },
      { t: "p", x: "Scaling is really about replacing memory with a shared record. When every order, invoice and payment lives in one place, you can add people without adding chaos — because the system remembers, not the person." },
      { t: "h2", x: "Delegate with roles, not blind trust" },
      { t: "p", x: "Give each person exactly the access their job needs — a salesman sees his beat, the warehouse sees picking, accounts sees ledgers. You delegate the work while keeping the full picture." },
      { t: "h2", x: "Grow on the same core" },
      { t: "p", x: "The best time to put a system in is before you need it — while the business is small enough to switch easily. Then growth is just more shops and routes on the same rails, not a fresh crisis each time." },
      { t: "callout", x: "Systems feel like overkill at one shop and a lifesaver at ten. Put them in while it's easy." },
    ],
  },
];

/** Posts newest-first. */
export const POSTS_BY_DATE = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

export const CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category)));

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Up to `n` other posts, preferring the same category. */
export function relatedPosts(slug: string, n = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return POSTS_BY_DATE.slice(0, n);
  const sameCat = POSTS_BY_DATE.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = POSTS_BY_DATE.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCat, ...rest].slice(0, n);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[m - 1]} ${y}`;
}
