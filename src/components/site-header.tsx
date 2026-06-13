import Link from "next/link";
import Logo from "./logo";
import { HOME } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

export default function SiteHeader() {
  const c = HOME;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo size={30} />
          <span className="text-[1.05rem]">Vrikso</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <Link href="/distribution" className="transition-colors hover:text-ink">
            {c.nav.product}
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-ink">
            {c.nav.pricing}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-ink">
            {c.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={SITE.appUrl}
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:block"
          >
            {c.cta.login}
          </a>
          <a
            href={waLink(c.waMessage)}
            className="inline-flex min-h-10 items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] active:scale-95"
          >
            {c.cta.demo}
          </a>
        </div>
      </div>
    </header>
  );
}
