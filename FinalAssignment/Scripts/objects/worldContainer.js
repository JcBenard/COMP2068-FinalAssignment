var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var WorldContainer = (function (_super) {
        __extends(WorldContainer, _super);
        function WorldContainer() {
            _super.call(this);
            //set the default postition to the center of the screen
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
            //if the current stage is 3 set the default y postition to 2000;
            if (currentState == constants.STAGE3_STATE) {
                this.y = 2000;
            } //end of if
        } //end of constructor
        //updates the postion of the world container bases on the current x and y movements
        WorldContainer.prototype.update = function () {
            this.x += dx;
            this.y += dy;
        }; //end  of update
        return WorldContainer;
    })(createjs.Container);
    objects.WorldContainer = WorldContainer; //end of worldContainer
})(objects || (objects = {})); //end of class
//# sourceMappingURL=worldcontainer.js.map