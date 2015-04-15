var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var AmmoBox = (function (_super) {
        __extends(AmmoBox, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function AmmoBox(dx) {
            _super.call(this, "ammoBox"); //call the gameobject constructor using the ammoBox sprite
            this._dx = dx; //set the dx to the dx passed in
            this.soundString = "difficulty"; //this sound will be played on contact
            this.name = "ammo"; //name so it can be referenced easier
            this.x = -700; //the starting position for the object
            this.y = -700;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        AmmoBox.prototype.update = function () {
            this.x -= this._dx; //moves the x postion based on the dx proveded
        }; //end of update
        //move the object to a random height and a width slightly to the right of the screen
        AmmoBox.prototype.reset = function () {
            this.x = constants.SCREEN_WIDTH;
            this.y = Math.floor(Math.random() * 430);
        };
        //moves the object just below the center of screen
        AmmoBox.prototype.resetBoss1 = function () {
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 400;
        };
        //moves the object to the given location
        AmmoBox.prototype.resetBoss3 = function (x, y) {
            this.x = x;
            this.y = y;
        };
        return AmmoBox;
    })(objects.GameObject);
    objects.AmmoBox = AmmoBox;
})(objects || (objects = {}));
//# sourceMappingURL=ammobox.js.map