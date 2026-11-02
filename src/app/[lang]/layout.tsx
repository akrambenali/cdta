import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { inter, cairo } from "@/lib/fonts";
import { isLocale, localeConfig, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, ogLocale } from "@/lib/site";
import { SITE_CONTACT } from "@/data/contact-info";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.defaultTitle,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    applicationName: dict.meta.siteName,
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const { dir, htmlLang } = localeConfig[lang];

  return (
    <html lang={htmlLang} dir={dir} className={`${inter.variable} ${cairo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header locale={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={lang} dict={dict} />
        <WhatsAppButton dict={dict} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: dict.meta.siteName,
            description: dict.meta.tagline,
            url: `${SITE_URL}/${lang}`,
            email: SITE_CONTACT.email,
            telephone: SITE_CONTACT.phoneHref,
            areaServed: "DZ",
          }}
        />
      </body>
    </html>
  );
}
