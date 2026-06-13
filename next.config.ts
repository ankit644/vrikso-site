import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory confuses root detection — pin it.
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
