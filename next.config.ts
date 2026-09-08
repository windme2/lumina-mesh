import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const cleanBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath.replace(/^\/|\/$/g, "")}`
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath: cleanBasePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
