import { useEffect, useRef } from 'react';
import { Application, Assets, Graphics } from 'pixi.js';
import { Spine } from '@esotericsoftware/spine-pixi-v8';
import { SpineGirl } from './SpineGirl';

const PixiSpine = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const spineRef = useRef<SpineGirl | null>(null);
  const controlBonesRef = useRef<{ bone: any; control: Graphics; initialX: number; initialY: number }[]>([]);

  useEffect(() => {
    const app = new Application();

    const resize = () => {
      const newWidth = window.innerWidth / 2;
      const newHeight = window.innerHeight;
      app.renderer.resize(newWidth, newHeight);

      if (spineRef.current) {
        spineRef.current.view.x = newWidth / 2;
        spineRef.current.view.y = newHeight / 2;
        const scaleFactor = Math.min(newWidth / 1000, newHeight / 1000, 0.3);
        spineRef.current.spine.scale.set(scaleFactor);
      }
      for (let controlBone of controlBonesRef.current) {
        controlBone.initialX = newWidth / 2;
        controlBone.initialY = newHeight / 2;
        controlBone.control.x = controlBone.initialX;
        controlBone.control.y = controlBone.initialY;
      }
    };

    const init = async () => {
      await app.init({
        width: window.innerWidth / 2,
        height: window.innerHeight,
        backgroundAlpha: 0,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        hello: true,
      });

      if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.canvas);
      }

      await Assets.load([
        {
          alias: 'spineSkeleton',
          src: 'https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/sora.json',
        },
        {
          alias: 'spineAtlas',
          src: 'https://raw.githubusercontent.com/sakianoAya/spine_assets/refs/heads/main/sora.atlas',
        },
      ]);

      const spineGirl = new SpineGirl();
      spineGirl.view.x = app.screen.width / 2;
      spineGirl.view.y = app.screen.height / 2;
      const scaleFactor = Math.min(app.screen.width / 1000, app.screen.height / 1000, 0.3);
      spineGirl.spine.scale.set(scaleFactor);
      spineRef.current = spineGirl;

      app.stage.eventMode = 'static';
      app.stage.hitArea = app.screen;

      let dragObject: Graphics | null = null;
      let lastX = -1, lastY = -1;
      
      const endDrag = () => (dragObject = null);

      app.stage
        .on('pointerup', endDrag)
        .on('pointerupoutside', endDrag)
        .on('pointermove', ({ x, y }) => {
          if (dragObject) {
            dragObject.x += x - lastX;
            dragObject.y += y - lastY;
            lastX = x;
            lastY = y;
          }
        });

      spineGirl.spine.state.setAnimation(0, 'idle', true);
      spineGirl.spine.state.setAnimation(1, 'blink', true);
      app.stage.addChild(spineGirl.view);

      const controlBoneNames = ['eye_mover'];
      const controlBones: { bone: any; control: Graphics; initialX: number; initialY: number }[] = [];

      await new Promise((resolve) => requestAnimationFrame(resolve));

      for (let i = 0; i < controlBoneNames.length; i++) {
        const bone = spineGirl.spine.skeleton.findBone(controlBoneNames[i]);
        if (!bone) continue;

        const point = { x: bone.worldX, y: bone.worldY };
        spineGirl.spine.skeletonToPixiWorldCoordinates(point);

        const control = new Graphics();
        control.fill(0xde3249, 0.5);
        control.circle(0, 0, 10);
        control.endFill();

        control.x = point.x;
        control.y = point.y;
        controlBones.push({ bone, control, initialX: point.x, initialY: point.y });
        app.stage.addChild(control);

        control.eventMode = 'static';
        control.on('pointerdown', ({ x, y }) => {
          dragObject = control;
          lastX = x;
          lastY = y;
          
        });

        control.on("pointermove", ({ x, y }) => {
          if (dragObject === control) {
            let newX = control.x + (x - lastX);
            let newY = control.y + (y - lastY);

            const boneData = controlBones.find(cb => cb.control === control);
            if (boneData) {
              control.x = newX;
              control.y = newY;
            }
            control.clear();
            control.fill(0xde3249, 0.1);
            control.circle(0, 0, 10);
            control.endFill();

            lastX = x;
            lastY = y;
          }
        });

        control.on("pointerup", () => {
          dragObject = null;
          const boneData = controlBones.find(cb => cb.control === control);
          if (boneData) {
            control.x = boneData.initialX;
            control.y = boneData.initialY;
          }
          control.clear();
            control.fill(0xde3249, 0.5);
            control.circle(0, 0, 10);
            control.endFill();
        });
      }

      controlBonesRef.current = controlBones;

      const point = { x: 0, y: 0 };
      spineGirl.spine.beforeUpdateWorldTransforms = () => {
        for (let { bone, control } of controlBones) {
          point.x = control.x;
          point.y = control.y;
          spineGirl.spine.pixiWorldCoordinatesToBone(point, bone);
          bone.x = point.x;
          bone.y = point.y;
        }
      };

      window.addEventListener("resize", resize);
    };

    init();

    return () => {
      window.removeEventListener("resize", resize);
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiContainer} />;
};

export default PixiSpine;
