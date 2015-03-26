var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var InfoBar = (function (_super) {
        __extends(InfoBar, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function InfoBar() {
            _super.call(this, assetLoader.getResult("info"));
            this.y = 440;
        }
        return InfoBar;
    })(createjs.Bitmap);
    objects.InfoBar = InfoBar;
})(objects || (objects = {}));
//# sourceMappingURL=infobar.js.map