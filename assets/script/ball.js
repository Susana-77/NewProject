cc.Class({
  extends: cc.Component,

  properties: {
    goBtn: {
      default: null,
      type: cc.Button,
    },
    pauseBtn: {
      default: null,
      type:cc.Button,
    },

    blockGroup1: {
      default: null,
      type: cc.Node,
    },
    blockGroup2: {
      default: null,
      type: cc.Node,
    },
    blockGroup3: {
      default: null,
      type: cc.Node,
    },
    blockGroup4: {
      default: null,
      type: cc.Node,
    },
    blockGroup5: {
      default: null,
      type: cc.Node,
    },
    blockGroup6: {
      default: null,
      type: cc.Node,
    },
    blockGroup7: {
      default: null,
      type: cc.Node,
    },
    blockGroup8: {
      default: null,
      type: cc.Node,
    }
  },

  onLoad() {
    this.initVel = 0;
    this.initPhysics();
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.boost, this);
    this.goBtn.node.on("click", this.start, this);

    cc.director.pause();
  },

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.boost, this);
    this.goBtn.node.on("click", this.start, this);
  },

  //初始化物理引擎
  initPhysics() {
    const manager = cc.director.getPhysicsManager();
    manager.enabled = true;
    manager.gravity = cc.v2(0, -100);
  },

  onBeginContact(contact, selfCollider, otherCollider) {
    let rigidBody = selfCollider.node.getComponent(cc.RigidBody);

    if (!this.initVel) {
      this.initVel = rigidBody.linearVelocity.y;
    } else {
      rigidBody.linearVelocity = cc.v2(0, this.initVel);
    }
  },

  start(e) {
    cc.director.resume();
    this.goBtn.node.x = -10000;
    this.pauseBtn.node.x = 884;
  },

  //加速
  boost(e) {
    // console.log(e);
    if (this.initVel) {
      let rigidBody = this.node.getComponent(cc.RigidBody);
      rigidBody.linearVelocity = cc.v2(0, -10000);
      // console.log("加速");
    }
  },
});
