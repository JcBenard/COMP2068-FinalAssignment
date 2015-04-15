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
            //set the sprite to shell using the gameObject constructor
            _super.call(this, "shell");
            //set the default dx and dy
            this._dx = 5;
            this._dy = 0;
            //set the sound played on hit
            this.soundString = "explosion";
            this.name = "shell";
            //set the default location
            this.x = 800;
            this.y = 800;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        Shell.prototype.update = function () {
            //move the object based on the dx and dy
            this.x += this._dx;
            this.y += this._dy;
        }; //end of update
        Shell.prototype.reset = function (tankY, tankRot) {
            //set the location based on the tanks current position
            this.x = 100;
            this.y = tankY + tankRot;
            //set the dy based on the rotaion of the tank
            this._dy = tankRot / 10;
        }; //end of reset
        return Shell;
    })(objects.GameObject);
    objects.Shell = Shell; //end of shell
})(objects || (objects = {})); //end of class
//# sourceMappingURL=shell.js.map