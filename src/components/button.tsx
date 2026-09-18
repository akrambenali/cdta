import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent-500 text-white shadow-lg shadow-accent-500/25 hover:bg-accent-600 hover:shadow-accent-500/35 active:scale-[0.98]",
  secondary: "bg-brand-900 text-white hover:bg-brand-800 active:scale-[0.98]",
  outline: "border border-brand-900/15 text-brand-900 hover:border-brand-900/30 hover:bg-brand-900/[0.03] active:scale-[0.98]",
  ghost: "text-brand-900 hover:bg-brand-900/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  rtl = false,
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  rtl?: boolean;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {rtl && withArrow && <ArrowLeft className="size-4" aria-hidden />}
      {children}
      {!rtl && withArrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
