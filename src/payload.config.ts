import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { resendAdapter } from "@payloadcms/email-resend"
import { sentryPlugin } from "@payloadcms/plugin-sentry"
import { seoPlugin } from "@payloadcms/plugin-seo"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import * as Sentry from "@sentry/nextjs"
import { buildConfig } from "payload"
import sharp from "sharp"
import BlogPostsCollection from "@/collections/blogPosts"
import ProjectsCollection from "@/collections/projects"
import TechnologiesCollection from "@/collections/technologies"
import CategoriesCollection from "./collections/categories"
import SeriesCollection from "./collections/series"

export default buildConfig({
  editor: lexicalEditor(),

  globals: [],

  collections: [
    BlogPostsCollection,
    CategoriesCollection,
    SeriesCollection,
    ProjectsCollection,
    TechnologiesCollection
  ],

  localization: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR"
  },

  secret: process.env.PAYLOAD_SECRET!,

  db: mongooseAdapter({
    url: process.env.DATABASE_URI!
  }),

  email: resendAdapter({
    defaultFromAddress: "email@vitordaniel.com",
    defaultFromName: "Vitor Daniel",
    apiKey: process.env.RESEND_API_KEY!
  }),

  plugins: [
    sentryPlugin({ Sentry }),
    seoPlugin({
      collections: ["blog_posts"],
      generateTitle: ({ doc }) => doc.title,
      generateDescription: ({ doc }) => doc.description
    })
  ],

  sharp
})
