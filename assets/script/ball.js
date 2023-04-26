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
    this.pauseBtn.node.on("click", this.pauseGame, this);
    this.pauseBtn.node.x = 10000;

    // 获取要控制的节点
    const groupNode1 = this.blockGroup1;
    const groupNode2 = this.blockGroup2;
    const groupNode3 = this.blockGroup3;
    const groupNode4 = this.blockGroup4;
    const groupNode5 = this.blockGroup5;
    const groupNode6 = this.blockGroup6;
    const groupNode7 = this.blockGroup7;
    const groupNode8 = this.blockGroup8;

    // 获取节点上的 cc.AudioSource 组件
    this.audioSource1 = groupNode1.getComponent("blockgroup").audioSource;
    this.audioSource12 = groupNode1.getComponent("blockgroup").audioSource2;

    this.audioSource2 = groupNode2.getComponent("blockgroup").audioSource;
    this.audioSource22 = groupNode2.getComponent("blockgroup").audioSource2;

    this.audioSource3 = groupNode3.getComponent("blockgroup").audioSource;
    this.audioSource32 = groupNode3.getComponent("blockgroup").audioSource2;

    this.audioSource4 = groupNode4.getComponent("blockgroup").audioSource;
    this.audioSource42 = groupNode4.getComponent("blockgroup").audioSource2;

    this.audioSource5 = groupNode5.getComponent("blockgroup").audioSource;
    this.audioSource52 = groupNode5.getComponent("blockgroup").audioSource2;

    this.audioSource6 = groupNode6.getComponent("blockgroup").audioSource;
    this.audioSource62 = groupNode6.getComponent("blockgroup").audioSource2;

    this.audioSource7 = groupNode7.getComponent("blockgroup").audioSource;
    this.audioSource72 = groupNode7.getComponent("blockgroup").audioSource2;

    this.audioSource8 = groupNode8.getComponent("blockgroup").audioSource;
    this.audioSource82 = groupNode8.getComponent("blockgroup").audioSource2;

    cc.director.pause();
  },

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.boost, this);
    // this.node.on("mousedown", this.start, this);
    this.goBtn.node.on("click", this.start, this);
    this.pauseBtn.node.on("click", this.pauseGame, this);

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
    this.pauseBtn.node.x = 404;
  },

  pauseGame() {
    
    if (cc.director.isPaused()) {
      this.audioSource1.resume();
      this.audioSource2.resume();
      this.audioSource3.resume();
      this.audioSource4.resume();
      this.audioSource5.resume();
      this.audioSource6.resume();
      this.audioSource7.resume();
      this.audioSource8.resume();

      this.audioSource12.resume();
      this.audioSource22.resume();
      this.audioSource32.resume();
      this.audioSource42.resume();
      this.audioSource52.resume();
      this.audioSource62.resume();
      this.audioSource72.resume();
      this.audioSource82.resume();

      cc.director.resume();

    } else {
      this.audioSource1.pause();
      this.audioSource2.pause();
      this.audioSource3.pause();
      this.audioSource4.pause();
      this.audioSource5.pause();
      this.audioSource6.pause();
      this.audioSource7.pause();
      this.audioSource8.pause();

      this.audioSource12.pause();
      this.audioSource22.pause();
      this.audioSource32.pause();
      this.audioSource42.pause();
      this.audioSource52.pause();
      this.audioSource62.pause();
      this.audioSource72.pause();
      this.audioSource82.pause();

      cc.director.pause();
    }
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
