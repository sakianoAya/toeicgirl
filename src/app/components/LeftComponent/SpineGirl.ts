import { Container } from 'pixi.js';
import { Spine } from '@esotericsoftware/spine-pixi-v8';

export class SpineGirl {
  view: Container;
  spine: Spine;

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
  }
}
