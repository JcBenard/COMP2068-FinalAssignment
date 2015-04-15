module objects {

    export class MovingBackgroud extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dx = 4;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            //set the image to given image
            super(managers.Assets.loader.getResult("gameBackground2"));

            //get the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the background to the left
            this.x -= this._dx;

            //see if the background is at it's end then reset it
            this._checkBounds();
        }

        //private methods//////////////////////////////////////////////////////////////////////////
        private _reset() {
            //set the x and y to 0
            this.x = 0;
            this.y = 0;
        }

        private _checkBounds() {
            //if the background's x point is less then - screen width reset it
            if (this.x < -constants.SCREEN_WIDTH) {
                this._reset();
            }//end of if
        }//end of checkBounds
    }//end of moving background
}  //end of class