// "use client"; // 必須加這行，讓組件在前端執行
import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const userId = 1;
const ToeicListComponent: React.FC = () => {
  interface ToeicItem {
    id: number;
    words: string;
    japanese: string;
    class: string;
    sentence: string;
    level: string;
    category: string;
  }

  const [data, setData] = useState<ToeicItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [addingNote, setAddingNote] = useState<number | null>(null); // ノートに追加中の単語IDを保存

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/toeiclist"); // APIのURLを修正
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddNote = async (wordId: number) => {// ノートに追加
    setAddingNote(wordId);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, wordId }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("ノートに追加されました！");
      } else {
        alert(result.message || "ノートに追加できませんでした");
      }
        } catch (error) {
      console.error("ノートに追加中にエラーが発生しました:", error);
      alert("ノートに追加中にエラーが発生しました");
    } finally {
      setAddingNote(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Accordion type="single" collapsible>
      {data.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`}>
          
          <AccordionTrigger className="flex p-4 border-b border-gray-200">
            <span className="font-extrabold text-lg w-1/2 truncate	">{item.words}</span>
            <span className="text-gray-500  w-1/2 text-center">{item.japanese}</span>
          </AccordionTrigger>
          
         
          <AccordionContent className="p-4 bg-gray-50 rounded-lg">
 
  <div className="flex flex-wrap text-sm text-gray-700 gap-x-4">
    <span><strong>品詞：</strong> {item.class}</span>
    <span><strong>難易度：</strong> {item.level}</span>
    <span><strong>カテゴリー：</strong> {item.category}</span>
  </div>

  
  <div className="mt-4 p-4 border-l-4 border-blue-500 bg-white shadow-sm">
  <p className="text-lg font-bold text-gray-800">例文：</p>
  <div className="flex justify-between items-center">
    <p className="text-lg text-gray-900">{item.sentence}</p>
    <Button
      onClick={() => handleAddNote(item.id)}
      disabled={addingNote === item.id}
      className="ml-4 mt-2"
    >
      {addingNote === item.id ? "追加中..." : "ノートに追加"}
    </Button>
  </div>
</div>

  
</AccordionContent>


        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ToeicListComponent;
