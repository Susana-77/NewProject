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
    metroNome = null;

    @property(cc.Node)
    groupAreaNode = null;

    @property(cc.Node)
    bg = null;

    // onLoad () {}

    start() {
        this.isStatic = false;
        console.log(this, this.node)
    }

    update(dt) {
        if (this.isStatic) return
        {
            this.node.x -= 300 * dt;
            // console.log("update",this.isStatic,this.node.x)
        }
        
        if (this.node.x <= 2165  && this.metroNome.isPlaying == false){
            this.metroNome.play();
        }
        // if (this.audioSource.isPlaying == true){
        //     this.metroNome.stop();

        // }

        if (this.node.x <= -233 && this.audioSource.isPlaying == false) { 
            this.audioSource.play(); 
            console.log(this.audioSource.isPlaying)
            // this.audioSource.isPlaying == true;
        }

     

        if (this.node.getComponent("blockgroup").count != 17 && this.node.x <= -2635 && this.isEnd == false) {
            this.isEnd = true;
            console.log("again");
            this.again();
        }

        if (this.node.x <= -3000 && this.isEnd == true){
            this.node.active = false;
        }

        if (this.node.getComponent("blockgroup").count == 17 && this.node.x <= -2635) {
            //next
        }
    }

    again(): void {

        this.bg.getComponent("bg").initGroup(1)
        // let groupNode = cc.instantiate(this.node)

        // groupNode.active = true;
        // groupNode.x = 365;
        // groupNode.y = this.node.y;
        // groupNode.getComponent("blockgroup").isStatic = false;

        // this.groupAreaNode.addChild(groupNode);
    }
}
