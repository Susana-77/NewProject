
cc.Class({
    extends: cc.Component,

    properties: {
        ballNode: cc.Node,
        blockPrefab: cc.Prefab,
        blockAreaNode: cc.Node,
        audioSource: cc.AudioSource,
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
    },

    start() {
        
        let canvas = cc.find('Canvas');
        canvas.on('touchstart', this.playAudio, this);

        let as = this.node.getComponent(AudioSource);
    },

    play: function () {
        if (CC_EDITOR || !this._clip) return;

        var audio = this.audio;
        audio.setVolume(this._mute ? 0 : this._volume);
        audio.setLoop(this._loop);
        audio.setCurrentTime(0);
        audio.play();
    },
    playAudio() {
        this.audioSource.play();
    },

    onLoad() {
        this.initPhysics();

        this.node.on('touchstart', this.boost, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);

        this.gameStart = 0;
        this.initBlock();
    },

    onDestroy() {
        this.node.off('touchstart', this.boost, this);
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
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
        this.lastBlockPosX = this.ballNode.x;//最后一个方块的x轴
        this.blockNodeArr = [];
        for (let i = 0; i < 10; i++) {
            let blockNode = cc.instantiate(this.blockPrefab);
            blockNode.x = this.lastBlockPosX;
            blockNode.y = -128
            this.blockAreaNode.addChild(blockNode);
            this.blockNodeArr.push(blockNode);

            this.lastBlockPosX += 200;
        }
    },

    //初始化物理引擎
    initPhysics() {
        let manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -100);
    },

    onMouseDown: function (event) {
        let mouseType = event.getButton();
        if (mouseType === cc.Event.EventMouse.BUTTON_LEFT) {
            // 鼠标左键按下
            this.audioSource.play();
            let mousePoint = event.getLocation();
            let localPoint = this.node.convertToNodeSpace(mousePoint);

        } else if (mouseType === cc.Event.EventMouse.BUTTON_MIDDLE) {
            // 鼠标中键按下

        } else if (mouseType === cc.Event.EventMouse.BUTTON_RIGHT) {
            // 鼠标右键按下

        }
    },

    //加速
    boost() {
        if (this.ballNode.getComponent('ball').initVel) {

            let rigidBody = this.ballNode.getComponent(cc.RigidBody);
            rigidBody.linearVelocity = cc.v2(0, -1600);
            this.gameStart = 1;
            console.log('加速')
        }

    }
});
