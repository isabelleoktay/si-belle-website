import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export', // Tells Next.js to generate static files
  distDir: 'out',
  basePath: '/si-belle-website', // Change this to match your repo name
  assetPrefix: isProd ? '/si-belle-website/' : '',
};

export default nextConfig;
