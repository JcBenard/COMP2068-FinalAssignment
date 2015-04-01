var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "mine", src: "assets/images/mine.png" },
        { id: "gameBackground1", src: "assets/images/stage1Background.png" },
        { id: "gameWalls1", src: "assets/images/stage1Walls.png" },
        { id: "tank", src: "assets/images/tank.png" },
        { id: "info", src: "assets/images/infoBar.png" },
        { id: "star", src: "assets/images/star.png" },
        { id: "snake", src: "assets/images/snake.png" },
        { id: "life", src: "assets/images/life.png" },
        { id: "ration", src: "assets/images/ration.png" },
        { id: "bullet", src: "assets/images/bullet.png" },
        { id: "shell", src: "assets/images/shell.png" },
        { id: "antiTank", src: "assets/images/antiTank.png" },
        { id: "explosionSprite", src: "assets/images/explosion.png" },
        { id: "menuBackground", src: "assets/images/startBackground.png" },
        { id: "startButton", src: "assets/images/startButton.png" },
        { id: "restartButton", src: "assets/images/restartButton.png" },
        { id: "instructionsButton", src: "assets/images/instructionsButton.png" },
        { id: "overBackground", src: "assets/images/overBackground.png" },
        { id: "instructionsBackground", src: "assets/images/instructionBackground.png" },
        { id: "winBackground", src: "assets/images/winBackground.png" },
        { id: "backgroundMusic", src: "assets/audio/backgroundMusic.ogg" },
        { id: "difficulty", src: "assets/audio/difficultyUp.ogg" },
        { id: "gameOver", src: "assets/audio/gameOver.ogg" },
        { id: "win", src: "assets/audio/win.mp3" },
        { id: "explosion", src: "assets/audio/Explosion.wav" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        images: ["assets/images/sprite.png"],
        "frames": [
            [2, 2, 35, 68],
            [39, 2, 37, 63],
            [78, 2, 39, 63],
            [119, 2, 41, 65],
            [162, 2, 44, 61],
            [208, 2, 37, 65],
            [247, 2, 37, 61],
            [286, 2, 40, 66],
            [328, 2, 36, 70],
            [2, 74, 36, 67],
            [40, 74, 37, 61],
            [79, 74, 43, 65],
            [124, 74, 42, 60],
            [168, 74, 36, 65],
            [206, 74, 36, 63],
            [244, 74, 36, 63],
            [282, 74, 31, 70],
            [315, 74, 32, 26],
            [349, 74, 35, 37],
            [2, 146, 30, 30],
            [34, 146, 32, 32],
            [68, 146, 36, 54],
            [106, 146, 18, 14],
            [126, 146, 32, 70],
            [160, 146, 32, 68],
            [194, 146, 36, 70],
            [232, 146, 36, 68],
            [270, 146, 36, 65],
            [308, 146, 36, 68],
            [346, 146, 29, 70],
            [2, 218, 27, 70],
            [31, 218, 46, 32],
            [79, 218, 36, 70],
            [117, 218, 29, 70],
            [148, 218, 32, 65],
            [182, 218, 36, 61],
            [220, 218, 36, 65],
            [258, 218, 36, 63],
            [296, 218, 36, 63],
            [334, 218, 36, 63],
            [2, 290, 36, 63],
            [40, 290, 29, 68],
            [71, 290, 27, 61],
            [100, 290, 27, 63],
            [129, 290, 34, 68],
            [165, 290, 34, 70],
            [201, 290, 36, 68],
            [239, 290, 19, 12],
            [260, 290, 35, 33],
            [297, 290, 35, 33],
            [334, 290, 32, 32],
            [368, 290, 14, 32],
            [2, 362, 35, 18]
        ],
        animations: {
            "idleDown": [3],
            "idleLeft": [7],
            "idleRight": [9],
            "idleUp": [13],
            "runDown": { frames: [1, 2], speed: 0.08 },
            "runLeft": { frames: [5, 6], speed: 0.08 },
            "runRight": { frames: [10, 11], speed: 0.08 },
            "runUp": { frames: [14, 15], speed: 0.08 },
            "punchDown": [0],
            "punchLeft": [4],
            "punchRight": [12],
            "punchUp": [16],
            "idleDownGun": [3],
            "idleLeftGun": [7],
            "idleRightGun": [9],
            "idleUpGun": [13],
            "runDownGun": { frames: [1, 2], speed: 0.08 },
            "runLeftGun": { frames: [5, 6], speed: 0.08 },
            "runRightGun": { frames: [10, 11], speed: 0.08 },
            "runUpGun": { frames: [14, 15], speed: 0.08 },
            "punchDownGun": [0],
            "punchLeftGun": [4],
            "punchRightGun": [12],
            "punchUpGun": [16],
            "health": [49]
        }
    };
    //
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map