import { useState } from "react";
import { Application } from "pixi.js";
import PixiCanvas from "./PixiCanvas";
import SpineCharacter from "./SpineCharacter";
import SpineFollower from "./SpineFollower";
import { SpineGirl } from "./SpineGirl";

const PixiSpine = () => {
  const [app, setApp] = useState<Application | null>(null);
  const [spine, setSpine] = useState<SpineGirl | null>(null);

  return (
    <div>
      <PixiCanvas onAppReady={setApp} />
      {app && <SpineCharacter app={app} onSpineLoaded={setSpine} />}
      {app && spine && <SpineFollower app={app} spine={spine} />}
    </div>
  );
};

export default PixiSpine;
