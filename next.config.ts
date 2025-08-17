import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Allow both localhost and your domain
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:8000, https://localhost:3000.com",
          },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,POST,PUT,PATCH,DELETE" },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
        ],
      },
    ];
  },
};

export default nextConfig;
