/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/movingbackground.ts" />
/// <reference path="../objects/mine.ts" />
/// <reference path="../objects/tankBullet.ts" />
/// <reference path="../objects/healthbar.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/antiTank.ts" />
/// <reference path="../objects/ration.ts" />
/// <reference path="../objects/shell.ts" />
/// <reference path="../objects/snake.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/ammobox.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    var Stage2 = (function () {
        //constructor///////////////////////////////////////////////////////////////////////
        function Stage2() {
            this.mines = [];
            this.healthBar = [];
            this.ticks = 0;
            this.tankHealth = 10;
            playerHealth = constants.PLAYER_HEALTH;
            animation = "runRight";
            collidingBottom = true;
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new objects.MovingBackgroud();
            this.game.addChild(this.background);
            for (var index = 0; index < constants.MINE_NUM; index++) {
                this.mines[index] = new objects.Mine(4);
                this.game.addChild(this.mines[index]);
            }
            //create and add a ammo box to the game
            this.ammoBox = new objects.AmmoBox(4);
            this.game.addChild(this.ammoBox);
            //create and add the ration to the game
            this.ration = new objects.Ration(4);
            this.game.addChild(this.ration);
            //create and add the tank to the game
            this.antiTank = new objects.AntiTank(4);
            this.game.addChild(this.antiTank);
            //create and add the tank to the game
            this.tank = new objects.Tank();
            this.game.addChild(this.tank);
            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);
            this.snake.x = 225;
            //create and add the bullet to the game
            this.tankBullet = new objects.TankBullet();
            this.game.addChild(this.tankBullet);
            //create and add the tank shell to the game
            this.shell = new objects.Shell();
            this.game.addChild(this.shell);
            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            for (var index2 = 0; index2 < playerHealth; index2++) {
                this.healthBar[index2] = new objects.HealthBar(index2);
                this.game.addChild(this.healthBar[index2]);
            }
            //add all the elements to the stage
            stage.addChild(this.game);
            window.addEventListener("keydown", this.keyPressed, true);
            window.addEventListener("keyup", this.keyRelease, true);
            this.collision = new managers.Collision();
        } //end of constructor
        //updates the game based on the elements
        Stage2.prototype.update = function () {
            //if 90 frams have passed and the difficulty is greater then 1
            if (this.ticks % 90 == 0 && this.tankHealth < 7) {
                this.tankBullet.reset(this.snake.y, this.tank.y); //shoot a bullet
            }
            //if 180 frams have passed and the difficulty is greater then 2
            if (this.ticks % 180 == 0 && this.tankHealth < 4) {
                this.shell.reset(this.tank.y, this.tank.rotation); //fire 1 shell 
            }
            if (useProjectile == true) {
                if (ammo > 0) {
                    this.antiTank.reset(this.snake);
                    useProjectile = false;
                    ammo--;
                }
            }
            var random = Math.floor((Math.random() * 500) + 1);
            if (this.ammoBox.x < 0 && random == 500) {
                this.ammoBox.reset();
            }
            //update and check collision for the moving elements
            this.snake.update();
            this.tank.update(this.snake.y);
            this.background.update();
            for (var index = 0; index < constants.MINE_NUM; index++) {
                this.mines[index].update();
                this.collision.objectsCollision(this.mines[index], this.snake, this.game, this.healthBar);
            }
            this.ration.update();
            this.collision.objectsCollision(this.ration, this.snake, this.game, this.healthBar);
            this.ammoBox.update();
            this.collision.objectsCollision(this.ammoBox, this.snake, null, null);
            this.tankBullet.update();
            this.collision.objectsCollision(this.tankBullet, this.snake, this.game, this.healthBar);
            this.shell.update();
            this.collision.objectsCollision(this.shell, this.snake, this.game, this.healthBar);
            this.antiTank.update();
            if (this.collision.objectsCollision(this.antiTank, this.tank, this.game, this.healthBar)) {
                this.tankHealth--;
                if (this.tankHealth % 2 == 0) {
                    this.ration.reset();
                }
            }
            //if the ticker reaches 180 set it to 0
            if (this.ticks == 1800) {
                this.ticks = 0;
            }
            //increment the ticker
            this.ticks++;
        }; //end of update
        Stage2.prototype.keyPressed = function (event) {
            switch (event.keyCode) {
                case constants.KEYCODE_W:
                    dy = 2;
                    break;
                case constants.KEYCODE_S:
                    dy = -2;
                    break;
                case 32:
                    useProjectile = true;
                    break;
            }
        };
        Stage2.prototype.keyRelease = function (evnt) {
            switch (evnt.keyCode) {
                case constants.KEYCODE_W:
                    dy = 0;
                    break;
                case constants.KEYCODE_S:
                    dy = 0;
                    break;
            }
        };
        return Stage2;
    })();
    states.Stage2 = Stage2; //end of play
})(states || (states = {}));
//# sourceMappingURL=stage2.js.map