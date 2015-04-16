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
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

//game objects
var start: states.Start;
var instructions: states.Instructions;
var stage1: states.Stage1;
var stage1Boss: states.Stage1Boss;
var stage2: states.Stage2;
var stage3: states.Stage3;
var stage3Boss: states.Stage3Boss;
var gameOver: states.GameOver;
var spottedGameOver: states.SpottedGameOver;
var win: states.Win;

//game states
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;

//game variables
var animation: string = "idleUp";
var useProjectile: Boolean = false;
var currentWeapon: string = "punch";
var haveGun: string = "";
var direction: string = "";
var dx: number = 0;
var dy: number = 0;
var collidingLeft: Boolean = false;
var collidingBottom: Boolean = false;
var collidingTop: Boolean = false;
var collidingRight: Boolean = false;
var snakeColl: Boolean = false;
var currentStage;

var ammo: number = 5;
var haveArmor: Boolean = false;
var playerHealth: number = constants.PLAYER_HEALTH;
var haveWeapon: Boolean[] = [false, false, false];
var lastState: number;
var deathX: number;
var deathY: number;
var kills: number = 0;
var deaths: number = 0;


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
    currentState = constants.START_STATE;
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
        case constants.START_STATE://if its start state
            stateChanged = false;
            start = new states.Start();
            currentStateFunction = start;
            break;
        case constants.INSTRUCTIONS_STATE://if its instructions state
            stateChanged = false;
            instructions = new states.Instructions();
            currentStateFunction = instructions;
            break;
        case constants.STAGE1_STATE://if its stage1 state
            stateChanged = false;
            stage1 = new states.Stage1();
            currentStateFunction = stage1;         
            break;
        case constants.STAGE1BOSS_STATE://if its stage1boss state
            stateChanged = false;
            stage1Boss = new states.Stage1Boss();
            currentStateFunction = stage1Boss;
            break;
        case constants.STAGE2_STATE://if its stage1 state
            stateChanged = false;
            stage2 = new states.Stage2();
            currentStateFunction = stage2;
            break;
        case constants.STAGE3_STATE://if its stage1 state
            stateChanged = false;
            stage3 = new states.Stage3();
            currentStateFunction = stage3;
            break;
        case constants.STAGE3BOSS_STATE://if its stage1 state
            stateChanged = false;
            stage3Boss = new states.Stage3Boss();
            currentStateFunction = stage3Boss;
            break;
        case constants.GAME_OVER_STATE://if its game over state  
            stateChanged = false;
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;       
            break;
        case constants.GAME_OVER_SPOTTED_STATE://if its game over state  
            stateChanged = false;
            spottedGameOver = new states.SpottedGameOver();
            currentStateFunction = spottedGameOver;
            break;
        case constants.WIN_STATE://if its the win state
            stateChanged = false;
            win = new states.Win();
            currentStateFunction = win;
            break;
    }  
}