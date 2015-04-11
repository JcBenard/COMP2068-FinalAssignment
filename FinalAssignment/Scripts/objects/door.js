var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Door = (function (_super) {
        __extends(Door, _super);
        function Door(xLocation, yLocation, doorDirection) {
            _super.call(this, "door" + doorDirection);
            this.x = xLocation;
            this.y = yLocation;
            this.name = "door";
        }
        return Door;
    })(objects.GameObject);
    objects.Door = Door;
})(objects || (objects = {}));
//# sourceMappingURL=door.js.map