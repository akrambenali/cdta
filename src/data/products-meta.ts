export type ProductSlug = "sdp" | "gestion" | "vitrine" | "ecommerce";

export const productSlugs: ProductSlug[] = ["sdp", "gestion", "vitrine", "ecommerce"];

export const productsMeta: { slug: ProductSlug; icon: "network" | "layout-dashboard" | "monitor" | "shopping-cart" }[] = [
  { slug: "sdp", icon: "network" },
  { slug: "gestion", icon: "layout-dashboard" },
  { slug: "vitrine", icon: "monitor" },
  { slug: "ecommerce", icon: "shopping-cart" },
];
