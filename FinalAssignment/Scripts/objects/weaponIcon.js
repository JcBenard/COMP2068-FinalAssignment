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
            _super.call(this, managers.Assets.atlas, weapon);
            this.x = 410;
            this.y = 445;
        }
        return WeaponIcon;
    })(createjs.Sprite);
    objects.WeaponIcon = WeaponIcon;
})(objects || (objects = {}));
//# sourceMappingURL=weaponicon.js.map