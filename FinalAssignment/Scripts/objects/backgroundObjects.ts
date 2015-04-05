module objects {

    export class BackgroundObjects extends createjs.Bitmap {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private _dx: number = 0;
        private _dy: number = 0;
        public width: number;
        public height: number;
        private numbe: number = 0;
        private _counter: number = 0;
        private diffX: number = 0;
        private diffY: number = 0;
        private startLocationX: number;
        private startLocationY: number;
        private direction: String;

        public collisionBox: createjs.Shape;
        public boxHeight: number;
        public boxWidth: number;

        private worldX;
        private worldY;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number, objectType: string) {

            super(managers.Assets.loader.getResult(objectType));

            this.height = this.getBounds().height;
            this.width = this.getBounds().width;

            this.x = xLocation;
            this.y = yLocation;

            this.collisionBox= new createjs.Shape();
            this.collisionBox.graphics.drawRect(0, 0, this.width - 40, this.height - 40);
            this.boxHeight = this.height - 40;
            this.boxWidth = this.width - 20;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(player, world) {

            var pt = this.globalToLocal(player.x, player.y);
                           

            if (pt.x >= this.collisionBox.x + this.boxWidth
                || pt.x + player.width <= this.collisionBox.x
                || pt.y >= this.collisionBox.y + this.boxHeight
                || pt.y + player.height <= this.collisionBox.y) {

                this.worldX = world.x;
                this.worldY = world.y;
                    
            } else {
                world.x = this.worldX;
                world.y = this.worldY;
                    
            }
        }
    }
}   