import React from "react";
import "./RightComponent.css";
import TabComponents from "./TabComponent";

const RightComponent: React.FC = () => {
  return (
    <div className="right-column">
      <TabComponents />
    </div>
  );
};

export default RightComponent;