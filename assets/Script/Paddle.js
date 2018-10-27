cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad () {
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            // cc.log('move');
            // this.node.x
            cc.log(event);
        });
    },
    init () {
    }
});
