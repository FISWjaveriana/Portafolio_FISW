import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portafolio_FISW' : '', // Use your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portafolio_FISW' : '',
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
