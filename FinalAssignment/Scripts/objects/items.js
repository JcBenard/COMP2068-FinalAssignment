/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Items = (function (_super) {
        __extends(Items, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Items(name, xLocation, yLocation) {
            //set the sprite to the given name using the gameObject constructor
            _super.call(this, name);
            //set the sound played on hit
            this.soundString = "difficulty";
            this.name = name; //set the name of the object
            //set the location to the given point
            this.x = xLocation;
            this.y = yLocation;
        } //end of constructor
        return Items;
    })(objects.GameObject);
    objects.Items = Items; //end of items
})(objects || (objects = {})); //end of class
//# sourceMappingURL=items.js.map