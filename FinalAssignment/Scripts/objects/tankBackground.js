var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var TankBackground = (function (_super) {
        __extends(TankBackground, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function TankBackground(xLocation, yLocation) {
            _super.call(this, managers.Assets.atlas, "tank");
            //instanced variables///////////////////////////////////////////////////////////////////////
            this._dx = 0;
            this._dy = 0;
            this.numbe = 0;
            this._counter = 0;
            this.diffX = 0;
            this.diffY = 0;
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.startLocationX = xLocation;
            this.startLocationY = yLocation;
            this.x = this.startLocationX;
            this.y = this.startLocationY;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        TankBackground.prototype.update = function (snake) {
        };
        return TankBackground;
    })(createjs.Sprite);
    objects.TankBackground = TankBackground;
})(objects || (objects = {}));
//# sourceMappingURL=tankbackground.js.map