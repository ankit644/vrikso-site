/** The Vrikso trade glossary — the vocabulary of Indian distribution.
 *
 *  One file, one source of truth. Each term renders at /glossary/<slug>
 *  and is emitted as schema.org DefinedTerm inside a DefinedTermSet.
 *
 *  `short` is the one-or-two-sentence answer — keep it self-contained and
 *  quotable, because it is what search engines and AI assistants lift.
 *  `body` paragraphs support the same inline [label](/href) links as blog
 *  posts. Keep every entry honest and specific to Indian trade practice.
 */

export type GlossaryCategory =
  | "Trade structure"
  | "Schemes & pricing"
  | "Orders & delivery"
  | "Stock & warehouse"
  | "Billing & GST"
  | "Money & credit";

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Other names the trade uses for the same thing. */
  aka?: string[];
  /** What the term is called on the shop floor, where Hindi is the working language. */
  hindi?: string;
  category: GlossaryCategory;
  /** Self-contained definition. This is the quotable answer — no pronouns, no setup. */
  short: string;
  /** Supporting explanation. Supports inline [label](/href) links. */
  body: string[];
  /** Slugs of related terms. */
  related?: string[];
};

export const GLOSSARY_INDEX = {
  eyebrow: "The trade glossary",
  title: "The vocabulary of Indian distribution,",
  titleAccent: "explained plainly.",
  sub: "Beat, udhaar, PTR, super stockist, e-way bill — the words distributors, wholesalers and retailers actually use, defined without jargon and with what each one means for your day.",
};

export const CATEGORY_ORDER: GlossaryCategory[] = [
  "Trade structure",
  "Schemes & pricing",
  "Orders & delivery",
  "Stock & warehouse",
  "Billing & GST",
  "Money & credit",
];

