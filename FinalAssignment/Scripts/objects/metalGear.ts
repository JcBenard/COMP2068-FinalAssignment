
module objects {

    export class MetalGear extends createjs.Bitmap {
        //private instanced varriables
        private width: number;
        private height: number;       
        private counter: number = 0;
        //public instanced varaibles
        public name;

        constructor() {

            //set the image to the metalGear image
            super(managers.Assets.loader.getResult("metalGear"));

            //get the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            //set the regestration points to the center
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the default position and the name
            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 100;
            this.name = "metalGear";
        }

        public update(bullets: objects.Bullet[], player) {

            //if 210 frames have passed
            if (this.counter == 210) {
                //get a random number between 1 and 3
                var random = Math.floor((Math.random() * 3) + 1);
                    
                if (random == 1) {
                    //loop through the bosses bullets setting them to the objects position
                    for (var index = 0; index < bullets.length; index++) {
                        bullets[index].x = this.x;
                        bullets[index].y = this.y;
                        //set the dx and dy to random numbers so they shoot in a random way
                        bullets[index]._dx = (Math.random()) * 18 - 9;
                        bullets[index]._dy = (Math.random()) * 9;
                    }//end of for
                } else if (random == 2) {
                    //set the starting dx and dy and a flag to false
                    var dx = -10;
                    var dy = 0;
                    var flag = false;
                    //loop through the bullets
                    for (var index = 0; index < bullets.length; index++) {
                        //set the x and y to the object x and y
                        bullets[index].x = this.x;
                        bullets[index].y = this.y;
                        //set the dx and dy of the bulet to the current dx and dy varaibles
                        bullets[index]._dx = dx;
                        bullets[index]._dy = dy;

                        dx ++;//increment the dx

                        if (flag == false) {
                            dy += 1;//if the flag is false increment the dy 
                            if (dy == 10) {//once the dy hits 10 set the flag to false
                                flag = true;
                            }
                        } else {//if the flag is true
                            dy --;//decrement the dy
                        }//end of if
                    }//end of for
                } else if (random == 3) {
                    //loop through the bullets
                    for (var index = 0; index < bullets.length; index++) {
                        //set the x and y position to the objects x and y
                        bullets[index].x = this.x;
                        bullets[index].y = this.y;
                        //fire the bullets in a shotgun like fashion using the players position as the main point
                        bullets[index]._dx = ((player.x - this.x) / ((Math.random() * 45) + 25));
                        bullets[index]._dy = ((player.y - this.y) / ((Math.random() * 45) + 25));
                    }//end of for
                }//end of if
                //once the bullets have fired set the fram counter to 0
                this.counter = 0;
            }//end of if
            this.counter++;//incerment the couner by 1
        }//end of update
    }//end of metalGear
} //end of class