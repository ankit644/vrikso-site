import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { RESTAURANT } from "@/lib/content/verticals/restaurant";

export const metadata: Metadata = {
  title: RESTAURANT.metaTitle,
  description: RESTAURANT.metaDescription,
};

export default function RestaurantPage() {
  return <VerticalPage v={RESTAURANT} />;
}
