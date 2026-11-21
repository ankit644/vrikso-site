import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Self-contained server bundle for the Docker/VM deployment (deploy/Dockerfile
  // copies .next/standalone) — the site runs as a small container next to the
  // CRM on the Oracle VM. See My-business-crm/docs/SELF-HOST-ORACLE.md.
  output: "standalone",
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
