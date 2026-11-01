export type ProductSlug =
  | "sdp"
  | "gestion"
  | "vitrine"
  | "ecommerce"
  | "keswa"
  | "bouchli"
  | "qr-chief"
  | "tapsit-school";

export const productSlugs: ProductSlug[] = [
  "sdp",
  "gestion",
  "vitrine",
  "ecommerce",
  "keswa",
  "bouchli",
  "qr-chief",
  "tapsit-school",
];

type ProductIcon =
  | "network"
  | "layout-dashboard"
  | "monitor"
  | "shopping-cart"
  | "shirt"
  | "beef"
  | "qr-code"
  | "graduation-cap";

interface ProductMeta {
  slug: ProductSlug;
  icon: ProductIcon;
  image: string;
  /** Fiche produit PDF téléchargeable, quand elle existe. */
  pdf?: string;
  featured?: boolean;
}

export const productsMeta: ProductMeta[] = [
  { slug: "sdp", icon: "network", image: "/images/products/sdp.jpg", pdf: "/docs/sdp.pdf", featured: true },
  { slug: "gestion", icon: "layout-dashboard", image: "/images/products/gestion.svg", featured: true },
  { slug: "vitrine", icon: "monitor", image: "/images/products/vitrine.svg" },
  { slug: "ecommerce", icon: "shopping-cart", image: "/images/products/ecommerce.svg", featured: true },
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
];
