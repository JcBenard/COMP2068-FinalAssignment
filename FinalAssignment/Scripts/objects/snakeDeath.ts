module objects {

    export class SnakeDeath extends createjs.Sprite {

        //instanced variables///////////////////////////////////////////////////////////////////////
        public width: number;
        public height: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(managers.Assets.atlas, "die");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
        }
    }
}   