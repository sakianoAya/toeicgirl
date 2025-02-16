import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // 直接PrismaClientを作成

export async function GET() {
  try {
    // データベースからすべての単語を取得
    const words = await prisma.toeiclist.findMany();

    // ランダムに10個の単語を選択
    const selectedWords = words.sort(() => 0.5 - Math.random()).slice(0, 10);

    // クイズの問題を生成
    const quiz = selectedWords.map((word) => {
      const isEnglishToJapanese = Math.random() > 0.5; // ランダムに日本語か英語を表示
      const correctAnswer = isEnglishToJapanese ? word.japanese : word.words;

      // 選択肢を生成
      let choices = [correctAnswer];

      while (choices.length < 4) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const wrongAnswer = isEnglishToJapanese ? randomWord.japanese : randomWord.words;
        if (!choices.includes(wrongAnswer)) {
          choices.push(wrongAnswer);
        }
      }

      // 選択肢をシャッフル
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
