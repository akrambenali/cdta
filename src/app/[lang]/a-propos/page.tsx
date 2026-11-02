import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({ params }: PageProps<"/[lang]/a-propos">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/a-propos", title: dict.aboutPage.hero.title, description: dict.aboutPage.hero.subtitle });
}

export default async function AboutPage({ params }: PageProps<"/[lang]/a-propos">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const rtl = lang === "ar";
  const a = dict.aboutPage;

  return (
    <>
      <section className="border-b border-brand-900/8 bg-brand-950 py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/12 px-4 py-1.5 text-xs font-medium text-white/70">
            {a.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{a.hero.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">{a.hero.subtitle}</p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {a.bio.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <p className="text-base leading-8 text-brand-900/75">{paragraph}</p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={a.bio.length * 80}>
              <div className="mt-8 rounded-2xl border border-brand-900/8 bg-brand-50/60 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-900/50">{a.commitmentTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {a.commitments.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-brand-900/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-900/50">{a.experienceTitle}</h3>
                <div className="mt-4 space-y-4">
                  {a.experienceItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-brand-900/8 bg-white p-4 shadow-sm">
                      <p className="font-bold text-brand-950">{item.title}</p>
                      <p className="mt-1 text-sm text-brand-900/60">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-900/50">{a.skillsTitle}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {a.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-brand-900/10 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-900/75"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <Button href={href(lang, "/contact")} variant="primary" withArrow rtl={rtl} className="w-full">
                {a.cta.ctaPrimary}
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CtaBand
        locale={lang}
        title={a.cta.title}
        subtitle={a.cta.subtitle}
        ctaPrimary={a.cta.ctaPrimary}
        ctaSecondary={dict.productsPreview.viewAll}
        secondaryHref="/produits"
      />
    </>
  );
}
