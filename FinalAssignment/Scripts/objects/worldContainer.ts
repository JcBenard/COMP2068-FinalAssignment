module objects {

    export class WorldContainer extends createjs.Container {

        constructor() {
            super();

            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
        }

        update() {
            this.x += dx;
            this.y += dy;
        }
    }
}
         