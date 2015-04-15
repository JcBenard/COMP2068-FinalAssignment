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

module states {
    export class Stage2 {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public mines: objects.Mine[] = [];
        public background: objects.MovingBackgroud;
        public tank: objects.Tank;
        public info: objects.InfoBar;
        public healthBar: objects.HealthBar[] = [];
        public ration: objects.Ration;
        public ammoBox: objects.AmmoBox;
        public tankBullet: objects.TankBullet;
        public shell: objects.Shell;
        public antiTank: objects.AntiTank;
        public weaponIcon: objects.WeaponIcon;
        public ammoText: objects.Label;

        //collision manager object
        public collision: managers.Collision;

        //private instanced variables
        private ticks: number = 0;
        private tankHealth: number = 7;

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {

            //set the deafult values
            playerHealth = constants.PLAYER_HEALTH;
            animation = "runRight";
            collidingBottom = true;
            currentWeapon = "antiTank";
            ammo = 2;
            dx = 0;
            dy = 0;

            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new objects.MovingBackgroud();
            this.game.addChild(this.background);

            //create and add the mines to the game
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
            this.snake = new objects.Snake(225, constants.SCRREN_CENTER_HEIGHT_WITH_BAR);
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

            //create and add the weapon icon to the game
            this.weaponIcon = new objects.WeaponIcon("antiTank");
            this.ammoText = new objects.Label(ammo + "", 480, 470);

            //create and add the parts of the health bar to the game
            for (var index2 = 0; index2 < playerHealth; index2++) {
                this.healthBar[index2] = new objects.HealthBar(index2);
                this.game.addChild(this.healthBar[index2]);
            }

            //add all the elements to the stage
            stage.addChild(this.game);

            //add the eventlisner to the game
            window.addEventListener("keydown", this.keyPressed, true);
            window.addEventListener("keyup", this.keyRelease, true);

            //create the collision manager
            this.collision = new managers.Collision();

            //start the music for the state
            createjs.Sound.play("stage2", { loop: -1 });

        }//end of constructor

        //updates the game based on the elements
        public update() {

            //if the tank has less then 1 health clear the stage then start the state for stage 2
            if (this.tankHealth < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                window.removeEventListener("keydown", this.keyPressed, true);
                window.removeEventListener("keyup", this.keyRelease, true);
                stage.removeChild(this.game);
                currentState = constants.STAGE3_STATE;
                stateChanged = true;
            }

            //if 90 frams have passed and the difficulty is greater then 1
            if (this.ticks % 90 == 0 && this.tankHealth < 6) {
                this.tankBullet.reset(this.snake.y, this.tank.y);//shoot a bullet
            }

            //if 180 frams have passed and the difficulty is greater then 2
            if (this.ticks % 180 == 0 && this.tankHealth < 4) {
                this.shell.reset(this.tank.y, this.tank.rotation);//fire 1 shell 
            }

            if (useProjectile == true) {
                //check what weapon the player is using and do what's in the case
                switch (currentWeapon) {
                    case ("antiTank"):
                        if (ammo > 0) {
                            this.antiTank.reset(this.snake); 
                            ammo--;
                        }
                        break;
                    case ("punch"):
                        this.collision.playerObjectsCollision(this.snake, this.tank, this.ration, this.ammoBox, this.game, this.healthBar);
                        break;
                }
                //set the use weapon flag to false;
                useProjectile = false;
            }

            //if the player has the antiTank out set the pistol icon and show the ammo on the info bar 
            if (currentWeapon == "antiTank") {
                this.game.addChild(this.weaponIcon);
                this.game.addChild(this.ammoText);
                this.ammoText.update(ammo);
            } else {
                this.game.removeChild(this.weaponIcon);
                this.game.removeChild(this.ammoText);
            }

            //get a random number, if the number is 250 and the ammo box isn't already on the stage. add the ammo box to the stage
            var random = Math.floor((Math.random() * 250) + 1);
            if (this.ammoBox.x < 0 && random == 250) {
                this.ammoBox.reset();
            }

            //update and check collision for the moving elements
            this.snake.update();
            this.tank.update(this.snake.y);

            //update the background
            this.background.update();

            //update the mines and check if the mines are colliding with the player
            for (var index = 0; index < constants.MINE_NUM; index++) {
                this.mines[index].update();
                this.collision.objectsCollision(this.mines[index], this.snake, this.game, this.healthBar);
            }

            //update the ration and check if it's colliding with the player
            this.ration.update();
            this.collision.objectsCollision(this.ration, this.snake, this.game, this.healthBar);

            //update the ammoBox and check if it's colliding with the player
            this.ammoBox.update();
            this.collision.objectsCollision(this.ammoBox, this.snake, null, null); 

            //update the tanks bullet and check if it's colliding with the player
            this.tankBullet.update();
            this.collision.objectsCollision(this.tankBullet, this.snake, this.game, this.healthBar);

            //update the shell bullet and check if it's colliding with the player
            this.shell.update();
            this.collision.objectsCollision(this.shell, this.snake, this.game, this.healthBar);

            //update the antiTank
            this.antiTank.update();
            //if the antiTank is colliding with the tank
            if (this.collision.objectsCollision(this.antiTank, this.tank, this.game, this.healthBar)) {
                //remove 1 from the tanks health
                this.tankHealth--;
                if (this.tankHealth % 2 == 0) {//if the tanks health is divisible by 2
                    this.ration.reset();//put the ration onto the stage
                }
            }

            //if the ticker reaches 180 set it to 0
            if (this.ticks == 1800) {
                this.ticks = 0;
            }

            //increment the ticker
            this.ticks++;
            
        }//end of update

        //when a key is pressed
        public keyPressed(event) {
            switch (event.keyCode) {
                case constants.KEYCODE_W://if the key was W set the dy to 2
                    dy = 2;
                    break;
                case constants.KEYCODE_S://if the key was W set the dy to -2
                    dy = -2;
                    break;
                case constants.KEYCODE_SPACE://if the key was space set the variable to use a weapon to true
                    useProjectile = true;
                    break;
                case constants.KEYCODE_E://if it was E swap the players weapon between antiTank and fist
                    if (currentWeapon == "punch") {
                        currentWeapon = "antiTank";
                        haveGun = "";
                    } else {
                        currentWeapon = "punch";
                        haveGun = "";
                    }
                    break;
            }
        }

        //when they release the key set the dy to 0
        public keyRelease(evnt) {
            switch (evnt.keyCode) {
                case constants.KEYCODE_W:
                    dy = 0;
                    break;
                case constants.KEYCODE_S:
                    dy = 0;
                    break;

            }
        }
    }//end of play
}  