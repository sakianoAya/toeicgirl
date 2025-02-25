import { useEffect, useRef } from 'react';
import { Application, Assets, Container, } from 'pixi.js';
import {AnimationState, AnimationStateData, Spine, Vector2, SkeletonData, Skeleton,Physics} from '@esotericsoftware/spine-pixi-v8';
import { SpineGirl } from './SpineGirl';


const PixiSpine = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  let clientMouseX = 0, clientMouseY = 0, mouseMoved = false;

  useEffect(() => {
    const app = new Application();// 建立 PIXI 應用程式

    const init = async () => {
      await app.init({ 
        width: 800,       // 設定畫布寬度
        height: window.innerHeight,      // 設定畫布高度
        background: '#1099bb', 
        // resizeTo: window, // 設定畫布大小隨視窗大小改變
       });

      if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.canvas);
      }

      // 載入 SpineGirl 需要的素材
      await Assets.load([
        {
          alias: 'spineSkeleton',
          src: 'https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/owl-pro.json',
        },
        {
          alias: 'spineAtlas',
          src: 'https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/owl-pro.atlas',
        }
      ]);

      // 建立 SpineGirl
      const spineGirl = new SpineGirl();
      spineGirl.view.x = app.screen.width / 2;
      spineGirl.view.y = app.screen.height /2;
      spineGirl.spine.scale.set(0.5);
      spineGirl.spine.zIndex = 0;
      spineGirl.spine.position.set(app.screen.width / 5, 0);  //position.set(x, y) 來調整
      
      

     

      // 加入 PIXI 畫布
      app.stage.addChild(spineGirl.view);
      // 設定動畫
      spineGirl.spine.scale.x = Math.min(spineGirl.spine.scale.x, 1); // 限制最大縮放為 1
      spineGirl.spine.scale.y = Math.min(spineGirl.spine.scale.y, 1);

      spineGirl.spine.state.setAnimation(0, 'idle', true);
      spineGirl.spine.state.setAnimation(1, 'blink', true);
      
      const left =spineGirl.spine.state.setAnimation(2, 'left', true);
      const right =spineGirl.spine.state.setAnimation(3, 'right', true);
      const up =spineGirl.spine.state.setAnimation(4, 'up', true);
      const down =spineGirl.spine.state.setAnimation(5, 'down', true);
      [left, right, up, down].forEach((anim) => {
        anim.mixBlend = 3; // Spine 混合模式
        anim.alpha = 0; // 初始透明度設為 0
      });

      spineGirl.spine.state.apply(spineGirl.skeleton);
      spineGirl.skeleton.updateWorldTransform(Physics.update);
		
      const offset = new Vector2();
      const bound = new Vector2();
      spineGirl.skeleton.getBounds(offset, bound, []);
      console.log('offset:', offset);
      console.log('bound:', bound);
      console.log('Skeleton:', spineGirl.skeleton);
     console.log("Scale:", spineGirl.spine.scale);
        console.log("Position:", spineGirl.view.x, spineGirl.view.y);

    


      
      setupInput();
      app.ticker.add(() => {
        
        if (mouseMoved) {
          calculateBlend(clientMouseX, clientMouseY, left, right, up, down, spineGirl);
          
        }
      });
      
    };

    const calculateBlend = (
      x: number, y: number, 
      left: any, right: any, up: any, down: any,
      spineGirl: SpineGirl
    ) => {
      const centerX = 400; // 測試時固定的中心點
      const centerY = 300;
    
      right.alpha = Math.min(Math.max(0, 1 - x / centerX), 1);
left.alpha = Math.min(Math.max(0, (x - centerX) / 800), 1);
up.alpha = Math.min(Math.max(0, 1 - y / centerY), 1);
down.alpha = Math.min(Math.max(0, (y - centerY) / 600), 1);

    
      // **固定的移動範圍**
      const minX = 300, maxX = 350;
      const minY = 200, maxY = 250;
      const moveFactor = 0.2; // 限制移動比例
      const targetX = centerX + (x - centerX) * moveFactor;
      const targetY = centerY + (y - centerY) * moveFactor;
    
      // **限制在範圍內**
      spineGirl.view.x = Math.min(Math.max(targetX, minX), maxX);
spineGirl.view.y = Math.min(Math.max(targetY, minY), maxY);
    };
    
    
    

    const setupInput = () => {
      document.addEventListener('mousemove', (event) => {
        if (!pixiContainer.current) return;
    
        const rect = pixiContainer.current.getBoundingClientRect();
        clientMouseX = event.clientX - rect.left;
        clientMouseY = event.clientY - rect.top;
        mouseMoved = true;
      

      });
    };
    
 


    init();

    return () => {
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiContainer} />;
};

export default PixiSpine;
