"use client";

import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface Note {
  id: number;
  userId: number;
  word: {
    words: string;
    japanese: string;
    sentence: string;
  };
}

const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingNote, setDeletingNote] = useState<number | null>(null);

  // ノートを取得
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/notes");
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.json();
        setNotes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // ノートを削除
  const handleDeleteNote = async (noteId: number) => {
  if (!confirm("このメモを削除してもよろしいですか？")) return;

  setDeletingNote(noteId);
  try {
    const response = await fetch(`/api/notes`, {  
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: noteId }),  
    });

    if (!response.ok) {
      throw new Error("削除に失敗しました");
    }

    alert("メモが削除されました！");
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  } catch (error) {
    alert("メモの削除中にエラーが発生しました");
    console.error(error);
  } finally {
    setDeletingNote(null);
  }
};


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Accordion type="single" collapsible className="w-full">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">今なにもないよ～</p>
      ) : (
        notes.map((note) => (
          <AccordionItem key={note.id} value={`note-${note.id}`}>
            <AccordionTrigger>
              {note.word.words} ({note.word.japanese})
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">{note.word.sentence}</p>
                <button
                onClick={() => handleDeleteNote(note.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                メモを削除
                </button>
            </AccordionContent>
          </AccordionItem>
        ))
      )}
    </Accordion>
  );
};

export default NotesList;
