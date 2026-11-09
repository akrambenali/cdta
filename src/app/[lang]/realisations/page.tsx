import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { projectsMeta } from "@/data/projects";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/realisations">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: "/realisations",
    title: dict.projectsPage.title,
    description: dict.projectsPage.subtitle,
  });
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/realisations">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: dict.projectsPage.title,
    description: dict.projectsPage.subtitle,
    url: `${SITE_URL}/${lang}/realisations`,
    inLanguage: lang,
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projectsMeta.map((meta, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: dict.projects[meta.slug].name,
          description: dict.projects[meta.slug].description,
          url: meta.url,
          creator: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <section className="border-b border-brand-900/8 bg-brand-50/40 py-20">
        <Container>
          <SectionHeading
            eyebrow={dict.projectsPage.eyebrow}
            title={dict.projectsPage.title}
            subtitle={dict.projectsPage.subtitle}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsMeta.map((meta, i) => (
              <ScrollReveal key={meta.slug} delay={(i % 3) * 80}>
                <ProjectCard meta={meta} project={dict.projects[meta.slug]} visitLabel={dict.projectsPage.visitSite} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        locale={lang}
        title={dict.projectsPage.cta.title}
        subtitle={dict.projectsPage.cta.subtitle}
        ctaPrimary={dict.projectsPage.cta.primary}
        ctaSecondary={dict.nav.products}
        secondaryHref="/produits"
      />
    </>
  );
}
