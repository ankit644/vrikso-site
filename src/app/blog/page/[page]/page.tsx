import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing, { BLOG_TOTAL_PAGES } from "@/components/blog-listing";
import { BLOG_INDEX } from "@/lib/content/blog";
import { SITE } from "@/lib/site";

// Pages 2..N — page 1 is served at /blog.
export function generateStaticParams() {
  return Array.from({ length: Math.max(0, BLOG_TOTAL_PAGES - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  return {
    title: `Blog — page ${n} · Field notes for Indian trade`,
    description: BLOG_INDEX.sub,
    alternates: { canonical: `/blog/page/${n}` },
    openGraph: {
      title: `The Vrikso Journal — page ${n}`,
      description: BLOG_INDEX.sub,
      type: "website",
      url: `${SITE.url}/blog/page/${n}`,
    },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = Number(page);
  // Only whole numbers 2..N are real pages; page 1 lives at /blog.
  if (!Number.isInteger(n) || n < 2 || n > BLOG_TOTAL_PAGES) notFound();
  return <BlogListing page={n} />;
}
