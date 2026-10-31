import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { DISTRIBUTION } from "@/lib/content/verticals/distribution";

export const metadata: Metadata = {
  title: DISTRIBUTION.metaTitle,
  description: DISTRIBUTION.metaDescription,
  alternates: { canonical: "/distribution" },
};

export default function DistributionPage() {
  return <VerticalPage v={DISTRIBUTION} />;
}
