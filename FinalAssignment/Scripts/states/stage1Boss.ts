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


module states {
    export class Stage1Boss {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public gunner: objects.Gunner;
        public background: objects.StageBackground;
        public walls: objects.StageWalls;
        public info: objects.InfoBar;
        public pistol: objects.Items;
        public bullet: objects.Bullet;
        public enemyBullets: objects.Bullet[] = [];
        public ration: objects.Ration;
        public verticalBoxes: objects.BackgroundObjects [] = [];

        public collision: managers.Collision;

        //public healthBar: objects.HealthBar[] = [];

        private health = constants.PLAYER_HEALTH;
        private boxesX: number[] = [120, 280, 440];
        private boxesY: number = 124;

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
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

            ////create and add the parts of the health bar to the game
            //for (var index2 = 0; index2 < this.health; index2++) {
            //    this.healthBar[index2] = new objects.HealthBar(index2);
            //    this.game.addChild(this.healthBar[index2]);
            //}
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
        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////

        //updates the game based on the elements
        public update() {

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

            this.collision.playerObjectsCollision(this.bullet, this.gunner);

            for (var index = 0; index < this.enemyBullets.length; index++) {
                this.enemyBullets[index].update();
                this.collision.playerObjectsCollision(this.enemyBullets[index], this.snake);
            }

            //check collision for the vertical boxes using the collision manager
            for (var index = 0; index < this.verticalBoxes.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.game, this.verticalBoxes[index]);
            }

        }//end of update

        //if the player presses a key
        public keyPressed(event) {
            //check what key is pressed then if its a movement key change the direction movement amount, the animation and the direction varriables
            switch (event.keyCode) {
                case constants.KEYCODE_A:
                    dx = 2;
                    animation = "runLeft" + haveGun;
                    direction = "Left";
                    break;
                case constants.KEYCODE_D:
                    dx = -2;
                    animation = "runRight" + haveGun;
                    direction = "Right"
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
                //if they used space go to the weapon animation and set the use weapon flag to true
                case 32:
                    if (currentWeapon == "punch") {
                        animation = "punch" + direction;
                    } else {
                        animation = "idle" + direction + haveGun;
                        useProjectile = true;
                    }
                    useProjectile = true;
                    break;
            }
        }

        //when the player resleases a key
        public keyRelease(evnt) {
            //check what key was relased if it was a movement key set the direction movement amount to 0 and the animation to the idle animation for that direction
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
                //if they released space set the animation to idle
                case 32:
                    animation = "idle" + direction + haveGun;
                    break;
            }
        }
    }//end of play
} 