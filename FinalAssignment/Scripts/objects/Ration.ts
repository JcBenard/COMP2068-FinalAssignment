/// <reference path="gameobject.ts" />

module objects {

    export class Ration extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(dx: number) {

            //set the sprite to ration using the gameObject constructor
            super("ration");

            //set the dx to the dx passed in
            this._dx = dx;

            //set the sound played on hit
            this.soundString = "difficulty";
            this.name = "ration";

            //set the default location
            this.x = -700;
            this.y = -700;
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the object based on the dx
            this.x -= this._dx;
        }//end of update

        //when called move the object to a random height and to the right edge
        public reset() {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        }//end of reset

        //when called move the object to the given x and y positions
        public resetBoss3(x: number, y: number) {
            this.x = x;
            this.y = y;
        }//end of resetBoss3
    }//end of ration
} //end of class