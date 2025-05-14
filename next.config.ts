import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'rock-paper-scissors';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
