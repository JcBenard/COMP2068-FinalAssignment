module objects {

    export class AmmoBox extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(dx: number) {

            super("ammoBox");

            this._dx = dx;
            this.soundString = "difficulty";
            this.name = "ammo";
            this.x = -700;
            this.y = -700;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;
        }

        //
        public reset() {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        }

        public resetBoss1() {
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 400;
        }
        public resetBoss3(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
}  