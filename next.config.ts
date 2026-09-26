import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
