import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portafolio_FISW' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portafolio_FISW' : '',
  trailingSlash: true,

};

export default nextConfig;
