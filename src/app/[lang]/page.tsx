import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { WhyUs } from "@/components/sections/why-us";
import { ProductsPreview } from "@/components/sections/products-preview";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const metadata = pageMetadata({
    locale: lang,
    path: "/",
    title: dict.meta.defaultTitle,
    description: dict.meta.defaultDescription,
  });
  return { ...metadata, title: { absolute: dict.meta.defaultTitle } };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Hero locale={lang} dict={dict} />
      <WhyUs dict={dict} />
      <ProductsPreview locale={lang} dict={dict} />
      <CtaBand
        locale={lang}
        title={dict.ctaBand.title}
        subtitle={dict.ctaBand.subtitle}
        ctaPrimary={dict.ctaBand.ctaPrimary}
        ctaSecondary={dict.ctaBand.ctaSecondary}
      />
    </>
  );
}
