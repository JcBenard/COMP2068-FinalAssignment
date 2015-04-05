var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Guard = (function (_super) {
        __extends(Guard, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Guard(setX, setY, direction) {
            _super.call(this, managers.Assets.atlas, "guardMove" + direction);
            //instanced variables///////////////////////////////////////////////////////////////////////
            this._dx = 0;
            this._dy = 0;
            this.numbe = 0;
            this._counter = 0;
            this.diffX = 0;
            this.diffY = 0;
            this.name = "guard";
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
        Guard.prototype.update = function () {
            if (this.direction == "Left") {
                if (this.diffX < -300) {
                    this._dx = -this._dx;
                    this.gotoAndPlay("guardMoveRight");
                }
                else if (this.diffX > 0) {
                    this._dx = -this._dx;
                    this.gotoAndPlay("guardMoveLeft");
                }
            }
            else if (this.direction == "Right") {
                if (this.diffX > 300) {
                    this._dx = -this._dx;
                    this.gotoAndPlay("guardMoveLeft");
                }
                else if (this.diffX < 0) {
                    this._dx = -this._dx;
                    this.gotoAndPlay("guardMoveRight");
                }
            }
            else if (this.direction == "Up") {
                if (this.diffY < -300) {
                    this._dy = -this._dy;
                    this.gotoAndPlay("guardMoveDown");
                }
                else if (this.diffY > 0) {
                    this._dy = -this._dy;
                    this.gotoAndPlay("guardMoveUp");
                }
            }
            else if (this.direction == "Down") {
                if (this.diffY > 300) {
                    this._dy = -this._dy;
                    this.gotoAndPlay("guardMoveUp");
                }
                else if (this.diffY < 0) {
                    this._dy = -this._dy;
                    this.gotoAndPlay("guardMoveDown");
                }
            }
            this.diffX += this._dx;
            this.diffY += this._dy;
            this.x += this._dx;
            this.y += this._dy;
        };
        return Guard;
    })(createjs.Sprite);
    objects.Guard = Guard;
})(objects || (objects = {}));
//# sourceMappingURL=guard.js.map