import withBundleAnalyzer from "@next/bundle-analyzer"
import { withPayload } from "@payloadcms/next/withPayload"
import { withSentryConfig } from "@sentry/nextjs"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    cacheComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
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
