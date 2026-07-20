import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { SITE } from "@/lib/site";
import { POSTS_BY_DATE } from "@/lib/content/blog";

const APP_DIR = path.join(process.cwd(), "src", "app");
const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

type StaticRoute = { route: string; lastModified: Date };

// Walk src/app and collect every folder that renders a page. New pages are
// picked up automatically — no edits to this file needed when a page is added.
function collectRoutes(dir: string, segments: string[], out: StaticRoute[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const pageFile = entries.find((e) => e.isFile() && PAGE_FILE.test(e.name));
  if (pageFile) {
    const route = "/" + segments.join("/");
    out.push({
      route: route === "/" ? "" : route,
      lastModified: fs.statSync(path.join(dir, pageFile.name)).mtime,
    });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip dynamic [slug] (handled per-content below), parallel @slots, private _folders.
    if (name.startsWith("[") || name.startsWith("@") || name.startsWith("_")) continue;
    // Route groups (group) organize files without adding a URL segment.
    const isGroup = name.startsWith("(") && name.endsWith(")");
    collectRoutes(path.join(dir, name), isGroup ? segments : [...segments, name], out);
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: StaticRoute[] = [];
  collectRoutes(APP_DIR, [], routes);
  routes.sort((a, b) => a.route.localeCompare(b.route));

  const staticEntries: MetadataRoute.Sitemap = routes.map(({ route, lastModified }) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = POSTS_BY_DATE.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
