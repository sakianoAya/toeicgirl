import { useEffect, useRef } from "react";
import { Application, Graphics } from "pixi.js";
import { SpineGirl } from "./SpineGirl";

interface SpineFollowerProps {
  app: Application | null;
  spine: SpineGirl | null;
}

const SpineFollower = ({ app, spine }: SpineFollowerProps) => {
  const controlBonesRef = useRef<{ bone: any; control: Graphics; initialX: number; initialY: number }[]>([]);

  useEffect(() => {
    if (!app || !spine) return;

    const maxDistance = 50; // 限制骨頭的最大移動距離
    const controlBoneNames = ["eye_mover"]; // 需要跟隨滑鼠的骨頭

    const controlBones: { bone: any; control: Graphics; initialX: number; initialY: number }[] = [];

    for (let i = 0; i < controlBoneNames.length; i++) {
      const bone = spine.spine.skeleton.findBone(controlBoneNames[i]);
      if (!bone) continue;

      const point = { x: bone.worldX, y: bone.worldY };
      spine.spine.skeletonToPixiWorldCoordinates(point);

      const control = new Graphics();
      control.beginFill(0xff00ff);
      control.drawCircle(0, 0, 12);
      control.endFill();

      control.x = point.x;
      control.y = point.y;
      controlBones.push({ bone, control, initialX: point.x, initialY: point.y });
      app.stage.addChild(control);
    }

    controlBonesRef.current = controlBones;

    // 更新骨架位置
    const updateBonePosition = (x: number, y: number) => {
      for (let { bone, initialX, initialY } of controlBonesRef.current) {
        const dx = x - initialX;
        const dy = y - initialY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > maxDistance) {
          const angle = Math.atan2(dy, dx);
          bone.x = initialX + Math.cos(angle) * maxDistance;
          bone.y = initialY + Math.sin(angle) * maxDistance;
        } else {
          bone.x = x;
          bone.y = y;
        }
      }
    };

    // 滑鼠移動時更新
    const onMouseMove = (event: MouseEvent) => {
      const rect = app.view.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      updateBonePosition(x, y);
    };

    app.view.addEventListener("mousemove", onMouseMove);

    return () => {
      app.view.removeEventListener("mousemove", onMouseMove);
    };
  }, [app, spine]);

  return null;
};

export default SpineFollower;
