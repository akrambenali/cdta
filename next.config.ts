import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:lang(fr|ar)/produits/:slug(enresol|tourism-algeria|ite-digital-solutions|mamlakat-al-hijab)",
        destination: "/:lang/realisations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
