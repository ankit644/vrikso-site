import { SITE } from "@/lib/site";
import { PLANS } from "@/lib/content/pricing";

/** Renders a schema.org JSON-LD block. `<` is escaped per the Next.js
    JSON-LD guide to keep the payload XSS-safe. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: "Vrikso",
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/brand/vrikso-logo-512.png`,
    width: 512,
    height: 512,
  },
  description:
    "Cloud CRM and GST billing software for Indian distributors, wholesalers, retailers and restaurants. Orders, invoicing, stock and payments from any phone — no desktop installation, no licence fee, no AMC.",
  email: SITE.supportEmail,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SITE.supportEmail,
    availableLanguage: ["English", "Hindi"],
  },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: Object.values(SITE.socials),
};

export const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: "Vrikso",
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#organization` },
};

/** SoftwareApplication with the published plans as offers. Pass a vertical's
    name/description/path, or omit for the platform-level entity. */
export function softwareApplication(opts?: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts?.name ?? "Vrikso",
    description:
      opts?.description ??
      "Cloud CRM and GST billing platform for Indian trade — distribution, billing and restaurant management from any phone or laptop.",
    url: opts ? `${SITE.url}${opts.path}` : SITE.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser — Android, iOS, desktop)",
    inLanguage: ["en", "hi"],
    publisher: { "@id": `${SITE.url}/#organization` },
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: `${p.name} plan`,
      price: p.priceINR,
      priceCurrency: "INR",
      description:
        p.priceINR === 0 ? `${p.pitch} Free forever.` : `${p.pitch} ${p.price} per month.`,
      url: `${SITE.url}/pricing`,
      availability: "https://schema.org/InStock",
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
