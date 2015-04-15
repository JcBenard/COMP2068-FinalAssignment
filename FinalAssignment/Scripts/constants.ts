module constants {
    //text constants
    export var FONT_SIZE: string = "20px";
    export var FONT_FAMILY: string = "Arial";
    export var FONT_COLOR: string = "#ffffff";

    //screen constants
    export var SCREEN_WIDTH: number = 640;
    export var SCREEN_HEIGHT: number = 480;
    export var SCRREN_CENTER_WIDTH: number = SCREEN_WIDTH * 0.5;
    export var SCRREN_CENTER_HEIGHT: number = SCREEN_HEIGHT * 0.5;
    export var SCRREN_CENTER_HEIGHT_WITH_BAR: number = (SCREEN_HEIGHT - 40) * 0.5;

    //game stats constants
    export var PLAYER_HEALTH: number = 6;
    export var MINE_NUM: number = 10;

    //game state constants
    export var START_STATE: number = 0;
    export var INSTRUCTIONS_STATE: number = 1;
    export var STAGE1_STATE: number = 2;
    export var STAGE1BOSS_STATE: number = 3;
    export var STAGE2_STATE: number = 4;
    export var STAGE3_STATE: number = 5;
    export var STAGE3BOSS_STATE: number = 6;
    export var GAME_OVER_STATE: number = 8;
    export var WIN_STATE: number = 9;
    export var GAME_OVER_SPOTTED_STATE: number = 10;

    //key values constants
    export var KEYCODE_W = 87;
    export var KEYCODE_A = 65;
    export var KEYCODE_D = 68;
    export var KEYCODE_S = 83; 
    export var KEYCODE_E = 69; 
    export var KEYCODE_SPACE = 32; 
}
 