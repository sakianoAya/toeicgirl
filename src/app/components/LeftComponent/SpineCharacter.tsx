import { useEffect, useRef, useState } from "react";
import { Assets, Application } from "pixi.js";
import { SpineGirl } from "./SpineGirl";

interface SpineCharacterProps {
  app: Application | null;
  onSpineLoaded: (spine: SpineGirl | null) => void;
}

const SpineCharacter = ({ app, onSpineLoaded }: SpineCharacterProps) => {
  const [spine, setSpine] = useState<SpineGirl | null>(null);

  useEffect(() => {
    if (!app) return;

    const loadSpine = async () => {
      await Assets.load([
        {
          alias: "spineSkeleton",
          src: "https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/sora.json",
        },
        {
          alias: "spineAtlas",
          src: "https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/sora.atlas",
        },
      ]);

      const spineGirl = new SpineGirl();
      spineGirl.view.x = app.screen.width / 2;
      spineGirl.view.y = app.screen.height / 2;

      const scaleFactor = Math.min(app.screen.width / 1000, app.screen.height / 1000, 0.3);
      spineGirl.spine.scale.set(scaleFactor);

      setSpine(spineGirl);
      onSpineLoaded(spineGirl);
      app.stage.addChild(spineGirl.view);

      spineGirl.spine.state.setAnimation(0, "idle", true);
      spineGirl.spine.state.setAnimation(1, "blink", true);
    };

    loadSpine();
  }, [app]);

  return null;
};

export default SpineCharacter;
