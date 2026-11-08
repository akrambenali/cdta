import type { IconName } from "@/components/icon-map";

export type ProjectSlug = "enresol" | "tourism-algeria" | "ite-digital-solutions" | "mamlakat-al-hijab";

export interface ProjectMeta {
  slug: ProjectSlug;
  icon: IconName;
  image: string;
  url: string;
}

export const projectsMeta: ProjectMeta[] = [
  { slug: "enresol", icon: "sun", image: "/images/projects/enresol.svg", url: "https://enresol.net/" },
  {
    slug: "tourism-algeria",
    icon: "map-pin",
    image: "/images/projects/tourism-algeria.svg",
    url: "https://tourism-algeria.vercel.app/",
  },
  {
    slug: "ite-digital-solutions",
    icon: "building-2",
    image: "/images/projects/ite-digital-solutions.svg",
    url: "https://www.i-ite.com/",
  },
  {
    slug: "mamlakat-al-hijab",
    icon: "shopping-bag",
    image: "/images/projects/mamlakat-al-hijab.svg",
    url: "https://mamlakat-aljilbab.vercel.app",
  },
];

export const projectSlugs = projectsMeta.map((p) => p.slug);
