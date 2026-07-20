import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import PostCover from "@/components/post-cover";
import { BLOG_INDEX, POSTS_BY_DATE, CATEGORIES, formatDate, BLOG_PAGE_SIZE, BLOG_PAGE_COUNT } from "@/lib/content/blog";

export const BLOG_TOTAL_PAGES = BLOG_PAGE_COUNT;

/** Page 1 lives at /blog; later pages at /blog/page/N. */
export function blogPageHref(n: number) {
  return n <= 1 ? "/blog" : `/blog/page/${n}`;
}

/** Shared blog index, rendered by both /blog and /blog/page/[page]. */
export default function BlogListing({ page }: { page: number }) {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  const pagePosts = POSTS_BY_DATE.slice(start, start + BLOG_PAGE_SIZE);

  // The newest post gets a large featured card — but only on page 1.
  const featured = page === 1 ? pagePosts[0] : undefined;
  const gridPosts = featured ? pagePosts.slice(1) : pagePosts;

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

        {/* Featured (page 1 only) */}
        {featured && (
          <section className="border-b border-line bg-paper">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
              <Reveal>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid items-center gap-8 overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] md:grid-cols-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-[320px]">
                    <PostCover image={featured.image} cover={featured.cover} category={featured.category} alt={featured.title} sizes="(min-width: 768px) 50vw, 100vw" className="transition-transform duration-500 group-hover:scale-[1.04]" priority />
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
        )}

        {/* Grid */}
        <section className="bg-paper-2">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <Reveal>
              <p className="rule-label text-violet-deep">All articles</p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 90}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <PostCover image={post.image} cover={post.cover} category={post.category} alt={post.title} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-500 group-hover:scale-[1.05]" />
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

            <Pagination page={page} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/** Numbered prev / next pager. Hidden when there is only one page. */
function Pagination({ page }: { page: number }) {
  if (BLOG_TOTAL_PAGES <= 1) return null;
  const pages = Array.from({ length: BLOG_TOTAL_PAGES }, (_, i) => i + 1);
  const base =
    "grid h-10 min-w-10 place-items-center rounded-full px-3 text-sm font-semibold transition-colors";

  return (
    <nav className="mt-14 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
      {page > 1 && (
        <Link href={blogPageHref(page - 1)} rel="prev" className={`${base} border border-line bg-paper-3 text-ink-soft hover:text-ink`}>
          ← Prev
        </Link>
      )}
      {pages.map((n) =>
        n === page ? (
          <span key={n} aria-current="page" className={`${base} bg-brand-gradient text-white`}>
            {n}
          </span>
        ) : (
          <Link key={n} href={blogPageHref(n)} className={`${base} border border-line bg-paper-3 text-ink-soft hover:text-ink`}>
            {n}
          </Link>
        ),
      )}
      {page < BLOG_TOTAL_PAGES && (
        <Link href={blogPageHref(page + 1)} rel="next" className={`${base} border border-line bg-paper-3 text-ink-soft hover:text-ink`}>
          Next →
        </Link>
      )}
    </nav>
  );
}

function d(ms: number) {
  return { ["--rise-delay" as string]: `${ms}ms` };
}
