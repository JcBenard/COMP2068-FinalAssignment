module objects {

    export class WallShapes extends createjs.Shape {

        //instanced variables///////////////////////////////////////////////////////////////////////
        public width: number;
        public height: number;
        public xLocation: number;
        public yLocation: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number, height: number, width: number) {

            super();

            this.graphics.drawRect(xLocation, yLocation, width, height);
            this.xLocation = xLocation;
            this.yLocation = yLocation;
            this.width = width;
            this.height = height;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(player, world) {

            var pt = this.globalToLocal(player.x, player.y);

            if (pt.x >= this.xLocation + this.width
                || pt.x + player.width * .5 <= this.xLocation
                || pt.y >= this.yLocation + this.height
                || pt.y + player.height * .5 <= this.yLocation) {

            } else {
                if (collidingBottom == true || collidingTop == true) {
                    player.y += dy;
                } else {
                    world.y -= dy;
                }

                if (collidingRight == true || collidingLeft == true) {
                    player.x += dx;
                } else {
                    world.x -= dx;
                }
            }
        }
    }
}    