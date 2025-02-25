"use client";

import { useEffect, useRef } from "react";
import * as spine from "@esotericsoftware/spine-webgl";

const SpineCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spineApp = useRef<any>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        class App {
            skeleton: any;
            animationState: any;
            draggableBones: any[] = [];
            selectedBone: any = null;
            nonRotatableBones = ["Face_CT"]; // ❌ 這些骨骼不能旋轉

            constructor() {
                this.skeleton = null;
                this.animationState = null;
            }

            loadAssets(canvas: any) {
                canvas.assetManager.loadBinary("https://raw.githubusercontent.com/sakianoAya/spine_assets/main/sora.json");
                canvas.assetManager.loadTextureAtlas("https://raw.githubusercontent.com/sakianoAya/spine_assets/main/sora.atlas");
            }

            initialize(canvas: any) {
                let assetManager = canvas.assetManager;
                let atlas = assetManager.require("https://raw.githubusercontent.com/sakianoAya/spine_assets/main/sora.atlas");
                let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
                
                let skeletonJson = new spine.SkeletonJson(atlasLoader);
                skeletonJson.scale = 0.2; // 確保 Spinal Scale 正確
                let skeletonData = skeletonJson.readSkeletonData(assetManager.require("https://raw.githubusercontent.com/sakianoAya/spine_assets/main/sora.json"));

                this.skeleton = new spine.Skeleton(skeletonData);
                let animationStateData = new spine.AnimationStateData(skeletonData);
                this.animationState = new spine.AnimationState(animationStateData);

                // 設定可拖動骨骼
                let draggableBoneNames = ["Face_CT"];
                for (let boneName of draggableBoneNames) {
                    let bone = this.skeleton.findBone(boneName);
                    if (bone) this.draggableBones.push(bone);
                }

                // 滑鼠事件
                canvas.input.addListener({
                    down: (x: number, y: number) => {
                        let mousePosition = new spine.Vector3(x, y);
                        canvas.renderer.camera.screenToWorld(mousePosition, canvas.htmlCanvas.clientWidth, canvas.htmlCanvas.clientHeight);
                        this.selectedBone = null;

                        for (let bone of this.draggableBones) {
                            if (mousePosition.distance(new spine.Vector3(bone.worldX, bone.worldY, 0)) < 20) {
                                this.selectedBone = bone;
                                break;
                            }
                        }
                    },
                    dragged: (x: number, y: number) => {
                        if (!this.selectedBone) return;

                        let mousePosition = new spine.Vector3(x, y);
                        canvas.renderer.camera.screenToWorld(mousePosition, canvas.htmlCanvas.clientWidth, canvas.htmlCanvas.clientHeight);

                        if (this.selectedBone.parent) {
                            let position = new spine.Vector2(mousePosition.x, mousePosition.y);
                            this.selectedBone.parent.worldToLocal(position);
                            this.selectedBone.x = position.x;
                            this.selectedBone.y = position.y;

                            // ❌ 限制旋轉
                            if (this.nonRotatableBones.includes(this.selectedBone.data.name)) {
                                this.selectedBone.rotation = 0;
                            }
                        } else {
                            this.selectedBone.x = mousePosition.x;
                            this.selectedBone.y = mousePosition.y;
                        }
                    }
                });
            }

            update(canvas: any, delta: number) {
                this.animationState.update(delta);
                this.animationState.apply(this.skeleton);
                this.skeleton.updateWorldTransform(spine.Physics.update); // Spine 4.2 物理模擬
            }

            render(canvas: any) {
                let renderer = canvas.renderer;
                renderer.resize(spine.ResizeMode.Expand);
                canvas.clear(0.2, 0.2, 0.2, 1);
                
                renderer.begin();
                renderer.drawSkeleton(this.skeleton, true);

                let boneColor = new spine.Color(1, 0, 0, 0.5);
                let selectedBoneColor = new spine.Color(0, 1, 0, 0.5);
                for (let bone of this.draggableBones) {
                    renderer.circle(true, bone.worldX, bone.worldY, 20, bone === this.selectedBone ? selectedBoneColor : boneColor);
                }
                renderer.end();
            }
        }

        spineApp.current = new spine.SpineCanvas(canvasRef.current, { app: new App() });

        return () => {
            if (spineApp.current) {
                spineApp.current.dispose();
            }
        };
    }, []);

    return <canvas ref={canvasRef} style={{  width: "100%", height: "100%" }} />;
};

export default SpineCanvas;
