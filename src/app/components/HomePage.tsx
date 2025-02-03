// HomePage.tsx
import React from "react";
import "./HomePage.css";
import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      {/* 左側組件 */}
      <LeftComponent />
      {/* 右側組件 */}
      <RightComponent />
    </div>
  );
};

export default HomePage;