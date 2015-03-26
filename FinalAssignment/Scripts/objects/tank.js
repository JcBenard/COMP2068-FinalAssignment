var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Tank = (function (_super) {
        __extends(Tank, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Tank() {
            _super.call(this, "tank");
            this._dy = 1;
            this.x = 35;
            this.y = 220;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Tank.prototype.update = function (playerY) {
            //rotate the tank images based on the players location
            if (this.y > playerY + 25) {
                this.y -= this._dy;
                this.rotation = -5;
                switch (true) {
                    case (this.y > playerY + 75):
                        this.rotation = -10;
                    case (this.y > playerY + 150):
                        this.rotation = -15;
                    case (this.y > playerY + 225):
                        this.rotation = -20;
                    case (this.y > playerY + 300):
                        this.rotation = -23;
                }
            }
            else if (this.y < playerY - 25) {
                this.y += this._dy;
                this.rotation = 5;
                switch (true) {
                    case (this.y < playerY - 75):
                        this.rotation = 10;
                    case (this.y < playerY - 150):
                        this.rotation = 15;
                    case (this.y < playerY - 225):
                        this.rotation = 20;
                    case (this.y < playerY - 300):
                        this.rotation = 23;
                }
            }
            else {
                this.rotation = 0;
            }
        };
        return Tank;
    })(objects.GameObject);
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map