module objects {

    export class WorldContainer extends createjs.Container {

        constructor() {
            super();

            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
        }

        //updates the postion of the world container bases on the current x and y movements
        update() {
            this.x += dx;
            this.y += dy;
        }
    }
}
         