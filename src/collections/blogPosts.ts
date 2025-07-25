import { SlugField } from "@nouance/payload-better-fields-plugin/Slug"
import { revalidateTag } from "next/cache"
import type { CollectionConfig } from "payload"

const BlogPostsCollection: CollectionConfig = {
  slug: "blog_posts",
  fields: [
    {
      name: "title",
      type: "text",
      unique: true,
      required: true,
      localized: true
    },
    ...SlugField(),
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true
    },
    {
      name: "publishedDate",
      type: "date",
      required: true
    }
  ],
  admin: {
    useAsTitle: "title",
    listSearchableFields: ["title", "slug"]
  },
  access: {
    read: () => true
  },
  hooks: {
    afterChange: [
      async ({ previousDoc }) => {
        revalidateTag("blog_posts")
        
        if (previousDoc.slug) {
          revalidateTag(`blog_post:${previousDoc.slug}`)
        }
      }
    ],
    afterDelete: [
      async ({ doc }) => {
        revalidateTag("blog_posts")

        if (doc.slug) {
          revalidateTag(`blog_post:${doc.slug}`)
        }
      }
    ]
  }
}

export default BlogPostsCollection
