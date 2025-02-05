import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // 直接建立 PrismaClient

export async function GET() {
  try {
    // 從資料庫取得所有單字
    const words = await prisma.toeiclist.findMany();

    // 隨機選取 10 個單字
    const selectedWords = words.sort(() => 0.5 - Math.random()).slice(0, 10);

    // 生成測驗題目
    const quiz = selectedWords.map((word) => {
      const isEnglishToJapanese = Math.random() > 0.5; // 隨機決定顯示日文或英文
      const correctAnswer = isEnglishToJapanese ? word.japanese : word.words;

      // 生成選項
      let choices = [correctAnswer];

      while (choices.length < 4) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const wrongAnswer = isEnglishToJapanese ? randomWord.japanese : randomWord.words;
        if (!choices.includes(wrongAnswer)) {
          choices.push(wrongAnswer);
        }
      }

      // 隨機排序選項
      choices = choices.sort(() => Math.random() - 0.5);

      return {
        id: word.id,
        question: isEnglishToJapanese ? word.words : word.japanese,
        correctAnswer,
        choices,
      };
    });

    return NextResponse.json(quiz);
  } catch (error) {
    console.error("Database fetch error:", error);
    return NextResponse.json({ error: "Error fetching quiz data" }, { status: 500 });
  }
}
