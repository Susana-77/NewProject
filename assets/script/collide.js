cc.Class({
    extends: cc.Component,

    properties: {
        is_enable: true,    //是否开启碰撞检测系统
        is_debug: false     //是否显示碰撞检测区域
    },
    
    onload() {
        cc.director.getCollisionManager().enabled = true;
        console.log('collideonload');
    },
    
    onCollisionEnter(other,self){
        console.log('碰撞发生');
    }
});