import RSS from "rss"

export async function GET() {
  const feed = new RSS({
    title: "Vitor Daniel",
    description:
      "Desenvolvedor Full Stack, apaixonado por tecnologia e inovação.",
    site_url: "https://vitordaniel.com",
    feed_url: `https://vitordaniel.com/rss.xml`,
    copyright: `${new Date().getFullYear()} Vitor Daniel`,
    language: "pt-BR",
    pubDate: new Date()
  })

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8"
    }
  })
}
