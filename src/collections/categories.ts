import type { CollectionConfig } from "payload"

const CategoriesCollection: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "title",
      type: "text",
      unique: true,
      required: true,
      localized: true
    },
    {
      name: "description",
      type: "text",
      required: true,
      localized: true
    },
  ],
  admin: {
    useAsTitle: "title",
    listSearchableFields: ["title"]
  }
}

export default CategoriesCollection
