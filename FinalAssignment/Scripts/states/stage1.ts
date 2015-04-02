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

module states {
    export class Stage1{

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public background: objects.StageBackground;
        public walls: objects.StageWalls;
        public info: objects.InfoBar;
        public pistol: objects.Items;
        public bullet: objects.Bullet;
        public guard: objects.Guard;

        //public healthBar: objects.HealthBar[] = [];

        public difficulty: number = 1;
        public score: number = 0;
        public ticks = 0;
        public health = constants.PLAYER_HEALTH;

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new objects.StageBackground("1");
            this.game.addChild(this.background);

            this.walls = new objects.StageWalls("1");
            this.game.addChild(this.walls);

            this.guard = new objects.Guard(500, 1500, "Down");
            this.game.addChild(this.guard);

            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);

            this.pistol = new objects.Items("pistol", 500, 1500);
            this.game.addChild(this.pistol);

            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            

            ////create and add the parts of the health bar to the game
            //for (var index2 = 0; index2 < this.health; index2++) {
            //    this.healthBar[index2] = new objects.HealthBar(index2);
            //    this.game.addChild(this.healthBar[index2]);
            //}

            ////create and add the score field to the game
            //this.scoreText = new objects.Label("0", 355, 475);
            //this.game.addChild(this.scoreText);

            //add all the elements to the stage
            stage.addChild(this.game);

            window.addEventListener("keydown", this.keyPressed, true);
            window.addEventListener("keyup", this.keyRelease, true);

            //start the background music
            //createjs.Sound.play("backgroundMusic", { loop: -1 });
        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////
        //calculate the distance between two points
        public distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //check if two elements collided
        public checkCollision(collider: objects.GameObject, collide) {
            //make points using the player charater and the selected element
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = collide.x;
            p1.y = collide.y;
            p2.x = collider.x;
            p2.y = collider.y;

            //check if the elements have collided using the distance method and if they are
            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                //if they aren't already colliding
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);//play the sound that would be made on collision
                    collider.isColliding = true;//set this varriables to true so they don't trigger collision again

                    if (collider.name == "pistol") {
                        currentWeapon = "pistol";
                        haveGun = "Gun";
                    } else if (collider.name == "bullet") {
                        this.game.removeChild(collide);
                        collider.y = constants.SCREEN_HEIGHT;
                    } else if (collider.name == "snake") {
                        this.game.removeChild(collide);
                    }
                } else {//if the elements aren't colliding
                    collider.isColliding = false;//set the variable to false so they can collide again
                }
            }
        }//end of collider

        //updates the game based on the elements
        public update() {

            if (useProjectile == true) {
                switch (currentWeapon) {
                    case ("pistol"):
                        this.bullet.reset(this.snake.x, this.snake.y, direction);
                        break;
                    case ("punch"):
                        this.checkCollision(this.snake, this.guard);
                        break;
                }
                useProjectile = false;
            }

            this.snake.update();
            this.background.update();
            this.walls.update();
            this.pistol.update();
            this.bullet.update();
            this.guard.update();

            this.checkCollision(this.pistol, this.snake);
            this.checkCollision(this.bullet, this.guard);
         

        }//end of update

        public keyPressed(event) {
            switch (event.keyCode) {
                case constants.KEYCODE_A:
                    xPos += 4;
                    animation = "runLeft" + haveGun;
                    direction = "Left";
                    break;
                case constants.KEYCODE_D:
                    xPos -= 4;
                    animation = "runRight" + haveGun;
                    direction = "Right"
                    break;
                case constants.KEYCODE_W:
                    yPos += 4;
                    animation = "runUp" + haveGun;
                    direction = "Up";
                    break;
                case constants.KEYCODE_S:
                    yPos -= 4;
                    animation = "runDown" + haveGun;
                    direction = "Down";
                    break;
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

        public keyRelease(evnt) {
            switch (evnt.keyCode) {
                case constants.KEYCODE_A:
                    animation = "idleLeft" + haveGun;
                    break;
                case constants.KEYCODE_D:
                    animation = "idleRight" + haveGun;
                    break;
                case constants.KEYCODE_W:
                    animation = "idleUp" + haveGun;
                    break;
                case constants.KEYCODE_S:
                    animation = "idleDown" + haveGun;
                    break;
                case 32:
                    animation = "idle" + direction + haveGun;
                    break;
            }
        }
    }//end of play
} 