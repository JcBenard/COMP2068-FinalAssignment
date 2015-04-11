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
            this.collisionBox.graphics.beginFill("blue").drawRect(0, 0, this.width - 10, this.height - 30);
            this.boxHeight = this.height - 30;
            this.boxWidth = this.width - 10;
        }
    }
}   