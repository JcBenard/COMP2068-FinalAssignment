/// <reference path="gameobject.ts" />

module objects {

    export class AmmoBox extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(dx: number) {

            super("ammoBox");//call the gameobject constructor using the ammoBox sprite

            this._dx = dx;//set the dx to the dx passed in
            this.soundString = "difficulty";//this sound will be played on contact
            this.name = "ammo";//name so it can be referenced easier
            this.x = -700;//the starting position for the object
            this.y = -700;
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;//moves the x postion based on the dx proveded
        }//end of update

        //move the object to a random height and a width slightly to the right of the screen
        public reset() {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        }

        //moves the object just below the center of screen
        public resetBoss1() {
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 400;
        }

        //moves the object to the given location
        public resetBoss3(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
}  