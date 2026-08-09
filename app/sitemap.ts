import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ecotreva.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = insights.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}