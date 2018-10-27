const ball = require('Ball');
const paddle = require('Paddle');
const brickLayout = require('BrickLayout');
cc.Class({
    extends: cc.Component,

    properties: {
        ball: {
            default: null,
            type: ball
        },
        paddle: {
            default: null,
            type: paddle
        },
        brickLayout: {
            default: null,
            type: brickLayout
        }

    },
    onLoad () {
        this.init();
    },
    init () {
        this.startGame();
    },
    startGame () {
        this.brickLayout.init(this.brickLayout.brickNumber);
    }
});
