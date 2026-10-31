import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { WHOLESALE } from "@/lib/content/verticals/wholesale";

export const metadata: Metadata = {
  title: WHOLESALE.metaTitle,
  description: WHOLESALE.metaDescription,
  alternates: { canonical: "/wholesale-billing-software" },
};

export default function WholesaleBillingSoftwarePage() {
  return <VerticalPage v={WHOLESALE} />;
}
