import { postgresAdapter } from "@payloadcms/db-postgres"
import { resendAdapter } from "@payloadcms/email-resend"
import { sentryPlugin } from "@payloadcms/plugin-sentry"
import { seoPlugin } from "@payloadcms/plugin-seo"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import * as Sentry from "@sentry/nextjs"
import { buildConfig } from "payload"
import pg from "pg"
import sharp from "sharp"
import BlogPostsCollection from "@/collections/blogPosts"
import ProjectsCollection from "@/collections/projects"
import TechnologiesCollection from "@/collections/technologies"

export default buildConfig({
  editor: lexicalEditor(),

  collections: [
    BlogPostsCollection,
    ProjectsCollection,
    TechnologiesCollection
  ],

  localization: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR"
  },

  secret: process.env.PAYLOAD_SECRET!,

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!
    },
    pg
  }),

  email: resendAdapter({
    defaultFromAddress: "email@vitordaniel.com",
    defaultFromName: "Vitor Daniel",
    apiKey: process.env.RESEND_API_KEY || ""
  }),

  plugins: [
    sentryPlugin({ Sentry }),
    seoPlugin({
      collections: ["blog_posts"],
      generateTitle: ({ doc }) => `${doc.title} - vitordaniel.com`,
      generateDescription: ({ doc }) => doc.description
    }),
  ],

  sharp
})
