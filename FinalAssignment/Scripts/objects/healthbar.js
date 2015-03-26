var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var HealthBar = (function (_super) {
        __extends(HealthBar, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function HealthBar(barNumber) {
            _super.call(this, assetLoader.getResult("life"));
            this.x = 136 + (37 * barNumber);
            this.y = 444;
        }
        return HealthBar;
    })(createjs.Bitmap);
    objects.HealthBar = HealthBar;
})(objects || (objects = {}));
//# sourceMappingURL=healthbar.js.map