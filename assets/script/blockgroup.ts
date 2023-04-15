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

    @property
    sceneName: string = "";

    onLoad () {
        cc.director.preloadScene(this.sceneName,this.preLoadSceneCallBack);
    }
    
    preLoadSceneCallBack(){
        console.log("预加载场景done完成");
    }

    start() {
        this.isStatic = false;
        console.log(this, this.node)
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
        if (this.node.x <= 2164 && this.audioSource?.isPlaying == false) {
            this.audioSource.play();
        }

        //开始当前loop
        if (this.node.x <= -235 && this.audioSource?.isPlaying == false) {
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

            this.next();
        }
    }

    again(): void {
        this.audioSource.play();

        this.bg.getComponent("bg").initGroup(parseInt(this.node.name.replace(/[^0-9]/ig, "")))
    }

    next(): void {
        //当前loop为最后一个loop时，不需要再跳转到下一个loop
        if (parseInt(this.node.name.replace(/[^0-9]/ig, "")) == 7) {
            cc.director.loadScene(this.sceneName,this.loadSceneCallBack);
            // this.audioSource.mute = true;
            // this.audioSource2.mute = true;
            // this.audioSource3.play();
        }
        
        //正常next
        else{
            this.audioSource.mute = true;
            this.audioSource2.play();
            this.bg.getComponent("bg").initGroup(parseInt(this.node.name.replace(/[^0-9]/ig, "")) + 1)
        }
    }

    loadSceneCallBack(){
        console.log("加载场景done完成");
    }

    test(){
        cc.director.loadScene(this.sceneName,this.loadSceneCallBack);

    }
}
