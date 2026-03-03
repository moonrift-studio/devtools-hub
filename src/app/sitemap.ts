import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://devtools-hub.vercel.app";

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Home page for each locale
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}`])
        ),
      },
    });

    // Tool pages for each locale
    for (const tool of tools) {
      entries.push({
        url: `${baseUrl}/${locale}${tool.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${tool.path}`])
          ),
        },
      });
    }
  }

  return entries;
}
