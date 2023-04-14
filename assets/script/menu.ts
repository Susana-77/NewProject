// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    sceneName: string = "";

    onLoad () {
        cc.director.preloadScene(this.sceneName, function () {
            cc.log("预加载场景完成");
        });
    }

    loadSceneCallBack(){
        console.log("加载场景完成");
    }

    btnStartClick(e: cc.Event, custom: string) {
        cc.director.loadScene(this.sceneName,this.loadSceneCallBack);
    }

    btnQuitClick(e: cc.Event, custom: string) {
        cc.game.end();
    }

}
