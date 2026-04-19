import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline critical CSS into the HTML so the first paint isn't blocked
  // waiting for the Tailwind chunk to download.
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
