const loopWidth = {loop1:2400,loop2:1800,loop3:2400,loop4:2880};

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
    console.log(cc.director.getScene().name);
    this.initGroup();
  },

  //初始化跳板
  initGroup(id = 1) {

    const defaultNode = this[`groupNode${id}`]
    const preWidth = loopWidth[cc.director.getScene().name]-236;

    let groupNode = cc.instantiate(defaultNode);

    groupNode.active = true;
    groupNode.x = preWidth;
    groupNode.y = defaultNode.y;
    groupNode.getComponent("blockgroup").isStatic = false;

    this.groupAreaNode.addChild(groupNode);
  },

});
