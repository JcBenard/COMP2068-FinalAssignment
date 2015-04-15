module objects {

    export class WorldContainer extends createjs.Container {

        constructor() {
            super();

            //set the default postition to the center of the screen
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
            //if the current stage is 3 set the default y postition to 2000;
            if (currentState == constants.STAGE3_STATE) {
                this.y = 2000;
            }//end of if
        }//end of constructor

        //updates the postion of the world container bases on the current x and y movements
        public update() {
            this.x += dx;
            this.y += dy;
        }//end  of update
    }//end of worldContainer
}//end of class
         