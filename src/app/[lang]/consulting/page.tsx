import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Target } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({ params }: PageProps<"/[lang]/consulting">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.consultingPage.hero.title, description: dict.consultingPage.hero.subtitle };
}

export default async function ConsultingPage({ params }: PageProps<"/[lang]/consulting">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const rtl = lang === "ar";
  const c = dict.consultingPage;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
            {c.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{c.hero.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/65">{c.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={href(lang, "/contact")} variant="primary" withArrow rtl={rtl}>
              {c.hero.ctaPrimary}
            </Button>
            <Button
              href={href(lang, "/produits")}
              variant="outline"
              className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
            >
              {c.hero.ctaSecondary}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="01 — 04" title={c.approachTitle} subtitle={c.approachSubtitle} center />

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {c.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm">
                  <span className="text-4xl font-extrabold text-accent-100">{step.number}</span>
                  <h3 className="mt-3 text-base font-bold text-brand-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-900/65">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/40 py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div className="flex size-12 items-center justify-center rounded-xl bg-brand-900/[0.06] text-brand-800">
              <Target className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-950">{c.forWho.title}</h2>
            <p className="mt-4 text-base leading-7 text-brand-900/65">{c.forWho.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ul className="space-y-4">
              {c.forWho.targets.map((target) => (
                <li
                  key={target}
                  className="flex items-start gap-3 rounded-xl border border-brand-900/8 bg-white p-4 text-sm font-medium text-brand-900/80 shadow-sm"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-accent-500" />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading title={c.formats.title} subtitle={c.formats.subtitle} center />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {c.formats.options.map((option, i) => (
              <ScrollReveal key={option.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-brand-900/8 bg-white p-8 shadow-sm">
                  <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                    {option.bullet}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-brand-950">{option.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-900/65">{option.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        locale={lang}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        ctaPrimary={c.cta.ctaPrimary}
        ctaSecondary={dict.productsPreview.viewAll}
        secondaryHref="/produits"
      />
    </>
  );
}
