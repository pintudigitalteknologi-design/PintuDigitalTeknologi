import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/image*", "/private/", "/admin/"],
    },
    sitemap: "https://www.pintudigital.tech/sitemap.xml",
    host: "https://www.pintudigital.tech",
  };
}
