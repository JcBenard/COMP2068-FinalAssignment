module objects {

    export class BackgroundObjects extends createjs.Bitmap {

        //instanced variables///////////////////////////////////////////////////////////////////////
        public width: number;
        public height: number;

        public collisionBox: createjs.Shape;
        public boxHeight: number;
        public boxWidth: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number, objectType: string) {

            super(managers.Assets.loader.getResult(objectType));

            this.height = this.getBounds().height;
            this.width = this.getBounds().width;

            this.x = xLocation;
            this.y = yLocation;

            this.collisionBox= new createjs.Shape();
            this.collisionBox.graphics.drawRect(0, 0, this.width - 10, this.height - 30);
            this.boxHeight = this.height - 30;
            this.boxWidth = this.width - 10;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(player, world) {

            var pt = this.globalToLocal(player.x, player.y);         

            if (pt.x >= this.collisionBox.x + this.boxWidth
                || pt.x + player.width * .5 <= this.collisionBox.x
                || pt.y >= this.collisionBox.y + this.boxHeight
                || pt.y + player.height * .5 <= this.collisionBox.y) {
                    
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