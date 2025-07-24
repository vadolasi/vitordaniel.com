import withBundleAnalyzer from "@next/bundle-analyzer"
import { withPayload } from "@payloadcms/next/withPayload"
import { withSentryConfig } from "@sentry/nextjs"
import type { NextConfig } from "next"

// import utwm from "unplugin-tailwindcss-mangle"

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // config.plugins?.push(utwm.webpack())
    }
    return config
  }
}

const config = withSentryConfig(withPayload(nextConfig), {
  org: "Unova",
  project: "vitordaniel.com",
  sentryUrl: "https://bugsink.vitordaniel.com",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true
})

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
})(config)
