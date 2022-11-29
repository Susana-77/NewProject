cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {
    this.initVel = 0;
    this.initPhysics();
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.boost, this);
    this.node.on("mousedown", this.start, this);

    cc.director.pause();
  },

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.boost, this);
    this.node.on("mousedown", this.start, this);
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
    console.log("start", cc.director.isPaused());
    if (cc.director.isPaused()) {
      cc.director.resume();
      console.log("resume");
    } else {
      cc.director.pause();
      console.log("pause");
    }
  },

  //加速
  boost(e) {
    console.log(e);
    if (this.initVel) {
      let rigidBody = this.node.getComponent(cc.RigidBody);
      rigidBody.linearVelocity = cc.v2(0, -1600);
      console.log("加速");
    }
  },
});
