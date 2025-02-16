// LeftComponent.tsx
import React from "react";
import { useEffect, useRef } from 'react';
import "./LeftComponent.css";
import Image from "next/image";
// import SpineAnimation from "./ExampleSpine";
import PixiSpine from "./SpineAnimation"
import OwlSpine from "./owlTest";




const LeftComponent: React.FC = () => {
  return (
    <div className="left-column">
      {/* <Image
        src="/sieruFL.png"
        alt="Character"
        className="character-image"
        width={800}
        height={900}
      /> */}
      <PixiSpine
      />
    </div>
  );
};

export default LeftComponent;