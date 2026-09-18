import { Sparkles, LayoutDashboard, ShoppingCart, TrendingUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { href } from "@/lib/href";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const rtl = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute -top-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl"
        style={{ [rtl ? "left" : "right"]: "-6rem" }}
      />
      <div
        className="absolute bottom-0 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
        style={{ [rtl ? "right" : "left"]: "-4rem" }}
      />

      <Container className="relative grid gap-16 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
            <Sparkles className="size-3.5 text-accent-400" />
            {dict.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dict.hero.title}{" "}
            <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              {dict.hero.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">{dict.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={href(locale, "/produits")} variant="primary" withArrow rtl={rtl}>
              {dict.hero.ctaPrimary}
            </Button>
            <Button
              href={href(locale, "/contact")}
              variant="outline"
              className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
            >
              {dict.hero.ctaSecondary}
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {dict.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-lg font-bold text-white sm:text-xl">{stat.value}</dd>
                <dt className="mt-1 text-xs leading-5 text-white/50">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-accent-400" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <LayoutDashboard className="size-4 text-white/40" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4">
                <TrendingUp className="size-5 text-accent-400" />
                <p className="mt-3 text-2xl font-bold text-white">+38%</p>
                <p className="mt-1 text-xs text-white/45">{dict.hero.dashboard.metricGrowthLabel}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <ShoppingCart className="size-5 text-brand-300" />
                <p className="mt-3 text-2xl font-bold text-white">1 240</p>
                <p className="mt-1 text-xs text-white/45">{dict.hero.dashboard.metricOrdersLabel}</p>
              </div>
            </div>

            <div className="mt-4 space-y-3 rounded-xl bg-white/5 p-4">
              {[70, 45, 90, 60].map((width, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-300"
                      style={{ width: `${width}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -start-6 rounded-xl border border-white/10 bg-white p-4 shadow-xl">
            <p className="text-xs font-semibold text-brand-900/50">{dict.hero.dashboard.stockSyncLabel}</p>
            <p className="mt-1 text-sm font-bold text-brand-950">{dict.hero.dashboard.stockSyncValue}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
