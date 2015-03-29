var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameWalls = (function (_super) {
        __extends(GameWalls, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function GameWalls() {
            _super.call(this, managers.Assets.loader.getResult("gameWalls"));
            //private instanced variables
            this._dx = 4;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
            this.y = -this.height * .75;
            xPos = this.x;
            yPos = this.y;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        GameWalls.prototype.update = function () {
            this.x = xPos;
            this.y = yPos;
        };
        return GameWalls;
    })(createjs.Bitmap);
    objects.GameWalls = GameWalls;
})(objects || (objects = {}));
//# sourceMappingURL=gamewalls.js.map