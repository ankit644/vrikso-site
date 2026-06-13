/** Single place for every external coordinate of the site. */
export const SITE = {
  url: "https://vrikso.com",
  appUrl: "https://app.vrikso.com",
  /** TODO(owner): replace with the real WhatsApp Business number (country code, no +). */
  whatsapp: "919555665689",
  supportEmail: "support@vrikso.com",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
