import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static exports
  basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-typescript-app' : '',
  images: {
    unoptimized: true, // For GitHub Pages compatibility
  },
};

export default nextConfig;
