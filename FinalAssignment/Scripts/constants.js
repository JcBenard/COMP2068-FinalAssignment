var constants;
(function (constants) {
    //text constants
    constants.FONT_SIZE = "20px";
    constants.FONT_FAMILY = "Arial";
    constants.FONT_COLOR = "#ffffff";
    //screen constants
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCRREN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCRREN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.SCRREN_CENTER_HEIGHT_WITH_BAR = (constants.SCREEN_HEIGHT - 40) * 0.5;
    //game stats constants
    constants.PLAYER_HEALTH = 6;
    constants.MINE_NUM = 10;
    //game state constants
    constants.START_STATE = 0;
    constants.INSTRUCTIONS_STATE = 1;
    constants.STAGE1_STATE = 2;
    constants.STAGE1BOSS_STATE = 3;
    constants.STAGE2_STATE = 4;
    constants.STAGE3_STATE = 5;
    constants.STAGE3BOSS_STATE = 6;
    constants.GAME_OVER_STATE = 8;
    constants.WIN_STATE = 9;
    constants.GAME_OVER_SPOTTED_STATE = 10;
    //key values constants
    constants.KEYCODE_W = 87;
    constants.KEYCODE_A = 65;
    constants.KEYCODE_D = 68;
    constants.KEYCODE_S = 83;
    constants.KEYCODE_E = 69;
    constants.KEYCODE_SPACE = 32;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map