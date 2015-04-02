module objects {

    export class TankBullet extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("bullet");

            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "tankBullet";
            this.y = -10;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x += this._dx;
            this.y += this._dy;

            if (this.y >= 440) {
                this.y = 500;
            }
        }

        public reset(playerY: number, tankY: number) {

            this.x = 70;
            if (Math.floor((Math.random() * 2) + 1) == 1) {
                this.y = tankY + 50;
            } else {
                this.y = tankY - 50;
            }

            this._dy = ((playerY - this.y) / ((Math.random() * 10) + 25));
        }
    }
}   