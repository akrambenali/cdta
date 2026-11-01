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
        <div className="rounded-3xl bg-brand-900 px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/60">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={href(locale, "/contact")} variant="primary" withArrow rtl={rtl}>
              {ctaPrimary}
            </Button>
            <Button
              href={href(locale, secondaryHref)}
              variant="outline"
              className="border-white/15 text-white hover:border-white/30 hover:bg-white/5"
            >
              {ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
