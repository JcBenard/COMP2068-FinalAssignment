module objects {

    export class AntiTank extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(dx: number) {

            super("antiTank");

            this._dx = dx;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "antiTank";

            this.x = 0;
            this.y = 700;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;
        }

        public reset() {
            this.x = xPos;
            this.y = yPos;
        }
    }
}   