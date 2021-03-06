﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/transitionbackground.ts" />
/// <reference path="../objects/snake.ts" />

module states {
    export class GameOver {

        //public instanced variables///////////////////////////////////////////////////////////////////////
        public game: createjs.Container;
        public gamebackground: createjs.Bitmap;
        public overBackground: objects.TransitionBackground;
        public snake: objects.Snake;
        public info: objects.InfoBar;

        private haveButton: boolean = false;

        //constructor/////////////////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //increment the number of player deaths
            deaths++;

            //set the player stats to default
            animation = "idleUp";
            dx = 0;
            dy = 0;

            //create and add the normal game background to the game
            if (lastState != constants.STAGE2_STATE) {
                this.gamebackground = new createjs.Bitmap(managers.Assets.loader.getResult("gameBackground1"));
                this.game.addChild(this.gamebackground);
            } else {
                this.gamebackground = new createjs.Bitmap(managers.Assets.loader.getResult("gameBackground2"));
                this.game.addChild(this.gamebackground);
            }
            //create and add the player charater with death animation to the game
            this.snake = new objects.Snake(deathX, deathY);
            this.game.addChild(this.snake);
            this.snake.gotoAndPlay("die");

            //create add add the gameover background to the game
            this.overBackground = new objects.TransitionBackground("overBackground", 1.75, 0);
            this.game.addChild(this.overBackground);          

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);          
            

            stage.addChild(this.game);

            //start the background music
            createjs.Sound.play("gameOver");

            window.addEventListener("keydown", this.keyPressed, true);
        }

        //public methods///////////////////////////////////////////////////////////////////////////////////////
        public update() {
            //update the gameover background so it can transition
            this.overBackground.update();

            //if the user trigged the keypress event
            if (useProjectile == true) {
                this.selectState();
            }
        }

        //if a key is pressed and its space set the variable to change state to true
        public keyPressed(event) {
            switch (event.keyCode) {
                case constants.KEYCODE_SPACE:
                    useProjectile = true;
                    break;
            }
        }

        //when called sets the game to the last state
        private selectState() {
            createjs.Sound.stop();
            currentState = lastState;
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        }
    }
}  