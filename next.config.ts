import type { NextConfig } from "next";

// Public media isn't content-hashed, so cache for a day and revalidate in the background
// rather than marking it immutable (replacing a file with the same name still updates).
const MEDIA_CACHE = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Stock photography placeholders. Replace with real shop photos in /public/images when available.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      { source: "/reels/:path*", headers: [{ key: "Cache-Control", value: MEDIA_CACHE }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: MEDIA_CACHE }] },
      { source: "/logo.:ext(png|webp)", headers: [{ key: "Cache-Control", value: MEDIA_CACHE }] },
    ];
  },
};

export default nextConfig;
