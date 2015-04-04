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
/// <reference path="../objects/boxesvert.ts" />

module states {
    export class Stage1{

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public world: objects.WorldContainer;
        public snake: objects.Snake;
        public background: objects.StageBackground;
        public walls: objects.StageWalls;
        public info: objects.InfoBar;
        public pistol: objects.Items;
        public bullet: objects.Bullet;
        public guard: objects.Guard;
        public ration: objects.Ration;
        public tank: objects.TankBackground;
        public boxes: objects.BoxesVert;

        //public healthBar: objects.HealthBar[] = [];

        public difficulty: number = 1;
        public score: number = 0;
        public ticks = 0;
        public health = constants.PLAYER_HEALTH;

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();
            this.world = new objects.WorldContainer();

            //create and add the background to the game
            this.background = new objects.StageBackground("1");
            this.world.addChild(this.background);

            this.walls = new objects.StageWalls("1");
            this.world.addChild(this.walls);

            this.guard = new objects.Guard(200, -600, "Down");
            this.world.addChild(this.guard);

            this.boxes = new objects.BoxesVert(200, -100);
            this.world.addChild(this.boxes);

            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);

            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            this.pistol = new objects.Items("pistol", 200, -200);
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

            p1 = collide.globalToLocal(collide.x, collide.y);
            //console.log(p1.x + " " + p1.y + " Collidie");
            p2 = collider.globalToLocal(collider.x, collider.y);
            //console.log(p2.x + " " + p2.y + " Collider");

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
                        this.ration.x = collide.x;
                        this.ration.y = collide.y;
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
                        this.playerObjectsCollision(this.snake, this.guard);
                        break;
                }
                useProjectile = false;
            }

            this.guard.update();
            this.snake.update();
            this.bullet.update();
            this.world.update();
            this.boxes.update(this.snake);

            this.objectsCollision(this.pistol, this.snake);
            this.playerObjectsCollision(this.bullet, this.guard);
            this.wallCollision();

            ////console.log(this.snake.globalToLocal(this.pistol.x, this.pistol.y));
            //console.log(this.pistol.globalToLocal(this.snake.x, this.snake.y));
            //console.log(this.snake.y + ", " + this.snake.y);

            //this.checkCollision(this.pistol, this.snake);
            //this.checkCollision(this.bullet, this.guard);

        }//end of update

        public objectsCollision(collider: objects.GameObject, collide) {

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
        }

        public playerObjectsCollision(collider: objects.GameObject, collide) {

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
        }

        public wallCollision() {
            if (this.world.x >= constants.SCRREN_CENTER_WIDTH || this.snake.x < constants.SCRREN_CENTER_WIDTH - 3) {
                collidingLeft = true;
                this.world.x = constants.SCRREN_CENTER_WIDTH;
            } else {
                collidingLeft = false;
            }

            if (this.world.y <= constants.SCRREN_CENTER_HEIGHT || this.snake.y > constants.SCRREN_CENTER_HEIGHT + 3) {
                collidingBottom = true;
                this.world.y = constants.SCRREN_CENTER_HEIGHT
            } else {
                collidingBottom = false;
            }

            if (this.world.x <= -870 || this.snake.x > constants.SCRREN_CENTER_WIDTH + 3) {
                collidingRight = true;
                this.world.x = -870;
            } else {
                collidingRight = false;
            }

            if (this.world.y >= 1085 || this.snake.y < constants.SCRREN_CENTER_HEIGHT - 3) {
                collidingTop = true;
                this.world.y = 1085;
            } else {
                collidingTop = false;
            }
        }

        public keyPressed(event) {
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
        }
    }//end of play
} 