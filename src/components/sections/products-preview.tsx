import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { productsMeta } from "@/data/products-meta";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/button";

export function ProductsPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const rtl = locale === "ar";
  const featuredProducts = productsMeta.filter((meta) => meta.featured);

  return (
    <section className="bg-brand-50/40 py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={dict.productsPreview.eyebrow}
            title={dict.productsPreview.title}
            subtitle={dict.productsPreview.subtitle}
          />
          <Button href={href(locale, "/produits")} variant="ghost" withArrow rtl={rtl} className="shrink-0">
            {dict.productsPreview.viewAll}
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((meta, i) => {
            const product = dict.products[meta.slug];
            return (
              <ScrollReveal key={meta.slug} delay={i * 100}>
                <ProductCard
                  icon={meta.icon}
                  image={meta.image}
                  title={product.title}
                  tagline={product.tagline}
                  description={product.shortDescription}
                  features={product.features.slice(0, 4)}
                  priceLabel={product.priceLabel}
                  priceNote={product.priceNote}
                  ctaLabel={dict.productDetail.ctaDemo}
                  detailHref={href(locale, `/produits/${meta.slug}`)}
                  rtl={rtl}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
