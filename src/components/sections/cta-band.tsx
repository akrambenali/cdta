import type { Locale } from "@/i18n/config";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export function CtaBand({
  locale,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  secondaryHref = "/consulting",
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  secondaryHref?: string;
}) {
  const rtl = locale === "ar";

  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-14 text-center sm:px-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-20 start-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/25 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/65">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={href(locale, "/contact")} variant="primary" withArrow rtl={rtl}>
                {ctaPrimary}
              </Button>
              <Button
                href={href(locale, secondaryHref)}
                variant="outline"
                className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
              >
                {ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
