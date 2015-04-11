/// <reference path="../constants.ts" />
module objects {

    export class Gunner extends createjs.Sprite {

        private width: number;
        private height: number;
        private counter: number = 0;
        private xPositions: number[] = [100, 250, 400, 560];
        private positionToMove: number;
        private dx: number;
        public name;

        constructor() {

            super(managers.Assets.atlas, "gunnerIdle");

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = constants.SCRREN_CENTER_WIDTH;
            this.y = 90;

            this.name = "gunner";
        }

        public update(bullets: objects.Bullet []) {
            if (this.counter == 0) {
                this.gotoAndPlay("gunnerRun");
                this.positionToMove = this.xPositions[Math.floor((Math.random() * 4))];

                console.log(this.positionToMove);
                if (this.positionToMove > this.x) {
                    this.dx = 3;
                } else if (this.positionToMove < this.x) {
                    this.dx = -3;
                }
                this.counter++;
            }
            if (this.x > this.positionToMove + 3 || this.x < this.positionToMove - 3) {
                this.x += this.dx;
            } else {
                this.gotoAndPlay("gunnerIdle");

                this.counter++;

                if (this.counter < 125) {
                    switch (this.counter) {
                        case (25):
                            this.shoot(bullets[0]);
                            break;
                        case (50):
                            this.shoot(bullets[1]);
                            break;
                        case (75):
                            this.shoot(bullets[2]);
                            break;
                        case (100):
                            this.shoot(bullets[3]);
                            break;
                    }
                } else {
                    this.counter = 0;
                }
            }
        }

        private shoot(bullet) {
            bullet.reset(this, "Down");
        }
    }
}