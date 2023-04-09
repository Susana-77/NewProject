cc.Class({
  name:'bg',
  extends: cc.Component,

  properties: {
    // ballNode: cc.Node,
    // blockPrefab: cc.Prefab,
    groupAreaNode: cc.Node,
    groupNode1: cc.Node,
    groupNode2: cc.Node,
    groupNode3: cc.Node,
    groupNode4: cc.Node,
    groupNode5: cc.Node,
    groupNode6: cc.Node,
    groupNode7: cc.Node,
    groupNode8: cc.Node,
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

    // if (now - this.startTime > 2500 + 5000 * Math.random()) {
    //   this.startTime = now;
    //   this.initGroup()
    // }
  },

  //初始化跳板
  initGroup(id = 1) {
    // TODO: JS  模板字符串
    const defaultNode = this[`groupNode${id}`]
    let groupNode = cc.instantiate(defaultNode);

    groupNode.active = true;
    groupNode.x = 365;
    // groupNode.x = (cc.winSize.width + this.groupNode.width) / 2 + 100;
    groupNode.y = defaultNode.y;
    groupNode.getComponent("blockgroup").isStatic = false;

    this.groupAreaNode.addChild(groupNode);
  },
});
