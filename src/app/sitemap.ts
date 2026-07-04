import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS_BY_DATE } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/distribution", "/billing", "/restaurant", "/pricing", "/contact", "/blog", "/privacy", "/terms"];
  const staticEntries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${SITE.url}${p}`,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/blog" ? 0.8 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = POSTS_BY_DATE.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
