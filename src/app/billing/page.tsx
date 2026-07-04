import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { BILLING } from "@/lib/content/verticals/billing";

export const metadata: Metadata = {
  title: BILLING.metaTitle,
  description: BILLING.metaDescription,
};

export default function BillingPage() {
  return <VerticalPage v={BILLING} />;
}
