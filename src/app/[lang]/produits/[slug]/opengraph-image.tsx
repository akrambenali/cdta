import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLanding } from "@/i18n/landings";
import { productSlugs, productsMeta, type ProductSlug } from "@/data/products-meta";
import { ogSize, renderOgImage } from "@/lib/og";

type Params = Promise<{ lang: string; slug: string }>;

async function resolve(params: Params) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !(productSlugs as string[]).includes(slug)) notFound();
  const productSlug = slug as ProductSlug;
  const dict = await getDictionary(lang as Locale);
  return { lang, productSlug, product: dict.products[productSlug] };
}

export function generateStaticParams() {
  return locales.flatMap((lang) => productSlugs.map((slug) => ({ lang, slug })));
}

export async function generateImageMetadata({ params }: { params: { lang?: string; slug?: string } }) {
  const { lang, slug } = await params;
  // Route collection at build time calls this without params.
  const known = lang && slug && isLocale(lang) && (productSlugs as string[]).includes(slug);
  const product = known ? (await getDictionary(lang)).products[slug as ProductSlug] : null;
  const alt = product ? `${product.title} — ${product.tagline}` : "CDTA";
  return [{ id: "og", alt, size: ogSize, contentType: "image/png" }];
}

export default async function Image({ params }: { params: Params; id: Promise<string | number> }) {
  const { lang, productSlug, product } = await resolve(params);
  const meta = productsMeta.find((m) => m.slug === productSlug)!;
  const landing = await getLanding(productSlug, lang);

  return renderOgImage({
    title: product.title,
    subtitle: product.tagline,
    image: landing?.heroImage.src ?? meta.image,
    rtl: lang === "ar",
    background: landing?.theme.ink,
    accent: landing?.theme.accent,
  });
}
