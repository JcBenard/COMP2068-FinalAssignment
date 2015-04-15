var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var WeaponIcon = (function (_super) {
        __extends(WeaponIcon, _super);
        function WeaponIcon(weapon) {
            //create the sprite based on the string given
            _super.call(this, managers.Assets.atlas, weapon);
            //set default postition
            this.x = 410;
            this.y = 445;
        } //end of constructor
        return WeaponIcon;
    })(createjs.Sprite);
    objects.WeaponIcon = WeaponIcon; //end of weaponIcon
})(objects || (objects = {})); //end of class
//# sourceMappingURL=weaponicon.js.map