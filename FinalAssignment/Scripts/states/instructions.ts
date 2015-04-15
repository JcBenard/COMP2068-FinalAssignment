/// <reference path="../constants.ts" />

module states {
    export class Instructions {

        //public instanced varaibles///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public background: createjs.Bitmap;

        //constructor////////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new createjs.Bitmap(managers.Assets.loader.getResult("instructionsBackground"));
            this.game.addChild(this.background);

            //add a key eventlstener
            window.addEventListener("keydown", this.keyPressed, true);

            stage.addChild(this.game);

        }

        //public methods///////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        public update() {
            if (useProjectile == true) {
                this.selectState();
            }
        }
        
        //private methods////////////////////////////////////////////////////////////
        //if they click the start button
        public keyPressed(event) {
            useProjectile = true;
        }

        //when called clears the screen the starts the stage1 state
        private selectState() {
            currentState = constants.STAGE1_STATE;
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        }
    }
}  