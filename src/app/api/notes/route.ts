import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 取得所有筆記
export async function GET() {
  try {
    const notes = await prisma.note.findMany({
      include: {
        word: true, // 取得關聯的 Toeiclist 單字
      },
    });
    return NextResponse.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    return NextResponse.json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}

// 新增筆記
export async function POST(req: Request) {
  try {
    const { userId, wordId } = await req.json();

    if (!userId || !wordId) {
      return NextResponse.json({ error: "Missing userId or wordId" }, { status: 400 });
    }

    const newNote = await prisma.note.create({
      data: {
        userId,
        wordId,
      },
    });

    return NextResponse.json(newNote);
  } catch (error) {
    console.error("Error adding note:", error);
    return NextResponse.json({ error: "Failed to add note" }, { status: 500 });
  }
}

// 刪除筆記
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing note ID" }, { status: 400 });
    }

    await prisma.note.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    return NextResponse.json({ error: "Failed to delete note" }, { status: 500 });
  }
}
