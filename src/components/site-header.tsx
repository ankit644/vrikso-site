import Link from "next/link";
import Logo from "./logo";
import { HOME } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

export default function SiteHeader() {
  const c = HOME;
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo size={30} />
          <span className="text-[1.05rem]">Vrikso</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {[
            { href: "/distribution", label: c.nav.product },
            { href: "/pricing", label: c.nav.pricing },
            { href: "/contact", label: c.nav.contact },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-violet after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.appUrl}
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:block"
          >
            {c.cta.login}
          </a>
          <a
            href={waLink(c.waMessage)}
            className="inline-flex min-h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper shadow-[var(--shadow-sm)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            {c.cta.demo}
          </a>
        </div>
      </div>
    </header>
  );
}
