module objects {

    export class Bullet extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("bullet");

            this.soundString = "explosion";
            this.name = "bullet";
            this.x = -10000;
            this.y = 10000;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x += this._dx;
            this.y += this._dy;

            if (this.y >= 440) {
                this.y = 500;
            }
        }

        public reset(player , playerDirection: string) {

            this.x = player.x;
            this.y = player.y;

            this._dx = 0;
            this._dy = 0;

            switch(playerDirection){
                case ("Left"):
                    this._dx = -6;
                    break;
                case ("Right"):
                    this._dx = 6;
                    break;
                case ("Up"):
                    this._dy = -6;
                    break;
                case ("Down"):
                    this._dy = 6;
                    break;
                
            }

            console.log("direction: " + playerDirection + " Speed: " + this._dx + ", " + this._dy);
        }
    }
}  