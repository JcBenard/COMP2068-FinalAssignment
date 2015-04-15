var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function GameObject(assetString) {
            //set the spirte to the given string
            _super.call(this, managers.Assets.atlas, assetString);
            //get the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //set the regestration point to the center
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //set the variable that show if it's colliding to false;
            this.isColliding = false;
        } //end of constructor
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject; //end of gameobject
})(objects || (objects = {})); //end of class   
//# sourceMappingURL=gameobject.js.map