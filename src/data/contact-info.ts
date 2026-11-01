export const SITE_CONTACT = {
  email: "contact@cdta.dz",
  phoneDisplay: "+213 555 10 93 49",
  phoneHref: "+213555109349",
  whatsappNumber: "213555109349",
  whatsappUrl: "https://wa.me/213555109349",
};

export function whatsappHref(message?: string): string {
  if (!message) return SITE_CONTACT.whatsappUrl;
  return `${SITE_CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
