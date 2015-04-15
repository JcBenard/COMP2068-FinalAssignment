module objects {

    export class Missle extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            //set the sprite to a missle using the gameObject constructor
            super("missleFire");

            //set the sound played on hit
            this.soundString = "explosion";
            this.name = "missles";
            //set the default location
            this.x = -10000;
            this.y = 10000;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {//move the object based on dx and dy
            this.x += this._dx;
            this.y += this._dy;
        }

        public reset(player, playerDirection: string) {
            //set the x and y to the players y and y
            this.x = player.x;
            this.y = player.y;

            //set the dx and dy to 0
            this._dx = 0;
            this._dy = 0;

            //set the dx, dy and rotation based on the players direction
            switch (playerDirection) {
                case ("Left"):
                    this.rotation = 270;
                    this._dx = -8;
                    break;
                case ("Right"):
                    this.rotation = 90;
                    this._dx = 8;
                    break;
                case ("Up"):
                    this.rotation = 0;
                    this._dy = -8;
                    break;
                case ("Down"):
                    this.rotation = 180;
                    this._dy = 8;
                    break;

            }//end of switch
        }//end of reset
    }//end of missle
}  //end of class