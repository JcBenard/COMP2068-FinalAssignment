var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var WorldContainer = (function (_super) {
        __extends(WorldContainer, _super);
        function WorldContainer() {
            _super.call(this);
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
        }
        //updates the postion of the world container bases on the current x and y movements
        WorldContainer.prototype.update = function () {
            this.x += dx;
            this.y += dy;
        };
        return WorldContainer;
    })(createjs.Container);
    objects.WorldContainer = WorldContainer;
})(objects || (objects = {}));
//# sourceMappingURL=worldcontainer.js.map