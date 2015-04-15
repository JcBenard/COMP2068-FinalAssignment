var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var TankBullet = (function (_super) {
        __extends(TankBullet, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function TankBullet() {
            _super.call(this, "bullet");
            this._dx = 5;
            this._dy = 0;
            this.soundString = "explosion";
            this.name = "tankBullet";
            this.y = -10;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        TankBullet.prototype.update = function () {
            //move the object based on dx and dy
            this.x += this._dx;
            this.y += this._dy;
        }; //end of update
        TankBullet.prototype.reset = function (playerY, tankY) {
            this.x = 70; //set the x position
            //get a random number between 1 and 2
            if (Math.floor((Math.random() * 2) + 1) == 1) {
                this.y = tankY + 50; //set the y position to the tank y + 50
            }
            else {
                this.y = tankY - 50; //set the y position to the tank y - 50
            } //end of if
            //set the dy to make the object move towards the player
            this._dy = ((playerY - this.y) / ((Math.random() * 10) + 25));
        }; //end ofreset
        return TankBullet;
    })(objects.GameObject);
    objects.TankBullet = TankBullet; //end of tankBullet
})(objects || (objects = {})); //end of class
//# sourceMappingURL=tankbullet.js.map