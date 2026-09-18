import { Check } from "lucide-react";
import { Button } from "@/components/button";
import { Icon, type IconName } from "@/components/icon-map";

export function ProductCard({
  icon,
  title,
  tagline,
  description,
  features,
  priceLabel,
  priceNote,
  ctaLabel,
  detailHref,
  rtl = false,
}: {
  icon: IconName;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  priceLabel: string;
  priceNote: string;
  ctaLabel: string;
  detailHref: string;
  rtl?: boolean;
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-brand-900/8 bg-white p-7 shadow-sm shadow-brand-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-brand-900/[0.06]">
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-900/[0.06] text-brand-800 transition-colors group-hover:bg-accent-50 group-hover:text-accent-600">
        <Icon name={icon} className="size-6" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-brand-950">{title}</h3>
      <p className="mt-1 text-sm font-medium text-accent-600">{tagline}</p>
      <p className="mt-3 text-sm leading-6 text-brand-900/70">{description}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-900/80">
            <Check className="mt-0.5 size-4 shrink-0 text-accent-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-baseline justify-between border-t border-brand-900/8 pt-5">
        <div>
          <p className="text-base font-bold text-brand-950">{priceLabel}</p>
          <p className="text-xs text-brand-900/50">{priceNote}</p>
        </div>
      </div>

      <Button href={detailHref} variant="outline" withArrow rtl={rtl} className="mt-5 w-full">
        {ctaLabel}
      </Button>
    </div>
  );
}
