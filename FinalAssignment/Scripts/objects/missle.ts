module objects {

    export class Missle extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("missleFire");

            this.soundString = "explosion";
            this.name = "missle";
            this.x = -10000;
            this.y = 10000;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x += this._dx;
            this.y += this._dy;
        }

        public reset(player, playerDirection: string) {

            this.x = player.x;
            this.y = player.y;

            this._dx = 0;
            this._dy = 0;

            switch (playerDirection) {
                case ("Left"):
                    this.rotation = 270;
                    this._dx = -8;
                    break;
                case ("Right"):
                    this.rotation = 90;
                    this._dx = 8;
                    break;
                case ("Up"):
                    this.rotation = 0;
                    this._dy = -8;
                    break;
                case ("Down"):
                    this.rotation = 180;
                    this._dy = 8;
                    break;

            }
        }
    }
}  