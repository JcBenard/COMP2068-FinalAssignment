// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/snake.ts" />
/// <reference path="../objects/transitionbackground.ts" />

module states {
    export class Win {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public rankText: objects.Label;
        public gamebackground: createjs.Bitmap;
        public winBackground: objects.TransitionBackground;
        public info: objects.InfoBar;

        private rank: String;
        private screenDone: boolean = false;
        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the normal game background to the game
            this.gamebackground = new createjs.Bitmap(managers.Assets.loader.getResult("gameBackground1"));
            this.game.addChild(this.gamebackground);

            //create and add the player charater with death animation to the game
            this.snake = new objects.Snake(deathX, deathY);
            this.game.addChild(this.snake);
            this.snake.gotoAndPlay("idleDown");

            //create add add the gameover background to the game
            this.winBackground = new objects.TransitionBackground("winBackground", 1.75, 0);
            this.game.addChild(this.winBackground);  

            this.getRank();

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);  

            //create and add the score field to the game
            this.rankText = new objects.Label("" + this.rank, constants.SCRREN_CENTER_WIDTH + 10, 250);

            //add all the elements to the stage
            stage.addChild(this.game);

            createjs.Sound.play("win", { loop: 3 });
        }//end of constructor

        //updates the game based on the elements
        public update() {

            //update the elemetns on the stage
            this.snake.update();
            this.winBackground.update();

            //if the gameover background has stopped transtioning add the restart button
            if (this.winBackground.x <= 0 && this.screenDone == false) {
                this.game.addChild(this.rankText);
                this.screenDone = true;
            }
        }//end of update

        //private methods/////////////////////////////////////////////////////////////////////////////////////

        private getRank() {
            if (deaths < 2 && kills < 5) {
                this.rank = "Big Boss";
            } else if (deaths < 4 && kills < 8) {
                this.rank = "Fox"
            } else if (deaths < 7 && kills < 11) {
                this.rank = "Doberman";
            } else {
                this.rank = "Hound";
            }
        }

        //if they click the reStart button
        private reStartButtonClicked() {
            //clear the game then change the state to play
            createjs.Sound.stop();
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.STAGE1_STATE;
            stateChanged = true;
        }

    }//end of play
}   