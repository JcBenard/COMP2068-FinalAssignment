/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/snakedeath.ts" />
/// <reference path="../objects/transitionbackground.ts" />
/// <reference path="../objects/tank.ts" />
var states;
(function (states) {
    var GameOver = (function () {
        //constructor/////////////////////////////////////////////////////////////////////////////////
        function GameOver() {
            //public currentLevel;
            this.haveButton = false;
            this.game = new createjs.Container();
            //this.currentLevel = currentLevel;
            //create and add the normal game background to the game
            this.gamebackground = new createjs.Bitmap(managers.Assets.loader.getResult("gameBackground1"));
            this.game.addChild(this.gamebackground);
            //create and add the player charater with death animation to the game
            this.snake = new objects.SnakeDeath();
            this.game.addChild(this.snake);
            //create add add the gameover background to the game
            this.overBackground = new objects.TransitionBackground("overBackground", 1.75, 0);
            this.game.addChild(this.overBackground);
            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            this.cursor = new createjs.Bitmap(managers.Assets.loader.getResult("cursor"));
            this.game.addChild(this.cursor);
            stage.addChild(this.game);
            //start the background music
            createjs.Sound.play("gameOver");
            window.addEventListener("keydown", this.keyPressed, true);
        }
        //public methods///////////////////////////////////////////////////////////////////////////////////////
        GameOver.prototype.update = function () {
            //update the gameover background so it can transition
            this.overBackground.update();
            //if the gameover background has stopped transtioning add the restart button
            if (this.overBackground.x <= 0) {
                this.cursor.x = 235;
                this.cursor.y = 272;
                if (useProjectile == true) {
                    this.selectState();
                }
            }
        };
        GameOver.prototype.keyPressed = function (event) {
            switch (event.keyCode) {
                case constants.KEYCODE_SPACE:
                    useProjectile = true;
                    break;
            }
        };
        GameOver.prototype.selectState = function () {
            //currentState = this.currentLevel;
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        };
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map