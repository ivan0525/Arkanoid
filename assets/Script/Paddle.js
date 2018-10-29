cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad () {
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            // 挡板的移动范围
            var maxX = this.node.parent.width - this.node.width / 2;
            var minX = this.node.width / 2;
            var delta = event.getDelta();
            // 挡板移动后的横坐标
            var mAfterX = this.node.x + delta.x;
            if (mAfterX < minX) {
                this.node.x = minX;
            } else if (mAfterX > maxX) {
                this.node.x = maxX;
            } else {
                this.node.x = mAfterX;
            }
        });
    },
    init () {
    }
});
