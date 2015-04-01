module objects {

    export class Shell extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super("shell");

            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "shell";
            this.x = 800;
            this.y = 800;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x += this._dx;
            this.y += this._dy;
        }

        public reset(tankY: number, tankRot: number) {

            this.x = 100;
            this.y = tankY + tankRot;
            this._dy = tankRot / 10;

            this.rotation = tankRot;
        }
    }
}   