﻿/// <reference path="../constants.ts" />
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

module states {
    export class Stage2 {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public mines: objects.Mine[] = [];
        public background: objects.MovingBackgroud;
        public tank: objects.Tank;
        public info: objects.InfoBar;
        //public healthBar: objects.HealthBar[] = [];
        public ration: objects.Ration;
        public tankBullet: objects.TankBullet;
        public shell: objects.Shell;
        public antiTank: objects.AntiTank;

        private ticks: number = 0;
        private health = constants.PLAYER_HEALTH;
        private tankHealth: number = 10;
        private ammo: number = 2;
        private currentWeapon: string = "punch";

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {

            xPos = 225;
            yPos = constants.SCRREN_CENTER_HEIGHT;
            snakeMove = true;
            animation = "runRight";

            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new objects.MovingBackgroud();
            this.game.addChild(this.background);

            for (var index = 0; index < constants.MINE_NUM; index++) {
                this.mines[index] = new objects.Mine();
                this.game.addChild(this.mines[index]);
            }

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

            //create and add the bullet to the game
            this.tankBullet = new objects.TankBullet();
            this.game.addChild(this.tankBullet);

            //create and add the tank shell to the game
            this.shell = new objects.Shell();
            this.game.addChild(this.shell);

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            ////create and add the parts of the health bar to the game
            //for (var index2 = 0; index2 < this.health; index2++) {
            //    this.healthBar[index2] = new objects.HealthBar(index2);
            //    this.game.addChild(this.healthBar[index2]);
            //}

            //add all the elements to the stage
            stage.addChild(this.game);

            window.addEventListener("keydown", this.keyPressed, true);

        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////
        //calculate the distance between two points
        public distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //check if two elements collided
        public checkCollision(collider: objects.GameObject, colliding) {
            //make points using the player charater and the selected element
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = colliding.x;
            p1.y = colliding.y;
            p2.x = collider.x;
            p2.y = collider.y;

            //check if the elements have collided using the distance method and if they are
            if (this.distance(p1, p2) < ((colliding.width * .5) + (collider.width * .5))) {
                //if they aren't already colliding
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);//play the sound that would be made on collision
                    collider.isColliding = true;//set this varriables to true so they don't trigger collision again
                    collider.y = constants.SCREEN_HEIGHT;//move the element off the stage

                    //if the element that collided was harmful
                    if (collider.name == "mines" || collider.name == "tankBullet" || collider.name == "shell") {
                        this.health--;//remove 1 health from the players health variable
                        //this.game.removeChild(this.healthBar[this.health]);//remove one of the parts of the players health bar from the game

                        //if the player collided with something helpful and their health isn't full
                    } else if (collider.name == "ration" && this.health != 3) {
                        //this.game.addChild(this.healthBar[this.health]);//give the player a part of the health bar
                        this.health++;//add 1 to the player's health variable
                    } else if (collider.name == "antiTank"){
                        this.tankHealth--;
                        if (this.tankHealth % 2 == 0) {
                            this.ration.reset();
                        } 
                    }
                }
            } else {//if the elements aren't colliding
                collider.isColliding = false;//set the variable to false so they can collide again
            }
        }//end of collider

        //updates the game based on the elements
        public update() {

            //if 90 frams have passed and the difficulty is greater then 1
            if (this.ticks % 90 == 0 && this.tankHealth < 7) {
                this.tankBullet.reset(this.snake.y, this.tank.y);//shoot a bullet
            }

            //if 180 frams have passed and the difficulty is greater then 2
            if (this.ticks % 180 == 0 && this.tankHealth < 4) {
                this.shell.reset(this.tank.y, this.tank.rotation);//fire 1 shell 
            }

            if (useProjectile == true) {
                this.antiTank.reset();
                useProjectile = false;
            }

            //update and check collision for the moving elements
            this.snake.update();
            this.tank.update(this.snake.y);

            this.background.update();
            for (var index = 0; index < constants.MINE_NUM; index++) {
                this.mines[index].update();
                this.checkCollision(this.mines[index], this.snake);
            }

            this.ration.update();
            this.checkCollision(this.ration, this.snake);

            this.tankBullet.update();
            this.checkCollision(this.tankBullet, this.snake);

            this.shell.update();
            this.checkCollision(this.shell, this.snake);

            this.antiTank.update();
            this.checkCollision(this.antiTank, this.tank);
            
            if (this.ticks == 1800) {

            }

            //if the ticker reaches 180 set it to 0
            if (this.ticks == 1800) {
                this.ticks = 0;
            }

            //increment the ticker
            this.ticks++;
            
        }//end of update

        public keyPressed(event) {
            switch (event.keyCode) {
                case constants.KEYCODE_W:
                    yPos -= 4;
                    break;
                case constants.KEYCODE_S:
                    yPos += 4;
                    break;
                case 32:
                    useProjectile = true;
                    break;
            }
        }
    }//end of play
}  