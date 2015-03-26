/// <reference path="../constants.ts" />
module objects {

    export class Snake extends createjs.Sprite {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private _dx: number = 0;
        private _dy: number = 0;
        public width: number;
        public height: number;
        private numbe: number = 0;
        private _counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            super(managers.Assets.atlas, animation);

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCRREN_CENTER_WIDTH;  
            this.y = constants.SCRREN_CENTER_HEIGHT;               
            
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            this.x = xPos;
            this.y = yPos;

            this._counter++

            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
                animationFlag = false;
            }
        }

        public animation(animationIndex: string) {
            this.gotoAndPlay(animationIndex);
        }
    }
}  