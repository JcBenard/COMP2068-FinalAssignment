/// <reference path="../constants.ts" />
module objects {

    export class Gunner extends createjs.Sprite {

        //private instanaced variables
        private width: number;
        private height: number;
        private counter: number = 0;
        private xPositions: number[] = [100, 250, 400, 560];
        private positionToMove: number;
        private dx: number;
        //public instanced variables
        public name;

        constructor() {

            //set the sprite
            super(managers.Assets.atlas, "gunnerIdle");

            //get the width and heigh
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //set the regestration point to the center
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the default postition
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 90;

            //set the name to make it easier to refernce
            this.name = "gunner";
        }

        public update(bullets: objects.Bullet[]) {
            //if the counter is 0
            if (this.counter == 0) {
                //change the animation and set the position to move to
                this.gotoAndPlay("gunnerRun");
                this.positionToMove = this.xPositions[Math.floor((Math.random() * 4))];

                //if the position the object must move to is greater then the current postion
                if (this.positionToMove > this.x) {
                    this.dx = 3;//set the dx to positive
                } else {//else
                    this.dx = -3;//set the dx to negative
                }//end of if
                this.counter++;//increment the counter
            }//end of if

            //if the object hasen't reached it destination
            if (this.x > this.positionToMove + 3 || this.x < this.positionToMove - 3) {
                this.x += this.dx;//move the object towards the destination
            } else {//else
                //change the animation and increment the counter
                this.gotoAndPlay("gunnerIdle");
                this.counter++;

                //if the counter is less then 120
                if (this.counter < 125) {
                    switch (this.counter) {
                        case (25)://if the counter is 25
                            this.shoot(bullets[0]);//fire the first bullet
                            break;
                        case (50)://if the counter is 50
                            this.shoot(bullets[1]);//fire the second bullet
                            break;
                        case (75)://if the counter is 75
                            this.shoot(bullets[2]);//fire the third bullet
                            break;
                        case (100)://if the counter is 100
                            this.shoot(bullets[3]);//fire the fourth bullet
                            break;
                    }//end of switch
                } else {
                    this.counter = 0;//reset the counter
                }//end of if
            }//end of if
        }//end of update

        //private methods
        private shoot(bullet) {
            //call the reset method of the bullet class
            bullet.reset(this, "Down");
        }
    }
}