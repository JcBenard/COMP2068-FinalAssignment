/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/transitionbackground.ts" />
/// <reference path="../objects/snake.ts" />

module states {
    export class SpottedGameOver {

        //public instanced variables///////////////////////////////////////////////////////////////////////
        public game: createjs.Container;
        public gamebackground: createjs.Bitmap;
        public overBackground: objects.TransitionBackground;
        public snake: objects.Snake;
        public info: objects.InfoBar;

        //constructor/////////////////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //this.currentLevel = currentLevel;

            //create and add the normal game background to the game
            this.gamebackground = new createjs.Bitmap(managers.Assets.loader.getResult("gameBackground1"));
            this.game.addChild(this.gamebackground);

            //create and add the player charater with death animation to the game
            this.snake = new objects.Snake(deathX,deathY);
            this.game.addChild(this.snake);

            //create add add the gameover background to the game
            this.overBackground = new objects.TransitionBackground("overBackground", 1.75, 0);
            this.game.addChild(this.overBackground);          

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            stage.addChild(this.game);

            //start the background music
            createjs.Sound.play("spotted");

            window.addEventListener("keydown", this.keyPressed, true);
        }

        //public methods///////////////////////////////////////////////////////////////////////////////////////
        public update() {
            //update the gameover background so it can transition
            this.overBackground.update();

            //if the gameover background has stopped transtioning add the restart button
            if (useProjectile == true) {
                this.selectState();
            }
        }

        public keyPressed(event) {
            switch (event.keyCode) {
                case constants.KEYCODE_SPACE:
                    useProjectile = true;
                    break;
            }
        }

        private selectState() {
            //currentState = this.currentLevel;
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        }
    }
}   