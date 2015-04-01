module objects {

    export class AntiTank extends createjs.Bitmap {

        private _dx: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(mineNumber: number) {

            super(assetLoader.getResult("antiTank"));

            this._dx = 4;

            this.x = constants.SCREEN_WIDTH + 20;
            this.y = 10 + (45 * (mineNumber - 1));
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x -= this._dx;

        }
    }
}   