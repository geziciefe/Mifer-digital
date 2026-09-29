import type { MetadataRoute } from "next";
import { pageUrl } from "../src/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: pageUrl("/tr"),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: pageUrl("/tr/demo-calismalar"),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: pageUrl("/en"),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: pageUrl("/en/demo-work"),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
