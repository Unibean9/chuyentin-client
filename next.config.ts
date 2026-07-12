import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/ve-chung-toi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
