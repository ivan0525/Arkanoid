cc.Class({
    extends: cc.Component,

    properties: {
        background: {
            default: null,
            type: cc.Node
        },
        startBtn: {
            default: null,
            type: cc.Node
        },
        buttonAudio: {
            default: null,
            type: cc.AudioClip
        }
    },
    onLoad () {
        this.startBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
            cc.audioEngine.play(this.buttonAudio);
            cc.director.loadScene('Game');
        });
    }
});
