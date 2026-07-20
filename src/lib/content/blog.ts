/** All blog content in one place. Edit copy here, not in JSX.
    Body is structured blocks so the article template stays presentational. */

export type BlogBlock =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "quote"; x: string }
  | { t: "callout"; x: string }
  | { t: "image"; src: string; cap?: string }
  | { t: "shot"; name: "order" | "invoice" | "aging" | "products" | "dashboard"; cap?: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO yyyy-mm-dd
  readMins: number;
  cover: number; // 0-5 palette selector for the SVG fallback cover
  image?: string; // optional real cover image under /public (overrides the SVG)
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
    slug: "restaurant-pos-software-india-buyers-guide",
    title: "Restaurant POS Software in India: The 2026 Buyer's Guide",
    description:
      "Before you pay for a restaurant POS, run it through this 7-point checklist — KOTs, tables, Zomato/Swiggy orders, GST bills and offline mode. Buy the one built for an Indian kitchen, not a foreign demo.",
    category: "Buyer's Guide",
    author: "Vrikso Team",
    date: "2026-07-18",
    readMins: 8,
    cover: 0,
    image: "/post-restaurant-pos.png",
    tags: ["restaurant POS", "buyer's guide", "restaurant software"],
    body: [
      { t: "p", x: "Most restaurant owners choose a POS the way they choose a supplier at a trade fair — on a smooth demo and a good price. Then the first Saturday dinner rush arrives, the kitchen misses three tickets, a table waits twenty minutes for its bill, and the 'smart' system becomes the thing everyone works around. The demo is calm. Your restaurant is not." },
      { t: "p", x: "A restaurant POS is not billing software with a food menu bolted on. It has to run the floor, the kitchen and the cash counter at the same time, on a busy night, on the phones your staff already carry. Here is the checklist to judge one before you sign anything." },
      { t: "h2", x: "Judge it against your busiest 30 minutes" },
      { t: "p", x: "Any POS looks good when one waiter places one order in a quiet showroom. The real test is peak service: ten tables turning, two waiters punching orders, the kitchen firing continuously, and three bills being settled by cash, UPI and card at once. Every question below is really asking the same thing — will it hold up then?" },
      { t: "h2", x: "1. Do the floor, the kitchen and the bill actually talk to each other?" },
      { t: "p", x: "This is the whole game. When a waiter punches an order, the kitchen should see it instantly as a KOT — no shouting, no paper chits, no walking to the pass. When the food is served and the guest asks for the bill, it should already reflect exactly what was ordered, including that extra portion added mid-meal. If order-taking, the kitchen board and billing are three separate steps someone re-enters, you have bought three problems, not one solution." },
      { t: "image", src: "/app/restaurant/d-dashboard.png", cap: "One system for the floor, the kitchen and the counter — orders, KOTs and bills from the same source." },
      { t: "h2", x: "2. Can a waiter punch an order in seconds — on a phone?" },
      { t: "p", x: "Your waiters are not typists. If placing an order means squinting at a tiny screen and hunting through nested menus, they will go back to a notepad and enter it later — which is when items get missed and the kitchen gets it wrong. The test: can a new waiter pick a table, add five items with variations and modifiers, and fire it to the kitchen in under a minute, on the same phone he already owns?" },
      { t: "h2", x: "3. Does it handle Zomato and Swiggy without double entry?" },
      { t: "p", x: "Delivery is now a real chunk of most menus, and it is where POS systems quietly fail. If online orders land on a separate tablet and someone re-punches them into your POS, you get missed items, wrong totals and a reconciliation nightmare at month-end. The right system pulls dine-in, takeaway, delivery and aggregator orders into one screen, so the kitchen and your reports see everything in one place." },
      { t: "h2", x: "4. Are the bills genuinely GST-correct?" },
      { t: "p", x: "Most standalone restaurants charge 5% GST on food, and the bill must show your GSTIN, the right tax split and a clean breakup. If the POS gets this wrong, or makes you set it by hand for every item, the mistakes surface exactly when you least want them — at filing time. GST handling should be automatic and invisible, not a setting you babysit." },
      { t: "h2", x: "5. What happens the moment the internet drops?" },
      { t: "p", x: "Internet dies mid-service more often than any vendor admits. If your POS freezes when the connection blinks, service stops and guests wait. Order-taking and billing must keep working offline and sync quietly when the line returns. Ask the vendor to show you the app with Wi-Fi switched off — not to tell you about it." },
      { t: "h2", x: "6. Khata, splits and part-payments — the Indian reality" },
      { t: "p", x: "Regulars run a tab. Groups split the bill four ways. Someone pays half in cash and half on UPI. A foreign-built POS often can't handle these gracefully, and your cashier ends up doing mental math at the counter. Make sure splits, part-payments and a running khata for trusted guests are built in, not workarounds." },
      { t: "h2", x: "7. What is the true monthly cost?" },
      { t: "p", x: "Add it all up: the licence, per-device charges, the printer and hardware you're forced to buy, the setup fee, and the AMC for support. A clear monthly price that runs on phones you already own almost always beats a 'cheap' licence that needs a counter full of hardware to work." },
      { t: "callout", x: "Score each POS out of 7. Anything that fails on the floor-kitchen-bill link, waiter speed, or offline mode should be off your list — those three decide whether tonight's dinner rush runs smoothly or falls apart." },
      { t: "p", x: "The best restaurant POS is the one your staff forget they are using. They seat guests, punch orders and settle bills the way they always have — only now the kitchen never misses a ticket, the bill is always right, and by closing time you know exactly what the night earned." },
    ],
  },
  {
    slug: "zomato-swiggy-reconciliation-for-restaurants",
    title: "Zomato & Swiggy Reconciliation: Where Your Online Profit Leaks",
    description:
      "Commissions, funded discounts, cancelled orders and mismatched payouts quietly eat your delivery margin. A practical system to reconcile every aggregator order and collect exactly what you're owed.",
    category: "Operations",
    author: "Vrikso Team",
    date: "2026-07-08",
    readMins: 7,
    cover: 1,
    image: "/post-zomato-swiggy.png",
    tags: ["Zomato", "Swiggy", "reconciliation", "restaurant"],
    body: [
      { t: "p", x: "Aggregators bring you covers you would never reach on your own — a customer three kilometres away, at 11pm, who has never seen your board. That reach is real. So is the payout statement at the end of the week that nobody in the restaurant fully understands. Orders worth a lakh went out; far less landed in the bank. Where did the rest go?" },
      { t: "p", x: "Some of that gap is legitimate — commission is the price of the reach. But a meaningful slice is leakage: orders you were never paid for, discounts you funded twice, deductions that don't match the deal you signed. You cannot plug a leak you cannot see. Here is how to see it." },
      { t: "h2", x: "Why the money never matches the orders" },
      { t: "p", x: "The number a guest pays on the app is not the number that reaches you. Between the two sit a stack of deductions, each reasonable on its own and confusing in a pile:" },
      { t: "ul", items: [
        "Commission on the order value — the platform's cut, your biggest and most predictable deduction",
        "Payment gateway and processing charges on the transaction",
        "Discounts and offers, part of which you agreed to fund",
        "GST and TCS handled by the platform, which changes what actually settles to you",
        "Cancellations and rejections — where the food was made but the payout is disputed",
        "Packaging or ad-service charges, if you opted into them",
      ] },
      { t: "p", x: "None of these is hidden. But spread across a weekly statement with hundreds of orders, they blur into one net figure — and 'the net looked a bit low this week' is not something you can act on." },
      { t: "h2", x: "Reconcile at the order level, not the payout level" },
      { t: "p", x: "The single habit that changes everything: check the payout order by order, not as one lump sum. For each order, you want three things side by side — what the platform says the order was, what it says it deducted, and what your own kitchen recorded. When those three agree, move on. When they don't, you have found a leak worth a real amount of money." },
      { t: "image", src: "/app/restaurant/d-dashboard.png", cap: "Dine-in and aggregator orders in one place — so the payout can be checked against what the kitchen actually made." },
      { t: "h2", x: "Bring aggregator orders into the same system as dine-in" },
      { t: "p", x: "If your Zomato orders live only in the Zomato dashboard and your Swiggy orders only in Swiggy's, reconciliation means logging into three places and matching by hand. When every channel — dine-in, takeaway, delivery and both aggregators — flows into one POS, your own record becomes the source of truth you check the payout against. That is the difference between a five-minute glance and a two-hour spreadsheet." },
      { t: "h2", x: "The three numbers to check on every payout" },
      { t: "p", x: "You do not need to audit every line. Each cycle, check three totals:" },
      { t: "ul", items: [
        "Order count — did the platform pay you for the same number of orders your kitchen fulfilled?",
        "Effective commission rate — is the total commission in line with the rate in your contract, or has it crept up?",
        "Cancelled-but-cooked orders — were you compensated for food that was made and then rejected or returned?",
      ] },
      { t: "p", x: "A gap in any one of these is money on the table. Two or three orders a week that were cooked but never paid for adds up to a serious sum across a year." },
      { t: "h2", x: "Catch cancelled and 'not received' orders fast" },
      { t: "p", x: "Disputes have a shelf life. A 'customer never received the order' claim or a wrongful cancellation is far easier to contest the same day, when your kitchen ticket and timing are fresh, than three weeks later from a payout statement. A system that flags mismatches quickly turns disputes from a lost cause into recovered revenue." },
      { t: "callout", x: "Treat the aggregator payout like a shop that owes you money. Know the exact number per cycle, chase the gaps while they're fresh, and never accept the net figure on faith. Reconciliation is not paperwork — it's collection." },
      { t: "p", x: "Delivery will keep growing as a share of most restaurants' revenue. That makes reconciliation not a back-office chore but a core discipline: the difference between delivery that quietly bleeds you and delivery that genuinely adds to the bottom line." },
    ],
  },
  {
    slug: "gst-invoicing-for-freelancers-and-services",
    title: "GST Invoicing for Freelancers and Service Businesses: A Plain-English Guide",
    description:
      "SAC codes, the registration threshold, when to charge 18%, place of supply, and how to raise a compliant GST invoice for services in seconds — for freelancers, agencies, consultants and studios.",
    category: "GST & Compliance",
    author: "Vrikso Team",
    date: "2026-06-28",
    readMins: 7,
    cover: 2,
    image: "/post-gst-freelancers.png",
    tags: ["GST", "freelancers", "services", "invoicing"],
    body: [
      { t: "p", x: "Product sellers figured out GST years ago — every carton has an HSN code and a tax rate printed on it. Service people, on the other hand, often wing it. A designer, a consultant, a marketing agency, a photographer — the work is clear, but the invoice is frequently a Word document with a total and no idea whether GST even applies. That is fine until a client's accounts team asks for a proper tax invoice, or your turnover crosses a line you weren't watching." },
      { t: "p", x: "The good news: GST for services is simpler than it looks. A handful of rules cover almost everything a freelancer or service business needs." },
      { t: "h2", x: "First: do you even need to register?" },
      { t: "p", x: "You must register for GST once your turnover crosses the threshold — for most service providers that is ₹20 lakh a year (₹10 lakh in some special-category states). Below that, registration is optional. But two situations force it regardless of turnover: supplying services to clients in other states, and selling through certain e-commerce platforms. If either applies to you, register even if you're small — it's cheaper than a notice later." },
      { t: "h2", x: "Services use SAC codes, not HSN" },
      { t: "p", x: "Goods have HSN codes; services have SAC codes (Services Accounting Codes). Every service you bill has one, and it belongs on the invoice. You don't need to memorise them — find the code for your kind of work once (design, consulting, software, catering) and reuse it. Most services attract 18% GST, though some categories differ, so confirm the rate for your specific SAC rather than assuming." },
      { t: "h2", x: "What a service tax invoice must show" },
      { t: "ul", items: [
        "Your name, address and GSTIN",
        "A unique, sequential invoice number and the date",
        "The client's name, address and GSTIN (for B2B)",
        "A clear description of the service and its SAC code",
        "Taxable value, the GST rate, and the tax amount split by head",
        "Place of supply — which decides whether it's CGST/SGST or IGST",
      ] },
      { t: "image", src: "/app/billing/d-dashboard.png", cap: "A clean, structured invoice is what lets your client claim input credit — and what keeps your own returns simple." },
      { t: "h2", x: "CGST/SGST vs IGST — place of supply for services" },
      { t: "p", x: "The rule mirrors goods, but 'place of supply' for services can be less obvious. As a starting point: if your client is in the same state as you, the tax splits into CGST and SGST; if they're in another state, it's a single IGST at the full rate. For most straightforward service work, the client's location decides it. Get the place of supply right and the split takes care of itself." },
      { t: "h2", x: "Reverse charge, TDS and the client who deducts" },
      { t: "p", x: "Two things surprise first-time service billers. First, larger clients often deduct TDS on your fee — that's income tax withheld on your behalf, separate from GST, and you claim it back when you file your returns. Second, a few specific services fall under reverse charge, where the client pays the GST directly instead of you. Neither is a problem once you know it's coming; both cause panic when an unexpected deduction shows up on a payment." },
      { t: "h2", x: "Billing the same clients every month? Don't start from scratch" },
      { t: "p", x: "Retainers, AMCs and subscriptions mean raising nearly the same invoice over and over. Re-typing it each month is where numbers drift and invoices get forgotten. If that's your model, set the invoice to repeat automatically — we cover exactly how in our guide to recurring invoices." },
      { t: "callout", x: "The cheapest compliance is automatic. Pick the client, pick the service, and let the app apply the right SAC, the right rate and the right tax split every time — so a compliant invoice takes thirty seconds, not a nervous phone call to your CA." },
      { t: "p", x: "You don't need to become a tax expert to bill correctly. You need clean, structured invoices with the right codes and splits, raised the moment the work is done and shared where the client will actually see them — usually WhatsApp or email. Do that consistently and GST stops being a season and becomes a non-event." },
    ],
  },
  {
    slug: "recurring-invoices-get-paid-on-time",
    title: "Recurring Invoices: How Retainer and Subscription Businesses Get Paid On Time",
    description:
      "If you bill the same clients every month, manual invoicing is a slow leak. How recurring invoices, unmissable due dates and gentle automated reminders keep your cash flow predictable.",
    category: "Cash Flow",
    author: "Vrikso Team",
    date: "2026-06-20",
    readMins: 6,
    cover: 3,
    image: "/post-recurring-invoices.png",
    tags: ["recurring billing", "cash flow", "retainers"],
    body: [
      { t: "p", x: "Retainer revenue is supposed to be the easy money. The client is signed, the fee is fixed, the work is ongoing — the same invoice, every month, forever. And yet retainer businesses are often the ones chasing payments hardest. Not because the clients are bad, but because the invoicing is manual, and manual monthly work is the first thing that slips when you're busy doing the actual job." },
      { t: "p", x: "The fix isn't discipline. It's removing the step that needs discipline in the first place." },
      { t: "h2", x: "The hidden cost of billing by hand" },
      { t: "p", x: "Say you have fifteen retainer clients. On the first of the month you sit down to raise fifteen invoices. It's dull, so it slips to the third. Two get missed entirely and you catch them a week later. One goes out with last month's figures copied over. Each small slip pushes payment later — and a retainer invoice sent on the 9th instead of the 1st is money that arrives eight days later, every single month, compounding across a year into a real dent in your working capital." },
      { t: "h2", x: "Set the invoice to raise itself" },
      { t: "p", x: "A recurring invoice is a template that fires on a schedule you set — monthly, quarterly, whatever the contract says. You define it once: this client, this amount, this service and SAC code, this GST treatment, due on this day. From then on it generates on time without you touching it, and lands with the client on the same date every cycle. The most reliable invoice is the one no human has to remember to send." },
      { t: "image", src: "/app/billing/d-dashboard.png", cap: "A live view of what's billed, paid and overdue — the recurring engine keeps every cycle current." },
      { t: "h2", x: "Make the due date unmissable" },
      { t: "p", x: "'Payable immediately' is not a due date — it's a suggestion. Put a specific date on every invoice, keep your terms consistent (net 7, net 15, whatever you choose), and make the amount and the date the two clearest things on the page. Clients pay clear invoices faster than vague ones, simply because there's nothing to wonder about." },
      { t: "h2", x: "Reminders that collect without nagging" },
      { t: "p", x: "Most late payments aren't refusals — they're a to-do that fell down the client's list. A short, automatic reminder does the follow-up you'd otherwise dread doing yourself:" },
      { t: "ul", items: [
        "A gentle note a few days before the due date, so it's on their radar",
        "A polite reminder on the day, with the exact amount and a way to pay",
        "A firmer follow-up once it's overdue, referencing the invoice number",
      ] },
      { t: "p", x: "Because it's automatic and consistent, it never feels personal or awkward — it's just the system doing its job, and it collects far more than a reminder you keep meaning to send." },
      { t: "h2", x: "Watch the metric that matters: on-time rate" },
      { t: "p", x: "Track the share of invoices paid by their due date. That single number tells you more about your cash health than revenue does — a business billing ₹5 lakh a month with a 60% on-time rate is under more strain than one billing ₹4 lakh at 95%. When you can see which clients are chronically late, you can fix the relationship, tighten their terms, or ask for advance payment — decisions you can't make if it's all a blur." },
      { t: "callout", x: "Predictable revenue deserves predictable collection. Automate the invoice, fix the due date, let the reminders run — and turn 'I must send those invoices' into something that already happened while you were working." },
      { t: "p", x: "Recurring billing done right is invisible. You do the work, the invoices go out on time on their own, the reminders handle the follow-up, and the money arrives when it's supposed to. That's the whole point of a retainer — and now the billing finally matches the promise." },
    ],
  },
  {
    slug: "e-way-bills-for-distributors",
    title: "E-Way Bills for Distributors: When You Need One (and How to Stop the Hassle)",
    description:
      "When an e-way bill is required, the ₹50,000 rule, Part A vs Part B, validity by distance, and the mistakes that get goods detained — plus how to generate one straight from your invoice.",
    category: "GST & Compliance",
    author: "Vrikso Team",
    date: "2026-06-10",
    readMins: 7,
    cover: 4,
    image: "/post-eway-bills.png",
    tags: ["e-way bill", "GST", "logistics", "distribution"],
    body: [
      { t: "p", x: "The invoice is raised, the truck is loaded, the driver is waiting — and now someone logs into a separate portal to type the same details all over again to generate an e-way bill. It's the most avoidable delay in a distributor's day, and the one that most often holds up a delivery. Worse, a small slip on that form can get a whole consignment detained at a checkpoint. Understanding the rules — and generating the bill from data you already have — turns this from a daily chore into a non-event." },
      { t: "h2", x: "When do you actually need an e-way bill?" },
      { t: "p", x: "As a general rule, you need an e-way bill to move goods when the consignment value exceeds ₹50,000. It applies to both inter-state movement and, in most states, movement within the state — though intra-state thresholds and exemptions vary, so confirm the rule where you operate. It covers movement for a sale, but also transfers to your own branch, returns to a supplier, and goods sent for job work. If goods worth more than the threshold are on a vehicle, assume you need one until you've checked otherwise." },
      { t: "h2", x: "Part A and Part B — what goes where" },
      { t: "p", x: "An e-way bill has two parts. Part A is the consignment: the GSTINs, the invoice number and value, the HSN codes and the place of supply — essentially everything already on your invoice. Part B is the transport: the vehicle number and transporter details. Part A can be filled the moment the invoice exists; Part B is added when the vehicle is assigned. The bill is only valid for movement once both are complete." },
      { t: "shot", name: "invoice", cap: "Everything Part A needs already lives on the invoice — the value, GSTINs, HSN and place of supply." },
      { t: "h2", x: "How long is an e-way bill valid?" },
      { t: "p", x: "Validity is tied to the distance the goods travel, not a flat number of days — roughly a day for the first stretch and additional time for longer hauls, counted from when Part B is filled. The practical takeaway: don't generate the bill too early. If you create it and then the vehicle is delayed a day, you can burn the validity before the goods have even moved, and a bill that expires in transit is treated the same as no bill at all." },
      { t: "h2", x: "The mistakes that get goods detained" },
      { t: "p", x: "Nearly every detention traces back to a mismatch between the e-way bill, the invoice and the physical goods. The usual culprits:" },
      { t: "ul", items: [
        "A wrong or outdated vehicle number in Part B after the goods were shifted to another truck",
        "An expired e-way bill because it was generated too early or the trip took longer than expected",
        "A value or tax figure that doesn't match the invoice travelling with the goods",
        "A missing or wrong HSN code, or the wrong place of supply",
      ] },
      { t: "p", x: "Notice the pattern: none of these are about the goods being wrong. They're about the paperwork not matching itself. When the invoice and the e-way bill are typed separately by different people, mismatches are almost guaranteed." },
      { t: "h2", x: "Generate it from the invoice, not a separate ritual" },
      { t: "p", x: "The whole headache disappears when the e-way bill is built from the invoice you already raised. Part A fills itself from the invoice data — same value, same GSTINs, same HSN — so there's nothing to re-type and nothing to mismatch. You add the vehicle number when the truck is assigned, and the bill is ready. No second login, no re-keying, no checkpoint surprises." },
      { t: "callout", x: "Count how many times the same consignment gets re-typed between your invoice and the e-way bill portal. Every hop you remove is a mismatch you prevent — and a delivery that isn't sitting at a checkpoint while someone fixes a form." },
      { t: "p", x: "E-way bill compliance isn't hard; it's just tedious when done by hand. Get the rules right, generate the bill from the invoice instead of a blank portal form, and add the vehicle at the last moment — and the truck leaves on time with paperwork that matches itself, every trip." },
    ],
  },
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
    image: "/abstract_blog_4.png",
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
      { t: "image", src: "/abstract_blog_2.png", cap: "One phone, one record — orders, invoices and reports flowing from the same source." },
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
    image: "/gst_abstract_2.png",
    tags: ["GST", "invoicing", "compliance"],
    body: [
      { t: "p", x: "A GST invoice is not just a bill — it is the document your buyer uses to claim input tax credit, and the record the department checks against your returns. Get the basics right and filing becomes routine. Get them wrong and you spend month-end fixing mismatches." },
      { t: "image", src: "/gst_blog_abstract_1.png", cap: "Every invoice is a node in your GST trail — keep them clean and the returns take care of themselves." },
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

/** Blog index pagination: page 1 at /blog, pages 2..N at /blog/page/N. */
export const BLOG_PAGE_SIZE = 10;
export const BLOG_PAGE_COUNT = Math.max(1, Math.ceil(POSTS_BY_DATE.length / BLOG_PAGE_SIZE));

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

export type Vertical = "distribution" | "billing" | "restaurant";

/** Which product a post belongs to, inferred from its tags. Defaults to
    distribution so every existing post keeps its current CTA. */
export function postVertical(post: BlogPost): Vertical {
  const tags = post.tags.map((t) => t.toLowerCase());
  const has = (...keys: string[]) => keys.some((k) => tags.includes(k));
  if (has("restaurant", "restaurant pos", "zomato", "swiggy", "kot")) return "restaurant";
  if (has("freelancers", "services", "recurring billing", "retainers")) return "billing";
  return "distribution";
}

/** Per-vertical CTA copy for the bottom-of-article band. */
export const POST_CTA: Record<Vertical, { title: string; sub: string; wa: string; href: string }> = {
  distribution: {
    title: "Run your distribution business from your phone.",
    sub: "Orders, GST billing, stock and collections — one clean app.",
    wa: "Hi! I read your blog and want a demo of Vrikso for my distribution business.",
    href: "/distribution",
  },
  billing: {
    title: "GST billing in seconds, from any phone.",
    sub: "Invoices, recurring billing and payment tracking — shared on WhatsApp, ready for GSTR-1.",
    wa: "Hi! I read your blog and want a demo of Vrikso Billing.",
    href: "/billing",
  },
  restaurant: {
    title: "Run the floor, the kitchen and the bills — one app.",
    sub: "Tables, KOTs, aggregator orders and GST bills — on the phones your staff already carry.",
    wa: "Hi! I read your blog and want a demo of Vrikso Restaurant.",
    href: "/restaurant",
  },
};

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[m - 1]} ${y}`;
}
