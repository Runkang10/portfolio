import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
  },
  transpilePackages: ["three"],
  allowedDevOrigins: ["192.168.0.123"],
};

export default nextConfig;
