cc.Class({
  extends: cc.Component,

  properties: {
    // ballNode: cc.Node,
    // blockPrefab: cc.Prefab,
    blockAreaNode: cc.Node,
    blockNode: cc.Node,
    // blockNodeArr: {
    //     default: [],
    //     type: Block
    // },
    startTime: Date.now(),
    audioSource: {
      type: cc.AudioSource,
      default: null,
    },
  },

  //   onLoad() {
  //     this.node.on("touchstart", this.boost, this);
  //   },

  //   onDestroy() {
  //     this.node.off("touchstart", this.boost, this);
  //   },

  update(dt) {
    const now = Date.now();

    if (now - this.startTime > 2500 + 5000 * Math.random()) {
      this.startTime = now;
      this.initBlock();
    }
  },

  //初始化跳板
  initBlock() {
    let blockNode = cc.instantiate(this.blockNode);

    blockNode.active = true;
    blockNode.x = (cc.winSize.width + this.blockNode.width) / 2;
    blockNode.y = this.blockNode.y + 50;
    blockNode.getComponent("block").isStatic = false;

    this.blockAreaNode.addChild(blockNode);
  },
});
