var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var AmmoBox = (function (_super) {
        __extends(AmmoBox, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function AmmoBox(dx) {
            _super.call(this, "ammoBox");
            this._dx = dx;
            this.soundString = "difficulty";
            this.name = "ammo";
            this.x = 700;
            this.y = 700;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        AmmoBox.prototype.update = function () {
            this.x -= this._dx;
        };
        //
        AmmoBox.prototype.reset = function () {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        };
        AmmoBox.prototype.resetBoss = function () {
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 400;
        };
        return AmmoBox;
    })(objects.GameObject);
    objects.AmmoBox = AmmoBox;
})(objects || (objects = {}));
//# sourceMappingURL=ammobox.js.map