import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const words = await prisma.toeiclist.findMany(); // データベースからすべての単語を取得
    return NextResponse.json(words);
  } catch (error) {
    console.error("Database fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
