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
        public guards: objects.Guard[] = [];
        public ration: objects.Ration;
        public tanks: objects.BackgroundObjects[] = [];
        public verticalBoxes: objects.BackgroundObjects[] = [];
        public horizontalBoxes: objects.BackgroundObjects[] = [];
        //public boxes: objects.BackgroundObjects;
        //public boxes2: objects.BackgroundObjects;

        //public healthBar: objects.HealthBar[] = [];

        private health = constants.PLAYER_HEALTH;

        private tankX: number[] = [-140, 38, 759, 940, -40, -40, 460, 460, 960, 960];
        private tankY: number[] = [-161, -161, -100, -100, -865, - 685, -865, - 685, -865, - 685];
        private vBoxesX: number[] = [-200, 260, 760, 1260];
        private vBoxesY: number[] = [-821, -821, -821, -821];
        private hBoxesX: number[] = [-120, 640];
        private hBoxesY: number[] = [-380, -460];
        private guardX: number[] = [680, 1180, ];
        private guardY: number[] = [-135, 145,];
        private guardDirection: string[] = ["Down", "Up", ];

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
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
        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////

        //updates the game based on the elements
        public update() {

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
            if (this.world.x >= constants.SCRREN_CENTER_WIDTH || this.snake.x < constants.SCRREN_CENTER_WIDTH - 5) {
                collidingLeft = true;
                this.world.x = constants.SCRREN_CENTER_WIDTH;
                snakeColl = true;
            } else {
                collidingLeft = false;
            }

            if (this.world.y <= constants.SCRREN_CENTER_HEIGHT || this.snake.y > constants.SCRREN_CENTER_HEIGHT + 5) {
                collidingBottom = true;
                snakeColl = true;
                this.world.y = constants.SCRREN_CENTER_HEIGHT
            } else {
                collidingBottom = false;
            }

            if (this.world.x <= -870 || this.snake.x > constants.SCRREN_CENTER_WIDTH + 5) {
                collidingRight = true;
                snakeColl = true;
                this.world.x = -870;
            } else {
                collidingRight = false;
            }

            if (this.world.y >= 1085 || this.snake.y < constants.SCRREN_CENTER_HEIGHT - 5) {
                collidingTop = true;
                snakeColl = true;
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