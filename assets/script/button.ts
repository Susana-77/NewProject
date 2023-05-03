// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    restartScene: string = "";

    @property
    menuScene: string = "";

    onLoad () {
        cc.director.preloadScene(this.restartScene);
        this.preLoadSceneCallBack("restart");
        cc.director.preloadScene(this.menuScene);
        this.preLoadSceneCallBack("menu");
    }

    preLoadSceneCallBack(u){
        console.log("预加载场景完成", u) ;
    }

    btnRestartClick(e: cc.Event, custom: string) {
        cc.director.loadScene(this.restartScene);
        this.loadSceneCallBack("restart");
    }

    btnMenuClick(e: cc.Event, custom: string) {
        cc.director.loadScene(this.menuScene);
        this.loadSceneCallBack("menu");
    }

    loadSceneCallBack(u){
        console.log("加载场景完成", u);
    }
}
