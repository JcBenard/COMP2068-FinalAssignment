/// <reference path="guardloschecker.ts" />
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
        public losCheckers: objects.GuardLosChecker[] = [];
        private counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(setX: number, setY: number, direction: String, world: createjs.Container) {

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
        public update(player, world: createjs.Container) {

            for (var index = 0; index < this.losCheckers.length; index++) {
                this.losCheckers[index].update();

                if (this.losCheckers[index].remove == true) {
                    world.removeChild(this.losCheckers[index]);
                    this.losCheckers.splice(index, 1);                   
                }
            }

            if (this.counter % 40 == 0) {
                var losChecker = new objects.GuardLosChecker(this);
                this.losCheckers.push(losChecker);
                world.addChild(losChecker);
            }
            this.counter++;

            if (this.direction == "Left" && this.diffX < -300) {
                this._dx = -this._dx;
                this.gotoAndPlay("guardMoveRight");
                this.diffX = 0;
                this.direction = "Right";
                this.losCheckers = [];             
             } else if(this.direction == "Right" && this.diffX > 300) {
                this._dx = -this._dx;
                this.gotoAndPlay("guardMoveLeft");
                this.diffX = 0;
                this.direction = "Left";
                this.losCheckers = [];
            } else if (this.direction == "Up" && this.diffY < -300) {
                this._dy = -this._dy;
                this.gotoAndPlay("guardMoveDown");
                this.diffY = 0;
                this.direction = "Down";
                this.losCheckers = [];
            } else if (this.direction == "Down" && this.diffY > 300) {
                this._dy = -this._dy;
                this.gotoAndPlay("guardMoveUp");
                this.diffY = 0;
                this.direction = "Up";
                this.losCheckers = [];
            }

            this.diffX += this._dx;
            this.diffY += this._dy;
            this.x += this._dx;
            this.y += this._dy;
           
        }
    }
}   