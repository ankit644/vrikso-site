import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Vrikso.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <p className="rule-label text-violet-deep">Legal</p>
          <h1 className="font-display mt-6 text-4xl font-medium">Terms of Service</h1>
          <p className="mt-2 text-sm text-ink-faint">Last updated: 13 June 2026</p>

          <div className="mt-10 space-y-8 text-[0.97rem] leading-relaxed text-ink-soft [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink">
            <section>
              <h2>The service</h2>
              <p className="mt-2">
                Vrikso provides cloud business software for order management, billing,
                inventory and payments. Your subscription gives your business a private,
                isolated account; you remain the owner of the data you enter.
              </p>
            </section>
            <section>
              <h2>Your responsibilities</h2>
              <p className="mt-2">
                Keep your login credentials safe, ensure the information on your
                invoices (GSTIN, prices, taxes) is accurate, and use the service only
                for lawful business purposes. You are responsible for your statutory
                filings; Vrikso&rsquo;s reports assist but do not replace your accountant.
              </p>
            </section>
            <section>
              <h2>Billing</h2>
              <p className="mt-2">
                Paid plans are billed monthly or annually in advance and can be
                cancelled anytime — access continues until the end of the paid period.
                Prices may change with 30 days&rsquo; notice.
              </p>
            </section>
            <section>
              <h2>Availability & liability</h2>
              <p className="mt-2">
                We work hard to keep Vrikso available and your data backed up, but the
                service is provided &ldquo;as is&rdquo; without warranty of uninterrupted
                operation. To the extent permitted by law, our liability is limited to
                the amount you paid in the preceding three months.
              </p>
            </section>
            <section>
              <h2>Termination</h2>
              <p className="mt-2">
                You may export your data and close your account at any time. We may
                suspend accounts that violate these terms or threaten the security of
                the service.
              </p>
            </section>
            <section>
              <h2>Contact</h2>
              <p className="mt-2">Questions about these terms: {SITE.supportEmail}.</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
