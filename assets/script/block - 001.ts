// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass('block')
export default class NewClass extends cc.Component {
    @property
    isStatic = true;

    @property(cc.Node)
    particleAreaNode = null;

    @property(cc.Node)
    particleNode = null;

    onCollisionEnter() {
        this.initParticle();
        this.node.active = false;

    }

    //初始化粒子效果
    initParticle(): void {
        const particleNode = cc.instantiate(this.particleNode);

        particleNode.x = 0;
        particleNode.y = -170;

        this.particleAreaNode.addChild(particleNode);
    }
}
