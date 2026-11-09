import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "CDTA";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return renderOgImage({
    title: `${dict.hero.title} ${dict.hero.highlight}`,
    subtitle: dict.meta.tagline,
    image: "/images/products/sdp-catalogue.jpg",
    rtl: lang === "ar",
  });
}
