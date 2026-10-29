import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { FMCG } from "@/lib/content/verticals/fmcg";

export const metadata: Metadata = {
  title: FMCG.metaTitle,
  description: FMCG.metaDescription,
};

export default function FmcgDistributorAppPage() {
  return <VerticalPage v={FMCG} />;
}
