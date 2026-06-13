import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
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
      className={`${fraunces.variable} ${schibsted.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
