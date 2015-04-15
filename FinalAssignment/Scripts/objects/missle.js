var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Missle = (function (_super) {
        __extends(Missle, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Missle() {
            //set the sprite to a missle using the gameObject constructor
            _super.call(this, "missleFire");
            //set the sound played on hit
            this.soundString = "explosion";
            this.name = "missles";
            //set the default location
            this.x = -10000;
            this.y = 10000;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        Missle.prototype.update = function () {
            this.x += this._dx;
            this.y += this._dy;
        };
        Missle.prototype.reset = function (player, playerDirection) {
            //set the x and y to the players y and y
            this.x = player.x;
            this.y = player.y;
            //set the dx and dy to 0
            this._dx = 0;
            this._dy = 0;
            switch (playerDirection) {
                case ("Left"):
                    this.rotation = 270;
                    this._dx = -8;
                    break;
                case ("Right"):
                    this.rotation = 90;
                    this._dx = 8;
                    break;
                case ("Up"):
                    this.rotation = 0;
                    this._dy = -8;
                    break;
                case ("Down"):
                    this.rotation = 180;
                    this._dy = 8;
                    break;
            }
        }; //end of reset
        return Missle;
    })(objects.GameObject);
    objects.Missle = Missle; //end of missle
})(objects || (objects = {})); //end of class
//# sourceMappingURL=missle.js.map