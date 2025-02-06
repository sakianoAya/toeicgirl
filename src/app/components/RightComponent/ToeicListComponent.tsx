// "use client"; // 必須加這行，讓組件在前端執行
import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/toeiclist"); // API 路徑修正
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Accordion type="single" collapsible>
      {data.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`}>
          {/* 這裡顯示 英文 - 日文 */}
          <AccordionTrigger>
            <span className="font-medium">{item.words}</span> - <span className="text-gray-500">{item.japanese}</span>
          </AccordionTrigger>
          
          {/* 展開後顯示更多資訊 */}
          <AccordionContent>
            <p><strong>品詞：</strong> {item.class}</p>
            <p><strong>例文：</strong> {item.sentence}</p>
            <p><strong>難易度：</strong> {item.level}</p>
            <p><strong>カテゴリー：</strong> {item.category}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ToeicListComponent;
