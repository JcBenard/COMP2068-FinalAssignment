/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Mine = (function (_super) {
        __extends(Mine, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Mine(dx) {
            _super.call(this, "mine");
            this._dx = dx;
            this.soundString = "explosion";
            this.name = "mines";
            //set the island to start at a random x and an out of bounds y
            this._reset();
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Mine.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Mine.prototype.setMines = function (x, y) {
            this.x = x;
            this.y = y;
        };
        //set the mine to a random y pos and a random x pos out of screen
        Mine.prototype._reset = function () {
            this.x = constants.SCREEN_WIDTH + Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
        };
        //checks if the mine is passed the screen
        Mine.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        return Mine;
    })(objects.GameObject);
    objects.Mine = Mine;
})(objects || (objects = {}));
//# sourceMappingURL=mine.js.map