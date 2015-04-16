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
/// <reference path="../objects/guardloschecker.ts" />
/// <reference path="../objects/ammobox.ts" />


module states {
    export class Stage3 {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public world: objects.WorldContainer;
        public snake: objects.Snake;
        public background: objects.StageBackground;
        public walls: objects.StageWalls;
        public info: objects.InfoBar;
        public missleLauncher: objects.Items;
        public bodyArmor: objects.Items;
        public bullet: objects.Bullet;
        public guards: objects.Guard[] = [];
        public ration: objects.Ration;
        public tanks: objects.BackgroundObjects[] = [];
        public verticalBoxes: objects.BackgroundObjects[] = [];
        public horizontalBoxes: objects.BackgroundObjects[] = [];
        public wallCollisionShapes: objects.WallShapes[] = [];
        public doorCollision: objects.WallShapes;
        public ammoBox: objects.AmmoBox;
        public weaponIcon: objects.WeaponIcon;
        public ammoText: objects.Label;

        public collision: managers.Collision;

        public healthBar: objects.HealthBar[] = [];

        //location vrraibles for obejcts
        private tankX: number[] = [146, 326, 506, -174, 6, 186, -194, -194];
        private tankY: number[] = [-1520, -1520, -1520, -620, -620, -620, -360, -160];
        private vBoxesX: number[] = [-115, 468, 468, 468, 468, 468];
        private vBoxesY: number[] = [-1560, -1159, -919, -679, -439, -199];
        private hBoxesX: number[] = [26, 26];
        private hBoxesY: number[] = [-160, -360];
        private guardX: number[] = [50, 230, 610, 630, 630, 415, 415, 250, -110, -175, 230];
        private guardY: number[] = [-1590, -1280, -1585, -870, -200, -1100, -250, -410, -670, -1035, -1035];
        private guardDirection: string[] = ["Down", "Right", "Left", "Down", "Up", "Down", "Up", "Left", "Right", "Down", "Left"];
        private wallX: number[] = [-300, 285, -80, -85, 780, 700, 780, -320, -320, 935, -320];
        private wallY: number[] = [-1210, -1160, -800, -970, -1350, -945, -750, -1720, -1720, -1720, 190];
        private wallWidth: number[] = [655, 95, 440, 220, 190, 300, 220, 65, 1285, 30, 1285];
        private wallHeight: number[] = [95, 410, 90, 225, 405, 250, 375, 1940, 60, 1940, 20];     

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {

            //set the player health to max
            playerHealth = constants.PLAYER_HEALTH;
            currentWeapon = "pistol";
            haveGun = "Gun";
            ammo = 5;

            //create a game container to store all elements
            this.game = new createjs.Container();
            //create a world container to hold all background elements
            this.world = new objects.WorldContainer();

            //create and add the background to the game
            this.background = new objects.StageBackground("3");
            this.world.addChild(this.background);

            //create and add the walls to the game
            this.walls = new objects.StageWalls("3");
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
                this.guards[index] = new objects.Guard(this.guardX[index], this.guardY[index], this.guardDirection[index], this.world);
                this.world.addChild(this.guards[index]);
            }

            //create and add all the walls to the game, using the vales in the array for location and size
            for (var index = 0; index < this.wallX.length; index++) {
                this.wallCollisionShapes[index] = new objects.WallShapes(this.wallX[index], this.wallY[index], this.wallHeight[index], this.wallWidth[index]);
                this.world.addChild(this.wallCollisionShapes[index]);
            }

            //create and add a door collider
            this.doorCollision = new objects.WallShapes(-280, -115, 145, 35);
            this.doorCollision.name = "door";
            this.world.addChild(this.doorCollision);

            //create and add a ration to the game
            this.ration = new objects.Ration(0);
            this.world.addChild(this.ration);

            //create and add a ammo box to the game
            this.ammoBox = new objects.AmmoBox(0);
            this.world.addChild(this.ammoBox);

            //create and add th player to the game
            this.snake = new objects.Snake(75, constants.SCRREN_CENTER_HEIGHT);
            this.game.addChild(this.snake);

            //create and add the info bar to the bottom of the screen
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            this.weaponIcon = new objects.WeaponIcon("pistol");
            this.ammoText = new objects.Label(ammo + "", 480, 470);

            //create and add the stationary pistol to the game
            this.missleLauncher = new objects.Items("missle", -190, 90);
            this.world.addChild(this.missleLauncher);

            this.bodyArmor = new objects.Items("armor", 205, -880);
            this.world.addChild(this.bodyArmor);

            //create a bullet objects that is used if the player uses the pistol
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);

            //create and add the parts of the health bar to the game
            for (var index2 = 0; index2 < constants.PLAYER_HEALTH; index2++) {
                this.healthBar[index2] = new objects.HealthBar(index2);
                this.game.addChild(this.healthBar[index2]);
            }

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
            createjs.Sound.play("main", { loop: -1 });
        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////

