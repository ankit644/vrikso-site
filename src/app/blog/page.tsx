import type { Metadata } from "next";
import BlogListing from "@/components/blog-listing";
import { BLOG_INDEX } from "@/lib/content/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Field notes for Indian trade",
  description: BLOG_INDEX.sub,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Vrikso Journal",
    description: BLOG_INDEX.sub,
    type: "website",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return <BlogListing page={1} />;
}
