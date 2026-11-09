export type ProductSlug =
  | "sdp"
  | "keswa"
  | "bouchli"
  | "qr-chief"
  | "tapsit-school"
  | "vola"
  | "maqam"
  | "rihla";

export const productSlugs: ProductSlug[] = [
  "sdp",
  "keswa",
  "bouchli",
  "qr-chief",
  "tapsit-school",
  "vola",
  "maqam",
  "rihla",
];

type ProductIcon =
  | "network"
  | "shirt"
  | "beef"
  | "qr-code"
  | "graduation-cap"
  | "car"
  | "hotel"
  | "plane";

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
  { slug: "sdp", icon: "network", image: "/images/products/sdp-catalogue.jpg", pdf: "/docs/sdp-brochure.pdf", featured: true },
  { slug: "keswa", icon: "shirt", image: "/images/products/keswa-catalogue.jpg", pdf: "/docs/keswa-brochure.pdf", featured: true },
  { slug: "bouchli", icon: "beef", image: "/images/products/bouchli-catalogue.jpg", pdf: "/docs/bouchli-brochure.pdf" },
  { slug: "qr-chief", icon: "qr-code", image: "/images/products/qr-chief.jpg", pdf: "/docs/qr-chief-brochure.pdf" },
  {
    slug: "tapsit-school",
    icon: "graduation-cap",
    image: "/images/products/tapsit-school-catalogue.jpg",
    pdf: "/docs/tapsit-school-brochure.pdf",
    featured: true,
  },
  { slug: "vola", icon: "car", image: "/images/products/vola-catalogue.jpg" },
  {
    slug: "maqam",
    icon: "hotel",
    image: "/images/products/maqam-catalogue.jpg",
    pdf: "/docs/maqam-brochure.pdf",
    demoUrl: "https://maqam-eta.vercel.app/portal",
  },
  {
    slug: "rihla",
    icon: "plane",
    image: "/images/products/rihla-catalogue.jpg",
    pdf: "/docs/rihla-brochure.pdf",
    demoUrl: "https://rihla.i-ite.com/",
    featured: true,
  },
];
