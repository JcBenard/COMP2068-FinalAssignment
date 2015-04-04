/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/stagebackground.ts" />
/// <reference path="../objects/stagewalls.ts" />
/// <reference path="../objects/healthbar.ts" />
/// <reference path="../objects/infobar.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/snake.ts" />

module states {
    export class Stage1Boss {

        //instnced variables///////////////////////////////////////////////////////////
        public game: createjs.Container;
        public snake: objects.Snake;
        public background: objects.StageBackground;
        public walls: objects.StageWalls;
        public info: objects.InfoBar;
        //public healthBar: objects.HealthBar[] = [];

        public difficulty: number = 1;
        public score: number = 0;
        public ticks = 0;
        public health = constants.PLAYER_HEALTH;
        private direction = "";

        //constructor///////////////////////////////////////////////////////////////////////
        constructor() {
            this.game = new createjs.Container();

            //create and add the background to the game
            this.background = new objects.StageBackground("Boss1");
            this.game.addChild(this.background);

            this.walls = new objects.StageWalls("1");
            this.game.addChild(this.walls);

            //create and add th player to the game
            this.snake = new objects.Snake();
            this.game.addChild(this.snake);

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

        ////public methods//////////////////////////////////////////////////////////////////////////////////
        ////calculate the distance between two points
        //public distance(p1: createjs.Point, p2: createjs.Point): number {

        //    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        //}

        ////check if two elements collided
        //public checkCollision(collider: objects.GameObject) {
        //    //make points using the player charater and the selected element
        //    var p1: createjs.Point = new createjs.Point();
        //    var p2: createjs.Point = new createjs.Point();

        //    p1.x = this.snake.x;
        //    p1.y = this.snake.y;
        //    p2.x = collider.x;
        //    p2.y = collider.y;

        //    //check if the elements have collided using the distance method and if they are
        //    if (this.distance(p1, p2) < ((this.snake.width * .5) + (collider.width * .5))) {
        //        //if they aren't already colliding
        //        if (!collider.isColliding) {                   
        //            createjs.Sound.play(collider.soundString);//play the sound that would be made on collision
        //            collider.isColliding = true;//set this varriables to true so they don't trigger collision again
        //            collider.y = constants.SCREEN_HEIGHT;//move the element off the stage

        //            //if the element that collided was harmful
        //            if (collider.name == "mines" || collider.name == "bullet" || collider.name == "shell") {
        //                this.health--;//remove 1 health from the players health variable
        //                this.game.removeChild(this.healthBar[this.health]);//remove one of the parts of the players health bar from the game
        //            //if the player collided with something helpful and their health isn't full
        //            } else if (collider.name == "ration" && this.health != 3) {
        //                this.game.addChild(this.healthBar[this.health]);//give the player a part of the health bar
        //                this.health++;//add 1 to the player's health variable
        //            }
        //        }
        //    } else {//if the elements aren't colliding
        //        collider.isColliding = false;//set the variable to false so they can collide again
        //    }
        //}//end of collider

        //updates the game based on the elements
        public update() {
            this.snake.update();
            this.background.update();
            this.walls.update();


        }//end of update

        public keyPressed(event) {
            switch (event.keyCode) {
                case constants.KEYCODE_A:
                    xPos += 4;
                    animation = "runLeft";
                    this.direction = "Left";
                    break;
                case constants.KEYCODE_D:
                    xPos -= 4;
                    animation = "runRight";
                    this.direction = "Right"
                    break;
                case constants.KEYCODE_W:
                    yPos += 4;
                    animation = "runUp";
                    this.direction = "Up";
                    break;
                case constants.KEYCODE_S:
                    yPos -= 4;
                    animation = "runDown";
                    this.direction = "Down";
                    break;
                case 32:
                    animation = "punch" + this.direction;
                    break;
            }
        }

        public keyRelease(evnt) {
            switch (evnt.keyCode) {
                case constants.KEYCODE_A:
                    animation = "idleLeft";
                    break;
                case constants.KEYCODE_D:
                    animation = "idleRight";
                    break;
                case constants.KEYCODE_W:
                    animation = "idleUp";
                    break;
                case constants.KEYCODE_S:
                    animation = "idleDown";
                    break;
                case 32:
                    animation = "idle" + this.direction;
                    break;
            }
        }
    }//end of play
}  