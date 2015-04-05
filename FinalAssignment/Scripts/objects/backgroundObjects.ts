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
            this.collisionBox.graphics.drawRect(0, 0, this.width - 20, this.height - 40);
            this.boxHeight = this.height - 40;
            this.boxWidth = this.width - 20;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(player, world) {

            var tempPlayer = player;

            tempPlayer.regX = 0;
            tempPlayer.regY = 0;

            var pt = this.globalToLocal(tempPlayer.x, tempPlayer.y);         

            if (pt.x >= this.collisionBox.x + this.boxWidth
                || pt.x + tempPlayer.width <= this.collisionBox.x
                || pt.y >= this.collisionBox.y + this.boxHeight
                || pt.y + tempPlayer.height <= this.collisionBox.y) {
                    
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