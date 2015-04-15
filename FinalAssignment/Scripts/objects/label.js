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
            //set the text to the given information, using the consts for fonts
            _super.call(this, labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, "#ffffff");
            //set the location to the given point
            this.x = x;
            this.y = y;
            //set how the text is set
            this.textAlign = "right";
            this.textBaseline = "alphabetic";
        } //end of constructor
        //public methods////////////////////////////////////////////////////////////////////
        Label.prototype.update = function (ammo) {
            this.text = "" + ammo; //update the text based on the given number
        }; //end of update
        return Label;
    })(createjs.Text);
    objects.Label = Label; //end of label
})(objects || (objects = {})); //end of class
//# sourceMappingURL=label.js.map