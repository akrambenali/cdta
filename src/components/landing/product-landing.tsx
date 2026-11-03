/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  ChartColumn,
  ChevronDown,
  CircleCheck,
  CircleX,
  DatabaseBackup,
  FileText,
  Languages,
  Laptop,
  Lock,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Monitor,
  Package,
  Printer,
  Receipt,
  RefreshCw,
  Scale,
  ScanBarcode,
  ShieldCheck,
  Shirt,
  ShoppingCart,
  Smartphone,
  Tag,
  Truck,
  Undo2,
  Users,
  WifiOff,
  Briefcase,
  Building2,
  CalendarX,
  CloudUpload,
  Download,
  Eye,
  FolderOpen,
  Globe,
  Grid2x2,
  Image as ImageIcon,
  Infinity as InfinityIcon,
  Link2,
  Megaphone,
  Palette,
  PenTool,
  Pencil,
  Plane,
  QrCode,
  Save,
  Scan,
  Shapes,
  Type,
  User,
  UtensilsCrossed,
  CreditCard,
  LayoutDashboard,
  Rocket,
  Search,
  Store,
  Warehouse,
  Workflow,
  Award,
  Baby,
  Bell,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Presentation,
  School,
  Settings,
  ExternalLink,
  BedDouble,
  BusFront,
  Compass,
  Headset,
  Sparkles,
  Star,
  UserPlus,
  ConciergeBell,
  LogIn,
  LogOut,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { LandingIcon } from "@/i18n/landing-type";
import type { Landing } from "@/i18n/landings";
import { href } from "@/lib/href";
import { whatsappHref } from "@/data/contact-info";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";

const icons: Record<LandingIcon, LucideIcon> = {
  monitor: Monitor,
  tag: Tag,
  package: Package,
  truck: Truck,
  "file-text": FileText,
  banknote: Banknote,
  chart: ChartColumn,
  scale: Scale,
  "scan-barcode": ScanBarcode,
  "database-backup": DatabaseBackup,
  users: Users,
  undo: Undo2,
  "wifi-off": WifiOff,
  printer: Printer,
  "shield-check": ShieldCheck,
  languages: Languages,
  laptop: Laptop,
  shirt: Shirt,
  smartphone: Smartphone,
  "shopping-cart": ShoppingCart,
  receipt: Receipt,
  lock: Lock,
  refresh: RefreshCw,
  "map-pin": MapPin,
  link: Link2,
  type: Type,
  eye: Eye,
  palette: Palette,
  shapes: Shapes,
  scan: Scan,
  grid: Grid2x2,
  image: ImageIcon,
  download: Download,
  save: Save,
  pencil: Pencil,
  folder: FolderOpen,
  globe: Globe,
  infinity: InfinityIcon,
  "calendar-x": CalendarX,
  "qr-code": QrCode,
  "cloud-upload": CloudUpload,
  utensils: UtensilsCrossed,
  building: Building2,
  briefcase: Briefcase,
  plane: Plane,
  megaphone: Megaphone,
  user: User,
  "pen-tool": PenTool,
  store: Store,
  search: Search,
  "credit-card": CreditCard,
  workflow: Workflow,
  rocket: Rocket,
  warehouse: Warehouse,
  dashboard: LayoutDashboard,
  school: School,
  "graduation-cap": GraduationCap,
  presentation: Presentation,
  "clipboard-check": ClipboardCheck,
  award: Award,
  "book-open": BookOpen,
  settings: Settings,
  bell: Bell,
  baby: Baby,
  bed: BedDouble,
  headset: Headset,
  bus: BusFront,
  star: Star,
  sparkles: Sparkles,
  "user-plus": UserPlus,
  compass: Compass,
  "log-in": LogIn,
  "log-out": LogOut,
  wrench: Wrench,
  concierge: ConciergeBell,
};

function LandingIconBadge({ name, className = "" }: { name: LandingIcon; className?: string }) {
  const Component = icons[name];
  return (
    <span
      className={`flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lp-soft)] text-[var(--lp-accent)] ${className}`}
    >
      <Component className="size-5" aria-hidden />
    </span>
  );
}

