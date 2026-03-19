import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Static HTML export for Netlify CDN
  trailingSlash: true,        // Required for Netlify static routing
  images: {
    unoptimized: true,        // Required for static export (no server for image API)
    formats: ["image/avif", "image/webp"],
  },
  compress: true,             // Gzip/Brotli compression
  poweredByHeader: false,     // Remove X-Powered-By header (security + small perf gain)
  reactStrictMode: true,
  compiler: {
    removeConsole: true,      // Strip console.log in production
  },
};

export default nextConfig;
