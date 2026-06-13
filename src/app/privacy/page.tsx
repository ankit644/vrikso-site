import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vrikso collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-paper">
        <div className="prose-vrikso mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <p className="rule-label text-violet-deep">Legal</p>
          <h1 className="font-display mt-6 text-4xl font-medium">Privacy Policy</h1>
          <p className="mt-2 text-sm text-ink-faint">Last updated: 13 June 2026</p>

          <div className="mt-10 space-y-8 text-[0.97rem] leading-relaxed text-ink-soft [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink">
            <section>
              <h2>What we collect</h2>
              <p className="mt-2">
                Account details you provide (name, email, phone, business name) and the
                business data you enter into Vrikso (products, shops, orders, invoices,
                payments). We also collect basic usage logs to keep the service secure
                and fast.
              </p>
            </section>
            <section>
              <h2>How we use it</h2>
              <p className="mt-2">
                Only to run Vrikso for you: storing your records, generating your
                invoices and reports, providing support, and improving the product. We
                do not sell your data, and we never share your business data with other
                customers or advertisers.
              </p>
            </section>
            <section>
              <h2>Your data is yours</h2>
              <p className="mt-2">
                You can export your data to Excel at any time and request deletion of
                your account and its data by writing to {SITE.supportEmail}.
              </p>
            </section>
            <section>
              <h2>Storage & security</h2>
              <p className="mt-2">
                Data is stored in professionally managed cloud infrastructure with
                encryption in transit, role-based access inside your account, and
                automatic backups. Payments to Vrikso (when applicable) are processed by
                RBI-regulated payment providers; we never store your card details.
              </p>
            </section>
            <section>
              <h2>Cookies</h2>
              <p className="mt-2">
                The app uses cookies strictly for keeping you signed in and remembering
                preferences like language — not for advertising.
              </p>
            </section>
            <section>
              <h2>Contact</h2>
              <p className="mt-2">
                Questions about this policy: {SITE.supportEmail}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
