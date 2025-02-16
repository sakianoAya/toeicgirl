"use client";

import React, { useEffect, useRef } from "react";
import * as spine from "@esotericsoftware/spine-webgl";

const AdditiveBlendingDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let gl: WebGLRenderingContext | null;
  let renderer: spine.SceneRenderer;
  let assetManager: spine.AssetManager;
  let skeleton: spine.Skeleton;
  let state: spine.AnimationState;
  let bounds: spine.Vector2;
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
    assetManager = new spine.AssetManager(gl, "spine/");

    assetManager.loadTextureAtlas("public/spine/mary.atlas");
    assetManager.loadJson("public/spine/mary.json");

    const checkLoading = setInterval(() => {
      if (assetManager.isLoadingComplete()) {
        clearInterval(checkLoading);
        loadingComplete();
      }
    }, 100);
  }, []);

  const loadingComplete = () => {
    const atlasLoader = new spine.AtlasAttachmentLoader(assetManager.get("public/spine/mary.atlas"));
    const skeletonJson = new spine.SkeletonJson(atlasLoader);
    const skeletonData = skeletonJson.readSkeletonData(assetManager.get("public/spine/mary.json"));

    skeleton = new spine.Skeleton(skeletonData);
    state = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
    state.setAnimation(0, "idel", true);

    bounds = new spine.Vector2();
    skeleton.getBounds(new spine.Vector2(), bounds, []);
    renderer.camera.position.x = bounds.x / 2;
    renderer.camera.position.y = bounds.y / 2;
    renderer.skeletonDebugRenderer.drawMeshHull = false;
    renderer.skeletonDebugRenderer.drawMeshTriangles = false;

    requestAnimationFrame(render);
  };

  const render = () => {
    timeKeeper.update();
    const delta = timeKeeper.delta;

    state.update(delta);
    state.apply(skeleton);
    skeleton.updateWorldTransform(spine.Physics.update);

    if (!gl) return;
    gl.clearColor(0.92, 0.94, 0.96, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    renderer.begin();
    renderer.drawSkeleton(skeleton, true);
    renderer.end();

    requestAnimationFrame(render);
  };

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default AdditiveBlendingDemo;
