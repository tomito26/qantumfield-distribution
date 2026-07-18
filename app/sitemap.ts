import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { service_meta } from "@/lib/constants";

/**
 * XML sitemap. Static routes are derived from `service_meta` (lib/constants.ts)
 * so new service pages appear automatically. Served at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(service_meta).map(
    (route) => ({
      url: `${base}${route}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  return [...staticRoutes, ...serviceRoutes];
}
