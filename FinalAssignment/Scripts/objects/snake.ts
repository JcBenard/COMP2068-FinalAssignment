/// <reference path="../constants.ts" />
/// <reference path="gameobject.ts" />

module objects {

    export class Snake extends GameObject {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private numbe: number = 0;
        private _counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xPos: number, yPos:number) {

            //set the animtion to the animation variables
            super(animation);

            //set the name and the sound played on hit
            this.name = "snake";
            this.soundString = "explosion";

            //set the x and y to the given position
            this.x = xPos;  
            this.y = yPos;          
            
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

            //if the screen is colliding on the top or bottom move the object up or down instead
            if (collidingBottom == true || collidingTop == true) {
                this.y -= dy;
            }//end of if

            //if the screen is colliding on the left or right move the object left or right instead
            if (collidingRight == true || collidingLeft == true) {
                this.x -= dx;
            }//end of if

            //if the animation varaible is different then the current animation change the current animation to the animation variable
            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            }//end of if
        }//end of update
    }//end of snake
}  //end of class