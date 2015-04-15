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
            //set the image to the given string
            _super.call(this, managers.Assets.loader.getResult(backgroundName));
            //set the dx and buffer to the given dx and buffer
            this._dx = dx;
            this._buffer = buffer;
            //get the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //set the default locations
            this.x = constants.SCREEN_WIDTH;
            this.y = 0;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        TransitionBackground.prototype.update = function () {
            //move the background to the left
            this.x -= this._dx;
            //see if the background is fully in the screen
            this._checkBounds();
        }; //end of update
        TransitionBackground.prototype._checkBounds = function () {
            //if the background is fully in the screen stop moving it
            if (this.x <= 0 - this._buffer) {
                this._dx = 0;
            } //end of if
        }; //end of check bounds
        return TransitionBackground;
    })(createjs.Bitmap);
    objects.TransitionBackground = TransitionBackground; //end of transtionBackground
})(objects || (objects = {})); //end of class
//# sourceMappingURL=transitionbackground.js.map