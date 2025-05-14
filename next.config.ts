import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '/rock-paper-scissors',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
