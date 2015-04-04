/// <reference path="../constants.ts" />
module objects {

    export class Guard extends createjs.Sprite {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private _dx: number = 0;
        private _dy: number = 0;
        public width: number;
        public height: number;
        private numbe: number = 0;
        private _counter: number = 0;
        private diffX: number = 0;
        private diffY: number = 0;
        private startLocationX: number;
        private startLocationY: number;
        private direction: String;
        public name = "guard";

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(setX: number, setY: number, direction: String) {

            super(managers.Assets.atlas, "guardMove" + direction);

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.startLocationX = setX;
            this.startLocationY = setY;

            this.x = this.startLocationX;
            this.y = this.startLocationY;

            this.direction = direction;

            switch (this.direction) {
                case ("Left"):
                    this._dx = -1;
                    break;
                case ("Right"):
                    this._dx = 1;
                    break;
                case ("Up"):
                    this._dy = -1;
                    break;
                case ("Down"):
                    this._dy = 1;
                    break;
            }
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {

            if (this.direction == "Left") {
                if (this.diffX < -400) {
                    this._dx = -this._dx;
                    this.gotoAndPlay("guardMoveRight");
                } else if (this.diffX > 0) {
                    this._dx = - this._dx;
                    this.gotoAndPlay("guardMoveLeft");
                }
            } else if (this.direction == "Right") {
                if (this.diffX > 400) {
                    this._dx = -this._dx;
                    this.gotoAndPlay("guardMoveLeft");
                } else if (this.diffX < 0) {
                    this._dx = - this._dx;
                    this.gotoAndPlay("guardMoveRight");
                }
            } else if (this.direction == "Up") {
                if (this.diffY < -400) {
                    this._dy = -this._dy;
                    this.gotoAndPlay("guardMoveDown");
                } else if (this.diffY > 0) {
                    this._dy = - this._dy;
                    this.gotoAndPlay("guardMoveUp");
                }
            } else if (this.direction == "Down") {
                if (this.diffY > 400) {
                    this._dy = -this._dy;
                    this.gotoAndPlay("guardMoveUp");
                } else if (this.diffY < 0) {
                    this._dy = - this._dy;
                    this.gotoAndPlay("guardMoveDown");
                }
            }

            this.diffX += this._dx;
            this.diffY += this._dy;
            this.x += this._dx;
            this.y = this.startLocationY + yPos+ this.diffY;
           
        }
    }
}   