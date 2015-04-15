/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/movingbackground.ts" />
/// <reference path="objects/stagebackground.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/stagewalls.ts" />
/// <reference path="objects/tankbullet.ts" />
/// <reference path="objects/snake.ts" />
/// <reference path="objects/infobar.ts" />
/// <reference path="objects/healthbar.ts" />
/// <reference path="objects/mine.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/transitionbackground.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/items.ts" />
/// <reference path="objects/guard.ts" />
/// <reference path="objects/worldcontainer.ts" />
/// <reference path="objects/backgroundobjects.ts" />
/// <reference path="objects/wallshapes.ts" />
/// <reference path="objects/ammobox.ts" />
/// <reference path="objects/gunner.ts" />
/// <reference path="objects/guardloschecker.ts" />
/// <reference path="objects/ammobox.ts" />
/// <reference path="objects/weaponicon.ts" />
/// <reference path="objects/missle.ts" />
/// <reference path="objects/metalgear.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/start.ts" />
/// <reference path="states/stage1.ts" />
/// <reference path="states/stage2.ts" />
/// <reference path="states/stage3boss.ts" />
/// <reference path="states/stage3.ts" />
/// <reference path="states/stage1boss.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/spottedgameover.ts" />
/// <reference path="states/win.ts" />
//game variables
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
//game objects
var start;
var instructions;
var stage1;
var stage1Boss;
var stage2;
var stage3;
var stage3Boss;
var gameOver;
var spottedGameOver;
var win;
//game states
var currentState;
var currentStateFunction;
var stateChanged = false;
//game variables
var animation = "idleUp";
var useProjectile = false;
var currentWeapon = "punch";
var haveGun = "";
var direction = "";
var dx = 0;
var dy = 0;
var collidingLeft = false;
var collidingBottom = false;
var collidingTop = false;
var collidingRight = false;
var snakeColl = false;
var currentStage;
var ammo = 5;
var haveArmor = false;
var playerHealth = constants.PLAYER_HEALTH;
var haveWeapon = [false, false, false];
var lastState;
var deathX;
var deathY;
var kills = 0;
var deaths = 0;
//preloader, loads assets from the assets class
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
//runs on start
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    //set up the fps tracker
    setupStats();
    //set the current state to menu then run the change state function
    currentState = constants.STAGE3BOSS_STATE;
    changeState(currentState);
}
//ultilites methods/////////////////////////////////////////////////////////////////////////
function setupStats() {
    stats.setMode(0);
    document.body.appendChild(stats.domElement);
}
//main game loop
function gameLoop() {
    //start tracking fps for this frame
    stats.begin();
    //if the stateChange boolean is set to true run the change state function
    if (stateChanged) {
        changeState(currentState);
    }
    //run the update function of the current state
    currentStateFunction.update();
    stage.update();
    //stop tracking the fps for this frame
    stats.end();
}
//this function runs when a state is changed and runs the corresponding functions in the objects
function changeState(state) {
    switch (state) {
        case constants.START_STATE:
            stateChanged = false;
            start = new states.Start();
            currentStateFunction = start;
            break;
        case constants.INSTRUCTIONS_STATE:
            stateChanged = false;
            instructions = new states.Instructions();
            currentStateFunction = instructions;
            break;
        case constants.STAGE1_STATE:
            stateChanged = false;
            stage1 = new states.Stage1();
            currentStateFunction = stage1;
            break;
        case constants.STAGE1BOSS_STATE:
            stateChanged = false;
            stage1Boss = new states.Stage1Boss();
            currentStateFunction = stage1Boss;
            break;
        case constants.STAGE2_STATE:
            stateChanged = false;
            stage2 = new states.Stage2();
            currentStateFunction = stage2;
            break;
        case constants.STAGE3_STATE:
            stateChanged = false;
            stage3 = new states.Stage3();
            currentStateFunction = stage3;
            break;
        case constants.STAGE3BOSS_STATE:
            stateChanged = false;
            stage3Boss = new states.Stage3Boss();
            currentStateFunction = stage3Boss;
            break;
        case constants.GAME_OVER_STATE:
            stateChanged = false;
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
        case constants.GAME_OVER_SPOTTED_STATE:
            stateChanged = false;
            spottedGameOver = new states.SpottedGameOver();
            currentStateFunction = spottedGameOver;
            break;
        case constants.WIN_STATE:
            stateChanged = false;
            win = new states.Win();
            currentStateFunction = win;
            break;
    }
}
//# sourceMappingURL=game.js.map