import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { projectsMeta } from "@/data/projects";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/button";

export function ProjectsPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const rtl = locale === "ar";

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={dict.projectsPreview.eyebrow}
            title={dict.projectsPreview.title}
            subtitle={dict.projectsPreview.subtitle}
          />
          <Button href={href(locale, "/realisations")} variant="ghost" withArrow rtl={rtl} className="shrink-0">
            {dict.projectsPreview.viewAll}
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsMeta.map((meta, i) => (
            <ScrollReveal key={meta.slug} delay={i * 80}>
              <ProjectCard meta={meta} project={dict.projects[meta.slug]} visitLabel={dict.projectsPage.visitSite} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
