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

    //game stats constants
    export var PLAYER_HEALTH: number = 3;
    export var MINE_NUM: number = 10;

    //game state constants
    export var MENU_STATE: number = 0;
    export var INSTRUCTIONS_STATE: number = 1;
    export var STAGE1_STATE: number = 2;
    export var GAME_OVER_STATE: number = 3;
    export var WIN_STATE: number = 4;

    export var KEYCODE_W = 87;
    export var KEYCODE_A = 65;
    export var KEYCODE_D = 68;
    export var KEYCODE_S = 83; 
}
 