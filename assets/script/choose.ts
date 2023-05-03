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
    sceneName1: string = "";

    @property
    sceneName2: string = "";

    @property
    sceneName3: string = "";

    @property
    sceneName4: string = "";

    onLoad () {
        cc.director.preloadScene(this.sceneName1, function () {
            cc.log("预加载loop1完成");
        });
        cc.director.preloadScene(this.sceneName2, function () {
            cc.log("预加载loop2完成");
        });
        cc.director.preloadScene(this.sceneName3, function () {
            cc.log("预加载loop3完成");
        });
        cc.director.preloadScene(this.sceneName4, function () {
            cc.log("预加载loop4完成");
        });
    }

    btn1Click(e: cc.Event, custom: string) {
        cc.director.loadScene(this.sceneName1);
        console.log("加载loop1完成");
    }

    btn2Click(e: cc.Event, custom: string) {
        cc.director.loadScene(this.sceneName2);
        console.log("加载loop2完成");
    }

    btn3Click(e: cc.Event, custom: string) {
        cc.director.loadScene(this.sceneName3);
        console.log("加载loop3完成");
    }

    btn4Click(e: cc.Event, custom: string) {
        cc.director.loadScene(this.sceneName4);
        console.log("加载loop4完成");
    }
}
