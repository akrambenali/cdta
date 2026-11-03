export type ProductSlug =
  | "sdp"
  | "keswa"
  | "bouchli"
  | "qr-chief"
  | "tapsit-school"
  | "vola"
  | "maqam"
  | "rihla"
  | "mamlakat-al-hijab"
  | "computer-store"
  | "ite-digital-solutions"
  | "tourism-algeria"
  | "enresol";

export const productSlugs: ProductSlug[] = [
  "sdp",
  "keswa",
  "bouchli",
  "qr-chief",
  "tapsit-school",
  "vola",
  "maqam",
  "rihla",
  "mamlakat-al-hijab",
  "computer-store",
  "ite-digital-solutions",
  "tourism-algeria",
  "enresol",
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
  | "shopping-bag"
  | "cpu"
  | "building-2"
  | "map-pin"
  | "sun";

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
  { slug: "sdp", icon: "network", image: "/images/products/sdp.jpg", pdf: "/docs/sdp.pdf", featured: true },
  { slug: "keswa", icon: "shirt", image: "/images/products/keswa.jpg", pdf: "/docs/keswa.pdf", featured: true },
  { slug: "bouchli", icon: "beef", image: "/images/products/bouchli.jpg", pdf: "/docs/bouchli.pdf" },
  { slug: "qr-chief", icon: "qr-code", image: "/images/products/qr-chief.jpg", pdf: "/docs/qr-chief.pdf" },
  {
    slug: "tapsit-school",
    icon: "graduation-cap",
    image: "/images/products/tapsit-school.jpg",
    pdf: "/docs/tapsit-school.pdf",
    featured: true,
  },
  { slug: "vola", icon: "car", image: "/images/products/vola.svg" },
  { slug: "maqam", icon: "hotel", image: "/images/products/maqam.svg", demoUrl: "https://maqam-eta.vercel.app/portal" },
  {
    slug: "rihla",
    icon: "plane",
    image: "/images/products/rihla.svg",
    pdf: "/docs/rihla.pdf",
    demoUrl: "https://rihla.i-ite.com/",
    featured: true,
  },
  {
    slug: "mamlakat-al-hijab",
    icon: "shopping-bag",
    image: "/images/products/mamlakat-al-hijab.svg",
    demoUrl: "https://mamlakat-aljilbab.vercel.app",
  },
  {
    slug: "computer-store",
    icon: "cpu",
    image: "/images/products/computer-store.svg",
    demoUrl: "https://akgpu.itelearning-dz.workers.dev/",
  },
  {
    slug: "ite-digital-solutions",
    icon: "building-2",
    image: "/images/products/ite-digital-solutions.svg",
    demoUrl: "https://www.i-ite.com/",
  },
  {
    slug: "tourism-algeria",
    icon: "map-pin",
    image: "/images/products/tourism-algeria.svg",
    demoUrl: "https://tourism-algeria.vercel.app/",
  },
  { slug: "enresol", icon: "sun", image: "/images/products/enresol.svg", demoUrl: "https://enresol.net/" },
];
