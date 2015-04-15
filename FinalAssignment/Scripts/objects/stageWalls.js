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
            //set the image to the given string
            _super.call(this, managers.Assets.loader.getResult("gameWalls" + stageNumber));
            //private instanced variables
            this._dx = 4;
            //get the width and height of the image
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //if it's stage 1 or 3 set the background to the given point
            if (stageNumber == "1" || stageNumber == "3") {
                this.x = -constants.SCRREN_CENTER_WIDTH;
                this.y = -this.height + constants.SCRREN_CENTER_HEIGHT - 40;
            } //end of if
        } //end of constructor
        return StageWalls;
    })(createjs.Bitmap);
    objects.StageWalls = StageWalls; //end of stageWalls
})(objects || (objects = {})); //end of class
//# sourceMappingURL=stagewalls.js.map