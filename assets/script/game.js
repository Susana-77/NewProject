cc.Class({
  extends: cc.Component,

  properties: {
    // ballNode: cc.Node,
    // blockPrefab: cc.Prefab,
    groupAreaNode: cc.Node,
    groupNode: cc.Node,
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

  onLoad() {
    this.initGroup();
  },

  //   onDestroy() {
  //     this.node.off("touchstart", this.boost, this);
  //   },

  update(dt) {
    const now = Date.now();

    if (now - this.startTime > 2500 + 5000 * Math.random()) {
      this.startTime = now;

    }
  },

  //初始化跳板
  initGroup() {
    let groupNode = cc.instantiate(this.groupNode);

    groupNode.active = true;
    // groupNode.x = (cc.winSize.width + this.groupNode.width) / 2;
    groupNode.x = 0;
    groupNode.y = this.groupNode.y;
    groupNode.getComponent("blockgroup").isStatic = false;

    this.groupAreaNode.addChild(groupNode);
  },
});
