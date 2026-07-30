import Link from "next/link";
import Logo from "./logo";
import { HOME } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

export default function SiteFooter() {
  const f = HOME.footer;
  return (
    <footer className="border-t border-line bg-paper-2">
      {/* conversion band */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-4 py-9 sm:px-6">
          <p className="font-display max-w-sm text-xl leading-snug font-medium">
            {HOME.final.title}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.appUrl} className="btn-primary">{HOME.cta.start}</a>
            <a href={waLink(HOME.waMessage)} className="btn-ghost-dark">{HOME.cta.demo}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 font-semibold">
            <Logo size={28} />
            <span>Vrikso</span>
          </div>
          <p className="font-display mt-3 max-w-xs text-lg text-ink-soft italic">
            {f.tagline}
          </p>
        </div>

        <div>
          <p className="rule-label text-ink-faint">{f.product}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link className="hover:text-ink" href="/distribution">{f.links.distribution}</Link></li>
            <li><Link className="hover:text-ink" href="/billing">{f.links.billing}</Link></li>
            <li><Link className="hover:text-ink" href="/restaurant">{f.links.restaurant}</Link></li>
            <li><Link className="hover:text-ink" href="/pricing">{f.links.pricing}</Link></li>
            <li><Link className="hover:text-ink" href="/blog">{f.links.blog}</Link></li>
            <li><a className="hover:text-ink" href={SITE.appUrl}>Login</a></li>
          </ul>
        </div>

        <div>
          <p className="rule-label text-ink-faint">{f.company}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link className="hover:text-ink" href="/contact">{f.links.contact}</Link></li>
            <li><Link className="hover:text-ink" href="/privacy">{f.links.privacy}</Link></li>
            <li><Link className="hover:text-ink" href="/terms">{f.links.terms}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-ink-faint sm:px-6">
          <span>© {new Date().getFullYear()} Vrikso · {f.bottom}</span>
          <a className="hover:text-ink" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
        </div>
      </div>
    </footer>
  );
}
