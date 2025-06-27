import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  output: "standalone"
}

export default nextConfig
