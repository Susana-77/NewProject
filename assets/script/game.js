cc.Class({
  name: 'bg',
  extends: cc.Component,

  properties: {

    groupAreaNode: cc.Node,
    groupNode1: cc.Node,
    groupNode2: cc.Node,
    groupNode3: cc.Node,
    groupNode4: cc.Node,
    groupNode5: cc.Node,
    groupNode6: cc.Node,
    groupNode7: cc.Node,
    groupNode8: cc.Node,

    metroNome: {
      type: cc.AudioSource,
      default: null,
      _preload: true,
      isPlaying: false,
    },
  },

  onLoad() {
    this.initGroup();
  },

  //初始化跳板
  initGroup(id = 1) {

    const defaultNode = this[`groupNode${id}`]
    let groupNode = cc.instantiate(defaultNode);

    groupNode.active = true;
    groupNode.x = 2165;
    groupNode.y = defaultNode.y;
    groupNode.getComponent("blockgroup").isStatic = false;

    this.groupAreaNode.addChild(groupNode);
  },

});