export const TERMS: GlossaryTerm[] = [
  /* ── Trade structure ─────────────────────────────────────────── */
  {
    slug: "distributor",
    term: "Distributor",
    hindi: "डिस्ट्रीब्यूटर",
    category: "Trade structure",
    short:
      "A distributor buys stock outright from a company, stores it in their own godown, and sells it on to retailers across an assigned territory — earning a margin of roughly 3–5% in Indian FMCG.",
    body: [
      "The distributor sits between the company (or its C&F agent) and the retail counter. Two things define the role, and both are financial rather than logistical: you own the inventory, so you carry the risk on it, and you extend credit to retailers, so you are effectively the company's credit desk in your territory.",
      "That is why distribution is better understood as a capital-rotation business than a selling business. The same ₹10 lakh rotated eighteen times a year at 4% beats ₹10 lakh rotated ten times at 5%. Appointment, territory size and credit policy are all really decisions about how fast your money comes back.",
      "If you are considering becoming one, our guide to [FMCG distributorship costs, margins and ROI](/blog/become-fmcg-distributor-india-cost-margin) has the real investment bands and the arithmetic behind them.",
    ],
    related: ["super-stockist", "cnf-agent", "sub-distributor", "roi"],
  },
  {
    slug: "super-stockist",
    term: "Super stockist",
    aka: ["Super distributor"],
    category: "Trade structure",
    short:
      "A super stockist buys in bulk from a company and supplies sub-distributors and distributors across a wider region, rather than selling directly to retail counters.",
    body: [
      "Companies appoint super stockists where a territory is too large or too thinly populated to serve distributor-by-distributor. The super stockist holds larger inventory, breaks it into distributor-sized lots, and absorbs the freight and warehousing that the company would otherwise manage itself.",
      "The economics differ from a distributor's in one important way: margins are thinner, because you are one more link in the chain, but volumes and territory are larger. Credit exposure also concentrates — a super stockist is carrying several distributors' outstanding rather than many small retailer balances, so a single default hurts far more.",
      "Operationally the demands are the same as a distributor's, only bigger: party-wise credit limits, outstanding by age, and stock accuracy across more locations. Vrikso's [software for super stockists and distributors](/super-stockist-software) is built for exactly that shape.",
    ],
    related: ["distributor", "sub-distributor", "cnf-agent", "primary-sales"],
  },
  {
    slug: "cnf-agent",
    term: "C&F agent",
    aka: ["Carrying and forwarding agent", "CFA"],
    category: "Trade structure",
    short:
      "A C&F (carrying and forwarding) agent stores and dispatches a company's stock at state level on commission, without buying the goods — the stock remains the company's property.",
    body: [
      "This is the cleanest distinction in the chain: a distributor buys the stock, a C&F agent merely holds it. The C&F agent runs the warehouse, handles dispatch to distributors, and manages the statutory paperwork, earning a commission rather than a trading margin.",
      "Because the goods are not theirs, C&F agents carry no inventory risk and no retailer credit risk — but they also capture none of the upside when a brand moves fast in their region. The role is operational and relatively low-margin by design.",
      "For software, the needs skew toward dispatch accuracy, stock reconciliation against company records, and clean documentation such as the [e-way bill](/glossary/e-way-bill) rather than billing and collections.",
    ],
    related: ["distributor", "super-stockist", "godown", "e-way-bill"],
  },
  {
    slug: "sub-distributor",
    term: "Sub-distributor",
    category: "Trade structure",
    short:
      "A sub-distributor buys from a distributor or super stockist rather than directly from the company, and serves a smaller area — often a single town or a cluster of rural beats.",
    body: [
      "Sub-distribution is how brands reach places that cannot support a full distributor appointment. Investment is smaller, typically ₹2–5 lakh, and so is the margin, because you are buying at a price that already includes someone else's cut.",
      "It is also the most common entry point into the trade. Many distributors started as sub-distributors in a rural beat, built the retailer relationships, and converted to a direct appointment once volumes justified it.",
      "The practical risk is dependence: your supply, your pricing and sometimes your territory all sit with the distributor above you, and none of it is contractually yours in the way a company appointment would be.",
    ],
    related: ["distributor", "super-stockist", "beat", "roi"],
  },
  {
    slug: "primary-sales",
    term: "Primary sales",
    category: "Trade structure",
    short:
      "Primary sales are the goods a company sells to its distributors — stock moving from the company into the distribution channel, recorded as the company's revenue.",
    body: [
      "Primary is the number a company books. It is also the number that can be inflated: pushing stock into distributor godowns at quarter end raises primary sales without a single extra packet reaching a consumer.",
      "This is why brands increasingly care more about [secondary sales](/glossary/secondary-sales) — what the distributor actually sold on to retailers. The gap between primary and secondary is, quite literally, stock sitting in your godown tying up your capital.",
      "As a distributor, the practical defence is simple: know your own rotation. Accepting a large quarter-end load you cannot move in a month is lending the company your working capital for free.",
    ],
    related: ["secondary-sales", "distributor", "stock-turnover"],
  },
  {
    slug: "secondary-sales",
    term: "Secondary sales",
    category: "Trade structure",
    short:
      "Secondary sales are the goods a distributor sells on to retailers — the real measure of whether products are moving through the channel rather than merely into it.",
    body: [
      "Secondary sales data is the single most valuable number a brand can get from its distribution network, which is why enterprise DMS platforms exist almost entirely to collect it. It shows which SKUs move in which beats, which schemes worked, and where coverage is thin.",
      "For the distributor, tracking secondary is not just a company obligation — it is how you decide what to stock. A product with strong primary and weak secondary is capital you have already spent sitting on a shelf.",
      "Capturing it reliably requires orders to be recorded at the point of sale rather than reconstructed from memory at the end of the week, which is the practical argument for [order booking on the salesman's phone](/fmcg-distributor-app).",
    ],
    related: ["primary-sales", "order-booking", "beat", "coverage"],
  },
  {
    slug: "beat",
    term: "Beat",
    hindi: "बीट",
    aka: ["Beat plan"],
    category: "Trade structure",
    short:
      "A beat is the fixed list of retail outlets a salesman visits on a particular day, in a particular order — the basic unit of route planning in Indian distribution.",
    body: [
      "A well-built beat means a shop knows roughly when its salesman will arrive each week, which makes ordering a habit rather than an interruption. Most distributors run a weekly cycle: six beats, one per working day, each covering 25–40 outlets.",
      "Beats are also how you measure a salesman honestly. Coverage — outlets actually billed against outlets on the beat — tells you far more than total order value, because value can be propped up by a handful of large shops while the rest of the territory quietly goes unserved.",
      "The planning principles are covered in our guide to [routes and beats](/blog/routes-and-beats-planning); the software requirement is simply that each salesman sees only his own beat, and you see every beat's coverage.",
    ],
    related: ["route", "coverage", "order-booking", "secondary-sales"],
  },
  {
    slug: "route",
    term: "Route",
    category: "Trade structure",
    short:
      "A route is the geographic path covering one or more beats — the travel plan that determines how a salesman or delivery vehicle moves through a territory.",
    body: [
      "Where a beat is a list of shops, a route is the sequence and the distance between them. Two beats with identical outlet counts can differ enormously in cost if one is a dense market lane and the other is spread across villages.",
      "Route design is therefore a cost decision as much as a sales one. Fuel, vehicle time and the number of productive calls per day all follow from how sensibly the route is drawn.",
      "A common mistake is to let routes grow organically as new outlets are added, until a salesman is criss-crossing his own territory. Redrawing routes once a year against actual outlet locations usually recovers several productive calls a day.",
    ],
    related: ["beat", "coverage", "van-sales", "loading-sheet"],
  },
  {
    slug: "coverage",
    term: "Coverage",
    aka: ["Outlet coverage", "Productive calls"],
    category: "Trade structure",
    short:
      "Coverage is the proportion of outlets on a beat that actually placed an order, usually expressed as productive calls divided by total calls for the day.",
    body: [
      "If a salesman visits 35 shops and bills 21, coverage is 60%. That single ratio exposes more than any sales total: a territory can look healthy on value while half its outlets have quietly stopped buying.",
      "Two related measures matter alongside it. Lines per call — how many different products the average billing shop takes — shows whether you are selling the range or just the one fast mover. And unique outlets billed in a month shows whether your reach is real or concentrated.",
      "Low coverage is rarely a motivation problem. It is usually credit (the shop is over its limit), availability (you were out of the SKU it wanted) or beat design (the shop is on the wrong day).",
    ],
    related: ["beat", "route", "secondary-sales", "fill-rate"],
  },
  {
    slug: "roi",
    term: "Distributor ROI",
    aka: ["Return on investment"],
    category: "Trade structure",
    short:
      "Distributor ROI is annual net earnings divided by total capital deployed — stock, money sitting in retailer credit, and deposits — expressed as a percentage. Indian FMCG distributors typically target 12–20%.",
    body: [
      "The formula matters because margin alone is misleading. A worked example: capital of ₹12 lakh (₹8 lakh average stock, ₹3 lakh in retailer credit, ₹1 lakh deposit) earning ₹18,000 a month net is ₹2.16 lakh a year, which is an 18% return — healthy, despite a gross margin under 5%.",
      "Area sales managers evaluate a prospective distributor on exactly this calculation, so it is worth running before you sign. If the maths only reaches 12% using the company's own optimistic projections, negotiate the deposit and opening stock down.",
      "The levers are rotation and leakage, not margin. Nobody negotiates their way from 4% to 8%, but plenty of distributors double their return by collecting faster and carrying less dead stock.",
    ],
    related: ["distributor", "stock-turnover", "margin", "outstanding"],
  },

  /* ── Schemes & pricing ───────────────────────────────────────── */
  {
    slug: "scheme",
    term: "Scheme",
    hindi: "स्कीम",
    aka: ["Trade scheme", "Trade promotion"],
    category: "Schemes & pricing",
    short:
      "A scheme is a time-bound company offer that lowers the effective price to the trade — free quantity, a slab discount, or a cash allowance — designed to push volume during a defined period.",
    body: [
      "Schemes are the working grammar of Indian FMCG. They arrive from the company by circular, apply for a defined window, and are expected to be passed on to retailers in whole or in part. Common forms are free-quantity offers such as [10+1](/glossary/ten-plus-one), quantity slabs, value slabs and combination offers.",
      "They are also where margin quietly leaks. If a scheme is applied by hand on a notepad in the market, the arithmetic is wrong often enough to matter, and the error almost always runs in the retailer's favour. Worse, when a scheme period closes, unsold stock bought on scheme pricing has to be reconciled.",
      "The software requirement is specific and not every billing app has it: schemes must apply automatically at the moment an order is taken, flow into the invoice, and remain visible in reports so you can tell afterwards whether the scheme actually paid for itself.",
    ],
    related: ["ten-plus-one", "slab-discount", "trade-discount", "margin"],
  },
  {
    slug: "ten-plus-one",
    term: "10+1",
    aka: ["QPS", "Quantity purchase scheme", "Free quantity scheme"],
    category: "Schemes & pricing",
    short:
      "10+1 is a free-quantity scheme where a retailer buying ten units receives one free — an effective discount of about 9.09%, not 10%, because the free unit is part of the eleven supplied.",
    body: [
      "The arithmetic trips up a surprising number of people in the trade, and the difference is real money at FMCG volumes. One free unit on eleven supplied is 1 ÷ 11 = 9.09% off the effective rate. Calling it a 10% discount overstates what you have given by roughly a tenth.",
      "Variants follow the same logic: 5+1 is 16.67%, 12+1 is 7.69%, 20+2 is 9.09% again. Where a company offers a choice between free quantity and a flat percentage, converting both to effective rate before deciding is worth the thirty seconds.",
      "Free-quantity schemes also complicate stock and GST, because the free units are goods that left your godown and must appear correctly on the invoice. Software that treats them as a line item rather than an afterthought saves reconciliation pain later.",
    ],
    related: ["scheme", "slab-discount", "margin", "gst-invoice"],
  },
  {
    slug: "slab-discount",
    term: "Slab discount",
    aka: ["Quantity slab", "Value slab"],
    category: "Schemes & pricing",
    short:
      "A slab discount increases the discount rate as order size crosses defined thresholds — for example 2% above 50 cases, 4% above 100 — rewarding larger single orders.",
    body: [
      "Slabs are designed to shift buying behaviour rather than simply to lower price. A retailer who would have ordered 45 cases is nudged to 50, which both raises the order value and ties up more of the retailer's shelf and cash in your brand rather than a competitor's.",
      "For the distributor they need watching in two ways. First, a slab crossed by a single unit costs you the full discount on the whole order, so the threshold must be applied correctly at order time. Second, slabs encourage stock loading that may come back as returns if the retailer cannot sell through.",
      "Value slabs work identically but on rupee totals rather than quantity, and are more common where a distributor carries many SKUs at different price points.",
    ],
    related: ["scheme", "ten-plus-one", "trade-discount", "ptr"],
  },
  {
    slug: "trade-discount",
    term: "Trade discount",
    category: "Schemes & pricing",
    short:
      "A trade discount is a standing reduction off list price given to a buyer because of their position in the channel, as distinct from a scheme, which is temporary and promotional.",
    body: [
      "The practical difference is permanence. Trade discount is part of how a party is priced — a large wholesaler may always buy 2% better than a small counter. A scheme is an event with a start and end date.",
      "Keeping the two separate in your records matters when you review profitability. Blending them makes it impossible to tell whether a party is structurally unprofitable or merely had a heavy scheme month.",
      "In GST terms, discounts known at the time of supply and shown on the invoice reduce taxable value; discounts given afterwards need a [credit note](/glossary/credit-note) to adjust tax correctly.",
    ],
    related: ["scheme", "slab-discount", "credit-note", "ptr"],
  },
  {
    slug: "mrp",
    term: "MRP",
    aka: ["Maximum retail price"],
    category: "Schemes & pricing",
    short:
      "MRP is the maximum retail price printed on a pack, inclusive of all taxes, above which the product may not legally be sold to a consumer in India.",
    body: [
      "MRP is a ceiling, not a fixed price — selling below it is legal and common, selling above it is not. Because it is inclusive of tax, the whole chain's margins are carved out of the MRP rather than added to a base price.",
      "This is what makes FMCG margins structurally thin and largely non-negotiable: the company sets the MRP, then works backwards through [PTR](/glossary/ptr) and [PTD](/glossary/ptd) to decide what each link in the chain earns.",
      "Practical consequence for stock handling: when a company revises MRP, old and new stock of the same SKU carry different printed prices, and both must be tracked separately until the old stock clears.",
    ],
    related: ["ptr", "ptd", "margin", "batch-number"],
  },
  {
    slug: "ptr",
    term: "PTR",
    aka: ["Price to retailer"],
    category: "Schemes & pricing",
    short:
      "PTR (price to retailer) is the rate at which a distributor sells a product to a retail outlet — the retailer's buying price, from which the retailer's own margin to MRP is derived.",
    body: [
      "PTR and MRP together fix the retailer's margin. If a pack has an MRP of ₹100 and a PTR of ₹88, the retailer's margin is ₹12, or 12% of MRP — the number a shopkeeper will quote you when comparing brands.",
      "Retailers are acutely aware of PTR across competing brands, because it determines what they earn per unit of shelf space. A brand with weak PTR needs strong consumer pull to hold shelf; otherwise the shopkeeper simply pushes the alternative.",
      "Distributors should keep PTR consistent across parties within a class. Inconsistent PTR is the fastest way to lose a market's trust, because retailers do compare invoices.",
    ],
    related: ["ptd", "mrp", "margin", "trade-discount"],
  },
  {
    slug: "ptd",
    term: "PTD",
    aka: ["Price to distributor"],
    category: "Schemes & pricing",
    short:
      "PTD (price to distributor) is the rate at which a company sells to its distributor — the distributor's buying price, before schemes and before GST.",
    body: [
      "The distributor's gross margin is the gap between PTD and [PTR](/glossary/ptr), typically 3–5% in FMCG before schemes are passed on. Net margin after schemes, damages, credit cost and operating expenses usually lands at 2–4%.",
      "Because the gap is small, PTD accuracy matters enormously. A purchase booked at the wrong rate, or a scheme credit the company never passed, erodes a meaningful share of the year's earnings before anyone notices.",
      "This is the practical argument for reconciling purchases against company invoices every month rather than at year end — by which point the claim window on a discrepancy has usually closed.",
    ],
    related: ["ptr", "mrp", "margin", "claim"],
  },
  {
    slug: "margin",
    term: "Margin",
    hindi: "मार्जिन",
    category: "Schemes & pricing",
    short:
      "Margin is the difference between buying price and selling price, expressed in rupees or as a percentage. Indian FMCG distributors run on 3–5% gross and 2–4% net; kirana retailers blend 8–12%.",
    body: [
      "Gross margin is what the price list gives you. Net margin is what survives schemes passed on, damaged and expired stock, the interest cost of retailer credit, fuel, salaries and leakage. The gap between the two is where most distribution businesses are actually won or lost.",
      "Because the percentages are small, the business rewards rotation over negotiation. Earning 4% eighteen times a year beats earning 5% ten times, which is why [ROI](/glossary/roi) rather than margin is the number experienced distributors watch.",
      "Retail margins work differently and vary sharply by category — staples at 2–8%, personal care at 10–20%. Our breakdown of [kirana store margins by category](/blog/kirana-store-profit-margin-india) has the full table.",
    ],
    related: ["roi", "ptr", "ptd", "claim"],
  },
  {
    slug: "claim",
    term: "Claim",
    aka: ["Damage claim", "Breakage claim", "Expiry claim"],
    hindi: "क्लेम",
    category: "Schemes & pricing",
    short:
      "A claim is a reimbursement a distributor files with a company for stock that was damaged, expired or sold under a scheme — money owed back to the distributor rather than a sale.",
    body: [
      "Claims are a quiet but material part of distribution economics. On a 3–5% margin, unclaimed damages and unreimbursed scheme credits can account for a visible share of annual profit, and they are lost silently because nobody files them.",
      "Each company sets its own policy on what is claimable, in what window, and with what proof — typically photographs, batch details and the original invoice reference. Missing the window usually means forfeiting the money entirely.",
      "The operational requirement is therefore unglamorous but valuable: damaged and expired stock must be recorded against a batch and a company at the moment it is identified, not reconstructed from memory at quarter end.",
    ],
    related: ["breakage", "expiry-date", "batch-number", "margin"],
  },
  {
    slug: "breakage",
    term: "Breakage",
    hindi: "टूट-फूट",
    aka: ["Damage"],
    category: "Schemes & pricing",
    short:
      "Breakage is stock physically damaged in transit, storage or handling, rendering it unsaleable — recoverable from the company only if documented and claimed within the policy window.",
    body: [
      "Breakage is unavoidable in a trade that moves glass, sachets and cartons through loading, unloading and two-wheeler delivery. What is avoidable is failing to record it, which converts a recoverable claim into a straight loss.",
      "Rates vary by category — liquids and glass run far higher than packaged dry goods — and a sudden rise usually points to a handling or storage problem rather than bad luck.",
      "Treat breakage as a tracked number, not an accepted cost. A distributor who knows their breakage percentage by company can negotiate it; one who does not simply absorbs it.",
    ],
    related: ["claim", "expiry-date", "godown", "margin"],
  },

  /* ── Orders & delivery ───────────────────────────────────────── */
  {
    slug: "order-booking",
    term: "Order booking",
    hindi: "ऑर्डर बुकिंग",
    category: "Orders & delivery",
    short:
      "Order booking is the act of recording a retailer's order at the shop, usually by a salesman on a beat, so that the godown can pick, invoice and deliver it.",
    body: [
      "Everything downstream depends on this one step being accurate. An order captured correctly at the counter flows into picking, invoicing, stock and outstanding without being typed again; an order written in a diary is re-keyed at least once and often wrongly.",
      "The practical tests for order booking software are unglamorous: does it work on a cheap Android phone, does it survive a weak network in a crowded market, does it surface recent shops first, and does it apply [schemes](/glossary/scheme) automatically so the salesman is not doing arithmetic at the counter.",
      "Done well, the order takes under two minutes and the godown can start picking before the salesman has left the lane. Our [FMCG order booking app](/fmcg-distributor-app) is built around that cycle.",
    ],
    related: ["beat", "picking-list", "secondary-sales", "fill-rate"],
  },
  {
    slug: "picking-list",
    term: "Picking list",
    hindi: "पिकिंग लिस्ट",
    aka: ["Pick list"],
    category: "Orders & delivery",
    short:
      "A picking list is the consolidated list of items to be collected from the godown for a set of orders, usually grouped by storage location so staff walk the warehouse once.",
    body: [
      "The difference between a good and a bad picking list is walking distance. Listing items in the order they appear on invoices forces staff to criss-cross the godown; listing them by rack or zone lets one pass collect everything.",
      "Picking lists should be generated from the day's confirmed orders rather than written by hand, both for speed and because a hand-copied list introduces errors that only surface when a retailer complains about a short delivery.",
      "Measuring [fill rate](/glossary/fill-rate) against the picking list also tells you where stock-outs are actually occurring, which is usually more useful than a monthly stock report.",
    ],
    related: ["loading-sheet", "order-booking", "fill-rate", "godown"],
  },
  {
    slug: "loading-sheet",
    term: "Loading sheet",
    aka: ["Loading list"],
    category: "Orders & delivery",
    short:
      "A loading sheet lists everything to be loaded onto a particular delivery vehicle for a particular route, with the shops and invoices it covers.",
    body: [
      "Where a picking list is about the godown, a loading sheet is about the vehicle. It is the document that lets a driver and loader verify, before leaving, that what is on the vehicle matches what the route requires.",
      "Sequencing matters: loading in reverse delivery order means the first shop's goods are at the tailgate rather than buried, which saves real time across twenty-five stops.",
      "The loading sheet is also the natural reconciliation point at day end — what went out, what was delivered, what came back, and what cash or cheques returned with it.",
    ],
    related: ["picking-list", "van-sales", "route", "delivery-challan"],
  },
  {
    slug: "van-sales",
    term: "Van sales",
    aka: ["Ready stock selling", "Van load"],
    category: "Orders & delivery",
    short:
      "Van sales is a model where stock is loaded onto a vehicle and sold and delivered at the shop in a single visit, rather than taking an order on one day and delivering on another.",
    body: [
      "It suits dense routes, fast-moving SKUs and markets where retailers prefer to buy what they can see. The trade-off is that the vehicle carries limited range, so van sales usually complements rather than replaces order-and-deliver for the full catalogue.",
      "The operational discipline is van reconciliation: stock loaded, stock sold, cash collected and stock returned must balance at the end of every trip. Without that, van sales becomes the easiest place in a distribution business for both stock and cash to go missing.",
      "It is a genuinely different workflow from [order booking](/glossary/order-booking), and software that handles one does not automatically handle the other — worth confirming in a demo rather than assuming.",
    ],
    related: ["loading-sheet", "route", "order-booking", "collection"],
  },
  {
    slug: "delivery-challan",
    term: "Delivery challan",
    hindi: "डिलीवरी चालान",
    category: "Orders & delivery",
    short:
      "A delivery challan is a document accompanying goods that are moved without an immediate tax invoice — for example stock sent on approval, for job work, or between a business's own godowns.",
    body: [
      "The challan records what moved, in what quantity, and to where, without recording a sale. It is the correct document when ownership has not changed hands or when the value is not yet determined.",
      "Common distribution uses are branch or godown transfers, goods sent for exhibition or approval, and replacement stock issued against a claim. Using an invoice for these inflates sales and creates GST liabilities that should not exist.",
      "Where the consignment value crosses the threshold, a delivery challan still needs an [e-way bill](/glossary/e-way-bill) — movement, not sale, is what triggers that requirement.",
    ],
    related: ["e-way-bill", "gst-invoice", "godown", "loading-sheet"],
  },
  {
    slug: "fill-rate",
    term: "Fill rate",
    aka: ["Service level"],
    category: "Orders & delivery",
    short:
      "Fill rate is the proportion of ordered quantity actually supplied — if a retailer orders 100 units across SKUs and receives 92, the fill rate is 92%.",
    body: [
      "Fill rate is the cleanest single measure of whether your stock planning works. Low fill rate has an immediate commercial cost: a shop that repeatedly receives partial deliveries starts ordering from someone who delivers in full.",
      "Measure it by line as well as by quantity. Supplying 95% of units while missing one SKU entirely is a different problem from supplying 95% of every line, and points to a different fix.",
      "Persistent gaps usually trace back to [reorder levels](/glossary/reorder-level) set by feel rather than by rotation, or to capital tied up in [dead stock](/glossary/dead-stock) that should have funded fast movers.",
    ],
    related: ["reorder-level", "dead-stock", "picking-list", "coverage"],
  },

  /* ── Stock & warehouse ───────────────────────────────────────── */
  {
    slug: "godown",
    term: "Godown",
    hindi: "गोदाम",
    aka: ["Warehouse"],
    category: "Stock & warehouse",
    short:
      "A godown is the warehouse where a distributor stores stock between receiving it from the company and delivering it to retailers.",
    body: [
      "Godown layout quietly determines daily cost. Fast movers near the dispatch door, slow movers deep inside, and a fixed location per SKU turn picking from a search into a walk.",
      "For GST purposes, each godown at a different address generally needs to be declared as an additional place of business under your registration. Moving stock between your own godowns is a transfer on a [delivery challan](/glossary/delivery-challan), not a sale.",
      "Two habits separate controlled godowns from leaking ones: a fixed location for every SKU, and a cycle count of a few racks each week instead of one annual stock-take that nobody believes.",
    ],
    related: ["closing-stock", "delivery-challan", "picking-list", "fifo"],
  },
  {
    slug: "sku",
    term: "SKU",
    aka: ["Stock keeping unit"],
    category: "Stock & warehouse",
    short:
      "An SKU (stock keeping unit) is a single distinct sellable item — a specific product in a specific pack size and variant, tracked separately from every other.",
    body: [
      "Shampoo is a product; 180ml anti-dandruff shampoo is an SKU. The distinction matters because stock, pricing, schemes and margins all operate at SKU level, not product level.",
      "Indian FMCG distribution is SKU-heavy by nature: the same brand may run sachet, small, medium and family packs, each with its own [MRP](/glossary/mrp), [PTR](/glossary/ptr) and rotation. A mid-size distributor commonly carries 800–2,000 SKUs.",
      "The practical requirement is that pack-size variants stay grouped when a salesman is ordering, so he picks the right one at the counter rather than scrolling a flat list of near-identical names.",
    ],
    related: ["pack-size", "mrp", "reorder-level", "dead-stock"],
  },
  {
    slug: "pack-size",
    term: "Pack size",
    aka: ["Case", "CFC", "Outer"],
    category: "Stock & warehouse",
    short:
      "Pack size is the number of consumer units in a selling pack — the case, outer or carton in which stock is bought, stored and usually sold to retailers.",
    body: [
      "Trade conversations happen in cases, not pieces: a shop orders two cases, the godown picks two cases, and the invoice shows both the case quantity and the piece equivalent. Software that cannot hold both will produce arguments.",
      "Conversions must be exact and per SKU. A 24-piece outer and a 48-piece outer of the same brand are different SKUs, and treating them as one is a reliable way to corrupt a stock figure.",
      "Breaking bulk — selling loose pieces from an opened case — is common at the retail end and needs to be handled deliberately, or your piece count and case count will drift apart.",
    ],
    related: ["sku", "closing-stock", "picking-list", "mrp"],
  },
  {
    slug: "closing-stock",
    term: "Closing stock",
    hindi: "क्लोजिंग स्टॉक",
    category: "Stock & warehouse",
    short:
      "Closing stock is the quantity and value of goods held at the end of an accounting period — the single largest asset on most distributors' books.",
    body: [
      "Because it is both large and easy to misstate, closing stock is where a distribution business's real health either shows or hides. Overstated stock flatters profit; stock that exists on paper but not on the rack is a loss that has already happened.",
      "Valuation convention matters: stock is normally carried at cost, not at selling price, and damaged or expired goods should be written down rather than counted at full value.",
      "The only reliable closing stock is one that comes from every movement touching the same record — purchases in, sales out, [breakage](/glossary/breakage) and returns adjusted — rather than from a once-a-year count.",
    ],
    related: ["stock-turnover", "dead-stock", "godown", "breakage"],
  },
  {
    slug: "stock-turnover",
    term: "Stock turnover",
    aka: ["Rotation", "Inventory turns"],
    category: "Stock & warehouse",
    short:
      "Stock turnover is how many times average inventory is sold and replaced in a year — the core efficiency measure in distribution, where returns come from rotation rather than margin.",
    body: [
      "A distributor holding ₹10 lakh of average stock and selling ₹1.8 crore a year at cost is turning stock eighteen times. At a 4% margin, that produces far more profit than turning it ten times at 5%.",
      "Turnover should be read per company and per category, not just overall. A healthy blended figure routinely hides one brand rotating weekly and another sitting for four months.",
      "Raising turnover is mostly about what you do not buy: resisting quarter-end loading, cutting [dead stock](/glossary/dead-stock), and setting [reorder levels](/glossary/reorder-level) from actual movement.",
    ],
    related: ["roi", "dead-stock", "closing-stock", "reorder-level"],
  },
  {
    slug: "dead-stock",
    term: "Dead stock",
    hindi: "डेड स्टॉक",
    aka: ["Slow-moving stock", "Non-moving stock"],
    category: "Stock & warehouse",
    short:
      "Dead stock is inventory that has not moved for an extended period — commonly 90 days or more in FMCG — and which ties up working capital without generating return.",
    body: [
      "Dead stock is expensive twice over. It occupies capital that could be rotating, and in categories with [expiry dates](/glossary/expiry-date) it is steadily converting into a write-off.",
      "The honest review is a monthly ageing of stock by SKU: anything untouched for ninety days gets a decision — push it with a scheme, return it if the company policy allows, or write it down. Leaving it on the rack is itself a decision, just an unexamined one.",
      "Most dead stock is created at the point of purchase, not the point of sale. It accumulates from accepting loads that suited the company's quarter rather than your rotation.",
    ],
    related: ["stock-turnover", "expiry-date", "closing-stock", "primary-sales"],
  },
  {
    slug: "reorder-level",
    term: "Reorder level",
    aka: ["Reorder point", "Minimum level"],
    category: "Stock & warehouse",
    short:
      "Reorder level is the stock quantity at which a fresh purchase should be initiated, set so that stock lasts through the supplier's lead time without running out.",
    body: [
      "The calculation is simple and rarely done: average daily sale multiplied by lead time in days, plus a safety buffer. An SKU selling 20 units a day with a seven-day lead time needs reordering at roughly 140 units plus buffer.",
      "Set by feel instead, reorder levels tend to be too high on comfortable products and too low on the ones that actually matter, which produces [dead stock](/glossary/dead-stock) and stock-outs simultaneously.",
      "Review them quarterly rather than annually. Lead times and sales rates both drift, and a reorder level set last festive season will be wrong by now.",
    ],
    related: ["fill-rate", "stock-turnover", "dead-stock", "sku"],
  },
  {
    slug: "batch-number",
    term: "Batch number",
    hindi: "बैच नंबर",
    aka: ["Lot number"],
    category: "Stock & warehouse",
    short:
      "A batch number identifies a specific production run of a product, allowing stock to be traced by manufacture date, expiry and MRP — essential in food, pharma and any category subject to recall.",
    body: [
      "Batch tracking is what makes expiry management and product recalls possible. Without it, a recall means pulling every unit of an SKU; with it, you pull one batch.",
      "It also handles the practical nuisance of MRP changes, since two batches of the same SKU often carry different printed prices and must be billed accordingly.",
      "Batch depth is one of the clearest dividing lines between software built for pharma and food distribution and software built for general trade — worth testing with your own stock before buying.",
    ],
    related: ["expiry-date", "fifo", "claim", "mrp"],
  },
  {
    slug: "expiry-date",
    term: "Expiry date",
    hindi: "एक्सपायरी डेट",
    category: "Stock & warehouse",
    short:
      "The expiry date is the last date a product may legally be sold or consumed. In distribution it governs picking order, return eligibility and the window for filing an expiry claim.",
    body: [
      "Expiry management is a cash discipline, not a compliance chore. Stock approaching expiry has a declining market value and a hard deadline, so the useful report is not what has expired but what expires in the next sixty to ninety days.",
      "Company return policies are specific about how near to expiry goods may be returned, and the window usually closes well before the printed date. Missing it converts saleable stock into a write-off.",
      "Picking should run expiry-first rather than simply oldest-first, which is why [FEFO](/glossary/fifo) matters more than FIFO in food and pharma distribution.",
    ],
    related: ["batch-number", "fifo", "claim", "dead-stock"],
  },
  {
    slug: "fifo",
    term: "FIFO and FEFO",
    aka: ["First in first out", "First expiry first out"],
    category: "Stock & warehouse",
    short:
      "FIFO issues the oldest-received stock first; FEFO issues the stock closest to expiry first. FEFO is the correct rule wherever goods carry an expiry date.",
    body: [
      "The two usually agree but not always. Stock received later can carry an earlier expiry, in which case FIFO sends the wrong batch out and leaves you holding the one about to die.",
      "Enforcing either rule requires [batch](/glossary/batch-number) visibility at the picking stage, not just in a report. If the picker cannot see which batch to take, the rule exists only on paper.",
      "For non-perishable general trade, FIFO is usually sufficient and simpler. For food, beverages, pharma and cosmetics, FEFO is the one that protects margin.",
    ],
    related: ["batch-number", "expiry-date", "picking-list", "godown"],
  },

  /* ── Billing & GST ───────────────────────────────────────────── */
  {
    slug: "gst-invoice",
    term: "GST invoice",
    hindi: "जीएसटी बिल",
    aka: ["Tax invoice"],
    category: "Billing & GST",
    short:
      "A GST invoice is the tax document a registered supplier issues for a taxable supply, showing GSTIN, HSN code, taxable value and the CGST/SGST or IGST split.",
    body: [
      "It is both a commercial document and a tax one. Your buyer's ability to claim [input tax credit](/glossary/itc) depends on your invoice being correct and, crucially, on it being reported in your returns.",
      "The split follows the place of supply: CGST and SGST within a state, IGST across states. Getting this wrong is one of the most common and most tedious errors to correct later.",
      "Practical discipline matters more than people expect — sequential numbering, correct HSN per line, and the buyer's GSTIN captured accurately. Our [GST invoicing guide for distributors](/blog/gst-invoicing-guide-for-distributors) covers the details.",
    ],
    related: ["gstin", "hsn-code", "itc", "e-invoice"],
  },
  {
    slug: "gstin",
    term: "GSTIN",
    aka: ["GST number"],
    category: "Billing & GST",
    short:
      "A GSTIN is the 15-character identification number issued to every GST-registered business in India, built from the state code, the holder's PAN and a check digit.",
    body: [
      "The structure is readable: the first two digits are the state code, the next ten are the PAN, and the remainder are an entity number, a fixed letter and a checksum. A business registered in several states holds a separate GSTIN per state against the same PAN.",
      "Capturing a customer's GSTIN correctly is not a formality — an incorrect number means your buyer cannot claim credit, and you will hear about it at return-filing time rather than at billing time.",
      "Verifying new parties on the GST portal before extending credit is a cheap habit that doubles as a basic check that the business exists and is active.",
    ],
    related: ["gst-invoice", "itc", "gstr-1", "composition-scheme"],
  },
  {
    slug: "hsn-code",
    term: "HSN code",
    aka: ["Harmonised System of Nomenclature"],
    category: "Billing & GST",
    short:
      "An HSN code is the internationally standardised number classifying a product for taxation, determining the GST rate that applies to it.",
    body: [
      "Every line on a GST invoice needs the correct HSN, and the number of digits required scales with turnover. Getting the classification wrong changes the tax rate, which makes it an error with a direct cash consequence.",
      "For a distributor the practical approach is to set HSN once per SKU in the product master rather than choosing it at billing time. Entering it per invoice guarantees inconsistency across a catalogue of hundreds of items.",
      "When a company revises classification or the GST Council changes a rate, the correction belongs in the master too — otherwise old stock continues to bill at the old rate.",
    ],
    related: ["gst-invoice", "sku", "itc", "gstr-1"],
  },
  {
    slug: "e-way-bill",
    term: "E-way bill",
    hindi: "ई-वे बिल",
    category: "Billing & GST",
    short:
      "An e-way bill is an electronically generated document required for moving goods above a specified value, carrying a unique number that must accompany the consignment in transit.",
    body: [
      "It is triggered by movement rather than by sale, so transfers between your own godowns on a [delivery challan](/glossary/delivery-challan) can need one just as a sale does. Thresholds and intra-state rules vary by state, which is a frequent source of confusion for distributors operating near a border.",
      "Each bill carries a validity period tied to distance, and an expired bill in transit is the most common cause of a vehicle being detained. Where a vehicle changes mid-journey, the transport details need updating.",
      "Our [e-way bill guide for distributors](/blog/e-way-bills-for-distributors) covers the practical workflow, including the cases distributors most often get wrong.",
    ],
    related: ["delivery-challan", "gst-invoice", "e-invoice", "godown"],
  },
  {
    slug: "e-invoice",
    term: "E-invoice",
    aka: ["Electronic invoicing", "IRN"],
    category: "Billing & GST",
    short:
      "E-invoicing is the process of reporting a B2B invoice to the government portal, which validates it and returns an Invoice Reference Number (IRN) and signed QR code.",
    body: [
      "The name is slightly misleading: the invoice is not generated by the portal, it is reported to it. Your software raises the invoice, transmits it, and receives the IRN that makes it valid for your buyer's credit claim.",
      "Applicability is based on aggregate annual turnover, and the threshold has been lowered repeatedly since introduction — a business that was exempt two years ago may not be now, so it is worth re-checking against current turnover rather than assuming.",
      "Where e-invoicing applies, an invoice without a valid IRN is not a valid tax invoice, which means the buyer cannot claim credit on it. Volume limits in some software plans are worth checking before you buy.",
    ],
    related: ["gst-invoice", "e-way-bill", "itc", "gstr-1"],
  },
  {
    slug: "gstr-1",
    term: "GSTR-1",
    category: "Billing & GST",
    short:
      "GSTR-1 is the return in which a registered business reports its outward supplies — the sales data that flows through to each buyer's input tax credit.",
    body: [
      "What you file in GSTR-1 becomes what your customers can claim. An invoice omitted or misreported here surfaces as a buyer's missing credit, which arrives as a phone call rather than a notice.",
      "The return is only as clean as the invoicing behind it, which is why the real work happens at billing time: correct GSTIN, correct HSN, correct place of supply. Exporting from software in the government format is far safer than re-keying.",
      "Our [GSTR-1 filing guide](/blog/gstr1-filing-made-simple) walks through the month-end routine for a distribution business.",
    ],
    related: ["gstr-3b", "gst-invoice", "itc", "gstin"],
  },
  {
    slug: "gstr-3b",
    term: "GSTR-3B",
    category: "Billing & GST",
    short:
      "GSTR-3B is the summary return in which a business declares its outward supplies, claims input tax credit and pays net GST liability for the period.",
    body: [
      "Where GSTR-1 is invoice-level detail, GSTR-3B is the summary on which tax is actually paid. The two must agree, and divergence between them is a standard trigger for departmental queries.",
      "The significant shift in recent years has been the tightening of input credit to what suppliers have actually reported, reducing the scope for manually claiming credit that does not appear in your auto-populated statement. That makes monthly purchase reconciliation a necessity rather than a year-end chore.",
      "Our guide to [GSTR-3B and the Invoice Management System](/blog/gstr-3b-itc-locked-ims-guide) covers what this means in practice for a distributor.",
    ],
    related: ["gstr-1", "itc", "gst-invoice", "credit-note"],
  },
  {
    slug: "itc",
    term: "Input tax credit",
    aka: ["ITC"],
    category: "Billing & GST",
    short:
      "Input tax credit is the GST paid on purchases that a registered business can set off against GST collected on sales, so tax is paid only on the value it adds.",
    body: [
      "ITC is what keeps GST from compounding at every link in the distribution chain. You collect tax on what you sell, deduct the tax you paid on what you bought, and remit the difference.",
      "The claim depends on your supplier having done their part — reported the invoice correctly in their return and paid their tax. Credit has increasingly been locked to what appears in your auto-populated statement, which means a supplier's sloppiness becomes your cash-flow problem.",
      "The practical defence is monthly reconciliation of purchases against the portal rather than annual. By the time a year-end review finds a missing invoice, the window to have the supplier correct it has usually closed.",
    ],
    related: ["gstr-3b", "gstr-1", "gst-invoice", "credit-note"],
  },
  {
    slug: "credit-note",
    term: "Credit note",
    hindi: "क्रेडिट नोट",
    aka: ["Debit note"],
    category: "Billing & GST",
    short:
      "A credit note is issued by a supplier to reduce the value of a previously issued invoice — for returns, rate corrections or post-sale discounts — and adjusts the GST charged along with it.",
    body: [
      "Credit notes are how a distribution business handles the ordinary reality of returns, short supplies and pricing errors without cancelling and reissuing invoices.",
      "A debit note is the mirror image, raising the value of an earlier invoice where goods were under-billed. Both must reference the original invoice and be reported in returns to adjust tax correctly.",
      "There is a timing limit on credit notes that carry a tax adjustment, after which a commercial credit can still be given but the GST element cannot be recovered — a good reason to process returns promptly rather than in batches.",
    ],
    related: ["gst-invoice", "itc", "gstr-1", "claim"],
  },
  {
    slug: "composition-scheme",
    term: "Composition scheme",
    category: "Billing & GST",
    short:
      "The composition scheme lets small businesses under a turnover threshold pay GST at a flat rate on turnover with simplified returns, but they cannot collect GST from customers or claim input tax credit.",
    body: [
      "It is designed for small retailers and traders who want simplicity rather than optimisation. The trade-off is strict: no [input tax credit](/glossary/itc), and no tax collected on your invoices.",
      "That makes composition dealers awkward customers for a distributor to sell to in one respect — they cannot claim credit on what they buy from you, so the GST you charge is a real cost to them rather than a pass-through.",
      "A composition dealer issues a bill of supply rather than a tax invoice, and must state on it that they are not eligible to collect tax.",
    ],
    related: ["itc", "gst-invoice", "gstin", "gstr-1"],
  },

  /* ── Money & credit ──────────────────────────────────────────── */
  {
    slug: "udhaar",
    term: "Udhaar",
    hindi: "उधार",
    aka: ["Credit sale", "Khata"],
    category: "Money & credit",
    short:
      "Udhaar is goods sold on credit, with payment promised later — the default trading practice between Indian distributors and retailers, and the largest single use of a distributor's working capital.",
    body: [
      "Udhaar is not a failure of discipline; it is how the trade works. A retailer sells your stock before paying for it, which is what lets a small shop carry a wide range. The failure is leaving it unmeasured.",
      "Three numbers make udhaar manageable: the total parked in credit across all parties, the age of each balance, and the limit beyond which a party gets no further supply. Distributors who track all three lend about the same amount but lose far less of it.",
      "Our [udhaar recovery playbook](/blog/recover-udhaar-pending-payments-india) sets out a four-step escalation ladder, including the WhatsApp templates that do most of the work.",
    ],
    related: ["outstanding", "aging", "credit-limit", "collection"],
  },
  {
    slug: "outstanding",
    term: "Outstanding",
    hindi: "बकाया",
    aka: ["Receivables", "Balance due"],
    category: "Money & credit",
    short:
      "Outstanding is the total amount customers owe a business at a point in time — the money already earned on paper but not yet received in the bank.",
    body: [
      "For a distributor, outstanding is usually the second-largest asset after stock, and the one most likely to be misjudged. A party-wise ledger that updates with every bill and every receipt is the difference between knowing and guessing.",
      "The useful view is never the total alone. ₹8 lakh outstanding with nothing over thirty days is a healthy business; the same ₹8 lakh with ₹3 lakh over ninety days is a problem that has been accumulating quietly.",
      "Because margins are thin, outstanding is also an interest cost even when it is eventually collected — money sitting in the market is money not rotating.",
    ],
    related: ["aging", "udhaar", "credit-limit", "collection"],
  },
  {
    slug: "aging",
    term: "Ageing report",
    aka: ["Aging analysis", "Debtor ageing"],
    category: "Money & credit",
    short:
      "An ageing report groups outstanding balances by how long they have been due — typically 0–30, 31–60, 61–90 and 90+ days — showing not just how much is owed but how long it has been owed.",
    body: [
      "The ageing buckets are where collection priorities come from. Money in the 90+ column is both the least likely to be recovered and the most expensive to carry, so it is where the week's chasing should start.",
      "Reading ageing by party rather than in total is what makes it actionable: one shop drifting from fifteen days to forty-five is an early warning that is invisible in a summary figure.",
      "A rising average age across many parties usually signals a market-wide squeeze rather than individual bad behaviour, and calls for tightening [credit limits](/glossary/credit-limit) before it compounds.",
    ],
    related: ["outstanding", "credit-limit", "udhaar", "collection"],
  },
  {
    slug: "credit-limit",
    term: "Credit limit",
    category: "Money & credit",
    short:
      "A credit limit is the maximum outstanding a business allows a particular customer to carry before further supply is withheld.",
    body: [
      "Limits turn credit from a relationship question into a rule, which is their real value. A salesman declining an order because the system shows a party over limit is a far easier conversation than the owner demanding payment later.",
      "Two complementary controls are worth setting together: a value limit and a days limit. A party within its rupee limit but ninety days overdue is still a problem, and only the days limit catches it.",
      "Limits should be reviewed as parties grow or deteriorate. A limit set at appointment and never revisited is either throttling a good customer or quietly funding a bad one.",
    ],
    related: ["outstanding", "aging", "udhaar", "collection"],
  },
  {
    slug: "collection",
    term: "Collection",
    hindi: "वसूली",
    aka: ["Recovery"],
    category: "Money & credit",
    short:
      "Collection is the process of recovering payment against credit sales — in Indian distribution usually done in person on the beat, in cash, cheque or UPI.",
    body: [
      "Collection works best as a routine rather than a reaction. Fixed collection days, a list produced from the [ageing report](/glossary/aging) rather than from memory, and a receipt recorded against specific invoices at the moment money changes hands.",
      "Recording against specific invoices rather than as a lump credit to the party is what keeps ageing meaningful. Lump receipts make it impossible to tell which bills are actually old.",
      "Where normal collection fails, the escalation path runs through written statements, a formal demand, and — for a dishonoured cheque — the remedies under Section 138. Our [recovery playbook](/blog/recover-udhaar-pending-payments-india) sets out the sequence and timelines.",
    ],
    related: ["aging", "outstanding", "cheque-bounce", "udhaar"],
  },
  {
    slug: "cheque-bounce",
    term: "Cheque bounce",
    aka: ["Dishonoured cheque", "Section 138"],
    category: "Money & credit",
    short:
      "A cheque bounce is a cheque returned unpaid by the bank, most often for insufficient funds. In India it is a criminal offence under Section 138 of the Negotiable Instruments Act, subject to strict notice timelines.",
    body: [
      "The remedy is time-bound and unforgiving of delay. A written demand notice must be sent within a defined window of the bank's return memo, the drawer gets a period to pay, and a complaint may be filed only within a further window after that.",
      "The practical point is that the clock starts at the bank's return memo, not when you get around to dealing with it. Distributors lose the remedy routinely by letting weeks pass while chasing informally.",
      "Even where you have no intention of prosecuting, sending the notice correctly changes the conversation, which is why it sits on the escalation ladder in our [udhaar recovery guide](/blog/recover-udhaar-pending-payments-india).",
    ],
    related: ["collection", "outstanding", "udhaar", "aging"],
  },
  {
    slug: "bahi-khata",
    term: "Bahi khata",
    hindi: "बही खाता",
    aka: ["Khata", "Ledger book"],
    category: "Money & credit",
    short:
      "A bahi khata is the traditional handwritten ledger used by Indian traders to record party-wise sales, receipts and outstanding balances.",
    body: [
      "The bahi khata is not primitive — it is a genuinely effective single-entry system that has run Indian trade for generations, and it has one great virtue: the owner trusts it because he wrote it.",
      "Its limits are practical rather than conceptual. It cannot be in two places at once, it cannot be [aged](/glossary/aging) without recopying, it cannot be backed up, and it cannot tell you anything about stock.",
      "The useful transition is not to abandon it but to replicate what it does well — party-wise balances the owner can see at a glance — while adding what it cannot do, which is ageing, stock linkage and a copy that survives a flood.",
    ],
    related: ["udhaar", "outstanding", "aging", "collection"],
  },
];

/* ── Helpers ─────────────────────────────────────────────────── */

export const TERMS_SORTED = [...TERMS].sort((a, b) => a.term.localeCompare(b.term));

export function getTerm(slug: string) {
  return TERMS.find((t) => t.slug === slug);
}

export function termsByCategory(category: GlossaryCategory) {
  return TERMS_SORTED.filter((t) => t.category === category);
}

/** Related terms for a given term, falling back to others in the same category. */
export function relatedTerms(slug: string, limit = 4): GlossaryTerm[] {
  const term = getTerm(slug);
  if (!term) return [];
  const explicit = (term.related ?? [])
    .map(getTerm)
    .filter((t): t is GlossaryTerm => Boolean(t) && t!.slug !== slug);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const fill = termsByCategory(term.category).filter(
    (t) => t.slug !== slug && !explicit.some((e) => e.slug === t.slug),
  );
  return [...explicit, ...fill].slice(0, limit);
}

/** Strip inline [label](href) markup for use in schema.org text fields. */
export function plainTerm(x: string) {
  return x.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
