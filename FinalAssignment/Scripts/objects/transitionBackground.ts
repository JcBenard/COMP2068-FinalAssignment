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

            super(managers.Assets.loader.getResult(backgroundName));

            this._dx = dx;
            this._buffer = buffer;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = constants.SCREEN_WIDTH;
            this.y = 0;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the background to the left
            this.x -= this._dx;

            //see if the background is fully in the screen
            this._checkBounds();
        }

        private _checkBounds() {
            //if the background is fully in the screen stop moving it
            if (this.x <= 0 - this._buffer) {
                this._dx = 0;
            }
        }
    }
}  