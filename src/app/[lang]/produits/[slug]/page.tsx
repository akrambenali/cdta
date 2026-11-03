import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, FileText, ExternalLink } from "lucide-react";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { productSlugs, productsMeta, type ProductSlug } from "@/data/products-meta";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Icon } from "@/components/icon-map";
import { ProductCard } from "@/components/product-card";
import { ProductLanding } from "@/components/landing/product-landing";
import { JsonLd } from "@/components/json-ld";
import { getLanding } from "@/i18n/landings";
import { pageMetadata } from "@/lib/seo";
import { productStructuredData } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.flatMap((lang) => productSlugs.map((slug) => ({ lang, slug })));
}

function isProductSlug(value: string): value is ProductSlug {
  return (productSlugs as string[]).includes(value);
}

export async function generateMetadata({ params }: PageProps<"/[lang]/produits/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProductSlug(slug)) return {};
  const path = `/produits/${slug}`;
  const landing = await getLanding(slug, lang);
  if (landing) {
    const { seo } = landing.content;
    const metadata = pageMetadata({ locale: lang, path, title: seo.title, description: seo.description, keywords: seo.keywords });
    return { ...metadata, title: { absolute: seo.title } };
  }

  const dict = await getDictionary(lang);
  const product = dict.products[slug];
  return pageMetadata({ locale: lang, path, title: product.title, description: product.shortDescription });
}

export default async function ProductDetailPage({ params }: PageProps<"/[lang]/produits/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProductSlug(slug)) notFound();

  const dict = await getDictionary(lang);
  const rtl = lang === "ar";
  const BackArrow = rtl ? ArrowRight : ArrowLeft;
  const product = dict.products[slug];
  const meta = productsMeta.find((m) => m.slug === slug)!;
  const otherProducts = productsMeta.filter((m) => m.slug !== slug).slice(0, 3);

  const landing = await getLanding(slug, lang);
  if (landing) {
    const c = landing.content;
    return (
      <>
        <ProductLanding locale={lang} slug={slug} landing={landing} pdf={meta.pdf} demoUrl={meta.demoUrl} />
        <JsonLd
          data={productStructuredData({
            locale: lang,
            slug,
            name: c.breadcrumb.current,
            alternateName: c.seo.alternateName,
            description: c.seo.description,
            image: landing.heroImage.src,
            features: c.modules.items.map((item) => item.title),
            breadcrumb: c.breadcrumb,
            faq: c.faq.items,
          })}
        />
      </>
    );
  }

  return (
    <>
      <JsonLd
        data={productStructuredData({
          locale: lang,
          slug,
          name: product.title,
          description: product.shortDescription,
          image: meta.image,
          features: product.features,
          breadcrumb: { home: dict.nav.home, products: dict.nav.products, current: product.title },
        })}
      />
      <section className="border-b border-brand-900/8 bg-brand-950 py-16 sm:py-20">
        <Container>
          <Link
            href={href(lang, "/produits")}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
          >
            <BackArrow className="size-4" />
            {dict.productDetail.backToCatalog}
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
                <Icon name={meta.icon} className="size-7" />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">{product.title}</h1>
              <p className="mt-2 text-base font-semibold text-accent-400">{product.tagline}</p>
              <p className="mt-4 text-base leading-7 text-white/60">{product.detail.intro}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={href(lang, `/contact?product=${slug}`)} variant="primary" withArrow rtl={rtl}>
                  {dict.productDetail.ctaDemo}
                </Button>
                <Button
                  href={href(lang, `/contact?product=${slug}`)}
                  variant="outline"
                  className="border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                >
                  {dict.productDetail.ctaQuote}
                </Button>
              </div>
            </div>

            <div className="w-full shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:w-64">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {dict.productDetail.priceTitle}
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{product.priceLabel}</p>
              <p className="mt-1 text-xs text-white/50">{product.priceNote}</p>

              {meta.demoUrl && (
                <a
                  href={meta.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/10"
                >
                  <ExternalLink className="size-4 shrink-0 text-accent-400" />
                  <span>{dict.productDetail.viewLiveLabel}</span>
                </a>
              )}

              {meta.pdf && (
                <a
                  href={meta.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/10"
                >
                  <FileText className="size-4 shrink-0 text-accent-400" />
                  <span>{dict.productDetail.brochureLabel}</span>
                </a>
              )}
            </div>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={meta.image} alt={product.title} className="max-h-[440px] w-full object-cover" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-950">{dict.productDetail.benefitsTitle}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {product.detail.benefits.map((benefit, i) => (
                  <ScrollReveal key={benefit.title} delay={i * 80}>
                    <div className="h-full rounded-2xl border border-brand-900/8 bg-white p-5 shadow-sm">
                      <h3 className="font-bold text-brand-950">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-brand-900/65">{benefit.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-950">{dict.productDetail.forWhoTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-brand-900/70">{product.detail.forWho}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-950">{dict.productDetail.includesTitle}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.detail.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-900/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wide text-brand-900/50">
                {dict.productDetail.featuresTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-900/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={href(lang, `/contact?product=${slug}`)}
                variant="primary"
                withArrow
                rtl={rtl}
                className="mt-6 w-full"
              >
                {dict.productDetail.ctaQuote}
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-brand-900/8 bg-brand-50/40 py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-950">{dict.productDetail.otherProductsTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((otherMeta) => {
              const otherProduct = dict.products[otherMeta.slug];
              return (
                <ProductCard
                  key={otherMeta.slug}
                  icon={otherMeta.icon}
                  image={otherMeta.image}
                  title={otherProduct.title}
                  tagline={otherProduct.tagline}
                  description={otherProduct.shortDescription}
                  features={otherProduct.features.slice(0, 4)}
                  priceLabel={otherProduct.priceLabel}
                  priceNote={otherProduct.priceNote}
                  ctaLabel={dict.productDetail.ctaDemo}
                  detailHref={href(lang, `/produits/${otherMeta.slug}`)}
                  rtl={rtl}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