        //updates the game based on the elements
        public update() {

            //if the flag to use a weapon is true
            if (useProjectile == true) {
                //check what weapon the player is using and do what's in the case
                switch (currentWeapon) {
                    case ("pistol"):
                        if (ammo > 0) {
                            this.bullet.reset(this.snake, direction);
                            ammo--;
                        }
                        break;
                    case ("punch"):
                        for (var index = 0; index < this.guards.length; index++) {
                            this.collision.playerObjectsCollision(this.snake, this.guards[index], this.ration, this.ammoBox, this.game, this.healthBar);
                        }
                        break;
                }
                //set the use weapon flag to false;
                useProjectile = false;
            }

            if (currentWeapon == "pistol") {
                this.game.addChild(this.weaponIcon);
                this.game.addChild(this.ammoText);
                this.ammoText.update(ammo);
            } else {
                this.game.removeChild(this.weaponIcon);
                this.game.removeChild(this.ammoText);
            }

            //call the function to update the player, the bullet and the world
            this.snake.update();
            this.bullet.update();
            this.world.update();
            this.ration.update();
            this.ammoBox.update();
               
            //check collision for the tanks using the collision manager
            for (var index = 0; index < this.tanks.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.world, this.tanks[index]);
                this.collision.backgroundObjectsCollision(this.bullet, this.world, this.tanks[index]);

            }
            //check collision for the vertical boxes using the collision manager
            for (var index = 0; index < this.verticalBoxes.length; index++) {
                this.collision.backgroundObjectsCollision(this.snake, this.world, this.verticalBoxes[index]);
                this.collision.backgroundObjectsCollision(this.bullet, this.world, this.verticalBoxes[index]);
            }
            //check collision for the horizontal using the collision manager
            for (var index = 0; index < this.horizontalBoxes.length; index++) {
                console.log(this.horizontalBoxes[index].x + " " + this.horizontalBoxes[index].y);
                this.collision.backgroundObjectsCollision(this.snake, this.world, this.horizontalBoxes[index]);
                this.collision.backgroundObjectsCollision(this.bullet, this.world, this.horizontalBoxes[index]);
            }
            //check collision for the guards and the bullet colliding and update the guards
            for (var index = 0; index < this.guards.length; index++) {
                this.guards[index].update(this.snake, this.world);
                this.collision.playerObjectsCollision(this.bullet, this.guards[index], this.ration, this.ammoBox, this.game, this.healthBar);

                //loop through the guards line of sight checkers
                for (var index2 = 0; index2 < this.guards[index].losCheckers.length; index2++) {
                    //check if any of the guards los checkers are colliding with a wall, if they are remove them from the game
                    for (var index3 = 0; index3 < this.wallCollisionShapes.length; index3++) {
                        if (this.collision.losCollisionWalls(this.guards[index].losCheckers[index2], this.wallCollisionShapes[index3], this.guards[index], this.world)) {
                            this.guards[index].losCheckers[index2].remove = true;
                        }
                    }
                    //if the player collides with one of the guards los checkers close the current state and start the game over spotted state
                    if (this.collision.losCollisionPlayer(this.guards[index].losCheckers[index2], this.snake, this.guards[index])) {
                        deathX = this.snake.x;
                        deathY = this.snake.y;
                        createjs.Sound.stop();//stop the background music
                        this.game.removeAllChildren();//remove everything from the stage
                        window.removeEventListener("keydown", this.keyPressed, true);//disable the eventlsitners
                        window.removeEventListener("keyup", this.keyRelease, true);
                        stage.removeChild(this.game);//remove the game contaner from the game just in case
                        lastState = constants.STAGE3_STATE;//set the last state to the current state
                        currentState = constants.GAME_OVER_SPOTTED_STATE;//set the current state to the game over state
                        stateChanged = true;//set the state change varaible to true so the game object changes the stage
                    }                    
                }
            }
            //check collision for the walls using the collision manager
            for (var index = 0; index < this.wallCollisionShapes.length; index++) {
                this.collision.wallObjectsCollision(this.snake, this.world, this.wallCollisionShapes[index]);
                this.collision.wallObjectsCollision(this.bullet, this.world, this.wallCollisionShapes[index]);
            }

            //if the player collides with the door move to the next level
            if (this.collision.wallObjectsCollision(this.snake, this.world, this.doorCollision)) {
                createjs.Sound.stop();
                this.world.removeAllChildren();
                this.game.removeAllChildren();
                window.removeEventListener("keydown", this.keyPressed, true);
                window.removeEventListener("keyup", this.keyRelease, true);
                stage.removeChild(this.game);
                currentState = constants.STAGE3BOSS_STATE;
                stateChanged = true;
            }

            //check collision for snake and the stationary pickups
            this.collision.objectsCollision(this.missleLauncher, this.snake, null, null);
            this.collision.objectsCollision(this.bodyArmor, this.snake, null, null);
            this.collision.objectsCollision(this.ration, this.snake, this.game, this.healthBar);
            this.collision.objectsCollision(this.ammoBox, this.snake, null, null); 
            //check collision for snake and the outer walls          
            this.collision.wallCollision(this.world, this.snake, this.walls);
            //check collision for snakes bullet and the objects

        }//end of update

        //if the player presses a key
        public keyPressed(event) {
            //check what key is pressed then if its a movement key change the direction movement amount, the animation and the direction varriables
            if (dx == 0 && dy == 0) {
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
                    case constants.KEYCODE_SPACE:
                        if (currentWeapon == "punch") {
                            animation = "punch" + direction;
                        } else {
                            animation = "idle" + direction + haveGun;
                            useProjectile = true;
                        }
                        useProjectile = true;
                        break;
                    case constants.KEYCODE_E:
                        if (currentWeapon == "punch") {
                            currentWeapon = "pistol";
                            haveGun = "Gun";
                        } else {
                            currentWeapon = "punch";
                            haveGun = "";
                        }
                        break;
                }
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
                case constants.KEYCODE_SPACE:
                    if (dx == 0 && dy == 0) {
                        animation = "idle" + direction + haveGun;
                    }
                    break;
            }
        }
    }//end of play
}  