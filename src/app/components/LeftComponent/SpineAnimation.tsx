import { useEffect, useRef } from 'react';
import { Application, Assets, Container, } from 'pixi.js';
import {Spine} from'@esotericsoftware/spine-pixi-v8';
import { SpineGirl } from './SpineGirl';

const PixiSpine = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new Application();// 建立 PIXI 應用程式

    const init = async () => {
      await app.init({ 
        width: window.innerWidth / 2,       // 設定畫布寬度
        height: window.innerHeight,         // 設定畫布高度
        backgroundAlpha: 0,                 // 設定背景透明
      });

      if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.canvas);
      }

      // 載入 SpineGirl 需要的素材
      await Assets.load([
        {
          alias: 'spineSkeleton',
          src: 'https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/sora.json',
        },
        {
          alias: 'spineAtlas',
          src: 'https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/sora.atlas',
        }
      ]);

      // 建立 SpineGirl
      const spineGirl = new SpineGirl();
      spineGirl.view.x = app.screen.width / 2;
      spineGirl.view.y = app.screen.height /2;
      spineGirl.spine.scale.set(0.3);
      // spineGirl.spine.position.set(app.screen.width / 5, 0);  //position.set(x, y) 來調整
      

     

      // 加入 PIXI 畫布
      app.stage.addChild(spineGirl.view);

      


      spineGirl.spine.state.setAnimation(0, 'idle', true);// 設定動畫
      spineGirl.spine.state.setAnimation(1, 'eye_blink', true);
      
    };

    init();

    return () => {
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiContainer} />;
};

export default PixiSpine;
