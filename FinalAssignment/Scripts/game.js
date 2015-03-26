/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="managers/assets.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/gameBackground.ts" />
/// <reference path="objects/snake.ts" />
/// <reference path="objects/infobar.ts" />
/// <reference path="objects/healthbar.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/transitionbackground.ts" />
/// <reference path="states/play.ts" />
//game variables
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
//game objects
var play;
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
var animation = "idleDown";
var animationFlag = false;
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
    currentState = constants.PLAY_STATE;
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
    play.update();
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
        case constants.PLAY_STATE:
            stateChanged = false;
            play = new states.Play();
            currentStateFunction = play;
            break;
        case constants.GAME_OVER_STATE:
            break;
        case constants.WIN_STATE:
            break;
    }
}
//# sourceMappingURL=game.js.map