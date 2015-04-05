var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var BackgroundObjects = (function (_super) {
        __extends(BackgroundObjects, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function BackgroundObjects(xLocation, yLocation, objectType) {
            _super.call(this, managers.Assets.loader.getResult(objectType));
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.x = xLocation;
            this.y = yLocation;
            this.collisionBox = new createjs.Shape();
            this.collisionBox.graphics.drawRect(0, 0, this.width - 20, this.height - 40);
            this.boxHeight = this.height - 40;
            this.boxWidth = this.width - 20;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        BackgroundObjects.prototype.update = function (player, world) {
            var tempPlayer = player;
            tempPlayer.regX = 0;
            tempPlayer.regY = 0;
            var pt = this.globalToLocal(tempPlayer.x, tempPlayer.y);
            if (pt.x >= this.collisionBox.x + this.boxWidth || pt.x + tempPlayer.width <= this.collisionBox.x || pt.y >= this.collisionBox.y + this.boxHeight || pt.y + tempPlayer.height <= this.collisionBox.y) {
            }
            else {
                if (collidingBottom == true || collidingTop == true) {
                    player.y += dy;
                }
                else {
                    world.y -= dy;
                }
                if (collidingRight == true || collidingLeft == true) {
                    player.x += dx;
                }
                else {
                    world.x -= dx;
                }
            }
        };
        return BackgroundObjects;
    })(createjs.Bitmap);
    objects.BackgroundObjects = BackgroundObjects;
})(objects || (objects = {}));
//# sourceMappingURL=backgroundobjects.js.map