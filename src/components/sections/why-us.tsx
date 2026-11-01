import type { Dictionary } from "@/i18n/dictionary-type";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Icon } from "@/components/icon-map";

export function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.whyUs.eyebrow}
          title={dict.whyUs.title}
          subtitle={dict.whyUs.subtitle}
          center
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {dict.whyUs.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-900/[0.05] text-brand-700">
                <Icon name={item.icon} className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-900/60">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
