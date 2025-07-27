import { unstable_cacheTag as cacheTag } from "next/cache"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import { Suspense } from "react"
import { RichText } from "@/components/RichText"
import config from "@/payload.config"
import PostDate from "./post-date"

async function getBlogPost(slugPromise: Promise<string>) {
  "use cache"

  const slug = await slugPromise

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

export const experimental_ppr = true

export async function generateStaticParams() {
  const payload = await getPayload({
    config
  })

  const { docs: posts } = await payload.find({
    collection: "blog_posts",
    pagination: false
  })

  return posts.map((post) => ({
    slug: post.slug
  }))
}


export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slugPromise = params.then((p) => p.slug)
  const post = await getBlogPost(slugPromise)

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <Suspense fallback={<p>Carregando data...</p>}>
        <PostDate date={post.publishedDate} />
      </Suspense>
      <RichText className="prose mt-8" data={post.content} />
    </>
  )
}
