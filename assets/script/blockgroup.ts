// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass('blockgroup')
export default class NewClass extends cc.Component {

    @property
    isStatic = true;

    @property
    speed = 150;

    // onLoad () {}

    start() {
        this.isStatic = false;
    }

    update(dt) {
        if (this.isStatic) return
        this.node.x -= 1;
        // if (this.node.x < -(cc.winSize.width + this.node.width) / 2) {
        //     this.node.destroy();
        // }

    }
}
