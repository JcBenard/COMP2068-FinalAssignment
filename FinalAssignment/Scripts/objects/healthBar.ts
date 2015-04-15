module objects {

    export class HealthBar extends createjs.Sprite {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(barNumber: number) {

            //set the sprite
            super(managers.Assets.atlas, "health");

            //set the location based on the number passed in
            this.x = 136 + (18.5 * barNumber);
            this.y = 444;
        }//end of constructor
    }//end of healthBar
}  //end of class