/// <reference path="../constants.ts" />
var states;
(function (states) {
    var Instructions = (function () {
        //constructor////////////////////////////////////////////////////////////////////////
        function Instructions() {
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new createjs.Bitmap(managers.Assets.loader.getResult("instructionsBackground"));
            this.game.addChild(this.background);
            window.addEventListener("keydown", this.keyPressed, true);
            stage.addChild(this.game);
        }
        //public methods///////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        Instructions.prototype.update = function () {
            if (useProjectile == true) {
                this.selectState();
            }
        };
        //private methods////////////////////////////////////////////////////////////
        //if they click the start button
        Instructions.prototype.keyPressed = function (event) {
            useProjectile = true;
        };
        Instructions.prototype.selectState = function () {
            currentState = constants.STAGE1_STATE;
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        };
        return Instructions;
    })();
    states.Instructions = Instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map