module objects {

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

            this.x = 0;
            this.y = -this.height * .75 + 40;

            xPos = this.x;
            yPos = this.y;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x = xPos;
            this.y = yPos;
        }
    }
}  