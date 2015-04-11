/// <reference path="../constants.ts" />
var states;
(function (states) {
    var Start = (function () {
        //constructor///////////////////////////////////////////////////////////////////////////////
        function Start() {
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new createjs.Bitmap(managers.Assets.loader.getResult("startBackground"));
            this.game.addChild(this.background);
            this.cursor = new createjs.Bitmap(managers.Assets.loader.getResult("cursor"));
            this.game.addChild(this.cursor);
            dx = 230;
            dy = 233;
            stage.addChild(this.game);
            window.addEventListener("keydown", this.keyPressed, true);
        }
        //public methods///////////////////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        Start.prototype.update = function () {
            if (useProjectile == true) {
                this.selectState();
            }
            this.cursor.x = dx;
            this.cursor.y = dy;
        };
        Start.prototype.keyPressed = function (event) {
            switch (event.keyCode) {
                case constants.KEYCODE_W:
                    dx = 230;
                    dy = 233;
                    break;
                case constants.KEYCODE_S:
                    dx = 205;
                    dy = 285;
                    break;
                case constants.KEYCODE_SPACE:
                    useProjectile = true;
                    break;
            }
        };
        Start.prototype.selectState = function () {
            dx = 0;
            dy = 0;
            if (this.cursor.x == 230) {
                currentState = constants.STAGE1_STATE;
            }
            else {
                currentState = constants.INSTRUCTIONS_STATE;
            }
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        };
        return Start;
    })();
    states.Start = Start;
})(states || (states = {}));
//# sourceMappingURL=start.js.map