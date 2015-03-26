var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "mine", src: "assets/images/mine.png" },
        { id: "gameBackground", src: "assets/images/gameBackground.png" },
        { id: "gameWalls", src: "assets/images/gameWalls.png" },
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
        images: ["assets/images/snake.png"],
        frames: { width: 40, height: 70 },
        animations: {
            "idleDown": [3],
            "idleLeft": [7],
            "idleRight": [9],
            "idleUp": [13],
            "runDown": { frames: [1, 2], speed: 0.07 },
            "runLeft": { frames: [5, 6], speed: 0.07 },
            "runRight": { frames: [10, 11], speed: 0.07 },
            "runUp": { frames: [14, 15], speed: 0.07 },
            "punchDown": { frames: [0], speed: 0.07, next: "idleDown" },
            "punchLeft": { frames: [4], speed: 0.1, next: "idleLeft" },
            "punchRight": { frames: [12], next: "idleRight", speed: 0.25 },
            "punchUp": { frames: [16], speed: 0.07, next: "idleUp" }
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