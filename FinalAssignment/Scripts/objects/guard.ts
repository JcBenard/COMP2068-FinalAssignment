﻿/// <reference path="../constants.ts" />
module objects {

    export class Guard extends createjs.Sprite {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private _dx: number = 0;
        private _dy: number = 0;
        public width: number;
        public height: number;
        private numbe: number = 0;
        private _counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(setX: number, setY: number, direction: String) {

            super(managers.Assets.atlas, "guardRun" + direction);

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCRREN_CENTER_WIDTH + 200;
            this.y = constants.SCRREN_CENTER_HEIGHT + 200;

        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

            if (snakeMove == true) {
                this.x = xPos;
                this.y = yPos;
            }

            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            }
        }
    }
}   