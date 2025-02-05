import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 錯誤
  },
  // 如果你需要 Prisma 自動生成客戶端，可以在 Vercel 部署時運行 prisma generate
  // 在 Vercel 或本地運行時，確保 Prisma 客戶端能夠正確生成
  postinstall: "prisma generate",
};

export default nextConfig;
