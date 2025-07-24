import type { CollectionConfig } from "payload"

export const Posts: CollectionConfig = {
  slug: "blog_posts",
  fields: [
    {
      name: "title",
      type: "text",
      unique: true,
      required: true
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true
    },
    {
      name: "content",
      type: "richText",
      required: true
    },
    {
      name: "publishedDate",
      type: "date",
      required: true
    }
  ],
  admin: {
    listSearchableFields: ["title", "slug"]
  }
}
