var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var WallShapes = (function (_super) {
        __extends(WallShapes, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function WallShapes(xLocation, yLocation, height, width) {
            _super.call(this);
            this.graphics.drawRect(xLocation, yLocation, width, height);
            this.xLocation = xLocation;
            this.yLocation = yLocation;
            this.width = width;
            this.height = height;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        WallShapes.prototype.update = function (player, world) {
            var pt = this.globalToLocal(player.x, player.y);
            if (pt.x >= this.xLocation + this.width || pt.x + player.width * .5 <= this.xLocation || pt.y >= this.yLocation + this.height || pt.y + player.height * .5 <= this.yLocation) {
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
        return WallShapes;
    })(createjs.Shape);
    objects.WallShapes = WallShapes;
})(objects || (objects = {}));
//# sourceMappingURL=wallshapes.js.map