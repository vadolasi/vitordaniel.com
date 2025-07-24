import { postgresAdapter } from "@payloadcms/db-postgres"
import { sentryPlugin } from "@payloadcms/plugin-sentry"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import * as Sentry from "@sentry/nextjs"
import { buildConfig } from "payload"
import pg from "pg"
import sharp from "sharp"

export default buildConfig({
  editor: lexicalEditor(),

  collections: [],

  secret: process.env.PAYLOAD_SECRET || "",

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || ""
    },
    pg
  }),

  plugins: [sentryPlugin({ Sentry })],

  sharp
})
