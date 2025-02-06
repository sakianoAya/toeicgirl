import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 錯誤
  },
};

export default nextConfig;
