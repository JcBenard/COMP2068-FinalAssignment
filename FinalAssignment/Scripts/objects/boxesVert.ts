module objects {

    export class BoxesVert extends createjs.Bitmap {

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

        public collisionBoxes: createjs.Shape[] = [];
        public boxesHeight: number [] = [];
        public boxesWidth: number [] = [];

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(xLocation: number, yLocation: number) {

            super(managers.Assets.loader.getResult("boxesV"));

            this.height = this.getBounds().height;
            this.width = this.getBounds().width;

            this.x = xLocation;
            this.y = yLocation;

            for (var index = 0; index < 4; index++) {
                this.collisionBoxes[index] = new createjs.Shape();

                switch (index) {
                    case (0):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(0, 20, 20, this.height - 40);   
                        this.boxesHeight[index] = this.height - 40;
                        this.boxesWidth[index] = 20;                   
                        break;
                    case (1):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(0, this.height - 20, this.width, 20);
                        
                        break;
                    case (2):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(this.width - 20, 20, 20, this.height - 40);
                        this.boxesHeight[index] = this.height - 40;
                        this.boxesWidth[index] = 20;
                        break;
                    case (3):
                        this.collisionBoxes[index].graphics.beginStroke("blue").drawRect(0, 0, this.width, 20);
                        this.boxesHeight[index] = 20;
                        this.boxesWidth[index] = this.width;
                        break;
                }
            }
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(player) {

            var pt = this.collisionBoxes[0].globalToLocal(player.x, player.y);

            console.log(pt + " " + player);

            if (player.x >= pt.x + this.boxesWidth[0]
                || player.x + player.width <= pt.x
                || player.y >= pt.y + this.boxesHeight[0]
                || player.y + player.height <= pt.y) {

                console.log("Worked");
            } else {

            }
        }
    }
}   