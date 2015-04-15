var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Bullet() {
            _super.call(this, "bullet"); //call the gameobject constructor using the ammoBox sprite
            this.soundString = "explosion"; //this sound will be played on contact
            this.name = "bullet"; //name so it can be referenced easier
            //set the default postion for the object
            this.x = -10000;
            this.y = 10000;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Bullet.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
        };
        Bullet.prototype.reset = function (player, playerDirection) {
            //set the object to location to that of the player
            this.x = player.x;
            this.y = player.y;
            //set the dx and dy to 0
            this._dx = 0;
            this._dy = 0;
            switch (playerDirection) {
                case ("Left"):
                    this._dx = -6;
                    break;
                case ("Right"):
                    this._dx = 6;
                    break;
                case ("Up"):
                    this._dy = -6;
                    break;
                case ("Down"):
                    this._dy = 6;
                    break;
            }
        }; //end of reset
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet; //end of bullet
})(objects || (objects = {})); //end of class
//# sourceMappingURL=bullet.js.map