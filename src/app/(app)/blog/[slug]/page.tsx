import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { unstable_cacheTag as cacheTag } from 'next/cache'
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import { RichText } from "@/components/RichText"
import config from "@/payload.config"

async function getBlogPost(slug: string) {
  "use cache"

  cacheTag(`blog-post:${slug}`)

  const payload = await getPayload({
    config
  })

  const {
    docs: [post]
  } = await payload.find({
    collection: "blog_posts",
    pagination: false,
    where: {
      slug: {
        equals: slug
      }
    }
  })

  if (!post) {
    notFound()
  }

  return post
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await getBlogPost(slug)

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <span className="text-sm text-gray-500">
        Publicado{" "}
        {formatDistanceToNow(new Date(post.publishedDate), {
          addSuffix: true,
          locale: ptBR
        })}
      </span>
      <RichText className="prose mt-8" data={post.content} />
    </>
  )
}
