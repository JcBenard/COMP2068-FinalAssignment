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
        function AntiTank(dx) {
            _super.call(this, "antiTank");
            this._dx = dx;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "antiTank";
            this.x = 0;
            this.y = 700;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        AntiTank.prototype.update = function () {
            this.x -= this._dx;
        };
        AntiTank.prototype.reset = function (player) {
            this.x = player.x;
            this.y = player.y;
        };
        return AntiTank;
    })(objects.GameObject);
    objects.AntiTank = AntiTank;
})(objects || (objects = {}));
//# sourceMappingURL=antiTank.js.map