import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/** robots.txt — allow full crawl, advertise the sitemap. Served at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
