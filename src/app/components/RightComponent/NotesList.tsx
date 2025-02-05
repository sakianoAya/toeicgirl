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

  // 取得筆記
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
            </AccordionContent>
          </AccordionItem>
        ))
      )}
    </Accordion>
  );
};

export default NotesList;
