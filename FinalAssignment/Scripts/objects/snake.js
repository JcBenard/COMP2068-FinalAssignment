/// <reference path="../constants.ts" />
/// <reference path="gameobject.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Snake = (function (_super) {
        __extends(Snake, _super);
        //constructor////////////////////////////////////////////////////////////////////////////////
        function Snake(xPos, yPos) {
            //set the animtion to the animation variables
            _super.call(this, animation);
            //instanced variables///////////////////////////////////////////////////////////////////////
            this.numbe = 0;
            this._counter = 0;
            //set the name and the sound played on hit
            this.name = "snake";
            this.soundString = "explosion";
            //set the x and y to the given position
            this.x = xPos;
            this.y = yPos;
        } //end of constructor
        //public methods/////////////////////////////////////////////////////////////////////////////
        Snake.prototype.update = function () {
            //if the screen is colliding on the top or bottom move the object up or down instead
            if (collidingBottom == true || collidingTop == true) {
                this.y -= dy;
            } //end of if
            //if the screen is colliding on the left or right move the object left or right instead
            if (collidingRight == true || collidingLeft == true) {
                this.x -= dx;
            } //end of if
            //if the animation varaible is different then the current animation change the current animation to the animation variable
            if (this.currentAnimation != animation) {
                this.gotoAndPlay(animation);
            } //end of if
        }; //end of update
        return Snake;
    })(objects.GameObject);
    objects.Snake = Snake; //end of snake
})(objects || (objects = {})); //end of class
//# sourceMappingURL=snake.js.map