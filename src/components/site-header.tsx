"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { HOME } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

const NAV = [
  { href: "/", label: HOME.nav.home },
  { href: "/pricing", label: HOME.nav.pricing },
  { href: "/blog", label: HOME.nav.blog },
  { href: "/contact", label: HOME.nav.contact },
];

export default function SiteHeader() {
  const c = HOME;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex h-[3.75rem] max-w-6xl items-center justify-between gap-3 rounded-full border border-white/70 bg-paper-3/85 px-4 shadow-[var(--shadow-md)] backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <Logo size={30} />
          <span className="text-[1.05rem]">Vrikso</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {NAV.slice(0, 1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-violet after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}

          {/* Software dropdown — opens on hover / keyboard focus */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 transition-colors group-hover:text-ink group-focus-within:text-ink"
              aria-haspopup="true"
            >
              {c.nav.software}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden
                className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              >
                <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* pt-3 bridges the hover gap between the trigger and the panel */}
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 overflow-hidden rounded-2xl border border-line bg-paper p-2 shadow-[var(--shadow-md)]">
                {c.softwareMenu.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-paper-2"
                  >
                    <span className="block font-semibold text-ink">{s.name}</span>
                    <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-faint">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV.slice(1).map((l) => (
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
            className="hidden min-h-10 items-center rounded-full border border-ink/15 bg-paper-3 px-5 text-sm font-semibold whitespace-nowrap text-ink shadow-[var(--shadow-sm)] transition-transform hover:scale-[1.03] active:scale-95 lg:inline-flex"
          >
            {c.cta.demo}
          </a>
          <a
            href={SITE.appUrl}
            className="btn-primary hidden !min-h-10 px-5 !text-sm whitespace-nowrap md:inline-flex"
          >
            {c.cta.start}
          </a>

          {/* hamburger — mobile only */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-paper-2 md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-[1.6rem] border-white/70 bg-paper-3/95 shadow-[var(--shadow-md)] backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-[34rem] border opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {NAV.slice(0, 1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[0.97rem] font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <p className="px-3 pt-2 pb-1 text-[0.7rem] font-bold tracking-wide text-ink-faint uppercase">
            {c.nav.software}
          </p>
          {c.softwareMenu.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[0.97rem] font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
            >
              {s.name}
            </Link>
          ))}
          {NAV.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[0.97rem] font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.appUrl}
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-3 text-[0.97rem] font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
          >
            {c.cta.login}
          </a>
          <a
            href={SITE.appUrl}
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            {c.cta.start}
          </a>
          <a
            href={waLink(c.waMessage)}
            onClick={() => setOpen(false)}
            className="btn-ghost-dark mt-1 w-full"
          >
            {c.cta.demo}
          </a>
        </nav>
      </div>
    </header>
  );
}
