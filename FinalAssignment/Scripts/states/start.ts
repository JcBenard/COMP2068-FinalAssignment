/// <reference path="../constants.ts" />

module states {
    export class Start {

        //public instansted variables/////////////////////////////////////////////////////////////////////
        public game: createjs.Container;
        public background: createjs.Bitmap;
        public cursor: createjs.Bitmap;

        //constructor///////////////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new createjs.Bitmap(managers.Assets.loader.getResult("startBackground"));
            this.game.addChild(this.background);

            //create and add a cursor to the game
            this.cursor = new createjs.Bitmap(managers.Assets.loader.getResult("cursor"));
            this.game.addChild(this.cursor);
            dx = 230;//set the position of the cursor
            dy = 233;

            //add the game container to the stage
            stage.addChild(this.game);

            //add an eventlistner to the keyboard
            window.addEventListener("keydown", this.keyPressed, true);

        }

        //public methods///////////////////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        public update() {
            if (useProjectile == true) {
                this.selectState();
                useProjectile = false;
            }//end of if

            //set the cursor to the current position
            this.cursor.x = dx;
            this.cursor.y = dy;
        }//end of update

        public keyPressed(event) {
            //check what key is pressed then if its a movement key change the direction movement amount, the animation and the direction varriables
            switch (event.keyCode) {
                case constants.KEYCODE_W://set the cursor location variables to the upper position
                    dx = 230;
                    dy = 233;
                    break;
                case constants.KEYCODE_S://set the cursor location variables to the lower position
                    dx = 205;
                    dy = 285;
                    break;
                case constants.KEYCODE_SPACE://set the varriables to change states to true
                    useProjectile = true;
                    break;
            }//end of switch
        }//end of keypressed

        private selectState() {
            //set the varaibles for the cursor postion to 0 because they will be used in other forms
            dx = 0;
            dy = 0;
            if (this.cursor.x == 230) {//if the x position is that of the upper postion go to stage 1
                currentState = constants.STAGE1_STATE;
            } else {
                currentState = constants.INSTRUCTIONS_STATE;//else go to the instruction screen
            }
            //remove all elements of this state then set it up to make the game class to change state
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        }
    }
}  