var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var SnakeDeath = (function (_super) {
        __extends(SnakeDeath, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function SnakeDeath() {
            _super.call(this, managers.Assets.atlas, "die");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = constants.SCRREN_CENTER_HEIGHT;
        }
        return SnakeDeath;
    })(createjs.Sprite);
    objects.SnakeDeath = SnakeDeath;
})(objects || (objects = {}));
//# sourceMappingURL=snakedeath.js.map