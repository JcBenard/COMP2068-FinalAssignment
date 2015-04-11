var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Gunner = (function (_super) {
        __extends(Gunner, _super);
        function Gunner() {
            _super.call(this, managers.Assets.atlas, "gunnerIdle");
            this.counter = 0;
            this.xPositions = [100, 250, 400, 560];
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 90;
            this.name = "gunner";
        }
        Gunner.prototype.update = function (bullets) {
            if (this.counter == 0) {
                this.gotoAndPlay("gunnerRun");
                this.positionToMove = this.xPositions[Math.floor((Math.random() * 4))];
                console.log(this.positionToMove);
                if (this.positionToMove > this.x) {
                    this.dx = 3;
                }
                else if (this.positionToMove < this.x) {
                    this.dx = -3;
                }
                this.counter++;
            }
            if (this.x > this.positionToMove + 3 || this.x < this.positionToMove - 3) {
                this.x += this.dx;
            }
            else {
                this.gotoAndPlay("gunnerIdle");
                this.counter++;
                if (this.counter < 125) {
                    switch (this.counter) {
                        case (25):
                            this.shoot(bullets[0]);
                            break;
                        case (50):
                            this.shoot(bullets[1]);
                            break;
                        case (75):
                            this.shoot(bullets[2]);
                            break;
                        case (100):
                            this.shoot(bullets[3]);
                            break;
                    }
                }
                else {
                    this.counter = 0;
                }
            }
        };
        Gunner.prototype.shoot = function (bullet) {
            bullet.reset(this, "Down");
        };
        return Gunner;
    })(createjs.Sprite);
    objects.Gunner = Gunner;
})(objects || (objects = {}));
//# sourceMappingURL=gunner.js.map