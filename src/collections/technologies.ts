import type { CollectionConfig } from "payload"

const TechnologiesCollection: CollectionConfig = {
  slug: "technologies",
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
      required: true
    }
  ],
  admin: {
    useAsTitle: "name",
    listSearchableFields: ["name"]
  }
}

export default TechnologiesCollection
