# LinkedIn Company Page — copy-paste pack

Status as of **2026-11-27**: ✅ **LIVE — `linkedin.com/company/vrikso`** (id 144186321).

Created from Ankit's real, already-identity-verified personal profile
(`linkedin.com/in/ankit-kumar-singh-6a7a031b7`), which is the Page's super admin.
Admins are never shown publicly, so the Page reads purely as Vrikso.

**How we got here (keep this — it explains a dead end that looks like a bug):** the
first attempt used the brand-named profile `linkedin.com/in/vrikso-erp-085940417`
("Vrikso ERP", logo as profile photo, no Experience entry). LinkedIn hard-blocked
Page creation from it — *"Please verify your workplace before creating a LinkedIn
Page"* — offering only government-ID identity verification, which would have failed
anyway since Persona matches the ID name against the profile name. Switching to the
real-name account cleared the gate instantly, with no verification prompt at all.

⚠️ **Still outstanding:** `vrikso-erp-085940417` remains a company-named personal
profile. That violates LinkedIn's User Agreement and risks account restriction; it is
a separate account from the Page's admin, so a restriction would not take the Page
down, but it should still be renamed to a real person or closed.

**What is filled in:** logo, banner, name, URL slug, tagline, 1,700-char overview,
website, industry, size, type, phone, year founded, 20 specialties, Gurugram HQ.

### Image assets — both generated, both live

Scripts rely on the project's own `sharp` (0.34.5 in `node_modules`). There is no
system ImageMagick and no Python PIL, and `pip install` is blocked by PEP 668, so run
node from the repo root or with
`NODE_PATH=/Users/ankitkumarsingh/vrikso-site/node_modules`.

**Logo → `~/Desktop/vrikso-listing-assets/linkedin-logo-800.png` (800×800).**
The original `logo-512.png` has **fully transparent corners** (alpha 0 at every
corner) because the mark sits on a rounded-square plate. LinkedIn composites that onto
white, so the Page logo showed white wedges at each corner. Fix = full-bleed plate
with **square** corners, brand gradient `#8238EC → #8F34EB` (sampled from the original),
white mark isolated via the green channel (purple g≈56, white g=255) and recentred at
56% of the canvas. Generator: `scratchpad/make-logo.js`.

**Banner → `~/Desktop/vrikso-listing-assets/linkedin-banner.png` (1128×191).**
The supplied artwork was **2170×725 (2.99:1)**; LinkedIn page covers are **1128×191
(5.9:1)**. Uploading it raw made LinkedIn centre-crop it, which cut the top of the
"Vrikso" wordmark and the entire `support@vrikso.com` contact pill. Fix = pad
horizontally to 4282×725 with white (the artwork's background is white, 253–255, at
nearly every edge) **before** resizing — note sharp applies `extend` *after* `resize`,
so this needs two passes. Padding is split **66% left / 34% right** so the design sits
right of centre, clear of the Page logo overlay that LinkedIn draws over the lower
left of the banner.

> If the banner is ever redesigned, export it at **1128×191 natively** and all of this
> goes away.

**Remaining, in priority order:**
1. **Domain verification** — the Page dashboard is prompting *"Add a valid email
   domain"*. Use **support@vrikso.com** to verify `vrikso.com`. This is what ties the
   Page to the site for Google and AI assistants, and is the only place the support
   address belongs (LinkedIn Pages have no contact-email field).
2. **Followers** — the Page has 0. Ankit has 50/50 free invite credits on the Page.
3. **Link the Page** from the site footer and from `Organization` JSON-LD `sameAs`.
4. **People tab is empty** — it is populated by Experience entries naming Vrikso, not
   by admin status, so it stays empty until someone lists Vrikso as their employer.

## Routes investigated 2026-11-27 — two of three are dead

1. **Convert the profile into a Page — DOES NOT EXIST.** LinkedIn help
   (`/help/linkedin/answer/a6204405`): *"You must have a LinkedIn profile to create a
   Page, and you can't convert a profile into a Page."* There is no tool, no support
   request, no domain-email workflow. Advice to "make an account on the company domain
   then convert it" is false — following it just creates a second policy-violating
   profile. LinkedIn's prescribed fix is verbatim: *"update the profile name to your
   real name and create a new LinkedIn Page to represent your organization instead,
   before your LinkedIn profile becomes restricted."*
   ⚠️ Same article: representing an org with a profile means LinkedIn *"may
   automatically log you out"*, and *"repeat or prolonged violations ... may lead to
   your LinkedIn account being restricted."* A restriction would also take down any
   Page admined by that account.
2. **Claim an auto-generated Listing Page — NOTHING TO CLAIM.** LinkedIn company search
   for "vrikso" returns *No results found* (checked 2026-11-27). No listing page exists.
