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
    constants.MENU_STATE = 0;
    constants.INSTRUCTIONS_STATE = 1;
    constants.STAGE1_STATE = 2;
    constants.STAGE1BOSS_STATE = 3;
    constants.STAGE2_STATE = 4;
    constants.GAME_OVER_STATE = 3;
    constants.WIN_STATE = 5;
    constants.KEYCODE_W = 87;
    constants.KEYCODE_A = 65;
    constants.KEYCODE_D = 68;
    constants.KEYCODE_S = 83;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map