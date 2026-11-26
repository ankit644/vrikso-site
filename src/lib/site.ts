/** Single place for every external coordinate of the site. */
export const SITE = {
  url: "https://vrikso.com",
  appUrl: "https://app.vrikso.com",
  /** WhatsApp Business number (country code, no +). Calls go to 9220167969 —
      that number lives on the Google Business Profile and directories, not here. */
  whatsapp: "919555665689",
  supportEmail: "support@vrikso.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/vrikso-erp-085940417/",
    instagram: "https://www.instagram.com/vrikso_erp/",
    facebook: "https://www.facebook.com/share/1DSTbLvScQ",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** FormSubmit.co AJAX endpoint — relays form submissions to the support inbox
    with no backend. The first real submission triggers a one-time activation
    email to {@link SITE.supportEmail}; click its link once and mail flows. */
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SITE.supportEmail}`;
