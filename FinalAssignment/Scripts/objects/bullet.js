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
            this.soundString = "explosion";
            this.name = "bullet";
            this.x = -10000;
            this.y = 10000;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Bullet.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
            if (this.y >= 440) {
                this.y = 500;
            }
        };
        Bullet.prototype.reset = function (player, playerDirection) {
            this.x = player.x;
            this.y = player.y;
            this._dx = 0;
            this._dy = 0;
            switch (playerDirection) {
                case ("Left"):
                    this._dx = -6;
                    break;
                case ("Right"):
                    this._dx = 6;
                    break;
                case ("Up"):
                    this._dy = -6;
                    break;
                case ("Down"):
                    this._dy = 6;
                    break;
            }
            console.log("direction: " + playerDirection + " Speed: " + this._dx + ", " + this._dy);
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map