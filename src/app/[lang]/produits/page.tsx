import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { productsMeta } from "@/data/products-meta";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProductCard } from "@/components/product-card";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({ params }: PageProps<"/[lang]/produits">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/produits", title: dict.productsPage.title, description: dict.productsPage.subtitle });
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/produits">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const rtl = lang === "ar";

  return (
    <>
      <section className="border-b border-brand-900/8 bg-brand-50/40 py-20">
        <Container>
          <SectionHeading
            eyebrow={dict.productsPage.eyebrow}
            title={dict.productsPage.title}
            subtitle={dict.productsPage.subtitle}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productsMeta.map((meta, i) => {
              const product = dict.products[meta.slug];
              return (
                <ScrollReveal key={meta.slug} delay={i * 80}>
                  <ProductCard
                    icon={meta.icon}
                    image={meta.image}
                    title={product.title}
                    tagline={product.tagline}
                    description={product.shortDescription}
                    features={product.features}
                    priceLabel={product.priceLabel}
                    priceNote={product.priceNote}
                    ctaLabel={dict.productDetail.ctaDemo}
                    detailHref={href(lang, `/produits/${meta.slug}`)}
                    rtl={rtl}
                  />
                </ScrollReveal>
              );
            })}

            <ScrollReveal delay={productsMeta.length * 80}>
              <ProductCard
                icon="compass"
                image="/images/products/consulting.svg"
                title={dict.consultingCard.title}
                tagline={dict.consultingCard.tagline}
                description={dict.consultingCard.shortDescription}
                features={dict.consultingCard.features}
                priceLabel={dict.consultingCard.priceLabel}
                priceNote={dict.consultingCard.priceNote}
                ctaLabel={dict.consultingCard.ctaLabel}
                detailHref={href(lang, "/consulting")}
                rtl={rtl}
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

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
