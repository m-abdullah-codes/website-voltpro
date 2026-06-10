import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/djnnc4xvt/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
