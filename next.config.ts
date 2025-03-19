import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{Portafolio_FISW}' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/{Portafolio_FISW}' : '',
  // This is important for static exports
  trailingSlash: true,

};

export default nextConfig;
