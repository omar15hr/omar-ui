import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "www.lummi.ai" },
      { hostname: "github.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
