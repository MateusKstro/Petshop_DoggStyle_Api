import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        port: '',
        pathname: '/images/**',
      }
    ]
  }
};

export default nextConfig;
