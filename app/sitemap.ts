import type { MetadataRoute } from "next";
import { siteConfig } from "../src/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/demo-calismalar`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/en`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/en/demo-work`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
