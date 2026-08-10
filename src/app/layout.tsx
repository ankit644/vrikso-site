import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { JsonLd, ORGANIZATION, WEBSITE } from "@/lib/jsonld";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Vrikso — One platform. Every business.",
    template: "%s — Vrikso",
  },
  description:
    "Cloud CRM for Indian distributors, wholesalers and retailers. Orders, GST billing, stock and payments — all from your phone.",
  openGraph: {
    siteName: "Vrikso",
    type: "website",
    images: ["/brand/vrikso-logo-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          cz-shortcut-listen) inject attributes into <body> before React
          hydrates; only this element's attribute diffs are ignored. */}
      <body suppressHydrationWarning>
        <JsonLd data={ORGANIZATION} />
        <JsonLd data={WEBSITE} />
        {children}
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
