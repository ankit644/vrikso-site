import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import BlogCover from "@/components/blog-cover";
import { BLOG_INDEX, POSTS_BY_DATE, CATEGORIES, formatDate } from "@/lib/content/blog";
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
  const [featured, ...rest] = POSTS_BY_DATE;

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="hero-night grain relative overflow-hidden text-on-hero">
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <p className="rise rule-label text-on-hero-dim">{BLOG_INDEX.eyebrow}</p>
            <h1 className="font-display display-lg rise mt-6 max-w-3xl font-medium" style={d(120)}>
              {BLOG_INDEX.title}{" "}
              <em className="text-brand-gradient not-italic">{BLOG_INDEX.titleAccent}</em>
            </h1>
            <p className="rise mt-5 max-w-2xl text-base leading-relaxed text-on-hero-dim sm:text-lg" style={d(240)}>
              {BLOG_INDEX.sub}
            </p>
            <div className="rise mt-8 flex flex-wrap gap-2" style={d(360)}>
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-on-hero-dim"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid items-center gap-8 overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-[320px]">
                  <BlogCover cover={featured.cover} category={featured.category} className="h-full transition-transform duration-500 group-hover:scale-[1.04]" priority />
                </div>
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-3 text-xs font-medium text-ink-faint">
                    <span className="rounded-full bg-lilac px-2.5 py-1 font-semibold text-violet-deep">{featured.category}</span>
                    <span>{formatDate(featured.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{featured.readMins} min read</span>
                  </div>
                  <h2 className="font-display mt-4 text-2xl leading-snug font-medium md:text-3xl">{featured.title}</h2>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">{featured.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-violet-deep">
                    Read article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <Reveal>
              <p className="rule-label text-violet-deep">All articles</p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 90}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <BlogCover cover={post.cover} category={post.category} className="h-full transition-transform duration-500 group-hover:scale-[1.05]" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2.5 text-[0.72rem] font-medium text-ink-faint">
                        <span className="font-semibold text-violet-deep">{post.category}</span>
                        <span aria-hidden>·</span>
                        <span>{post.readMins} min</span>
                      </div>
                      <h3 className="font-display mt-2.5 text-lg leading-snug font-medium">{post.title}</h3>
                      <p className="mt-2 line-clamp-3 text-[0.9rem] leading-relaxed text-ink-soft">{post.description}</p>
                      <span className="mt-auto pt-5 text-sm font-semibold text-violet-deep">
                        Read
                        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function d(ms: number) {
  return { ["--rise-delay" as string]: `${ms}ms` };
}
