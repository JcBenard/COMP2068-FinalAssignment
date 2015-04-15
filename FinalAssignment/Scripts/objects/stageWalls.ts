module objects {

    export class StageWalls extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dx = 4;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(stageNumber: string ) {

            //set the image to the given string
            super(managers.Assets.loader.getResult("gameWalls" + stageNumber));

            //get the width and height of the image
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //if it's stage 1 or 3 set the background to the given point
            if (stageNumber == "1" || stageNumber == "3") {
                this.x = -constants.SCRREN_CENTER_WIDTH;
                this.y = -this.height + constants.SCRREN_CENTER_HEIGHT - 40;
            }//end of if
        }//end of constructor
    }//end of stageWalls
}   //end of class