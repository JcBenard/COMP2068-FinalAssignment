var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var TransitionBackground = (function (_super) {
        __extends(TransitionBackground, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function TransitionBackground(backgroundName, dx, buffer) {
            _super.call(this, assetLoader.getResult(backgroundName));
            this._dx = dx;
            this._buffer = buffer;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = constants.SCREEN_WIDTH;
            this.y = 0;
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        TransitionBackground.prototype.update = function () {
            //move the background to the left
            this.x -= this._dx;
            //see if the background is fully in the screen
            this._checkBounds();
        };
        TransitionBackground.prototype._checkBounds = function () {
            //if the background is fully in the screen stop moving it
            if (this.x <= 0 - this._buffer) {
                this._dx = 0;
            }
        };
        return TransitionBackground;
    })(createjs.Bitmap);
    objects.TransitionBackground = TransitionBackground;
})(objects || (objects = {}));
//# sourceMappingURL=transitionbackground.js.map