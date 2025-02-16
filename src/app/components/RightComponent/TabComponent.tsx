import React, { useState } from "react";
import "./TabComponent.css";  // CSSパスを修正
import ToeicListComponent from "./ToeicListComponent";
import ChallengeComponent from "./ChallengeComponent";
import NotesList from "./NotesList";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["チャレンジ", "リスト", "ノート"];

  const tabContent = [
    <div key="challenge"><ChallengeComponent/></div>,
    <div key="toeic-list"><ToeicListComponent /></div>, 
    <div key="notes-list"><NotesList/></div>,
  ];

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}// タブをクリックしたときの処理
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