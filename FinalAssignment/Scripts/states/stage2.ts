/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/gameBackground.ts" />
/// <reference path="../objects/mine.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/healthbar.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/antiTank.ts" />
/// <reference path="../objects/ration.ts" />
/// <reference path="../objects/shell.ts" />
/// <reference path="../objects/snake.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/movingbackground.ts" />

module states {
    export class Play {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public mines: objects.Mine[] = [];
        public background: objects.MovingBackgroud;
        public tank: objects.Tank;
        public info: objects.InfoBar;
        public healthBar: objects.HealthBar[] = [];
        public ration: objects.Ration;
        public bullet: objects.Bullet;
        public shell: objects.Shell;
        public antiTank: objects.AntiTank[] = [];

        public ticks: number = 0;
        public health = constants.PLAYER_HEALTH;
        public tankHealth: number = 10;

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new objects.MovingBackgroud();
            this.game.addChild(this.background);

            for (var index = 0; index < constants.MINE_NUM; index++) {

                this.antiTank[index] = new objects.AntiTank(index);
            }

            //create and add the ration to the game
            this.ration = new objects.Ration();
            this.game.addChild(this.ration);

            //create and add the tank to the game
            this.tank = new objects.Tank();
            this.game.addChild(this.tank);

            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);

            //create and add the bullet to the game
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);

            //create and add the tank shell to the game
            this.shell = new objects.Shell();
            this.game.addChild(this.shell);

            //create and add the bottom info bar to the game
            this.info = new objects.InfoBar();
            this.game.addChild(this.info);

            //create and add the parts of the health bar to the game
            for (var index2 = 0; index2 < this.health; index2++) {
                this.healthBar[index2] = new objects.HealthBar(index2);
                this.game.addChild(this.healthBar[index2]);
            }

            //add all the elements to the stage
            stage.addChild(this.game);

        }//end of constructor

        //public methods//////////////////////////////////////////////////////////////////////////////////
        //calculate the distance between two points
        public distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //check if two elements collided
        public checkCollision(collider: objects.GameObject) {
            //make points using the player charater and the selected element
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = this.snake.x;
            p1.y = this.snake.y;
            p2.x = collider.x;
            p2.y = collider.y;

            //check if the elements have collided using the distance method and if they are
            if (this.distance(p1, p2) < ((this.snake.width * .5) + (collider.width * .5))) {
                //if they aren't already colliding
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);//play the sound that would be made on collision
                    collider.isColliding = true;//set this varriables to true so they don't trigger collision again
                    collider.y = constants.SCREEN_HEIGHT;//move the element off the stage

                    //if the element that collided was harmful
                    if (collider.name == "mines" || collider.name == "bullet" || collider.name == "shell") {
                        this.health--;//remove 1 health from the players health variable
                        this.game.removeChild(this.healthBar[this.health]);//remove one of the parts of the players health bar from the game
                        //if the player collided with something helpful and their health isn't full
                    } else if (collider.name == "ration" && this.health != 3) {
                        this.game.addChild(this.healthBar[this.health]);//give the player a part of the health bar
                        this.health++;//add 1 to the player's health variable
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
                this.bullet.reset(this.snake.y, this.tank.y);//shoot a bullet
            }

            //if 180 frams have passed and the difficulty is greater then 2
            if (this.ticks == 180 && this.tankHealth < 4) {
                this.shell.reset(this.tank.y, this.tank.rotation);//fire 1 shell 
            }
            

            //update and check collision for the moving elements
            this.snake.update();
            this.tank.update(this.snake.y);

            this.background.update();
            for (var index = 0; index < constants.MINE_NUM; index++) {
                this.mines[index].update();
                this.checkCollision(this.mines[index]);
            }

            this.ration.update();
            this.checkCollision(this.ration);

            this.bullet.update();
            this.checkCollision(this.bullet);

            this.shell.update();
            this.checkCollision(this.shell);
            
            //if the ticker reaches 180 set it to 0
            if (this.ticks == 180) {
                this.ticks = 0;
            }

            //increment the ticker
            this.ticks++;
            
        }//end of update
    }//end of play
}  