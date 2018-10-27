cc.Class({
    extends: cc.Component,

    properties: {
        // 砖块间距
        spacing: 0,
        // 砖块预制体
        brickPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 砖块的列数
        cols: 0,
        // 砖块的总数
        brickNumber: 0
    },
    init (brickNumber) {
        this.node.removeAllChildren();
        this.brickNumber = brickNumber;
        for (var i = 0;i < this.brickNumber;i++) {
            // 生成砖块节点
            let brickNode = cc.instantiate(this.brickPrefab);
            brickNode.parent = this.node;
            brickNode.x = (this.spacing * 2 + brickNode.width) * (i % this.cols) + brickNode.width / 2;
            brickNode.y = -(this.spacing * 2 + brickNode.height) * parseInt(i / this.cols) - brickNode.height / 2;
        }
    }
});
