var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameBackground = (function (_super) {
        __extends(GameBackground, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function GameBackground() {
            _super.call(this, managers.Assets.loader.getResult("gameBackground"));
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
        GameBackground.prototype.update = function () {
            this.x = xPos;
            this.y = yPos;
        };
        return GameBackground;
    })(createjs.Bitmap);
    objects.GameBackground = GameBackground;
})(objects || (objects = {}));
//# sourceMappingURL=gameBackground.js.map