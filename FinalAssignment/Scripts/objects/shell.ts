module objects {

    export class Shell extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            //set the sprite to shell using the gameObject constructor
            super("shell");

            //set the default dx and dy
            this._dx = 5;
            this._dy = 0;

            //set the sound played on hit
            this.soundString = "explosion";
            this.name = "shell";

            //set the default location
            this.x = 800;
            this.y = 800;
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the object based on the dx and dy
            this.x += this._dx;
            this.y += this._dy;
        }//end of update

        public reset(tankY: number, tankRot: number) {
            //set the location based on the tanks current position
            this.x = 100;
            this.y = tankY + tankRot;
            //set the dy based on the rotaion of the tank
            this._dy = tankRot / 10;
        }//end of reset
    }//end of shell
}   //end of class