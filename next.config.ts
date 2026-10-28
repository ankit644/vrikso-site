import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory confuses root detection — pin it.
  turbopack: { root: path.join(__dirname) },
  // www serves the same content as the apex — collapse to one canonical host.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vrikso.com" }],
        destination: "https://vrikso.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
