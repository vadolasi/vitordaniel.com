import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: "https://vitordaniel.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    }
  ] as const

  const sitemap: MetadataRoute.Sitemap = [...defaultPages]

  return sitemap
}
