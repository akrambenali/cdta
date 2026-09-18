import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { productSlugs } from "@/data/products-meta";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { SITE_CONTACT } from "@/data/contact-info";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const navItems = [
    { label: dict.nav.home, path: "/" },
    { label: dict.nav.products, path: "/produits" },
    { label: dict.nav.consulting, path: "/consulting" },
    { label: dict.nav.about, path: "/a-propos" },
    { label: dict.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="border-t border-brand-900/8 bg-brand-950 text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo locale={locale} className="text-white [&_span:last-child]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{dict.footer.description}</p>
          <p className="mt-4 text-xs font-medium text-accent-400">{dict.footer.paymentNote}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{dict.footer.quickLinksTitle}</h3>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={href(locale, item.path)} className="text-sm text-white/60 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{dict.footer.productsTitle}</h3>
          <ul className="mt-4 space-y-2.5">
            {productSlugs.map((slug) => (
              <li key={slug}>
                <Link href={href(locale, `/produits/${slug}`)} className="text-sm text-white/60 hover:text-white">
                  {dict.products[slug].title}
                </Link>
              </li>
            ))}
            <li>
              <Link href={href(locale, "/consulting")} className="text-sm text-white/60 hover:text-white">
                {dict.consultingCard.title}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{dict.footer.contactTitle}</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`mailto:${SITE_CONTACT.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                <Mail className="size-4 shrink-0" /> <span dir="ltr">{SITE_CONTACT.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${SITE_CONTACT.phoneHref}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                <Phone className="size-4 shrink-0" /> <span dir="ltr">{SITE_CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={SITE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white"
              >
                <MessageCircle className="size-4 shrink-0" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} CDTA — {dict.footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
