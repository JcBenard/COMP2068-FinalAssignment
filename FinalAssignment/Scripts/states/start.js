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
            //create and add a cursor to the game
            this.cursor = new createjs.Bitmap(managers.Assets.loader.getResult("cursor"));
            this.game.addChild(this.cursor);
            dx = 230; //set the position of the cursor
            dy = 233;
            //add the game container to the stage
            stage.addChild(this.game);
            //add an eventlistner to the keyboard
            window.addEventListener("keydown", this.keyPressed, true);
        }
        //public methods///////////////////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        Start.prototype.update = function () {
            if (useProjectile == true) {
                this.selectState();
                useProjectile = false;
            } //end of if
            //set the cursor to the current position
            this.cursor.x = dx;
            this.cursor.y = dy;
        }; //end of update
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
        }; //end of keypressed
        Start.prototype.selectState = function () {
            //set the varaibles for the cursor postion to 0 because they will be used in other forms
            dx = 0;
            dy = 0;
            if (this.cursor.x == 230) {
                currentState = constants.STAGE1_STATE;
            }
            else {
                currentState = constants.INSTRUCTIONS_STATE; //else go to the instruction screen
            }
            //remove all elements of this state then set it up to make the game class to change state
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