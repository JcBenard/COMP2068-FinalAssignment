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

            this.cursor = new createjs.Bitmap(managers.Assets.loader.getResult("cursor"));
            this.game.addChild(this.cursor);
            dx = 230;
            dy = 233;

            stage.addChild(this.game);

            window.addEventListener("keydown", this.keyPressed, true);

        }

        //public methods///////////////////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        public update() {
            if (useProjectile == true) {
                this.selectState();
                useProjectile = false;
            }

            this.cursor.x = dx;
            this.cursor.y = dy;
        }

        public keyPressed(event) {
            //check what key is pressed then if its a movement key change the direction movement amount, the animation and the direction varriables
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
        }

        private selectState() {
            dx = 0;
            dy = 0;
            if (this.cursor.x == 230) {
                currentState = constants.STAGE1_STATE;
            } else {
                currentState = constants.INSTRUCTIONS_STATE;
            }
            window.removeEventListener("keydown", this.keyPressed, true);
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            stateChanged = true;
        }
    }
}  