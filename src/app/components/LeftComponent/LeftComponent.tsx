// LeftComponent.tsx
import React from "react";
import "./LeftComponent.css";

const LeftComponent: React.FC = () => {
  return (
    <div className="left-column">
      <img
        src="/sieruFL.png"
        alt="Character"
        className="character-image"
      />
    </div>
  );
};

export default LeftComponent;