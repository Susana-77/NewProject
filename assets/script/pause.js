cc.Class({
  extends: cc.Component,

  properties: {
    pauseBtn: cc.Button,
    defaultSprite: cc.SpriteFrame,
    pressedSprite: cc.SpriteFrame,

    pauseMenu: {
      default: null,
      type: cc.Node,
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
    console.log(this.pauseMenu.x);
    this.pauseBtn.node.x = 10000;
    this.pauseMenu.x = 10000;

    this.isButtonPressed = false;
    this.pauseBtn.normalSprite = this.defaultSprite;
    this.pauseBtn.node.on('click', this.onButtonClicked, this);

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

  },

  onButtonClicked() {
    this.isButtonPressed = !this.isButtonPressed;
    if (this.isButtonPressed) {
      this.pauseBtn.normalSprite = this.pressedSprite;
      this.pauseMenu.x = 0;
      console.log(this.pauseMenu, this.pauseMenu.x, this.pauseMenu.y);

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

      // requestAnimationFrame(() => { cc.director.pause() }) ;
      // cc.game.pause();
      cc.director.pause();

    } else {
      this.pauseBtn.normalSprite = this.defaultSprite;
      this.pauseMenu.x = 10000;
      console.log(this.pauseMenu, this.pauseMenu.x, this.pauseMenu.y);

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

      // cc.game.resume();
      cc.director.resume();

    }
  },
});
