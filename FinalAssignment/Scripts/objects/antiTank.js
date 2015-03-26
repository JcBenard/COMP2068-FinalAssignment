var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var AntiTank = (function (_super) {
        __extends(AntiTank, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function AntiTank(mineNumber) {
            _super.call(this, assetLoader.getResult("antiTank"));
            this._dx = 4;
            this.x = constants.SCREEN_WIDTH + 20;
            this.y = 10 + (45 * (mineNumber - 1));
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        AntiTank.prototype.update = function () {
            this.x -= this._dx;
        };
        return AntiTank;
    })(createjs.Bitmap);
    objects.AntiTank = AntiTank;
})(objects || (objects = {}));
//# sourceMappingURL=antiTank.js.map