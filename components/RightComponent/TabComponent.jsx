import React, { useState } from "react";
import "./TabComponent.css"; // 引入樣式
import axios from 'axios';
import VocabularyList from "./VocabularyList";


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["チャレンジ", "リスト", "ノート"];

  const tabContent = [
    <div>挑戰模式的內容</div>,
    <VocabularyList />, // 單字列表委派給 VocabularyList
    <div>筆記功能的內容</div>,
  ];

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabContent[activeTab]}</div>
    </div>
  );
};

export default TabComponent;
