import { useEffect, useRef, useState } from "react";
import { Application } from "pixi.js";

interface PixiCanvasProps {
  onAppReady: (app: Application) => void;
}

const PixiCanvas = ({ onAppReady }: PixiCanvasProps) => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const [app, setApp] = useState<Application | null>(null);

  useEffect(() => {
    const app = new Application();

    app.init({
      width: window.innerWidth / 2,
      height: window.innerHeight,
      backgroundAlpha: 0,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      hello: true,
    }).then(() => {
      if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.canvas);
      }
      setApp(app);
      onAppReady(app);
    });

    const resize = () => {
      if (!app) return;
      app.renderer.resize(window.innerWidth / 2, window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiContainer} />;
};

export default PixiCanvas;
