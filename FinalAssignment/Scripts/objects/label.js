var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        //constructor//////////////////////////////////////////////////////////////////////
        function Label(labelString, x, y) {
            _super.call(this, labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, "#ffffff");
            this.x = x;
            this.y = y;
            this.textAlign = "right";
            this.textBaseline = "alphabetic";
        }
        //public methods////////////////////////////////////////////////////////////////////
        Label.prototype.update = function (score) {
            this.text = "" + score;
        };
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map