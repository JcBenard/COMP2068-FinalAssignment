var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Ration = (function (_super) {
        __extends(Ration, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Ration(dx) {
            //set the sprite to ration using the gameObject constructor
            _super.call(this, "ration");
            //set the dx to the dx passed in
            this._dx = dx;
            //set the sound played on hit
            this.soundString = "difficulty";
            this.name = "ration";
            //set the default location
            this.x = -700;
            this.y = -700;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        Ration.prototype.update = function () {
            //move the object based on the dx
            this.x -= this._dx;
        }; //end of update
        //when called move the object to a random height and to the right edge
        Ration.prototype.reset = function () {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        }; //end of reset
        //when called move the object to the given x and y positions
        Ration.prototype.resetBoss3 = function (x, y) {
            this.x = x;
            this.y = y;
        }; //end of resetBoss3
        return Ration;
    })(objects.GameObject);
    objects.Ration = Ration; //end of ration
})(objects || (objects = {})); //end of class
//# sourceMappingURL=ration.js.map