import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { href } from "@/lib/href";

export function Logo({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={href(locale, "/")}
      className={`inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-900 ${className}`}
      aria-label="CDTA"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-brand-900 text-sm font-bold text-white">
        C
      </span>
      <span dir="ltr">
        CDTA<span className="text-accent-500">.</span>
      </span>
    </Link>
  );
}
