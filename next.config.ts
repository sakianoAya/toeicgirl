import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 錯誤
  },
  // 確保 Prisma 生成客戶端
  postinstall: "prisma generate", // 安裝依賴後自動生成 Prisma 客戶端
};

export default nextConfig;
