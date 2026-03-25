/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384, 512, 640],
    qualities: [65, 70, 75, 80, 85, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "dotera.co",
      },
      {
        protocol: "https",
        hostname: "pxlperfects.com",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com", // ✅ Added this line
      },
    ],
  },


  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        // ✅ Preconnects for faster DNS & TLS handshakes
        source: "/(.*)",
        headers: [
          { key: "Link", value: '<https://fonts.googleapis.com>; rel=preconnect' },
          { key: "Link", value: '<https://fonts.gstatic.com>; rel=preconnect; crossorigin' },
          { key: "Link", value: '<https://firebasestorage.googleapis.com>; rel=preconnect' },
          { key: "Link", value: '<https://www.googletagmanager.com>; rel=preconnect' },
        ],
      },
    ];
  },
};

export default nextConfig;
