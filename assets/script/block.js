// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    name: 'block',
    extends: cc.Component,

    properties: {
        speed: {
            default: 150
        },
        isStatic: {
            default: true
        }
    },

    update (dt) {
        if (this.isStatic) return

        this.node.x -= this.speed * dt;
    
        if (this.node.x < -(cc.winSize.width + this.node.width) / 2) {
            this.node.destroy();
        }
    }
});
