/// <reference path="../constants.ts" />
/// <reference path="gameobject.ts" />

module objects {

    export class Snake extends GameObject {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private numbe: number = 0;
        private _counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xPos: number, yPos:number) {

            super(animation);

            this.name = "snake";
            this.soundString = "explosion";

            this.x = xPos;  
            this.y = yPos;          
            
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

            if (collidingBottom == true || collidingTop == true) {
                this.y -= dy;
            }
            if (collidingRight == true || collidingLeft == true) {
                this.x -= dx;
            }

            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            }
        }
    }
}  