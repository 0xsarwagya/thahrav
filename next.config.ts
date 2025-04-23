import type { NextConfig } from "next";
import createPWA from "next-pwa";
import { withContentCollections } from "@content-collections/next"

const withPWA = createPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  scope: "/",
  sw: "service-worker.js",
  buildExcludes: [/middleware-manifest.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 86400 * 30 // 30 days
        }
      }
    }
  ]
})

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['https://thahrav.shop', "https://www.thahrav.shop"]
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.leonardo.ai",
      },
    ],
  }
};

// @ts-ignore
const nextWithPWA = withPWA(nextConfig);
// @ts-ignore
export default withContentCollections(nextWithPWA);