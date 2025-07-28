"use cache"

import { unstable_cacheTag as cacheTag } from "next/cache"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import { Suspense } from "react"
import { RichText } from "@/components/RichText"
import config from "@/payload.config"
import { getServerSideURL } from "@/utils/getURL"
import PostDate from "./post-date"

async function getBlogPost(slug: string) {
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

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = await params.then((p) => p.slug)
  const post = await getBlogPost(slug)

  const url = getServerSideURL()

  return {
    title: post.meta?.title,
    description: post.meta?.description,
    openGraph: {
      title: post.meta?.title,
      description: post.meta?.description,
      url: `${url}/blog/${post.slug}`
    },
    twitter: {
      title: post.meta?.title,
      description: post.meta?.description,
      card: "summary_large_image"
    }
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  cacheTag(`blog-post:${slug}`)

  const post = await getBlogPost(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: new Date(post.createdAt),
    dateModified: new Date(post.updatedAt),
    author: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vitor Daniel",
      url: "https://vitordaniel.com",
      image: "https://github.com/vadolasi.png",
      jobTitle: "Desenvolvedor Web Full Stack",
      additionalName: "vadolasi"
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <Suspense fallback={<p>Carregando data...</p>}>
        <PostDate date={post.publishedDate} />
      </Suspense>
      <RichText className="prose mt-8" data={post.content} />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Needs to be escaped for JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
    </>
  )
}
