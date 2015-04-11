module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "gameBackground1", src: "assets/images/stage1Background.png" },
        { id: "gameWalls1", src: "assets/images/stage1Walls.png" },
        { id: "gameBackground2", src: "assets/images/stage2Background.png" },
        { id: "gameWalls1Boss", src: "assets/images/stage1WallsBoss.png" },
        { id: "gameBackground1Boss", src: "assets/images/stage1Background.png" },
        { id: "info", src: "assets/images/infoBar.png" },
        { id: "boxesV", src: "assets/images/boxesVertical.png" },
        { id: "boxesH", src: "assets/images/boxesHorizontal.png" },
        { id: "stationTank", src: "assets/images/stationTank.png" },
        { id: "startBackground", src: "assets/images/startBackgrounds.png" },
        { id: "cursor", src: "assets/images/cursor.png" },
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
            [366, 2, 36, 67],
            [2, 74, 37, 61],
            [41, 74, 43, 65],
            [86, 74, 42, 60],
            [130, 74, 36, 65],
            [168, 74, 36, 63],
            [206, 74, 36, 63],
            [244, 74, 31, 70],
            [277, 74, 32, 26],
            [311, 74, 35, 37],
            [348, 74, 30, 30],
            [380, 74, 32, 32],
            [2, 146, 36, 54],
            [40, 146, 18, 14],
            [60, 146, 32, 70],
            [94, 146, 32, 68],
            [128, 146, 36, 70],
            [166, 146, 36, 68],
            [204, 146, 36, 65],
            [242, 146, 36, 68],
            [280, 146, 29, 70],
            [311, 146, 27, 70],
            [340, 146, 46, 32],
            [388, 146, 36, 70],
            [2, 218, 29, 70],
            [33, 218, 32, 65],
            [67, 218, 36, 61],
            [105, 218, 36, 65],
            [143, 218, 36, 63],
            [181, 218, 36, 63],
            [219, 218, 36, 63],
            [257, 218, 36, 63],
            [295, 218, 29, 68],
            [326, 218, 27, 61],
            [355, 218, 27, 63],
            [384, 218, 34, 68],
            [2, 290, 34, 70],
            [38, 290, 36, 68],
            [76, 290, 19, 12],
            [97, 290, 35, 33],
            [134, 290, 35, 33],
            [171, 290, 32, 32],
            [205, 290, 14, 32],
            [221, 290, 35, 18],
            [258, 290, 160, 150]
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
            "ammoBox": [17],
            "antiTank": [18],
            "armor": [19],
            "box": 20,
            "boxMove": [21],
            "bullet": [22],
            "guardMoveDown": { frames: [23, 24], speed: 0.08 },
            "guardMoveLeft": { frames: [25, 26], speed: 0.08 },
            "guardMoveRight": { frames: [27, 28], speed: 0.08 },
            "guardMoveUp": { frames: [29, 30], speed: 0.08 },
            "pistol": [31],
            "runDownGun": { frames: [32, 33], speed: 0.08 },
            "idleDownGun": [34],
            "runLeftGun": { frames: [35, 36], speed: 0.08 },
            "idleLeftGun": [37],
            "idleRightGun": [38],
            "runRightGun": { frames: [39, 40], speed: 0.08 },
            "idleUpGun": [41],
            "runUpGun": { frames: [42, 43], speed: 0.08 },
            "gunnerIdle": [44],
            "gunnerRun": { frames: [45, 46], speed: 0.08 },
            "health": [47],
            "mine": [48],
            "ration": [49],
            "missle": [50],
            "missleFire": [51],
            "shell": [52],
            "tank": [53]
        }
    }

    //

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
}  