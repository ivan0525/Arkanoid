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
        }
    },
    onLoad () {
        this.replayBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
            cc.director.loadScene('Game');
        });
    }
});
