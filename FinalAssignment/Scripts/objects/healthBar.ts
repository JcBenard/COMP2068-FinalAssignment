module objects {

    export class HealthBar extends createjs.Bitmap {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(barNumber: number) {

            super(assetLoader.getResult("life"));

            this.x = 136 + (37 * barNumber);
            this.y = 444;
        }
    }
}  