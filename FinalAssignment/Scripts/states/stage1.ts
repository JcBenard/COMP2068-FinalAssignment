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
        public wallCollisionShapes: objects.WallShapes[] = [];

        public collision: managers.Collision;

        //public healthBar: objects.HealthBar[] = [];

        private health = constants.PLAYER_HEALTH;

        private tankX: number[] = [-140, 38, 759, 940, -40, -40, 460, 460, 960, 960];
        private tankY: number[] = [-161, -161, -100, -100, -865, - 685, -865, - 685, -865, - 685];
        private vBoxesX: number[] = [-200, 260, 760, 1260];
        private vBoxesY: number[] = [-821, -821, -821, -821];
        private hBoxesX: number[] = [-120, 640];
        private hBoxesY: number[] = [-380, -460];
        private guardX: number[] = [680, 1180, 275, -220, -120, -85, 195, 900, 1190, 480, 545, 550];
        private guardY: number[] = [-155, 135, -335, -35, -455, -535, -855, -545, -860, -930, -930, -495];
        private guardDirection: string[] = ["Down", "Up", "Down", "Up", "Right", "Up", "Down", "Up", "Down", "Left", "Right", "Right"];
        private wallX: number[] = [390, 605];
        private wallY: number[] = [-320, -320];
        private wallHeight: number[] = [395, 105];
        private wallWidth: number[] = [215, 920];

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
            //create a game container to store all elements
            this.game = new createjs.Container();
            //create a world container to hold all background elements
            this.world = new objects.WorldContainer();

            //create and add the background to the game
            this.background = new objects.StageBackground("1");
            this.world.addChild(this.background);

            //create and add the walls to the game
            this.walls = new objects.StageWalls("1");
            this.world.addChild(this.walls);

            //create and add all the tank elements, using the vaules in the arrays for location
            for (var index = 0; index < this.tankX.length; index++) {
                this.tanks[index] = new objects.BackgroundObjects(this.tankX[index], this.tankY[index], "stationTank");
                this.world.addChild(this.tanks[index]);
            }

            //create and add all the vertical boxes, using the vaules in the arrays for location
            for (var index = 0; index < this.vBoxesX.length; index++) {
                this.verticalBoxes[index] = new objects.BackgroundObjects(this.vBoxesX[index], this.vBoxesY[index], "boxesV");
                this.world.addChild(this.verticalBoxes[index]);
            }

            //create and add all the horizontal boxes, using the vaules in the arrays for location
            for (var index = 0; index < this.hBoxesX.length; index++) {
                this.horizontalBoxes[index] = new objects.BackgroundObjects(this.hBoxesX[index], this.hBoxesY[index], "boxesH");
                this.world.addChild(this.horizontalBoxes[index]);
            }
         
            //create and add all the guards to the game, using the vaules in the arrays for location and the direction
            for (var index = 0; index < this.guardX.length; index++) {
                this.guards[index] = new objects.Guard(this.guardX[index], this.guardY[index], this.guardDirection[index]);
                this.world.addChild(this.guards[index]);
            }

            //create and add all the walls to the game, using the vales in the array for location and size
            for (var index = 0; index < this.wallX.length; index++) {
                this.wallCollisionShapes[index] = new objects.WallShapes(this.wallX[index], this.wallY[index], this.wallHeight[index], this.wallWidth[index]);
                this.world.addChild(this.wallCollisionShapes[index]);
            }

            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);

            //create and add the info bar to the bottom of the screen
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            //create and add the stationary pistol to the game
            this.pistol = new objects.Items("pistol", 1390, -945);
            this.world.addChild(this.pistol);

            //create a bullet objects that is used if the player uses the pistol
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);
            
            //create and add a ration to the game
            this.ration = new objects.Ration(0);
            this.world.addChild(this.ration);

            ////create and add the parts of the health bar to the game
            //for (var index2 = 0; index2 < this.health; index2++) {
            //    this.healthBar[index2] = new objects.HealthBar(index2);
            //    this.game.addChild(this.healthBar[index2]);
            //}

            //add all the elements in the world container to the lowest level of the game container
            this.game.addChildAt(this.world, 0);
            //add the game container to the stage
            stage.addChild(this.game);

            //add event listeners for the keys
            window.addEventListener("keydown", this.keyPressed, true);
            window.addEventListener("keyup", this.keyRelease, true);

            //create the collision manager
            this.collision = new managers.Collision();

            //start the background music
            //createjs.Sound.play("backgroundMusic", { loop: -1 });
        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////

        //updates the game based on the elements
        public update() {

            //if the flag to use a weapon is true
            if (useProjectile == true) {
                //check what weapon the player is using and do what's in the case
                switch (currentWeapon) {
                    case ("pistol"):
                        this.bullet.reset(this.snake, direction);
                        break;
                    case ("punch"):
                        for (var index = 0; index < this.guards.length; index++) {
                            this.collision.playerObjectsCollision(this.snake, this.guards[index]);
                        }
                        break;
                }
                //set the use weapon flag to false;
                useProjectile = false;
            }

            //call the function to update the player, the bullet and the world
            this.snake.update();
            this.bullet.update();
            this.world.update();
            
            //check collision for the tanks using the collision manager
            for (var index = 0; index < this.tanks.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.world, this.tanks[index]);
            }
            //check collision for the vertical boxes using the collision manager
            for (var index = 0; index < this.verticalBoxes.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.world, this.verticalBoxes[index]);
            }
            //check collision for the horizontal using the collision manager
            for (var index = 0; index < this.horizontalBoxes.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.world, this.verticalBoxes[index]);
            }
            //check collision for the guards and the bullet colliding and update the guards
            for (var index = 0; index < this.guards.length; index++) {
                this.guards[index].update();
                this.collision.playerObjectsCollision(this.bullet, this.guards[index]);
            }
            //check collision for the walls using the collision manager
            for (var index = 0; index < this.wallCollisionShapes.length; index++) {
                this.wallCollisionShapes[index].update(this.snake, this.world);
            }
            //check collision for snake and the stationary pistol
            this.collision.objectsCollision(this.pistol, this.snake); 
            //check collision for snake and the outer walls          
            this.collision.wallCollision(this.world, this.snake);

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