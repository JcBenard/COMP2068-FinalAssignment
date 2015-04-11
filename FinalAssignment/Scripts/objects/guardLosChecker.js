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
            this.graphics.beginFill("blue").drawRect(guard.x, guard.y, 5, 5);
            this._dx = guard._dx * 3;
            this._dy = guard._dy * 3;
            this.startX = this.x;
            this.startY = this.y;
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