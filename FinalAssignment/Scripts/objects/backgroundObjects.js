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
            _super.call(this, managers.Assets.loader.getResult(objectType)); //set the bitmap to the given name
            //get the height and width of the image
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            //set its location to the given location
            this.x = xLocation;
            this.y = yLocation;
            //create the box that will be used for collision trimming a bit off for the shadows
            this.collisionBox = new createjs.Shape();
            this.collisionBox.graphics.beginFill("blue").drawRect(0, 0, this.width - 10, this.height - 30);
            this.boxHeight = this.height - 30;
            this.boxWidth = this.width - 10;
        }
        return BackgroundObjects;
    })(createjs.Bitmap);
    objects.BackgroundObjects = BackgroundObjects;
})(objects || (objects = {}));
//# sourceMappingURL=backgroundobjects.js.map