function Heading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--lp-accent)]">{eyebrow}</p>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[var(--lp-ink)]"}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-4 text-base leading-7 ${dark ? "text-white/60" : "text-black/60"}`}>{subtitle}</p>}
    </div>
  );
}

function PrimaryLink({ to, children, external = false }: { to: string; children: ReactNode; external?: boolean }) {
  const className =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--lp-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]";
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
}

function OutlineLink({ to, children, external = false }: { to: string; children: ReactNode; external?: boolean }) {
  const className =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5";
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
}

export function ProductLanding({
  locale,
  slug,
  landing,
  pdf,
  demoUrl,
}: {
  locale: Locale;
  slug: string;
  landing: Landing;
  pdf?: string;
  demoUrl?: string;
}) {
  const { content: c, theme } = landing;
  const { cards, audiences } = c;
  const contactHref = href(locale, `/contact?product=${slug}`);
  const waHref = whatsappHref(c.whatsappMessage);
  const style = { "--lp-accent": theme.accent, "--lp-soft": theme.soft, "--lp-ink": theme.ink } as CSSProperties;

  return (
    <div style={style}>
      <section className="bg-[var(--lp-ink)]">
        <Container className="pt-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
              <li>
                <Link href={href(locale, "/")} className="hover:text-white">
                  {c.breadcrumb.home}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={href(locale, "/produits")} className="hover:text-white">
                  {c.breadcrumb.products}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white/80">
                {c.breadcrumb.current}
              </li>
            </ol>
          </nav>
        </Container>

        <Container className="grid gap-12 pb-20 pt-10 lg:grid-cols-2 lg:items-center lg:pb-24">
          <div>
            {landing.logo && (
              <img
                src={landing.logo.src}
                alt={c.breadcrumb.current}
                width={landing.logo.width}
                height={landing.logo.height}
                className="h-12 w-auto rounded-xl bg-white px-3 py-2 sm:h-14"
              />
            )}
            <h1 className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl">
              {c.hero.title} <span className="text-[var(--lp-accent)]">{c.hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">{c.hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to={contactHref}>{c.hero.ctaPrimary}</PrimaryLink>
              <OutlineLink to={waHref} external>
                <MessageCircle className="size-4" aria-hidden />
                {c.hero.ctaWhatsapp}
              </OutlineLink>
              {demoUrl && c.hero.ctaDemo && (
                <OutlineLink to={demoUrl} external>
                  <ExternalLink className="size-4" aria-hidden />
                  {c.hero.ctaDemo}
                </OutlineLink>
              )}
            </div>
            {pdf && (
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                <FileText className="size-4" aria-hidden />
                {c.hero.ctaBrochure}
              </a>
            )}

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {c.hero.badges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm text-white/80">
                  <CircleCheck className="size-4 text-[var(--lp-accent)]" aria-hidden />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src={landing.heroImage.src}
              alt={c.hero.imageAlt}
              width={landing.heroImage.width}
              height={landing.heroImage.height}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Heading eyebrow={c.modules.eyebrow} title={c.modules.title} subtitle={c.modules.subtitle} center />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.modules.items.map((item, i) => (
              <li key={item.title}>
                <ScrollReveal delay={(i % 4) * 60} className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-black/[0.06] bg-white p-5">
                    <LandingIconBadge name={item.icon} />
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--lp-ink)]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-black/55">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[var(--lp-soft)] py-24">
        <Container>
          <Heading title={c.problem.title} subtitle={c.problem.subtitle} center />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-7">
              <h3 className="text-lg font-bold text-black/50">{c.problem.before.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.problem.before.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/55">
                    <CircleX className="mt-0.5 size-5 shrink-0 text-black/25" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--lp-ink)] p-7">
              <h3 className="text-lg font-bold text-white">{c.problem.after.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.problem.after.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-[var(--lp-accent)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="space-y-24">
          {c.spotlights.map((spot, i) => (
            <article key={spot.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <ScrollReveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-black/[0.03]">
                  <img
                    src={spot.image}
                    alt={spot.imageAlt}
                    width={1400}
                    height={spot.imageAspect === "square" ? 1400 : 1050}
                    loading="lazy"
                    className={`w-full object-cover ${spot.imageAspect === "square" ? "aspect-square" : "aspect-[4/3]"}`}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--lp-accent)]">{spot.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--lp-ink)] sm:text-3xl">{spot.title}</h2>
                <p className="mt-4 text-base leading-7 text-black/60">{spot.text}</p>
                <ul className="mt-6 space-y-3">
                  {spot.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-black/75">
                      <CircleCheck className="mt-0.5 size-5 shrink-0 text-[var(--lp-accent)]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                {spot.steps && (
                  <div className="mt-8 rounded-2xl border border-black/[0.06] bg-[var(--lp-soft)] p-5">
                    <h3 className="text-sm font-bold text-[var(--lp-ink)]">{spot.stepsTitle}</h3>
                    <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                      {spot.steps.map((step, n) => (
                        <li key={step} className="flex items-center gap-3 text-sm text-black/70">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--lp-accent)] text-xs font-bold text-white">
                            {n + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {spot.note && (
                  <p className="mt-4 flex items-start gap-2 text-sm font-medium text-[var(--lp-accent)]">
                    <LockKeyhole className="mt-0.5 size-4 shrink-0" aria-hidden />
                    {spot.note}
                  </p>
                )}
              </ScrollReveal>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-[var(--lp-ink)] py-20">
        <Container>
          <Heading title={c.workflow.title} subtitle={c.workflow.subtitle} center dark />
          <ol className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {c.workflow.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                  {step}
                </span>
                {i < c.workflow.steps.length - 1 && (
                  <ArrowRight className="size-4 text-[var(--lp-accent)] rtl:rotate-180" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {cards && (
        <section className="py-24">
          <Container>
            <Heading title={cards.title} subtitle={cards.subtitle} center />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cards.items.map((item) => (
                <li key={item.title} className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center">
                  <LandingIconBadge name={item.icon} className="mx-auto size-12" />
                  <h3 className="mt-4 text-sm font-semibold text-[var(--lp-ink)]">{item.title}</h3>
                  <p className="mt-1 text-sm text-black/55">{item.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {audiences && (
        <section className="py-24">
          <Container>
            <Heading title={audiences.title} subtitle={audiences.subtitle} center />
            <ul className="mt-12 flex flex-wrap justify-center gap-4">
              {audiences.items.map((item, i) => (
                <li
                  key={item.title}
                  className={
                    !item.image
                      ? item.text
                        ? "w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                        : "w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                      : audiences.items.length <= 3
                        ? "w-full sm:w-[calc(33.333%-0.667rem)]"
                        : "w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
                  }
                >
                  <ScrollReveal delay={(i % 4) * 60} className="h-full">
                    <figure className="h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          width={800}
                          height={600}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                        />
                      ) : (
                        item.icon && <LandingIconBadge name={item.icon} className="mx-5 mt-5" />
                      )}
                      <figcaption className="p-5">
                        <span className="block text-sm font-semibold leading-6 text-[var(--lp-ink)]">{item.title}</span>
                        {item.text && <span className="mt-1 block text-sm leading-6 text-black/55">{item.text}</span>}
                      </figcaption>
                    </figure>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-t border-black/[0.06] bg-white py-24">
        <Container className="max-w-3xl">
          <Heading title={c.faq.title} subtitle={c.faq.subtitle} center />
          <div className="mt-12 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {c.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start text-base font-semibold text-[var(--lp-ink)] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-black/40 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-7 text-black/60">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-[var(--lp-accent)] px-8 py-14 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{c.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/85">{c.cta.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--lp-ink)] transition hover:bg-white/90"
              >
                {c.cta.primary}
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="size-4" aria-hidden />
                {c.cta.whatsapp}
              </a>
              {pdf && (
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <FileText className="size-4" aria-hidden />
                  {c.cta.brochure}
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
