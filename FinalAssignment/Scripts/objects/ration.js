var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ration = (function (_super) {
        __extends(Ration, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Ration(dx) {
            _super.call(this, "ration");
            this._dx = dx;
            this.soundString = "difficulty";
            this.name = "ration";
            this.x = -700;
            this.y = -700;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Ration.prototype.update = function () {
            this.x -= this._dx;
        };
        //
        Ration.prototype.reset = function () {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        };
        Ration.prototype.resetBoss3 = function (x, y) {
            this.x = x;
            this.y = y;
        };
        return Ration;
    })(objects.GameObject);
    objects.Ration = Ration;
})(objects || (objects = {}));
//# sourceMappingURL=ration.js.map