"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { locales, localeConfig } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { href } from "@/lib/href";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

function swapLocale(pathname: string, target: Locale, current: Locale) {
  const rest = pathname.startsWith(`/${current}`) ? pathname.slice(`/${current}`.length) : pathname;
  return `/${target}${rest}`;
}

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: dict.nav.home, path: "/" },
    { label: dict.nav.products, path: "/produits" },
    { label: dict.nav.projects, path: "/realisations" },
    { label: dict.nav.consulting, path: "/consulting" },
    { label: dict.nav.about, path: "/a-propos" },
    { label: dict.nav.contact, path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/8 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const target = href(locale, item.path);
            const isActive = pathname === target;
            return (
              <Link
                key={item.path}
                href={target}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  isActive ? "text-accent-500" : "text-brand-900/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-brand-900/10 p-1 text-xs font-semibold">
            {locales.map((l) => (
              <Link
                key={l}
                href={swapLocale(pathname, l, locale)}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  l === locale ? "bg-brand-900 text-white" : "text-brand-900/60 hover:text-brand-900"
                }`}
              >
                {localeConfig[l].label}
              </Link>
            ))}
          </div>
          <Button href={href(locale, "/contact")} variant="primary" className="px-5 py-2.5">
            {dict.nav.quoteCta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-brand-900/10 text-brand-900 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-900/8 bg-background px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const target = href(locale, item.path);
              const isActive = pathname === target;
              return (
                <Link
                  key={item.path}
                  href={target}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-accent-50 text-accent-600" : "text-brand-900/80 hover:bg-brand-900/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-brand-900/8 pt-4">
            <div className="flex items-center gap-1 rounded-full border border-brand-900/10 p-1 text-xs font-semibold">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={swapLocale(pathname, l, locale)}
                  className={`rounded-full px-3 py-1.5 ${
                    l === locale ? "bg-brand-900 text-white" : "text-brand-900/60"
                  }`}
                >
                  {localeConfig[l].label}
                </Link>
              ))}
            </div>
            <Button href={href(locale, "/contact")} variant="primary" className="px-5 py-2.5" onClick={() => setOpen(false)}>
              {dict.nav.quoteCta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
