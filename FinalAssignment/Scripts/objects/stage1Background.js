var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var StageBackground = (function (_super) {
        __extends(StageBackground, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function StageBackground() {
            _super.call(this, managers.Assets.loader.getResult("gameBackground"));
            //private instanced variables
            this._dx = 4;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 0;
            this.y = -this.height * .75 + 40;
            xPos = this.x;
            yPos = this.y;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        StageBackground.prototype.update = function () {
            this.x = xPos;
            this.y = yPos;
        };
        return StageBackground;
    })(createjs.Bitmap);
    objects.StageBackground = StageBackground;
})(objects || (objects = {}));
//# sourceMappingURL=stage1Background.js.map