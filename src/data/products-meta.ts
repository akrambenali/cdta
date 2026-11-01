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

export const productsMeta: { slug: ProductSlug; icon: ProductIcon; featured?: boolean }[] = [
  { slug: "sdp", icon: "network", featured: true },
  { slug: "gestion", icon: "layout-dashboard", featured: true },
  { slug: "vitrine", icon: "monitor" },
  { slug: "ecommerce", icon: "shopping-cart", featured: true },
  { slug: "keswa", icon: "shirt", featured: true },
  { slug: "bouchli", icon: "beef" },
  { slug: "qr-chief", icon: "qr-code" },
  { slug: "tapsit-school", icon: "graduation-cap", featured: true },
];
