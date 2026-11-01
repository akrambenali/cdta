export const SITE_CONTACT = {
  email: "contact@cdta.dz",
  phoneDisplay: "+213 555 00 00 00",
  phoneHref: "+213555000000",
  whatsappNumber: "213555000000",
  whatsappUrl: "https://wa.me/213555000000",
};

export function whatsappHref(message?: string): string {
  if (!message) return SITE_CONTACT.whatsappUrl;
  return `${SITE_CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
