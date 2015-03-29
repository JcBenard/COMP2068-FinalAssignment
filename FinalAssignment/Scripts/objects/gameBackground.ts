module objects {

    export class GameBackground extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dx = 4;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(managers.Assets.loader.getResult("gameBackground"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 0;
            this.y = -this.height * .75;

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