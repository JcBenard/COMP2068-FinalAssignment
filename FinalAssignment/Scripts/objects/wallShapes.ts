module objects {

    export class WallShapes extends createjs.Shape {

        //instanced variables///////////////////////////////////////////////////////////////////////
        public width: number;
        public height: number;
        public xLocation: number;
        public yLocation: number;
        public name: string;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number, height: number, width: number) {

            super();
            //create the shape and set it location and demtions based on the given info
            this.graphics.drawRect(xLocation, yLocation, width, height);
            this.xLocation = xLocation;
            this.yLocation = yLocation;
            this.width = width;
            this.height = height;
        }//end of constructor
    }//end of wallShapes
}    //end of class