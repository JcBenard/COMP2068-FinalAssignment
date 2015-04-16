/// <reference path="gameobject.ts" />

module objects {

    export class Bullet extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("bullet"); //call the gameobject constructor using the ammoBox sprite

            this.soundString = "explosion";//this sound will be played on contact
            this.name = "bullet";//name so it can be referenced easier
            //set the default postion for the object
            this.x = -10000;
            this.y = 10000;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {//move the object based on the current dx and dy
            this.x += this._dx;
            this.y += this._dy;
        }

        public reset(player , playerDirection: string) {

            //set the object to location to that of the player
            this.x = player.x;
            this.y = player.y;

            //set the dx and dy to 0
            this._dx = 0;
            this._dy = 0;

            //set the dx based on the direction of the player
            switch(playerDirection){
                case ("Left"):
                    this._dx = -6;
                    break;
                case ("Right"):
                    this._dx = 6;
                    break;
                case ("Up"):
                    this._dy = -6;
                    break;
                case ("Down"):
                    this._dy = 6;
                    break;
                
            }//end of switch
        }//end of reset
    }//end of bullet
}  //end of class