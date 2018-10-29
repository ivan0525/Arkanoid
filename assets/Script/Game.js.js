const ball = require('Ball');
const paddle = require('Paddle');
const brickLayout = require('BrickLayout');
const storage = require('Storage');
const constant = require('Constant');
const gb = require('Global');
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
        },
        breakAudio: {
            default: null,
            type: cc.AudioClip
        },
        currentScore: {
            default: null,
            type: cc.Label
        },
        score: 0
    },
    onLoad () {
        this.physicsManager = cc.director.getPhysicsManager();
        this.startGame();
    },
    init () {
        this.physicsManager.enabled = true;
        // 初始化砖块
        this.brickLayout.init(this.brickLayout.brickNumber);
        // 初始化小球运动
        this.ball.init(this);
    },
    startGame () {
        this.init();
    },
    gameOver () {
        this.physicsManager.enabled = false;
        cc.director.loadScene('GameOver');
    },
    // 球撞击砖块
    onballContactBrick (ballNode, brickNode) {
        cc.audioEngine.play(this.breakAudio);
        brickNode.destroy();
        this.score++;
        this.currentScore.string = this.score;
        gb.score = this.score;
        // 将分数存储在localstorage中
        if (this.score > storage.getItem(constant.SOTRAGE_KEY)) {
            storage.setItem(constant.SOTRAGE_KEY, this.score);
        }
    },
    // 球撞击地板
    onBallContactGround () {
        this.gameOver();
    },
    // 球撞击墙
    onBallContactWall (ballNode, wallNode) {

    },
    // 球撞击挡板
    onBallContactPaddle (ballNode, paddleNode) {

    },
    onDestroy () {
        this.physicsManager.enabled = false;
    }
});
