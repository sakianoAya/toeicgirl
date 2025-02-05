// LeftComponent.tsx
import React from "react";
import "./LeftComponent.css";
import Image from "next/image";

const LeftComponent: React.FC = () => {
  return (
    <div className="left-column">
      <Image
        src="/sieruFL.png"
        alt="Character"
        className="character-image"
        width={800}
        height={900}
      />
    </div>
  );
};

export default LeftComponent;