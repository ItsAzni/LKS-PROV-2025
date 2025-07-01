import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
