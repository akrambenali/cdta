import { Check } from "lucide-react";
import { Button } from "@/components/button";
import { Icon, type IconName } from "@/components/icon-map";

export function ProductCard({
  icon,
  image,
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
  image: string;
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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-900/8 bg-white shadow-sm shadow-brand-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-brand-900/[0.06]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/15 via-transparent to-transparent" />
        <div className="absolute -bottom-6 start-6 flex size-12 items-center justify-center rounded-xl border border-brand-900/8 bg-white text-brand-800 shadow-md">
          <Icon name={icon} className="size-6" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 pt-9">
        <h3 className="text-lg font-bold text-brand-950">{title}</h3>
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
    </div>
  );
}
