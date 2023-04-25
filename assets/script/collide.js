cc.Class({
  extends: cc.Component,

  properties: {
    is_enable: true, //是否开启碰撞检测系统
    is_debug: false, //是否显示碰撞检测区域

  },

  start() {
    let manager = cc.director.getCollisionManager();

    // Enabled the colider manager.
    manager.enabled = true;

    // Enabled draw collider
    manager.enabledDebugDraw = true;

    // Enabled draw collider bounding box
    manager.enabledDrawBoundingBox = true;
  },

});
