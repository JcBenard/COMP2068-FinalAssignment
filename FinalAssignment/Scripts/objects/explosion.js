var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Explosion() {
            //create the explosion animation
            _super.call(this, new createjs.SpriteSheet({
                images: [assetLoader.getResult("explosionSprite")],
                frames: { width: 40, height: 40 },
                animations: {
                    explosion: {
                        frames: [0, 1, 2, 3],
                        speed: 0.04
                    }
                }
            }), "explosion");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //place it in a random y pos near the tank
            this.x = Math.floor((Math.random() * 100) + 20);
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
        }
        return Explosion;
    })(createjs.Sprite);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map