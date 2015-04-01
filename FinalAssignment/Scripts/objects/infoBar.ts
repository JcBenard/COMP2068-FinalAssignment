module objects {

    export class InfoBar extends createjs.Bitmap {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(managers.Assets.loader.getResult("info"));

            this.y = 440;
        }
    }
}   