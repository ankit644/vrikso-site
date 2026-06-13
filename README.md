# vrikso-site

Marketing website for **Vrikso** (vrikso.com) — fully static Next.js + Tailwind v4.
The product (CRM) lives in the separate `My-business-crm` repo and deploys to
`app.vrikso.com`. Architecture of record: `My-business-crm/docs/ECOSYSTEM.md`.

## Rules

- **Static only.** No database, no auth, no server code in the request path.
- **Content lives in `src/lib/content/`**, not in JSX. A new vertical page =
  one new data file in `src/lib/content/verticals/` rendered by
  `src/components/vertical-page.tsx`.
- **English only** (owner decision, 2026-06-13). The product app itself is EN/HI.
- Brand tokens in `src/app/globals.css` and `src/components/logo.tsx` are
  mirrors of the app repo — keep in sync by hand.
- Update `src/lib/site.ts` for the WhatsApp number / support email / app URL.

## Pages

`/` home · `/distribution` flagship vertical · `/pricing` · `/contact` ·
`/privacy` · `/terms` · `sitemap.xml` · `robots.txt`

## Develop

```bash
npm install
npm run dev          # local
npx tsc --noEmit && npm run lint && npm run build   # gates before push
```

Deploys via Vercel on push to main; every branch push gets a preview URL.
