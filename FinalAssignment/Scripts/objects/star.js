var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Star = (function (_super) {
        __extends(Star, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Star(starNumber) {
            _super.call(this, assetLoader.getResult("star"));
            this.x = 136 + (25 * starNumber);
            this.y = 462;
        }
        return Star;
    })(createjs.Bitmap);
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map