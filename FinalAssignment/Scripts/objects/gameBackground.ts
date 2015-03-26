module objects {

    export class GameBackground extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dx = 4;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(managers.Assets.loader("gameBackground"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = this.width - constants.SCREEN_WIDTH;
            this.y = this.height - constants.SCREEN_HEIGHT;

            xPos = this.x;
            yPos = this.y;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x = xPos;
            this.y = yPos;
        }
    }
}  