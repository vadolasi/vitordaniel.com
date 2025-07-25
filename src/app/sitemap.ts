import type { MetadataRoute } from "next"
import { getPayload } from "payload"
import config from "@/payload.config"
import { getServerSideURL } from "@/utils/getURL"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  const defaultPages: MetadataRoute.Sitemap = [
    {
      url: "https://vitordaniel.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    }
  ]

  const posts = await payload.find({
    collection: "blog_posts",
    limit: 0,
    where: {}
  })

  const url = getServerSideURL()

  const sitemap: MetadataRoute.Sitemap = [
    ...defaultPages,
    ...posts.docs.map((post) => ({
      url: `${url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate)
    }))
  ]

  return sitemap
}
