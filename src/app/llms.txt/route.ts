import { SITE } from "@/lib/site";
import { DISTRIBUTION } from "@/lib/content/verticals/distribution";
import { BILLING } from "@/lib/content/verticals/billing";
import { RESTAURANT } from "@/lib/content/verticals/restaurant";
import { PLANS, PRICING_FAQS } from "@/lib/content/pricing";
import { POSTS_BY_DATE } from "@/lib/content/blog";
import type { VerticalContent } from "@/components/vertical-page";

export const dynamic = "force-static";

/** llms.txt — a plain-text site summary for AI assistants and crawlers
    (https://llmstxt.org). Built from the same content files as the pages,
    so it stays in sync automatically. */

const VERTICALS: VerticalContent[] = [DISTRIBUTION, BILLING, RESTAURANT];

function vertical(v: VerticalContent) {
  const lines = [
    `### [${v.metaTitle}](${SITE.url}/${v.slug})`,
    "",
    v.metaDescription,
    "",
    "Key features:",
    ...v.features.map((f) => `- ${f.h}: ${f.p}`),
    "",
    "Frequently asked questions:",
    ...v.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`),
  ];
  return lines.join("\n");
}

export function GET() {
  const text = `# Vrikso

> Cloud CRM and GST billing software for Indian trade — distributors, wholesalers, retailers and restaurants. Everything runs in the browser on any phone or laptop: orders, GST invoicing, stock, payments and outstanding. No desktop installation, no licence fee, no AMC. Free plan available; paid plans ₹299/month (Shop) and ₹799/month (Business). Built inside a real FMCG distribution business.

- Website: ${SITE.url}
- Web app (free signup): ${SITE.appUrl}
- Support: ${SITE.supportEmail}
- Languages: English and Hindi (हिन्दी)
- Market: India (GST-compliant invoicing, GSTR-1 export, e-way bill workflows)

## Products

${VERTICALS.map(vertical).join("\n\n")}

## Pricing

All plans include hosting, automatic backups, updates and support. No setup fee, licence fee or AMC. Full details: ${SITE.url}/pricing

${PLANS.map((p) => `- ${p.name} — ${p.price}${p.per === "forever" ? " forever" : p.per}: ${p.pitch} Includes ${p.features.join(", ")}.`).join("\n")}

${PRICING_FAQS.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}

## Guides & articles

Practical guides for Indian distributors, wholesalers, retailers and restaurants: ${SITE.url}/blog

${POSTS_BY_DATE.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}): ${p.description}`).join("\n")}

## Contact

- Try it free: ${SITE.appUrl}
- Pricing: ${SITE.url}/pricing
- Contact & demo: ${SITE.url}/contact
- Email: ${SITE.supportEmail}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
