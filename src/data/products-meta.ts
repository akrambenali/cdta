export type ProductSlug =
  | "sdp"
  | "keswa"
  | "bouchli"
  | "qr-chief"
  | "tapsit-school"
  | "vola"
  | "maqam"
  | "rihla"
  | "computer-store";

export const productSlugs: ProductSlug[] = [
  "sdp",
  "keswa",
  "bouchli",
  "qr-chief",
  "tapsit-school",
  "vola",
  "maqam",
  "rihla",
  "computer-store",
];

type ProductIcon =
  | "network"
  | "shirt"
  | "beef"
  | "qr-code"
  | "graduation-cap"
  | "car"
  | "hotel"
  | "plane"
  | "cpu";

interface ProductMeta {
  slug: ProductSlug;
  icon: ProductIcon;
  image: string;
  /** Fiche produit PDF téléchargeable, quand elle existe. */
  pdf?: string;
  /** Lien vers le site ou la démo en ligne, quand il existe. */
  demoUrl?: string;
  featured?: boolean;
}

export const productsMeta: ProductMeta[] = [
  { slug: "sdp", icon: "network", image: "/images/products/sdp-catalogue.jpg", pdf: "/docs/sdp.pdf", featured: true },
  { slug: "keswa", icon: "shirt", image: "/images/products/keswa-catalogue.jpg", pdf: "/docs/keswa.pdf", featured: true },
  { slug: "bouchli", icon: "beef", image: "/images/products/bouchli-catalogue.jpg", pdf: "/docs/bouchli.pdf" },
  { slug: "qr-chief", icon: "qr-code", image: "/images/products/qr-chief.jpg", pdf: "/docs/qr-chief.pdf" },
  {
    slug: "tapsit-school",
    icon: "graduation-cap",
    image: "/images/products/tapsit-school-catalogue.jpg",
    pdf: "/docs/tapsit-school.pdf",
    featured: true,
  },
  { slug: "vola", icon: "car", image: "/images/products/vola-catalogue.jpg" },
  {
    slug: "maqam",
    icon: "hotel",
    image: "/images/products/maqam.svg",
    pdf: "/docs/maqam.pdf",
    demoUrl: "https://maqam-eta.vercel.app/portal",
  },
  {
    slug: "rihla",
    icon: "plane",
    image: "/images/products/rihla.svg",
    pdf: "/docs/rihla.pdf",
    demoUrl: "https://rihla.i-ite.com/",
    featured: true,
  },
  {
    slug: "computer-store",
    icon: "cpu",
    image: "/images/products/computer-store.svg",
    demoUrl: "https://akgpu.itelearning-dz.workers.dev/",
  },
];