3. **Create a Page from a real-name, identity-verified profile — THE ONLY ROUTE.**

**Documented requirements to create a Page** (`/help/linkedin/answer/a543852`) — note
what is *not* on the list, since this is a recurring source of confusion:
- LinkedIn account: required
- Tick "I verify that I'm authorised to create this Page": required
- Desktop or iOS only — **Page creation is not supported on Android**
- **No minimum employee count. No company-domain email. No stated connection count or
  profile age.** Eligibility is not the blocker — account standing is.

---

All copy below is derived from `directory-listings.md` — keep the two in sync so the
NAP and wording stay byte-identical across every listing.

---

## 1. Page setup fields

| LinkedIn field | Value |
| --- | --- |
| Name | `Vrikso` |
| LinkedIn public URL | `linkedin.com/company/vrikso` |
| Website | `https://vrikso.com` |
| Industry | Software Development |
| Company size | 2-10 employees |
| Company type | Privately Held |
| Logo | `~/Desktop/vrikso-listing-assets/logo-512.png` (512×512, min is 300×300) |
| Tagline | see below |
| Founded | 2026 |
| Phone | +91 92201 67969 |
| Location | Gurugram, Haryana, India |
| Custom button | **Visit website** → `https://vrikso.com` |

> **Note on the email:** LinkedIn Pages have no dedicated "contact email" field in the
> setup flow. `support@vrikso.com` goes in two places instead — inside the About text
> (last block, below), and as the address used for **domain verification**, which is
> what actually ties the Page to `vrikso.com`.

> **Note on the name:** registered legal entity name is still a TODO in
> `directory-listings.md`. If the GST/Udyam name is not plain "Vrikso", the Page name
> can stay "Vrikso" (it is the brand), but the D-U-N-S and Play payments profile must
> carry the registered name exactly.

---

## 2. Tagline (LinkedIn max 120 characters)

```
Trade software for Indian distributors, shops, restaurants and jewellers. GST billing, orders, stock. From ₹0.
```

---

## 3. About / Overview (LinkedIn max 2,000 characters)

```
Vrikso is cloud business software for Indian trade, built inside a real FMCG
distribution business rather than adapted from a generic accounting package.

One platform takes the shape of four trades:

• Distribution — salesmen book orders on the beat from any phone, the godown gets
picking and loading lists, scheme discounts apply automatically, and every delivery
becomes a GST invoice.
• Billing — fast GST invoicing with estimates, recurring invoices, party ledgers and
GSTR-1 export in the government format.
• Restaurant — a phone-first POS with tables, KOTs, a kitchen board and aggregator
orders.
• Jewellery — HUID tagging, daily metal rates, making and wastage, old-gold exchange,
monthly schemes, girvi loans and karigar work.

What shopkeepers and distributors actually get: order booking in about 90 seconds
even on a slow network, routes and beats per salesman, offline order entry, stock and
purchase entry without double handling, payments against invoices with a per-party
ledger, an aging report that shows where money is stuck, WhatsApp payment reminders
with a UPI link, and reports your CA can use.

Vrikso runs on Android, iPhone and computer, switches every screen between English
and हिन्दी, and backs up to the cloud daily. Setup takes about ten minutes — no dealer
visit, no on-premise server, no AMC.

Pricing is published openly, which is unusual in this category:
• Free — ₹0 forever, 1 user
• Shop — ₹349/month (₹2,999/year), 3 users
• Business — ₹999/month (₹8,999/year), 10 users, extra users ₹119/month
All prices exclude GST. Free trial, no card required.

Website: https://vrikso.com
Login: https://app.vrikso.com
Support: support@vrikso.com
Phone: +91 92201 67969
```

---

## 4. Specialties (LinkedIn allows up to 20)

```
Distribution Management Software
FMCG Distribution
Order Booking App
GST Billing Software
Invoicing
Inventory Management
Warehouse Picking Lists
Scheme Discounts
Party Ledger
Outstanding & Collections
Restaurant POS
KOT & Kitchen Display
Jewellery Software
HUID Tagging
Girvi Loans
GSTR-1 Export
WhatsApp Invoicing
Beat & Route Planning
Secondary Sales
Wholesale Billing
```

---

## 5. After the Page exists

- Add `support@vrikso.com` as a Page admin alias is **not** possible — LinkedIn admins
  are personal profiles only. Add a second real person as admin so access is not tied
  to one account.
- Link the Page from the site footer and from `Organization` JSON-LD `sameAs`.
- Add the Page to the Experience entry on the founder profile, so the logo renders on
  the personal profile and the two reinforce each other.
- Post cadence matters more than the Page: LinkedIn suppresses Page posts in the feed.
  Founder-profile posts that mention the Page reach far more people.
