import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import BlogCover from "@/components/blog-cover";
import { POSTS, getPost, relatedPosts, formatDate, type BlogBlock } from "@/lib/content/blog";
import { SITE, waLink } from "@/lib/site";

import shotOrder from "../../../../public/app/m-order-new.png";
import shotInvoice from "../../../../public/app/m-invoice.png";
import shotAging from "../../../../public/app/m-aging.png";
import shotProducts from "../../../../public/app/m-products.png";
import shotDashboardD from "../../../../public/app/d-dashboard.png";

const SHOTS: Record<string, { src: StaticImageData; portrait: boolean }> = {
  order: { src: shotOrder, portrait: true },
  invoice: { src: shotInvoice, portrait: true },
  aging: { src: shotAging, portrait: true },
  products: { src: shotProducts, portrait: true },
  dashboard: { src: shotDashboardD, portrait: false },
};

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Vrikso",
      logo: { "@type": "ImageObject", url: `${SITE.url}/brand/vrikso-logo-512.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${post.slug}` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* Article header */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-3xl px-4 pt-12 pb-10 sm:px-6 md:pt-16">
            <Link href="/blog" className="text-sm font-medium text-ink-faint transition-colors hover:text-ink">
              ← All articles
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-ink-faint">
              <span className="rounded-full bg-lilac px-2.5 py-1 font-semibold text-violet-deep">{post.category}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readMins} min read</span>
            </div>
            <h1 className="font-display mt-5 text-3xl leading-[1.12] font-medium md:text-[2.9rem]">{post.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.description}</p>
            <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
              <span className="bg-brand-gradient grid h-9 w-9 place-items-center rounded-full text-xs font-bold text-white">V</span>
              <span className="text-sm font-medium text-ink">{post.author}</span>
            </div>
          </div>
        </section>

        {/* Cover */}
        <div className="bg-paper">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="relative -mb-px aspect-[16/8] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-lg)]">
              <BlogCover cover={post.cover} category={post.category} className="h-full" priority />
            </div>
          </div>
        </div>

        {/* Body */}
        <article className="bg-paper">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {/* tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-line bg-paper-2 px-3 py-1 text-xs font-medium text-ink-soft">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* CTA band */}
        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl leading-tight font-medium md:text-3xl">
              Run your distribution business from your phone.
            </h2>
            <p className="mt-3 text-on-hero-dim">Orders, GST billing, stock and collections — one clean app.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={SITE.appUrl} className="btn-primary">Start free</a>
              <a href={waLink("Hi! I read your blog and want a demo of Vrikso.")} className="btn-ghost-light">WhatsApp demo</a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <p className="rule-label text-violet-deep">Keep reading</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <BlogCover cover={r.cover} category={r.category} className="h-full transition-transform duration-500 group-hover:scale-[1.05]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[0.72rem] font-semibold text-violet-deep">{r.category}</span>
                    <h3 className="font-display mt-2 text-lg leading-snug font-medium">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Body block renderer ── */
function Block({ block }: { block: BlogBlock }) {
  switch (block.t) {
    case "h2":
      return <h2 className="font-display mt-12 mb-4 text-2xl leading-snug font-medium">{block.x}</h2>;
    case "p":
      return <p className="mt-5 text-[1.05rem] leading-[1.8] text-ink-soft first:mt-0">{block.x}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((it) => (
            <li key={it} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="font-display my-8 border-l-2 border-violet pl-5 text-xl leading-snug text-ink italic">
          {block.x}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="my-8 rounded-[var(--radius-card)] border border-lilac-line bg-lilac px-6 py-5">
          <p className="text-[1rem] leading-relaxed font-medium text-ink">{block.x}</p>
        </aside>
      );
    case "shot": {
      const shot = SHOTS[block.name];
      if (!shot) return null;
      return (
        <figure className="my-10">
          <div className={`mx-auto overflow-hidden rounded-[var(--radius-card)] ${shot.portrait ? "max-w-[280px] shadow-[var(--shadow-lg)]" : "border border-line shadow-[var(--shadow-md)]"}`}>
            <Image src={shot.src} alt={block.cap ?? "Vrikso app screenshot"} sizes="(min-width: 768px) 600px, 90vw" className="block h-auto w-full" />
          </div>
          {block.cap && <figcaption className="mt-3 text-center text-sm text-ink-faint">{block.cap}</figcaption>}
        </figure>
      );
    }
    default:
      return null;
  }
}
