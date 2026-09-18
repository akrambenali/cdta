import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone, MessageCircle, MapPin, Wallet } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SITE_CONTACT } from "@/data/contact-info";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.contactPage.hero.title, description: dict.contactPage.hero.subtitle };
}

export default async function ContactPage({ params, searchParams }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const sp = await searchParams;
  const productParam = typeof sp.product === "string" ? sp.product : undefined;

  const dict = await getDictionary(lang);
  const info = dict.contactPage.info;

  return (
    <>
      <section className="border-b border-brand-900/8 bg-brand-950 py-20 sm:py-24">
        <Container className="max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
            {dict.contactPage.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {dict.contactPage.hero.title}
          </h1>
          <p className="mx-auto mt-5 text-base leading-7 text-white/65">{dict.contactPage.hero.subtitle}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <ContactForm locale={lang} form={dict.contactPage.form} defaultProduct={productParam} />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-900/8 bg-brand-50/60 p-6">
              <h2 className="text-lg font-bold text-brand-950">{info.title}</h2>
              <p className="mt-2 text-sm leading-6 text-brand-900/65">{info.description}</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/45">
                      {info.emailLabel}
                    </p>
                    <a href={`mailto:${SITE_CONTACT.email}`} dir="ltr" className="text-sm font-medium text-brand-950 hover:text-accent-600">
                      {SITE_CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/45">
                      {info.phoneLabel}
                    </p>
                    <a href={`tel:${SITE_CONTACT.phoneHref}`} dir="ltr" className="text-sm font-medium text-brand-950 hover:text-accent-600">
                      {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/45">
                      {info.whatsappLabel}
                    </p>
                    <a
                      href={SITE_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="text-sm font-medium text-brand-950 hover:text-accent-600"
                    >
                      {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/45">
                      {info.locationLabel}
                    </p>
                    <p className="text-sm font-medium text-brand-950">{info.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-5">
              <Wallet className="mt-0.5 size-5 shrink-0 text-accent-600" />
              <p className="text-sm leading-6 text-accent-800">{info.paymentNote}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
