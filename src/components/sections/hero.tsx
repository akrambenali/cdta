import { ArrowUpRight, Gauge, Package, TrendingUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const rtl = locale === "ar";

  return (
    <section className="bg-brand-950">
      <Container className="grid gap-16 py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-1.5 text-xs font-medium text-white/70">
            {dict.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {dict.hero.title} <span className="text-accent-400">{dict.hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">{dict.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={href(locale, "/produits")} variant="primary" withArrow rtl={rtl}>
              {dict.hero.ctaPrimary}
            </Button>
            <Button
              href={href(locale, "/contact")}
              variant="outline"
              className="border-white/15 text-white hover:border-white/30 hover:bg-white/5"
            >
              {dict.hero.ctaSecondary}
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {dict.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-lg font-semibold text-white sm:text-xl">{stat.value}</dd>
                <dt className="mt-1 text-xs leading-5 text-white/45">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white/25" />
                <span className="size-2 rounded-full bg-white/25" />
                <span className="size-2 rounded-full bg-white/25" />
              </div>
              <ArrowUpRight className="size-4 text-white/30" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/8 p-4">
                <TrendingUp className="size-4 text-accent-400" />
                <p className="mt-3 text-xl font-semibold text-white">+38%</p>
                <p className="mt-1 text-xs text-white/40">{dict.hero.dashboard.metricGrowthLabel}</p>
              </div>
              <div className="rounded-xl border border-white/8 p-4">
                <Package className="size-4 text-accent-400" />
                <p className="mt-3 text-xl font-semibold text-white">1 240</p>
                <p className="mt-1 text-xs text-white/40">{dict.hero.dashboard.metricOrdersLabel}</p>
              </div>
              <div className="rounded-xl border border-white/8 p-4">
                <Gauge className="size-4 text-accent-400" />
                <p className="mt-3 text-xl font-semibold text-white">12</p>
                <p className="mt-1 text-xs text-white/40">{dict.hero.dashboard.stockSyncLabel}</p>
              </div>
            </div>

            <div className="mt-4 space-y-3 rounded-xl border border-white/8 p-4">
              {[70, 45, 90, 60].map((width, i) => (
                <span key={i} className="block h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <span className="block h-full rounded-full bg-accent-500" style={{ width: `${width}%` }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
