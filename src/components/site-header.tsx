"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { HOME } from "@/lib/content/home";
import { SITE, waLink } from "@/lib/site";

const NAV = [
  { href: "/", label: HOME.nav.home },
  { href: "/distribution", label: HOME.nav.product },
  { href: "/pricing", label: HOME.nav.pricing },
  { href: "/contact", label: HOME.nav.contact },
];

export default function SiteHeader() {
  const c = HOME;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
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
          {NAV.map((l) => (
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
            className="hidden min-h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold whitespace-nowrap text-paper shadow-[var(--shadow-sm)] transition-transform hover:scale-[1.03] active:scale-95 md:inline-flex"
          >
            {c.cta.demo}
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
        className={`overflow-hidden border-line bg-paper/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {NAV.map((l) => (
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
            href={waLink(c.waMessage)}
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            {c.cta.demo}
          </a>
        </nav>
      </div>
    </header>
  );
}
