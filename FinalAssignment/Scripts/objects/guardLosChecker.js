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
            this.graphics.beginFill("blue").drawRect(guard.x, guard.y, 10, 10);
            this._dx = guard._dx * 3;
            this._dy = guard._dy * 3;
            this.width = 10;
            this.height = 10;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.startX = this.x;
            this.startY = this.y;
            this.name = "los";
        }
        GuardLosChecker.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
            if (this.x > this.startX + 400 || this.x < this.startX - 400 || this.y > this.startY + 400 || this.y < this.startY - 400) {
                this.remove = true;
            }
        };
        return GuardLosChecker;
    })(createjs.Shape);
    objects.GuardLosChecker = GuardLosChecker;
})(objects || (objects = {}));
//# sourceMappingURL=guardloschecker.js.map