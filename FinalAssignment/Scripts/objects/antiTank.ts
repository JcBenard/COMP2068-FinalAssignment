/// <reference path="gameobject.ts" />

module objects {

    export class AntiTank extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(dx: number) {

            super("antiTank");//use the gameobject construction using antiTank as the sprite

            //set the dx equal to the given dx
            this._dx = dx;
            this._dy = 0;
            //set the sound it makes on contact and it name
            this.soundString = "explosion";
            this.name = "antiTank";

            //set the default location
            this.x = 0;
            this.y = 700;
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {//move the object based on the dx
            this.x -= this._dx;
        }//end of update

        public reset(player) {//move the object to the players current position
            this.x = player.x;
            this.y = player.y;
        }//end of reset
    }//end of antitank
} //end of class  