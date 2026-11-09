import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:lang(fr|ar)/produits/:slug(enresol|tourism-algeria|ite-digital-solutions|mamlakat-al-hijab|computer-store)",
        destination: "/:lang/realisations",
        permanent: true,
      },
      {
        source: "/docs/:slug(sdp|keswa|bouchli|qr-chief|tapsit-school|maqam|rihla).pdf",
        destination: "/docs/:slug-brochure.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
