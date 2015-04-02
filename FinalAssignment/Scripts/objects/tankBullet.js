var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var TankBullet = (function (_super) {
        __extends(TankBullet, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function TankBullet() {
            _super.call(this, "bullet");
            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "tankBullet";
            this.y = -10;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        TankBullet.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
            if (this.y >= 440) {
                this.y = 500;
            }
        };
        TankBullet.prototype.reset = function (playerY, tankY) {
            this.x = 70;
            if (Math.floor((Math.random() * 2) + 1) == 1) {
                this.y = tankY + 50;
            }
            else {
                this.y = tankY - 50;
            }
            this._dy = ((playerY - this.y) / ((Math.random() * 10) + 25));
        };
        return TankBullet;
    })(objects.GameObject);
    objects.TankBullet = TankBullet;
})(objects || (objects = {}));
//# sourceMappingURL=tankbullet.js.map