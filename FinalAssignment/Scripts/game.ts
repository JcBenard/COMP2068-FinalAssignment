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
/// <reference path="objects/gamewalls.ts" />
/// <reference path="objects/snake.ts" />
/// <reference path="objects/infobar.ts" />
/// <reference path="objects/healthbar.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/transitionbackground.ts" />

/// <reference path="states/stage1.ts" />

//game variables
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

//game objects
var stage1: states.Stage1;

//game states
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;

//game stats
var finalScore: number = 0;
var finalDifficulty: number = 1;
var finalAvaterY: number = 0;
var finalHealth: number = 0;

var xPos: number = constants.SCRREN_CENTER_WIDTH;
var yPos: number = constants.SCRREN_CENTER_HEIGHT;
var animation: string = "idleDown";

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
function changeState(state: number) {

    switch (state) {
        case constants.MENU_STATE://if its menu state
            break;
        case constants.INSTRUCTIONS_STATE://if its instructions state
            break;
        case constants.STAGE1_STATE://if its play state
            stateChanged = false;
            stage1 = new states.Stage1();
            currentStateFunction = stage1;         
            break;
        case constants.GAME_OVER_STATE://if its game over state         
            break;
        case constants.WIN_STATE://if its the win state
            break;
    }  
}