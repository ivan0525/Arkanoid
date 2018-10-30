const storage = require('Storage');
const constant = require('Constant');
const gb = require('Global');
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        bestLbael: {
            default: null,
            type: cc.Label
        },
        replayBtn: {
            default: null,
            type: cc.Node
        },
        buttonAudio: {
            default: null,
            type: cc.AudioClip
        }
    },
    onLoad () {
        this.replayBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
            cc.audioEngine.play(this.buttonAudio);
            cc.director.loadScene('Game');
        });
        this.init();
    },
    init () {
        this.scoreLabel.string = gb.score;
        this.bestLbael.string = storage.getItem(constant.SOTRAGE_KEY);
    }
});
