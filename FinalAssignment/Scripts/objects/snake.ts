/// <reference path="../constants.ts" />
/// <reference path="gameobject.ts" />

module objects {

    export class Snake extends GameObject {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private numbe: number = 0;
        private _counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(animation);

            this.name = "snake";
            this.soundString = "explosion";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCRREN_CENTER_WIDTH;  
            this.y = constants.SCRREN_CENTER_HEIGHT;               
            
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

            if (snakeMove == true) {
                this.x = xPos;
                this.y = yPos;
            }

            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            }
        }
    }
}  