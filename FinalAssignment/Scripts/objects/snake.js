/// <reference path="../constants.ts" />
/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Snake = (function (_super) {
        __extends(Snake, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Snake() {
            _super.call(this, animation);
            //instanced variables///////////////////////////////////////////////////////////////////////
            this.numbe = 0;
            this._counter = 0;
            this.name = "snake";
            this.soundString = "explosion";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Snake.prototype.update = function () {
            if (snakeMove == true) {
                this.x = xPos;
                this.y = yPos;
            }
            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            }
        };
        return Snake;
    })(objects.GameObject);
    objects.Snake = Snake;
})(objects || (objects = {}));
//# sourceMappingURL=snake.js.map