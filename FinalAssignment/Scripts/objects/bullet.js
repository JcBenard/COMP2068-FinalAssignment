var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Bullet() {
            _super.call(this, "bullet");
            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "bullet";
            this.y = -10;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Bullet.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
            if (this.y >= 440) {
                this.y = 500;
            }
        };
        Bullet.prototype.reset = function (playerY, tankY) {
            this.x = 70;
            if (Math.floor((Math.random() * 2) + 1) == 1) {
                this.y = tankY + 50;
            }
            else {
                this.y = tankY - 50;
            }
            this._dy = ((playerY - this.y) / ((Math.random() * 10) + 25));
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map