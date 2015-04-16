/// <reference path="gameobject.ts" />

module objects {

    export class TankBullet extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("bullet");

            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "tankBullet";
            this.y = -10;
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the object based on dx and dy
            this.x += this._dx;
            this.y += this._dy;
        }//end of update

        public reset(playerY: number, tankY: number) {
            
            this.x = 70;//set the x position
            //get a random number between 1 and 2
            if (Math.floor((Math.random() * 2) + 1) == 1) {//if it's 1
                this.y = tankY + 50;//set the y position to the tank y + 50
            } else {
                this.y = tankY - 50;//set the y position to the tank y - 50
            }//end of if

            //set the dy to make the object move towards the player
            this._dy = ((playerY - this.y) / ((Math.random() * 10) + 25));
        }//end ofreset
    }//end of tankBullet
}   //end of class