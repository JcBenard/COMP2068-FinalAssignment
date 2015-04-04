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
        function StageBackground(stageNumber) {
            _super.call(this, managers.Assets.loader.getResult("gameBackground" + stageNumber));
            //private instanced variables
            this._dx = 4;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = -constants.SCRREN_CENTER_WIDTH;
            this.y = -this.height + constants.SCRREN_CENTER_HEIGHT - 40;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        StageBackground.prototype.update = function () {
        };
        return StageBackground;
    })(createjs.Bitmap);
    objects.StageBackground = StageBackground;
})(objects || (objects = {}));
//# sourceMappingURL=stagebackground.js.map