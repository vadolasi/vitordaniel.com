import { unstable_cacheTag as cacheTag } from "next/cache"
import Link from "next/link"
import { getPayload } from "payload"
import config from "@/payload.config"

async function getBlogPosts(page: number = 1) {
  "use cache"

  cacheTag("blog-posts")

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
      hasNextPage,
      hasPrevPage,
      totalDocs
    }
  }
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  const params = await searchParams

  let page = 1
  if (params.page && typeof params.page === "string") {
    page = parseInt(params.page, 10)
  }

  const { posts, pagination } = await getBlogPosts(page)


  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Blog</h1>
      <span className="text-sm text-gray-500">{pagination.totalDocs} postagens</span>
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
          <Link href={`/blog?page=${page - 1}`}>Anterior</Link>
        )}
        {pagination.hasNextPage && (
          <Link href={`/blog?page=${page + 1}`}>Prómixo</Link>
        )}
      </div>
    </>
  )
}
