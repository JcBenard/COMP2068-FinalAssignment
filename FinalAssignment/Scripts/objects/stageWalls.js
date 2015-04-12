var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var StageWalls = (function (_super) {
        __extends(StageWalls, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function StageWalls(stageNumber) {
            _super.call(this, managers.Assets.loader.getResult("gameWalls" + stageNumber));
            //private instanced variables
            this._dx = 4;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            if (stageNumber == "1" || stageNumber == "3") {
                this.x = -constants.SCRREN_CENTER_WIDTH;
                this.y = -this.height + constants.SCRREN_CENTER_HEIGHT - 40;
            }
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        StageWalls.prototype.update = function () {
        };
        return StageWalls;
    })(createjs.Bitmap);
    objects.StageWalls = StageWalls;
})(objects || (objects = {}));
//# sourceMappingURL=stagewalls.js.map