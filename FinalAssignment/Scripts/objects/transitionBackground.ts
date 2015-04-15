module objects {

    export class TransitionBackground extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dx;
        private _buffer: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(backgroundName: string, dx: number, buffer: number) {

            //set the image to the given string
            super(managers.Assets.loader.getResult(backgroundName));

            //set the dx and buffer to the given dx and buffer
            this._dx = dx;
            this._buffer = buffer;

            //get the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //set the default locations
            this.x = constants.SCREEN_WIDTH;
            this.y = 0;
        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the background to the left
            this.x -= this._dx;

            //see if the background is fully in the screen
            this._checkBounds();
        }//end of update

        private _checkBounds() {
            //if the background is fully in the screen stop moving it
            if (this.x <= 0 - this._buffer) {
                this._dx = 0;
            }//end of if
        }//end of check bounds
    }//end of transtionBackground
}  //end of class