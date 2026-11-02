import type { Locale } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export function productStructuredData({
  locale,
  slug,
  name,
  alternateName,
  description,
  image,
  features,
  breadcrumb,
  faq,
}: {
  locale: Locale;
  slug: string;
  name: string;
  alternateName?: string;
  description: string;
  image: string;
  features: string[];
  breadcrumb: { home: string; products: string; current: string };
  faq?: { q: string; a: string }[];
}) {
  const url = `${SITE_URL}/${locale}/produits/${slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "SoftwareApplication",
      "@id": `${url}#software`,
      name,
      ...(alternateName ? { alternateName } : {}),
      description,
      url,
      image: `${SITE_URL}${image}`,
      inLanguage: locale,
      applicationCategory: "BusinessApplication",
      featureList: features,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: breadcrumb.home, item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: breadcrumb.products, item: `${SITE_URL}/${locale}/produits` },
        { "@type": "ListItem", position: 3, name: breadcrumb.current, item: url },
      ],
    },
  ];

  if (faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
