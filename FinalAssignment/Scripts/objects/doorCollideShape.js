var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var DoorCollideShape = (function (_super) {
        __extends(DoorCollideShape, _super);
        function DoorCollideShape(xLocation, yLocation, height, width) {
            _super.call(this, xLocation, yLocation, height, width);
        }
        return DoorCollideShape;
    })(objects.WallShapes);
    objects.DoorCollideShape = DoorCollideShape;
})(objects || (objects = {}));
//# sourceMappingURL=doorCollideShape.js.map