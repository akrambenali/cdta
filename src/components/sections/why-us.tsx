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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.whyUs.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm shadow-brand-900/[0.03] transition-shadow hover:shadow-lg">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-900/[0.06] text-brand-800">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-900/65">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
