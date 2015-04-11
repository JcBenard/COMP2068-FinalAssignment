module objects {

    export class HealthBar extends createjs.Sprite {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(barNumber: number) {

            super(managers.Assets.atlas, "health");

            this.x = 136 + (18.5 * barNumber);
            this.y = 444;
        }
    }
}  