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
    isEnd = false;

    @property
    count = 0;

    @property(cc.AudioSource)
    audioSource = null;

    @property(cc.AudioSource)
    audioSource2 = null;

    @property(cc.AudioSource)
    audioSource3 = null;

    @property(cc.AudioSource)
    metroNome = null;

    @property(cc.Node)
    groupAreaNode = null;

    @property(cc.Node)
    bg = null;

    @property(cc.Node)
    star = null;

    @property(cc.Node)
    starhide1 = null;

    @property(cc.Node)
    starhide2 = null;

    @property(cc.Node)
    starhide3 = null;

    @property(cc.Node)
    starhide4 = null;

    @property(cc.Node)
    starhide5 = null;

    @property(cc.Node)
    starhide6 = null;

    @property
    sceneName: string = "";

    onLoad() {
        cc.director.preloadScene(this.sceneName, this.preLoadSceneCallBack);

        this.hide1();
        this.hide2();
        this.hide3();
        this.hide4();
        this.hide5();
        this.hide6();
    }

    preLoadSceneCallBack() {
        console.log("预加载场景done完成");
    }

    start() {
        this.isStatic = false;
        // console.log("this.node.x", this.node.x)
        console.log(this.node.childrenCount)
    }

    update(dt) {
        //blockgroup移动
        if (this.isStatic) return
        {
            this.node.x -= 300 * dt;
        }

        //blockgroup移动到画面外时注销
        if (this.node.x <= -3000 && this.isEnd == true) {
            this.node.active = false;
        }

        //四小节预备拍
        if (this.node.x <= 2164 && this.audioSource.isPlaying == false) {
            this.show();
            this.starBlink();
            this.audioSource.play();
        }

        //开始当前loop
        if (this.node.x <= -235 && this.audioSource.isPlaying == false) {
            this.starBlink();
            this.audioSource.play();
        }

        //again
        if (this.node.getComponent("blockgroup").count != this.node.childrenCount && this.node.x <= -2635 && this.isEnd == false) {
            console.log("again");
            this.isEnd = true;

            this.again();
        }

        //next
        if (this.node.getComponent("blockgroup").count == this.node.childrenCount && this.node.x <= -2635 && this.isEnd == false) {
            console.log("next");
            this.isEnd = true;

            // this.show();
            this.next();
        }
    }

    again(): void {
        this.starBlink();
        this.audioSource.play();

        this.bg.getComponent("bg").initGroup(parseInt(this.node.name.replace(/[^0-9]/ig, "")))
    }

    next(): void {
        //当前loop为最后一个loop时，不需要再跳转到下一个loop
        if (parseInt(this.node.name.replace(/[^0-9]/ig, "")) == 7) {
            cc.director.loadScene(this.sceneName, this.loadSceneCallBack);
        }

        //正常next
        else {
            this.audioSource.mute = true;
            this.audioSource2.play();
            this.bg.getComponent("bg").initGroup(parseInt(this.node.name.replace(/[^0-9]/ig, "")) + 1)
        }
    }

    loadSceneCallBack() {
        console.log("加载场景done完成");
    }

    starBlink() {
        const blinkAction = cc.blink(8, 16);
        this.star.runAction(blinkAction);
    }

    hide1() {
        const hideAction = cc.hide();
        this.starhide1.runAction(hideAction);
    }
    hide2() {
        const hideAction = cc.hide();
        this.starhide2.runAction(hideAction);
    }
    hide3() {
        const hideAction = cc.hide();
        this.starhide3.runAction(hideAction);
    }
    hide4() {
        const hideAction = cc.hide();
        this.starhide4.runAction(hideAction);
    }
    hide5() {
        const hideAction = cc.hide();
        this.starhide5.runAction(hideAction);
    }
    hide6() {
        const hideAction = cc.hide();
        this.starhide6.runAction(hideAction);
    }

    show() {
        const showAction = cc.show();
        this.star.runAction(showAction);
    }
}
