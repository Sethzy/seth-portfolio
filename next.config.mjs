/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev"
      },
      {
        protocol: "https",
        hostname: "siddz.com"
      }
    ]
  }
};

export default nextConfig;
