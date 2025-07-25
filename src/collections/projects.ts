import { SlugField } from "@nouance/payload-better-fields-plugin/Slug"
import type { CollectionConfig } from "payload"

const ProjectsCollection: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "title",
      type: "text",
      unique: true,
      required: true,
      localized: true
    },
    ...SlugField("title", {
      slugOverrides: {
        localized: true
      }
    }),
    {
      name: "description",
      type: "text",
      required: true,
      localized: true
    },
    {
      name: "url",
      type: "text",
      required: true
    },
    {
      name: "technologies",
      type: "array",
      fields: [
        {
          name: "technology",
          type: "relationship",
          relationTo: "technologies",
          required: true
        }
      ]
    },
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
  }
}

export default ProjectsCollection
