cc.Class({
    extends: cc.Component,

    properties: {
    },
    init (game) {
        this.game = game;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800, 800);
    },
    onBeginContact (contact, selfCollider, otherCollider) {
        switch (otherCollider.tag) {
        case 1:
            this.game.onballContactBrick(selfCollider.node, otherCollider.node);
            break;
        case 2:
            this.game.onBallContactGround(selfCollider.node, otherCollider.node);
            break;
        case 3:
            this.game.onBallContactPaddle(selfCollider.node, otherCollider.node);
            break;
        case 4:
            this.game.onBallContactWall(selfCollider.node, otherCollider.node);
            break;
        }
    }
});
