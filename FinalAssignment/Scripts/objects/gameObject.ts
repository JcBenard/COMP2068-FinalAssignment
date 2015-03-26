module objects {

    export class GameObject extends createjs.Bitmap {
        //public instanced variables
        public width: number;
        public height: number;
        public isColliding: boolean;
        public soundString: string;
        public name: string;

        //private instanced variables
        protected _dx;
        protected _dy;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(assetString:string) {

            super(assetLoader.getResult(assetString));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.isColliding = false;
        }
    }
}    