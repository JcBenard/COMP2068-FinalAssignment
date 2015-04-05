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

            this.x = constants.SCRREN_CENTER_WIDTH;  
            this.y = constants.SCRREN_CENTER_HEIGHT;          
            
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

            if (collidingBottom == true) {
                this.y -= dy;
            }
            if (collidingRight == true) {
                this.x -= dx;
            }
            if (collidingTop == true) {
                this.y -= dy;
            }
            if (collidingLeft == true) {
                this.x -= dx;
            }


            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            }
        }
    }
}  