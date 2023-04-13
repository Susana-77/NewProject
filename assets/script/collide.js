cc.Class({
  extends: cc.Component,

  properties: {
    is_enable: true, //是否开启碰撞检测系统
    is_debug: false, //是否显示碰撞检测区域

    blockgroup: {
      type: cc.Node,
      default: null
    },

    audioSource1: {
      type: cc.AudioSource,
      default: null,
    },
    audioSource2: {
      type: cc.AudioSource,
      default: null,
    },
    audioSource3: {
      type: cc.AudioSource,
      default: null,
    },
    audioSource4: {
      type: cc.AudioSource,
      default: null,
    },
    audioSource5: {
      type: cc.AudioSource,
      default: null,
    },
    audioSource6: {
      type: cc.AudioSource,
      default: null,
    },
    audioSource7: {
      type: cc.AudioSource,
      default: null,
    },
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

  onCollisionEnter: function (other, self) {
    // this.playAudio(this.blockgroup.getComponent("blockgroup").node.name.replace(/[^0-9]/ig, ""));
  },

  // playAudio(id = 1) {
  //   console.log(this.blockgroup.getComponent("blockgroup").node.name.replace(/[^0-9]/ig, ""));
  //   const defaultAudio = this[`audioSource${id}`]
  //   this.defaultAudio.play();
  // },
});
