import { Feed } from "feed"
import { getPayload } from "payload"
import config from "@/payload.config"
import { getServerSideURL } from "@/utils/getURL"

export async function GET() {
  const url = getServerSideURL()

  const payload = await getPayload({ config })

  const feed = new Feed({
    title: "Vitor Daniel - Blog",
    description: "A blog about web development, programming, and technology.",
    id: url,
    link: url,
    copyright: `${new Date().getFullYear()} ${new URL(url).hostname}`
  })

  const posts = await payload.find({
    collection: "blog_posts",
    limit: 0,
    where: {}
  })

  posts.docs.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${url}/blog/${post.slug}`,
      link: `${url}/blog/${post.slug}`,
      date: new Date(post.publishedDate)
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml"
    }
  })
}
