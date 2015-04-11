/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/stagebackground.ts" />
/// <reference path="../objects/stagewalls.ts" />
/// <reference path="../objects/healthbar.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/snake.ts" />
/// <reference path="../objects/items.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/guard.ts" />
/// <reference path="../objects/ration.ts" />
/// <reference path="../objects/worldcontainer.ts" />
/// <reference path="../objects/backgroundobjects.ts" />
/// <reference path="../objects/wallshapes.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/gunner.ts" />
var states;
(function (states) {
    var Stage1Boss = (function () {
        //constructor///////////////////////////////////////////////////////////////////////
        function Stage1Boss() {
            this.enemyBullets = [];
            this.verticalBoxes = [];
            this.healthBar = [];
            //public healthBar: objects.HealthBar[] = [];
            this.health = constants.PLAYER_HEALTH;
            this.boxesX = [120, 280, 440];
            this.boxesY = 124;
            //create a game container to store all elements
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new objects.StageBackground("1Boss");
            this.game.addChild(this.background);
            //create and add the walls to the game
            this.walls = new objects.StageWalls("1Boss");
            this.game.addChild(this.walls);
            for (var index = 0; index < this.boxesX.length; index++) {
                this.verticalBoxes[index] = new objects.BackgroundObjects(this.boxesX[index], this.boxesY, "boxesV");
                this.game.addChild(this.verticalBoxes[index]);
            }
            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);
            this.snake.y = 390;
            this.gunner = new objects.Gunner();
            this.game.addChild(this.gunner);
            for (var index = 0; index < 4; index++) {
                this.enemyBullets[index] = new objects.Bullet();
                this.game.addChild(this.enemyBullets[index]);
            }
            //create and add the info bar to the bottom of the screen
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            //create a bullet objects that is used if the player uses the pistol
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);
            //create and add a ration to the game
            this.ration = new objects.Ration(0);
            this.game.addChild(this.ration);
            for (var index2 = 0; index2 < constants.PLAYER_HEALTH; index2++) {
                this.healthBar[index2] = new objects.HealthBar(index2);
                this.game.addChild(this.healthBar[index2]);
            }
            //add the game container to the stage
            stage.addChild(this.game);
            //add event listeners for the keys
            window.addEventListener("keydown", this.keyPressed, true);
            window.addEventListener("keyup", this.keyRelease, true);
            //create the collision manager
            this.collision = new managers.Collision();
            collidingBottom = true;
            collidingLeft = true;
            collidingRight = true;
            collidingTop = true;
            //start the background music
            //createjs.Sound.play("backgroundMusic", { loop: -1 });
        } //end of constructor
        //public methods//////////////////////////////////////////////////////////////////////////////////
        //updates the game based on the elements
        Stage1Boss.prototype.update = function () {
            //if the flag to use a weapon is true
            if (useProjectile == true) {
                this.bullet.reset(this.snake, direction);
                //set the use weapon flag to false;
                useProjectile = false;
            }
            //call the function to update the player, the bullet and the world
            this.snake.update();
            this.bullet.update();
            this.gunner.update(this.enemyBullets);
            this.collision.playerObjectsCollision(this.bullet, this.gunner, null, null, this.game, this.healthBar);
            for (var index = 0; index < this.enemyBullets.length; index++) {
                this.enemyBullets[index].update();
                this.collision.playerObjectsCollision(this.enemyBullets[index], this.snake, null, null, this.game, this.healthBar);
            }
            for (var index = 0; index < this.verticalBoxes.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.game, this.verticalBoxes[index]);
            }
        }; //end of update
        //if the player presses a key
        Stage1Boss.prototype.keyPressed = function (event) {
            switch (event.keyCode) {
                case constants.KEYCODE_A:
                    dx = 2;
                    animation = "runLeft" + haveGun;
                    direction = "Left";
                    break;
                case constants.KEYCODE_D:
                    dx = -2;
                    animation = "runRight" + haveGun;
                    direction = "Right";
                    break;
                case constants.KEYCODE_W:
                    dy = 2;
                    animation = "runUp" + haveGun;
                    direction = "Up";
                    break;
                case constants.KEYCODE_S:
                    dy = -2;
                    animation = "runDown" + haveGun;
                    direction = "Down";
                    break;
                case 32:
                    if (currentWeapon == "punch") {
                        animation = "punch" + direction;
                    }
                    else {
                        animation = "idle" + direction + haveGun;
                        useProjectile = true;
                    }
                    useProjectile = true;
                    break;
            }
        };
        //when the player resleases a key
        Stage1Boss.prototype.keyRelease = function (evnt) {
            switch (evnt.keyCode) {
                case constants.KEYCODE_A:
                    dx = 0;
                    animation = "idleLeft" + haveGun;
                    break;
                case constants.KEYCODE_D:
                    dx = 0;
                    animation = "idleRight" + haveGun;
                    break;
                case constants.KEYCODE_W:
                    dy = 0;
                    animation = "idleUp" + haveGun;
                    break;
                case constants.KEYCODE_S:
                    dy = 0;
                    animation = "idleDown" + haveGun;
                    break;
                case 32:
                    animation = "idle" + direction + haveGun;
                    break;
            }
        };
        return Stage1Boss;
    })();
    states.Stage1Boss = Stage1Boss; //end of play
})(states || (states = {}));
//# sourceMappingURL=stage1boss.js.map