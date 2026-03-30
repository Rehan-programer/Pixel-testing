/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Modern JS & smaller bundles
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  serverExternalPackages: ["googleapis"],

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384, 512, 640],
    minimumCacheTTL: 60 * 60 * 24 * 30,

    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "dotera.co" },
      { protocol: "https", hostname: "pxlperfects.com" },
      { protocol: "https", hostname: "flagsapi.com" },
    ],
  },

  experimental: {
    optimizeCss: true,
    esmExternals: true,   // ✅ added
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "framer-motion",
      "lucide-react",
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Link",
            value: "<https://fonts.googleapis.com>; rel=preconnect",
          },
          {
            key: "Link",
            value: "<https://fonts.gstatic.com>; rel=preconnect; crossorigin",
          },
          {
            key: "Link",
            value: "<https://firebasestorage.googleapis.com>; rel=preconnect",
          },
          {
            key: "Link",
            value: "<https://www.googletagmanager.com>; rel=preconnect",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;