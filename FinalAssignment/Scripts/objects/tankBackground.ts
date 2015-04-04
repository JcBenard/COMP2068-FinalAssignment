module objects {

    export class TankBackground extends createjs.Sprite{

        //instanced variables///////////////////////////////////////////////////////////////////////
        private _dx: number = 0;
        private _dy: number = 0;
        public width: number;
        public height: number;
        private numbe: number = 0;
        private _counter: number = 0;
        private diffX: number = 0;
        private diffY: number = 0;
        private startLocationX: number;
        private startLocationY: number;
        private direction: String;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number) {

            super(managers.Assets.atlas, "tank");

            this.height = this.getBounds().height;
            this.width = this.getBounds().width;

            this.startLocationX = xLocation;
            this.startLocationY = yLocation;

            this.x = this.startLocationX;
            this.y = this.startLocationY;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(snake) {
        }
    }
}    