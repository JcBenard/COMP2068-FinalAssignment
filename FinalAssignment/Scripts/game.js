/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
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
/// <reference path="objects/tankbackground.ts" />
/// <reference path="objects/worldcontainer.ts" />
/// <reference path="objects/backgroundobjects.ts" />
/// <reference path="states/stage1.ts" />
/// <reference path="states/stage2.ts" />
/// <reference path="states/stage1boss.ts" />
//game variables
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
//game objects
var stage1;
var stage2;
//game states
var currentState;
var currentStateFunction;
var stateChanged = false;
//game stats
var finalScore = 0;
var finalDifficulty = 1;
var finalAvaterY = 0;
var finalHealth = 0;
var xPos = constants.SCRREN_CENTER_WIDTH;
var yPos = constants.SCRREN_CENTER_HEIGHT;
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
// Game Objects 
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
    currentState = constants.STAGE1_STATE;
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
        case constants.MENU_STATE:
            break;
        case constants.INSTRUCTIONS_STATE:
            break;
        case constants.STAGE1_STATE:
            stateChanged = false;
            stage1 = new states.Stage1();
            currentStateFunction = stage1;
            break;
        case constants.STAGE2_STATE:
            stateChanged = false;
            stage2 = new states.Stage2();
            currentStateFunction = stage2;
            break;
        case constants.GAME_OVER_STATE:
            break;
        case constants.WIN_STATE:
            break;
    }
}
//# sourceMappingURL=game.js.map