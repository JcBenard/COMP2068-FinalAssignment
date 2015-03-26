var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Shell = (function (_super) {
        __extends(Shell, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Shell() {
            _super.call(this, "shell");
            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "shell";
            this.x = 800;
            this.y = 800;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Shell.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
        };
        Shell.prototype.reset = function (tankY, tankRot) {
            this.x = 100;
            this.y = tankY + tankRot;
            this._dy = tankRot / 10;
            this.rotation = tankRot;
        };
        return Shell;
    })(objects.GameObject);
    objects.Shell = Shell;
})(objects || (objects = {}));
//# sourceMappingURL=shell.js.map