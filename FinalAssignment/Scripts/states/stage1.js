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
/// <reference path="../objects/tankbackground.ts" />
/// <reference path="../objects/worldcontainer.ts" />
/// <reference path="../objects/backgroundobjects.ts" />
var states;
(function (states) {
    var Stage1 = (function () {
        //constructor///////////////////////////////////////////////////////////////////////
        function Stage1() {
            this.guards = [];
            this.tanks = [];
            this.verticalBoxes = [];
            this.horizontalBoxes = [];
            //public boxes: objects.BackgroundObjects;
            //public boxes2: objects.BackgroundObjects;
            //public healthBar: objects.HealthBar[] = [];
            this.health = constants.PLAYER_HEALTH;
            this.tankX = [-140, 38, 759, 940, -40, -40, 460, 460, 960, 960];
            this.tankY = [-161, -161, -100, -100, -865, -685, -865, -685, -865, -685];
            this.vBoxesX = [-200, 260, 760, 1260];
            this.vBoxesY = [-821, -821, -821, -821];
            this.hBoxesX = [-120, 640];
            this.hBoxesY = [-380, -460];
            this.guardX = [680, 1180,];
            this.guardY = [-146, 145,];
            this.guardDirection = ["Down", "Up",];
            this.game = new createjs.Container();
            this.world = new objects.WorldContainer();
            //create and add the background to the game
            this.background = new objects.StageBackground("1");
            this.world.addChild(this.background);
            this.walls = new objects.StageWalls("1");
            this.world.addChild(this.walls);
            for (var index = 0; index < this.tankX.length; index++) {
                this.tanks[index] = new objects.BackgroundObjects(this.tankX[index], this.tankY[index], "stationTank");
                this.world.addChild(this.tanks[index]);
            }
            for (var index = 0; index < this.vBoxesX.length; index++) {
                this.verticalBoxes[index] = new objects.BackgroundObjects(this.vBoxesX[index], this.vBoxesY[index], "boxesV");
                this.world.addChild(this.verticalBoxes[index]);
            }
            for (var index = 0; index < this.hBoxesX.length; index++) {
                this.horizontalBoxes[index] = new objects.BackgroundObjects(this.hBoxesX[index], this.hBoxesY[index], "boxesH");
                this.world.addChild(this.horizontalBoxes[index]);
            }
            for (var index = 0; index < this.hBoxesX.length; index++) {
                this.guards[index] = new objects.Guard(this.guardX[index], this.guardY[index], this.guardDirection[index]);
                this.world.addChild(this.guards[index]);
            }
            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            this.pistol = new objects.Items("pistol", 1390, -945);
            this.world.addChild(this.pistol);
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);
            //create and add the bottom info bar to the game
            this.ration = new objects.Ration(0);
            this.world.addChild(this.ration);
            ////create and add the parts of the health bar to the game
            //for (var index2 = 0; index2 < this.health; index2++) {
            //    this.healthBar[index2] = new objects.HealthBar(index2);
            //    this.game.addChild(this.healthBar[index2]);
            //}
            ////create and add the score field to the game
            //this.scoreText = new objects.Label("0", 355, 475);
            //this.game.addChild(this.scoreText);
            //add all the elements to the stage
            this.game.addChildAt(this.world, 0);
            stage.addChild(this.game);
            window.addEventListener("keydown", this.keyPressed, true);
            window.addEventListener("keyup", this.keyRelease, true);
            //start the background music
            //createjs.Sound.play("backgroundMusic", { loop: -1 });
        } //end of constructor
        //public methods//////////////////////////////////////////////////////////////////////////////////
        //updates the game based on the elements
        Stage1.prototype.update = function () {
            if (useProjectile == true) {
                switch (currentWeapon) {
                    case ("pistol"):
                        this.bullet.reset(this.snake.x, this.snake.y, direction);
                        break;
                    case ("punch"):
                        for (var index = 0; index < this.guards.length; index++) {
                            this.playerObjectsCollision(this.snake, this.guards[index]);
                        }
                        break;
                }
                useProjectile = false;
            }
            this.snake.update();
            this.bullet.update();
            this.world.update();
            for (var index = 0; index < this.tanks.length; index++) {
                this.tanks[index].update(this.snake, this.world);
            }
            for (var index = 0; index < this.verticalBoxes.length; index++) {
                this.verticalBoxes[index].update(this.snake, this.world);
            }
            for (var index = 0; index < this.horizontalBoxes.length; index++) {
                this.horizontalBoxes[index].update(this.snake, this.world);
            }
            for (var index = 0; index < this.guards.length; index++) {
                this.guards[index].update();
                this.playerObjectsCollision(this.bullet, this.guards[index]);
            }
            this.objectsCollision(this.pistol, this.snake);
            this.wallCollision();
            ////console.log(this.snake.globalToLocal(this.pistol.x, this.pistol.y));
            //console.log(this.pistol.globalToLocal(this.snake.x, this.snake.y));
            //console.log(this.snake.y + ", " + this.snake.y);
            //this.checkCollision(this.pistol, this.snake);
            //this.checkCollision(this.bullet, this.guard);
        }; //end of update
        Stage1.prototype.objectsCollision = function (collider, collide) {
            var pt = collider.globalToLocal(collide.x, collide.y);
            if (collider.hitTest(pt.x, pt.y)) {
                createjs.Sound.play(collider.soundString);
                collider.x = -1000;
                collider.y = -1000;
                this.world.removeChild(collider);
                if (collider.name == "pistol") {
                    currentWeapon = "pistol";
                    haveGun = "Gun";
                }
            }
        };
        Stage1.prototype.playerObjectsCollision = function (collider, collide) {
            var pt = collide.globalToLocal(collider.x, collider.y);
            if (collide.hitTest(pt.x, pt.y)) {
                createjs.Sound.play(collider.soundString);
                if (collide.name == "guard") {
                    collide.x = -1000;
                    collide.y = -1000;
                    this.world.removeChild(collide);
                }
                if (collider.name == "bullet") {
                    collider.x = -10000;
                    collider.y = -10000;
                }
            }
        };
        Stage1.prototype.wallCollision = function () {
            if (this.world.x >= constants.SCRREN_CENTER_WIDTH || this.snake.x < constants.SCRREN_CENTER_WIDTH - 5) {
                collidingLeft = true;
                this.world.x = constants.SCRREN_CENTER_WIDTH;
                snakeColl = true;
            }
            else {
                collidingLeft = false;
            }
            if (this.world.y <= constants.SCRREN_CENTER_HEIGHT || this.snake.y > constants.SCRREN_CENTER_HEIGHT + 5) {
                collidingBottom = true;
                snakeColl = true;
                this.world.y = constants.SCRREN_CENTER_HEIGHT;
            }
            else {
                collidingBottom = false;
            }
            if (this.world.x <= -870 || this.snake.x > constants.SCRREN_CENTER_WIDTH + 5) {
                collidingRight = true;
                snakeColl = true;
                this.world.x = -870;
            }
            else {
                collidingRight = false;
            }
            if (this.world.y >= 1085 || this.snake.y < constants.SCRREN_CENTER_HEIGHT - 5) {
                collidingTop = true;
                snakeColl = true;
                this.world.y = 1085;
            }
            else {
                collidingTop = false;
            }
        };
        Stage1.prototype.keyPressed = function (event) {
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
        Stage1.prototype.keyRelease = function (evnt) {
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
        return Stage1;
    })();
    states.Stage1 = Stage1; //end of play
})(states || (states = {}));
//# sourceMappingURL=stage1.js.map