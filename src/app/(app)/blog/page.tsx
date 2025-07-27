import Link from "next/link"
import { getPayload } from "payload"
import { Suspense } from "react"
import config from "@/payload.config"

async function getBlogPosts(pagePromise: Promise<number>) {
  const page = await pagePromise

  const payload = await getPayload({
    config
  })

  const { docs, hasNextPage, hasPrevPage, totalDocs } = await payload.find({
    collection: "blog_posts",
    page,
    limit: 10
  })

  return {
    posts: docs,
    pagination: {
      page,
      hasNextPage,
      hasPrevPage,
      totalDocs
    }
  }
}

async function PageContent({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  const pagePromise = searchParams.then((params) => {
    let page = 1
    if (params.page && typeof params.page === "string") {
      page = parseInt(params.page, 10)
    }
    return page
  })

  const { posts, pagination } = await getBlogPosts(pagePromise)

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Blog</h1>
      <span className="text-sm text-gray-500">
        {pagination.totalDocs} postagens
      </span>
      <div className="mt-8">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex mt-4 gap-4">
        {pagination.hasPrevPage && (
          <Link href={`/blog?page=${pagination.page - 1}`}>Anterior</Link>
        )}
        {pagination.hasNextPage && (
          <Link href={`/blog?page=${pagination.page + 1}`}>Prómixo</Link>
        )}
      </div>
    </>
  )
}

export default function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  return (
    <Suspense fallback={<p>Carregando posts...</p>}>
      <PageContent searchParams={searchParams} />
    </Suspense>
  )
}
