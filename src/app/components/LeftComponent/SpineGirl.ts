import { Container } from 'pixi.js';
import { Spine } from '@esotericsoftware/spine-pixi-v8';

export class SpineGirl {
  view: Container;//用來存放 Spine 角色的 Pixi 容器，可以將其加到 Pixi 應用程式中。
  spine: Spine;// Spine 角色的實例，負責載入 .json 或 .skel 的動畫角色。

  constructor() {
    this.view = new Container();

    // 建立 Spine 角色
    this.spine = Spine.from({
      skeleton: 'spineSkeleton',
      atlas: 'spineAtlas',
    });

    this.view.addChild(this.spine);
  }
  get skeleton() {
    return this.spine.skeleton;
  }//返回骨架資訊
}
