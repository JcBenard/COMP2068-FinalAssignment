module objects {

    export class WallShapes extends createjs.Shape {

        //instanced variables///////////////////////////////////////////////////////////////////////
        public width: number;
        public height: number;
        public xLocation: number;
        public yLocation: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number, height: number, width: number) {

            super();

            this.graphics.drawRect(xLocation, yLocation, width, height);
            this.xLocation = xLocation;
            this.yLocation = yLocation;
            this.width = width;
            this.height = height;
        }
    }
}    