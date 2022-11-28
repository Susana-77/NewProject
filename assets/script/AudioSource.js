cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: cc.AudioSource,
        audioSource: {
            type: cc.AudioSource,
            default: null
        },

    },

    start () {
        let canvas = cc.find('Canvas');
        canvas.on('touchstart', this.playAudio, this);

        let as = this.node.getComponent(AudioSource);
    },

    play: function () {
        if ( CC_EDITOR || !this._clip ) return;

        var audio = this.audio;
        audio.setVolume(this._mute ? 0 : this._volume);
        audio.setLoop(this._loop);
        audio.setCurrentTime(0);
        audio.play();
    },
    playAudio () {
        this.audioSource.play();
    },
    
    onLoad() {
        this.node.on('touchstart', this.playAudio, this);
    },

});
