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
/// <reference path="../objects/mine.ts" />
/// <reference path="../objects/antitank.ts" />
/// <reference path="../objects/metalgear.ts" />
var states;
(function (states) {
    var Stage3Boss = (function () {
        //constructor///////////////////////////////////////////////////////////////////////
        function Stage3Boss() {
            this.enemyBullets = [];
            this.healthBar = [];
            this.wallCollisionShapes = [];
            this.smallBoxes = [];
            this.bossHealth = 2;
            this.wallX = [0, 0, constants.SCREEN_WIDTH - 40, 0];
            this.wallY = [0, 0, 0, constants.SCREEN_HEIGHT - 55];
            this.wallWidth = [constants.SCREEN_WIDTH, 60, 40, constants.SCREEN_WIDTH];
            this.wallHeight = [70, constants.SCREEN_HEIGHT, constants.SCREEN_HEIGHT, 20];
            this.boxesX = [440, 120];
            this.boxesY = 246;
            this.pickUpsX = [165, constants.SCRREN_CENTER_WIDTH, 475];
            this.pickUpsY = [200, 300, 200];
            //set up default values for the player
            playerHealth = constants.PLAYER_HEALTH;
            haveGun = "";
            if (haveWeapon[2]) {
                currentWeapon = "missle";
                haveGun = "Gun";
            }
            ammo = 2;
            //create a game container to store all elements
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new objects.StageBackground("1Boss");
            this.game.addChild(this.background);
            //create and add the walls to the game
            this.walls = new objects.StageWalls("1Boss");
            this.game.addChild(this.walls);
            for (var index = 0; index < this.wallX.length; index++) {
                this.wallCollisionShapes[index] = new objects.WallShapes(this.wallX[index], this.wallY[index], this.wallHeight[index], this.wallWidth[index]);
                this.game.addChild(this.wallCollisionShapes[index]);
            }
            for (var index = 0; index < this.boxesX.length; index++) {
                this.smallBoxes[index] = new objects.BackgroundObjects(this.boxesX[index], this.boxesY, "boxesSmall");
                this.game.addChild(this.smallBoxes[index]);
            }
            //create and add a ammo box to the game
            this.ammoBox = new objects.AmmoBox(0);
            this.game.addChild(this.ammoBox);
            //create and add th player to the game
            this.snake = new objects.Snake(constants.SCRREN_CENTER_WIDTH, 390);
            this.game.addChild(this.snake);
            for (var index = 0; index < 20; index++) {
                this.enemyBullets[index] = new objects.Bullet();
                this.game.addChild(this.enemyBullets[index]);
            }
            this.missle = new objects.Missle();
            this.game.addChild(this.missle);
            this.metalGear = new objects.MetalGear();
            this.game.addChild(this.metalGear);
            //create and add the info bar to the bottom of the screen
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);
            this.weaponIcon = new objects.WeaponIcon("missle");
            this.ammoText = new objects.Label(ammo + "", 480, 470);
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
            createjs.Sound.play("finalBoss", { loop: -1 });
        } //end of constructor
        //public methods//////////////////////////////////////////////////////////////////////////////////
        //updates the game based on the elements
        Stage3Boss.prototype.update = function () {
            //if the bosses health is less then one clear the current state and switch to the victory state
            if (this.bossHealth < 1) {
                deathX = this.snake.x;
                deathY = this.snake.y;
                createjs.Sound.stop();
                this.game.removeAllChildren();
                window.removeEventListener("keydown", this.keyPressed, true);
                window.removeEventListener("keyup", this.keyRelease, true);
                stage.removeChild(this.game);
                currentState = constants.WIN_STATE;
                stateChanged = true;
            }
            //if the player health is less then 1
            if (playerHealth < 1) {
                deathX = this.snake.x;
                deathY = this.snake.y;
                createjs.Sound.stop(); //stop the background music
                this.game.removeAllChildren(); //remove everything from the stage
                window.removeEventListener("keydown", this.keyPressed, true); //disable the eventlsitners
                window.removeEventListener("keyup", this.keyRelease, true);
                stage.removeChild(this.game); //remove the game contaner from the game just in case
                lastState = constants.STAGE3BOSS_STATE; //set the last state to the current state
                currentState = constants.GAME_OVER_STATE; //set the current state to the game over state
                stateChanged = true; //set the state change varaible to true so the game object changes the stage
            }
            //if the missle launcher is out show it in the info bar along with the current ammo
            if (currentWeapon == "missle") {
                this.game.addChild(this.weaponIcon);
                this.game.addChild(this.ammoText);
                this.ammoText.update(ammo);
            }
            else {
                this.game.removeChild(this.weaponIcon);
                this.game.removeChild(this.ammoText);
            }
            //if the flag to use a weapon is true
            if (useProjectile == true) {
                switch (currentWeapon) {
                    case ("missle"):
                        if (ammo > 0) {
                            this.missle.reset(this.snake, direction);
                            ammo--;
                        }
                        break;
                    case ("punch"):
                        if (this.collision.playerObjectsCollision(this.snake, this.metalGear, this.ration, this.ammoBox, this.game, this.healthBar)) {
                            this.bossHealth--;
                        }
                        break;
                }
                //set the use weapon flag to false;
                useProjectile = false;
            }
            //get a random number
            var random = Math.floor((Math.random() * 300) + 1);
            //if the random number is 500
            if (random == 300) {
                var random = Math.floor((Math.random() * 2)); //get another random number
                if (random == 0 && this.ammoBox.x < 0) {
                    var random = Math.floor((Math.random() * 3)); //put an ammo box on the stage at a position in the postion array
                    this.ammoBox.resetBoss3(this.pickUpsX[random], this.pickUpsY[random]);
                }
                else if (random == 1 && this.ration.x < 0) {
                    var random = Math.floor((Math.random() * 3)); //put an ration on the stage at a position in the postion array
                    this.ration.resetBoss3(this.pickUpsX[random], this.pickUpsY[random]);
                }
            }
            //call the function to update the player, the bullet and the world
            this.snake.update();
            this.missle.update();
            this.metalGear.update(this.enemyBullets, this.snake);
            //check if the player is colliding with a consuable
            this.collision.objectsCollision(this.ammoBox, this.snake, null, null);
            this.collision.objectsCollision(this.ration, this.snake, this.game, this.healthBar);
            //check if the rocket is colliding with the boss
            if (this.collision.objectsCollision(this.missle, this.metalGear, this.game, this.healthBar)) {
                this.bossHealth--;
            }
            for (var index = 0; index < this.enemyBullets.length; index++) {
                this.enemyBullets[index].update();
                this.collision.playerObjectsCollision(this.enemyBullets[index], this.snake, null, null, this.game, this.healthBar);
            }
            for (var index = 0; index < this.smallBoxes.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.game, this.smallBoxes[index]);
                this.collision.backgroundObjectsCollision(this.missle, this.game, this.smallBoxes[index]);
                for (var index2 = 0; index2 < this.enemyBullets.length; index2++) {
                    this.collision.backgroundObjectsCollision(this.enemyBullets[index2], this.game, this.smallBoxes[index]);
                }
            }
            for (var index = 0; index < this.wallCollisionShapes.length; index++) {
                this.collision.wallObjectsCollision(this.snake, this.game, this.wallCollisionShapes[index]);
            }
        }; //end of update
        //if the player presses a key
        Stage3Boss.prototype.keyPressed = function (event) {
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
                case constants.KEYCODE_SPACE:
                    if (currentWeapon == "punch") {
                        animation = "punch" + direction;
                    }
                    else {
                        animation = "idle" + direction + haveGun;
                        useProjectile = true;
                    }
                    useProjectile = true;
                    break;
                case constants.KEYCODE_E:
                    if (haveWeapon[0] == true) {
                        if (currentWeapon == "punch") {
                            currentWeapon = "missle";
                            haveGun = "Gun";
                        }
                        else {
                            currentWeapon = "punch";
                            haveGun = "";
                        }
                    }
                    break;
            }
        };
        //when the player resleases a key
        Stage3Boss.prototype.keyRelease = function (evnt) {
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
                case constants.KEYCODE_SPACE:
                    animation = "idle" + direction + haveGun;
                    break;
            }
        };
        return Stage3Boss;
    })();
    states.Stage3Boss = Stage3Boss; //end of play
})(states || (states = {}));
//# sourceMappingURL=stage3boss.js.map