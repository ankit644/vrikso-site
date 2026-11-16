import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { JEWELLERY } from "@/lib/content/verticals/jewellery";

export const metadata: Metadata = {
  title: JEWELLERY.metaTitle,
  description: JEWELLERY.metaDescription,
  alternates: { canonical: "/jewellery-software" },
};

export default function JewellerySoftwarePage() {
  return <VerticalPage v={JEWELLERY} />;
}
