import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Vrikso on WhatsApp — demos, pricing, migration help. Or email us.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-paper">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <Reveal>
            <p className="rule-label text-violet-deep">Contact</p>
            <h1 className="font-display mt-6 text-4xl leading-[1.08] font-medium md:text-5xl">
              Talk to a person,
              <br />
              <em className="text-brand-gradient not-italic">not a ticket.</em>
            </h1>
            <p className="mt-4 max-w-md text-ink-soft">
              Demos, pricing, migration from your current software — message us and a
              real human replies, usually within the hour.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <Reveal delay={80}>
              <a
                href={waLink("Hi! I have a question about Vrikso.")}
                className="hero-night grain group relative block overflow-hidden rounded-[var(--radius-card)] p-7 text-on-hero shadow-[0_24px_48px_-20px_rgba(20,14,38,0.5)] transition-transform hover:scale-[1.015]"
              >
                <p className="text-sm font-bold tracking-wide text-on-hero-dim uppercase">Fastest</p>
                <p className="font-display mt-2 text-2xl font-medium">WhatsApp us</p>
                <p className="mt-2 text-sm text-on-hero-dim">
                  The way you already talk to your suppliers. Tap, type, done.
                </p>
                <span className="bg-brand-gradient mt-6 inline-flex min-h-11 items-center rounded-full px-6 text-sm font-semibold text-white">
                  Open WhatsApp →
                </span>
              </a>
            </Reveal>

            <Reveal delay={160}>
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="group block rounded-[var(--radius-card)] border border-line bg-paper-2/50 p-7 transition-colors hover:bg-paper-2"
              >
                <p className="text-sm font-bold tracking-wide text-ink-faint uppercase">Email</p>
                <p className="font-display mt-2 text-2xl font-medium">{SITE.supportEmail}</p>
                <p className="mt-2 text-sm text-ink-soft">
                  For detailed questions, partnership ideas or anything longform.
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center rounded-full border border-ink/20 px-6 text-sm font-semibold">
                  Write to us →
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
