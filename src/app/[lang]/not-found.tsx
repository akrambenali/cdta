import Link from "next/link";
import { Compass } from "lucide-react";
import fr from "@/i18n/dictionaries/fr";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-brand-950">
      <Container className="max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
          <Compass className="size-7" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-white">{fr.notFound.title}</h1>
        <p className="mt-3 text-base leading-7 text-white/60">{fr.notFound.description}</p>
        <Link
          href="/fr"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600"
        >
          {fr.notFound.cta}
        </Link>
      </Container>
    </section>
  );
}
