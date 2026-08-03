import Link from "next/link";
import Logo from "./logo";
import { HOME } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: SITE.socials.linkedin,
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Instagram",
    href: SITE.socials.instagram,
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    name: "Facebook",
    href: SITE.socials.facebook,
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

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
          <div className="mt-5 flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Vrikso on ${s.name}`}
                className="text-ink-faint transition-colors hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="rule-label text-ink-faint">{f.product}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link className="hover:text-ink" href="/distribution">{f.links.distribution}</Link></li>
            <li><Link className="hover:text-ink" href="/billing">{f.links.billing}</Link></li>
            <li><Link className="hover:text-ink" href="/restaurant">{f.links.restaurant}</Link></li>
          </ul>
        </div>

        <div>
          <p className="rule-label text-ink-faint">{f.company}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li><Link className="hover:text-ink" href="/pricing">{f.links.pricing}</Link></li>
            <li><Link className="hover:text-ink" href="/blog">{f.links.blog}</Link></li>
            <li><a className="hover:text-ink" href={SITE.appUrl}>Login</a></li>
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
