
module objects {

    export class MetalGear extends createjs.Bitmap {
        private width: number;
        private height: number;
        public name;
        private counter: number = 0;

        constructor() {

            super(managers.Assets.loader.getResult("metalGear"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 100;

            this.name = "metalGear";
        }

        public update(bullets: objects.Bullet[], player) {

            if(this.counter == 200){
                var random = Math.floor((Math.random() * 3) + 1);
                    
                if (random == 1) {
                    for (var index = 0; index < bullets.length; index++) {
                        bullets[index].x = this.x;
                        bullets[index].y = this.y;
                        bullets[index]._dx = (Math.random()) * 18 - 9;
                        bullets[index]._dy = (Math.random()) * 9;
                    }
                } else if (random == 2) {
                    var dx = -10;
                    var dy = 0;
                    var flag = false;
                    for (var index = 0; index < bullets.length; index++) {
                        bullets[index].x = this.x;
                        bullets[index].y = this.y;
                        bullets[index]._dx = dx;
                        bullets[index]._dy = dy;

                        dx += 1;

                        if (flag == false) {
                            dy += 1;
                            if (dy == 10) {
                                flag = true;
                            }
                        } else {
                            dy -= 1;
                        }
                    }
                } else if (random == 3) {
                    for (var index = 0; index < bullets.length; index++) {
                        bullets[index].x = this.x;
                        bullets[index].y = this.y;
                        bullets[index]._dx = ((player.x - this.x) / ((Math.random() * 45) + 25));
                        bullets[index]._dy = ((player.y - this.y) / ((Math.random() * 45) + 25));
                    }
                }
                this.counter = 0;
            }

            this.counter++;
        }
    }
} 