import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { SUPER_STOCKIST } from "@/lib/content/verticals/super-stockist";

export const metadata: Metadata = {
  title: SUPER_STOCKIST.metaTitle,
  description: SUPER_STOCKIST.metaDescription,
  alternates: { canonical: "/super-stockist-software" },
};

export default function SuperStockistSoftwarePage() {
  return <VerticalPage v={SUPER_STOCKIST} />;
}
