"use client"; // 必須加這行，讓組件在前端執行
import React, { useEffect, useState } from "react";

const ToeicListComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../api/toeiclist"); // 呼叫 API
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
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Word</th>
            <th>Class</th>
            <th>Japanese</th>
            <th>Sentence</th>
            <th>Level</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.words}</td>
              <td>{item.class}</td>
              <td>{item.japanese}</td>
              <td>{item.sentence}</td>
              <td>{item.level}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToeicListComponent;
