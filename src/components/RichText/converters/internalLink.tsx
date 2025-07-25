import type { SerializedLinkNode } from "@payloadcms/richtext-lexical"

export const internalDocToHref = ({
  linkNode
}: {
  linkNode: SerializedLinkNode
}) => {
  const { value, relationTo } = linkNode.fields.doc!

  const slug =
    typeof value === "object" && value !== null && "slug" in value
      ? (value as unknown as { slug: string }).slug
      : String(value)

  if (relationTo === "blog_posts") {
    return `/posts/${slug}`
  }

  return `/${slug}`
}
