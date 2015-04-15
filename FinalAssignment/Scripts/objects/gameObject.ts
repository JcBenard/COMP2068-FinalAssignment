module objects {

    export class GameObject extends createjs.Sprite {
        //public instanced variables
        public width: number;
        public height: number;
        public isColliding: boolean;
        public soundString: string;
        public name: string;
        public _dx;
        public _dy;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(assetString:string) {

            //set the spirte to the given string
            super(managers.Assets.atlas, assetString);

            //get the width and height
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //set the regestration point to the center
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the variable that show if it's colliding to false;
            this.isColliding = false;
        }//end of constructor
    }//end of gameobject
} //end of class   