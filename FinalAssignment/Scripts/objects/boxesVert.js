var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var BoxesVert = (function (_super) {
        __extends(BoxesVert, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function BoxesVert(xLocation, yLocation) {
            _super.call(this, managers.Assets.loader.getResult("boxesV"));
            //instanced variables///////////////////////////////////////////////////////////////////////
            this._dx = 0;
            this._dy = 0;
            this.numbe = 0;
            this._counter = 0;
            this.diffX = 0;
            this.diffY = 0;
            this.collisionBoxes = [];
            this.boxesHeight = [];
            this.boxesWidth = [];
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.x = xLocation;
            this.y = yLocation;
            for (var index = 0; index < 4; index++) {
                this.collisionBoxes[index] = new createjs.Shape();
                switch (index) {
                    case (0):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(0, 20, 20, this.height - 40);
                        this.boxesHeight[index] = this.height - 40;
                        this.boxesWidth[index] = 20;
                        break;
                    case (1):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(0, this.height - 20, this.width, 20);
                        break;
                    case (2):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(this.width - 20, 20, 20, this.height - 40);
                        this.boxesHeight[index] = this.height - 40;
                        this.boxesWidth[index] = 20;
                        break;
                    case (3):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(0, 0, this.width, 20);
                        this.boxesHeight[index] = 20;
                        this.boxesWidth[index] = this.width;
                        break;
                }
            }
        }
        //public methods/////////////////////////////////////////////////////////////////////////////
        BoxesVert.prototype.update = function (player) {
            var pt = this.collisionBoxes[0].globalToLocal(player.x, player.y);
            console.log(pt + " " + player);
            if (player.x >= pt.x + this.boxesWidth[0] || player.x + player.width <= pt.x || player.y >= pt.y + this.boxesHeight[0] || player.y + player.height <= pt.y) {
                console.log("Worked");
            }
            else {
            }
        };
        return BoxesVert;
    })(createjs.Bitmap);
    objects.BoxesVert = BoxesVert;
})(objects || (objects = {}));
//# sourceMappingURL=boxesvert.js.map