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

    @property
    originalX = 0

    @property(cc.AudioSource)
    s = null;

    onLoad(): void {
        this.originalX = this.node.x;
    }

    update(dt): void {
        this.node.x = this.originalX
    }

    onCollisionEnter() {
        this.initParticle();

        this.playAudio();
        
        this.node.parent.getComponent("blockgroup").count += 1;
        // console.log(this.node.parent.getComponent("blockgroup").count);
        this.node.active = false;
    }

    playAudio() {
        this.s.play();
      }

    //初始化粒子效果
    initParticle(): void {
        const particleNode = cc.instantiate(this.particleNode);

        particleNode.x = 0;
        particleNode.y = -170;

        this.particleAreaNode.addChild(particleNode);
    }
}
