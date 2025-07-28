import type { CollectionConfig } from "payload"

const SeriesCollection: CollectionConfig = {
  slug: "series",
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
      localized: true
    },
  ],
  admin: {
    useAsTitle: "title",
    listSearchableFields: ["title"]
  }
}

export default SeriesCollection
