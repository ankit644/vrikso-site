import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { DISTRIBUTION } from "@/lib/content/verticals/distribution";

export const metadata: Metadata = {
  title: DISTRIBUTION.metaTitle,
  description: DISTRIBUTION.metaDescription,
};

export default function DistributionPage() {
  return <VerticalPage v={DISTRIBUTION} />;
}
