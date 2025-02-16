"use client";

import React, { useEffect, useRef } from "react";
import * as spine from "@esotericsoftware/spine-webgl";



interface SpineAnimationProps {
  atlasPath: string;
  jsonPath: string;
  animation: string;
  scale?: number;
  width?: number;
  height?: number;
}

const SpineAnimation: React.FC<SpineAnimationProps> = ({
  atlasPath,
  jsonPath,
  animation,
  scale = 1,
  width = 800,
  height = 600,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let gl: WebGLRenderingContext | null;
  let renderer: spine.SceneRenderer;
  let assetManager: spine.AssetManager;
  let skeleton: spine.Skeleton;
  let state: spine.AnimationState;
  let timeKeeper = new spine.TimeKeeper();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    gl = canvas.getContext("webgl") as WebGLRenderingContext;
    if (!gl) {
      console.error("WebGL not supported.");
      return;
    }

    renderer = new spine.SceneRenderer(canvas, gl);
    assetManager = new spine.AssetManager(gl, "/spine/");// 這裡設定為 "/spine/"

    assetManager.loadTextureAtlas(atlasPath);
    assetManager.loadJson(jsonPath);

    const checkLoading = setInterval(() => {
      if (assetManager.isLoadingComplete()) {
        clearInterval(checkLoading);
        console.log("✅ 資源載入完成");
        loadingComplete();
      }
    }, 100);

    return () => clearInterval(checkLoading);
  }, []);

  const loadingComplete = () => {
    const jsonData = assetManager.get(jsonPath);  // 嘗試取得 JSON 資料
    console.log("JSON 資料:", jsonData);

  if (!jsonData) {
    console.error("❌ JSON 資料載入失敗:", jsonPath);
    return;
  }
    const atlasLoader = new spine.AtlasAttachmentLoader(assetManager.get(atlasPath));
    const skeletonJson = new spine.SkeletonJson(atlasLoader);
    skeletonJson.scale = scale;
    const skeletonData = skeletonJson.readSkeletonData(assetManager.get(jsonPath));
    

    try {
    const skeletonData = skeletonJson.readSkeletonData(jsonData);
    skeleton = new spine.Skeleton(skeletonData);
    state = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
    state.setAnimation(0, animation, true);

    renderer.camera.position.x = 0;
    renderer.camera.position.y = 0;

    requestAnimationFrame(render);
  } catch (error) {
    console.error("❌ Skeleton 加載失敗:", error);
  }
  };

  const render = () => {
    timeKeeper.update();
    const delta = timeKeeper.delta;

    state.update(delta);
    state.apply(skeleton);
    skeleton.updateWorldTransform(spine.Physics.update);

    if (!gl) return;
    gl.clearColor(0.2, 0.2, 0.2, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    renderer.begin();
    renderer.drawSkeleton(skeleton, true);
    renderer.end();

    requestAnimationFrame(render);
  };

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default SpineAnimation;

