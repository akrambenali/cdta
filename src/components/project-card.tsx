import { Check, ExternalLink } from "lucide-react";
import { Icon } from "@/components/icon-map";
import type { ProjectMeta } from "@/data/projects";
import type { ProjectContent } from "@/i18n/dictionary-type";

export function ProjectCard({
  meta,
  project,
  visitLabel,
}: {
  meta: ProjectMeta;
  project: ProjectContent;
  visitLabel: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-900/8 bg-white shadow-sm shadow-black/[0.03] transition-colors duration-300 hover:border-accent-200">
      <a
        href={meta.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden
        className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-brand-50"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={meta.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute start-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm">
          {project.type}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
            <Icon name={meta.icon} className="size-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-brand-950">{project.name}</h3>
            <p className="text-sm font-medium text-accent-600">{project.sector}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-brand-900/70">{project.description}</p>

        <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2">
          {project.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 rounded-full border border-brand-900/8 bg-brand-50/60 px-3 py-1 text-xs font-medium text-brand-900/80"
            >
              <Check className="size-3.5 text-accent-500" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={meta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-900/12 px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:border-accent-400 hover:text-accent-600"
        >
          {visitLabel}
          <ExternalLink className="size-4" aria-hidden />
          <span className="sr-only">— {project.name}</span>
        </a>
      </div>
    </article>
  );
}
