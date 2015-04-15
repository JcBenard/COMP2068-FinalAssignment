var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var AntiTank = (function (_super) {
        __extends(AntiTank, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function AntiTank(dx) {
            _super.call(this, "antiTank"); //use the gameobject construction using antiTank as the sprite
            //set the dx equal to the given dx
            this._dx = dx;
            this._dy = 0;
            //set the sound it makes on contact and it name
            this.soundString = "explosion";
            this.name = "antiTank";
            //set the default location
            this.x = 0;
            this.y = 700;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        AntiTank.prototype.update = function () {
            this.x -= this._dx;
        }; //end of update
        AntiTank.prototype.reset = function (player) {
            this.x = player.x;
            this.y = player.y;
        }; //end of reset
        return AntiTank;
    })(objects.GameObject);
    objects.AntiTank = AntiTank; //end of antitank
})(objects || (objects = {})); //end of class  
//# sourceMappingURL=antiTank.js.map