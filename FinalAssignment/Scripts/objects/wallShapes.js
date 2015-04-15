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
            //create the shape and set it location and demtions based on the given info
            this.graphics.drawRect(xLocation, yLocation, width, height);
            this.xLocation = xLocation;
            this.yLocation = yLocation;
            this.width = width;
            this.height = height;
        } //end of constructor
        return WallShapes;
    })(createjs.Shape);
    objects.WallShapes = WallShapes; //end of wallShapes
})(objects || (objects = {})); //end of class
//# sourceMappingURL=wallshapes.js.map