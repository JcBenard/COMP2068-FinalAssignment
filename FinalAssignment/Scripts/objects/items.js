/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Items = (function (_super) {
        __extends(Items, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Items(name, xLocation, yLocation) {
            _super.call(this, name);
            this.soundString = "difficulty";
            this.name = name;
            this.startLocationX = xLocation;
            this.startLocationY = yLocation;
            this.x = this.startLocationX;
            this.y = this.startLocationY;
        }
        Items.prototype.update = function () {
        };
        return Items;
    })(objects.GameObject);
    objects.Items = Items;
})(objects || (objects = {}));
//# sourceMappingURL=items.js.map