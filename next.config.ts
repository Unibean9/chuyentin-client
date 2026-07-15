import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/#doi-ngu",
        permanent: true,
      },
      {
        source: "/ve-chung-toi",
        destination: "/#doi-ngu",
        permanent: true,
      },
      {
        source: "/lo-trinh",
        destination: "/#lo-trinh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
