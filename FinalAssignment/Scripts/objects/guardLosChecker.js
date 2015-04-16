var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GuardLosChecker = (function (_super) {
        __extends(GuardLosChecker, _super);
        function GuardLosChecker(guard) {
            _super.call(this);
            this.number = 1;
            switch (guard.direction) {
                case ("Left"):
                    this.width = 75;
                    this.height = 10;
                    break;
                case ("Right"):
                    this.width = 75;
                    this.height = 10;
                    break;
                case ("Up"):
                    this.width = 10;
                    this.height = 75;
                    break;
                case ("Down"):
                    this.width = 10;
                    this.height = 75;
                    break;
            }
            //create the box based on the guards position and direction
            this.graphics.drawRect(guard.x - 37, guard.y - 37, this.height, this.width);
            //set the dx to 3 times the guard so it can check quickly
            this._dx = guard._dx * 3;
            this._dy = guard._dy * 3;
            //keep the starting location of the box
            this.startX = this.x;
            this.startY = this.y;
            this.name = "los";
        } //end of constructor
        GuardLosChecker.prototype.update = function () {
            //update the location based on the dx and dy
            this.x += this._dx;
            this.y += this._dy;
            //if the box has move to its end set the removal flag to true
            if (this.x > this.startX + 300 || this.x < this.startX - 300 || this.y > this.startY + 250 || this.y < this.startY - 250) {
                this.remove = true;
            } //end of if
        }; //end of update
        return GuardLosChecker;
    })(createjs.Shape);
    objects.GuardLosChecker = GuardLosChecker; //end of guardLosChecker
})(objects || (objects = {})); //end of class
//# sourceMappingURL=guardloschecker.js.map