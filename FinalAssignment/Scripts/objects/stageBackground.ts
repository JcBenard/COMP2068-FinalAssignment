﻿module objects {

    export class StageBackground extends createjs.Bitmap {
        //public instanced variables
        public width;
        public height;

        //private instanced variables
        private _dx = 4;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(stageNumber) {

            super(managers.Assets.loader.getResult("gameBackground" + stageNumber));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = -constants.SCRREN_CENTER_WIDTH;
            this.y = -this.height + constants.SCRREN_CENTER_HEIGHT - 40;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

        }
    }
}  