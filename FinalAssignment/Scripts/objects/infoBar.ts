module objects {

    export class InfoBar extends createjs.Bitmap {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            //set the image to the info image
            super(managers.Assets.loader.getResult("info"));

            //set the location
            this.y = 440;
            this.x = 0;
        }
    }
}   