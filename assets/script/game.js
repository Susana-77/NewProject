cc.Class({
  extends: cc.Component,

  properties: {
    ballNode: cc.Node,
    blockPrefab: cc.Prefab,
    blockAreaNode: cc.Node,
    // blockNodeArr: {
    //     default: [],
    //     type: Block
    // },
    audioSource: {
      type: cc.AudioSource,
      default: null,
    },
  },

  onLoad() {
    this.initPhysics();
    this.node.on("touchstart", this.boost, this);
    this.gameStart = 0;
    this.initBlock();
    console.log('onload');
  },

  onDestroy() {
    this.node.off("touchstart", this.boost, this);
  },

  update(dt) {
    if (this.gameStart) {
      let speed = -250 * dt;

      for (let blockNode of this.blockNodeArr) {
        blockNode.x += speed;

        if (blockNode.x < -cc.winSize.width / 2 - blockNode.width / 2) {
          blockNode.x = this.getLastBlockPosX() + 200;
        }
      }
    }
  },

  getLastBlockPosX() {
    let posX = 0;
    for (let blockNode of this.blockNodeArr) {
      if (blockNode.x > posX) {
        posX = blockNode.x;
      }
    }
    return posX;
  },

  //初始化跳板
  initBlock() {
    this.lastBlockPosX = this.ballNode.x; //最后一个方块的x轴
    this.blockNodeArr = [];
    for (let i = 0; i < 10; i++) {
      let blockNode = cc.instantiate(this.blockPrefab);
      blockNode.x = this.lastBlockPosX;
      blockNode.y = -128;
      this.blockAreaNode.addChild(blockNode);
      this.blockNodeArr.push(blockNode);

      this.lastBlockPosX += 200;

      console.log(this.blockNodeArr)
    }
  },

  //初始化物理引擎
  initPhysics() {
    let manager = cc.director.getPhysicsManager();
    manager.enabled = true;
    manager.gravity = cc.v2(0, -100);
  },


  //加速
  boost() {
    if (this.ballNode.getComponent("ball").initVel) {
      let rigidBody = this.ballNode.getComponent(cc.RigidBody);
      rigidBody.linearVelocity = cc.v2(0, -1600);
      this.gameStart = 1;
      console.log("加速");
    }
  },
});
