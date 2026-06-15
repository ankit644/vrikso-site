import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Vrikso — book a demo, ask about pricing, or get help migrating from your current software. Fill the form or message us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-paper">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <Reveal>
            <p className="rule-label text-violet-deep">Contact</p>
            <h1 className="font-display mt-6 text-4xl leading-[1.08] font-medium md:text-5xl">
              Talk to a person,
              <br />
              <em className="text-brand-gradient not-italic">not a ticket.</em>
            </h1>
            <p className="mt-4 max-w-md text-ink-soft">
              Demos, pricing, migration from your current software — fill the form and a
              real human replies, usually within the hour.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
            {/* left — fast contact options */}
            <div className="flex flex-col gap-5">
              <Reveal className="h-full">
                <a
                  href={waLink("Hi! I have a question about Vrikso.")}
                  className="hero-night grain group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] p-7 text-on-hero shadow-[var(--shadow-lg)] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)]">
                      <WhatsAppIcon />
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[0.62rem] font-bold tracking-widest text-on-hero uppercase ring-1 ring-white/15">
                      Fastest reply
                    </span>
                  </div>
                  <h2 className="font-display relative z-10 mt-5 text-2xl font-medium">WhatsApp us</h2>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-on-hero-dim">
                    The way you already talk to your suppliers. Tap, type, done.
                  </p>
                  <span className="relative z-10 mt-5 inline-flex items-center text-sm font-semibold">
                    Open WhatsApp
                    <Arrow className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>

              <Reveal delay={80}>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-paper-3 p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lilac ring-1 ring-lilac-line">
                    <MailIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">Prefer email?</span>
                    <span className="block truncate text-sm text-violet-deep">{SITE.supportEmail}</span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={160}>
                <ul className="space-y-3 rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-sm)]">
                  {TRUST.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckIcon />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* right — the form */}
            <Reveal delay={120} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper-3 p-6 shadow-[var(--shadow-lg)] sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-violet/10 blur-3xl"
                />
                <div className="relative">
                  <h2 className="font-display text-2xl font-medium">Send us a message</h2>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    Tell us about your business and we&apos;ll set you up — migration included, free.
                  </p>
                  <div className="mt-7">
                    <ContactForm subjectPrefix="New Vrikso enquiry" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const TRUST = [
  "A real human replies — usually within the hour.",
  "Free setup and migration from your current software.",
  "No spam, no sales pressure, ever.",
];

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.74c0 4.47-3.64 8.11-8.12 8.11-1.52 0-3.01-.43-4.3-1.23l-.31-.18-3.12.82.83-3.04-.2-.31a8.05 8.05 0 0 1-1.25-4.3c0-4.48 3.64-8.12 8.11-8.12Zm-3.5 4.04c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.4-.37-.41-.55-.42h-.47Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--violet-deep)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 7.3 5.2a1.2 1.2 0 0 0 1.4 0L20 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="var(--lilac)" />
      <path d="M6 10.5 9 13.5 14 7.5" stroke="var(--violet)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
