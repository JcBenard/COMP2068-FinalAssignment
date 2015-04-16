module objects {
    export class GuardLosChecker extends createjs.Shape {

        //private instanced variables
        private _dx: number;
        private _dy: number;
        private startX: number;
        private startY: number;
        //public instanced variables
        public remove: boolean;
        public name: string;
        public width: number;
        public height: number;
        public number: number = 1;

        constructor(guard) {
            super();

            //sets the size of the box based on the guards direction
            switch (guard.direction) {
                case ("Left"):
                    this.width = 75;
                    this.height = 10;
                    break;
                case ("Right"):
                    this.width = 75;
                    this.height = 10;
                    break;
                case ("Up"):
                    this.width = 10;
                    this.height = 75;
                    break;
                case ("Down"):
                    this.width = 10;
                    this.height = 75;
                    break;
            }//end of switch

            //create the box based on the guards position and direction
            this.graphics.drawRect(guard.x - 37, guard.y - 37, this.height, this.width);

            //set the dx to 3 times the guard so it can check quickly
            this._dx = guard._dx * 3;
            this._dy = guard._dy * 3;       

            //keep the starting location of the box
            this.startX = this.x;
            this.startY = this.y;

            this.name = "los";
        }//end of constructor

        public update() {
            //update the location based on the dx and dy
            this.x += this._dx;
            this.y += this._dy;

            //if the box has move to its end set the removal flag to true
            if (this.x > this.startX + 300
                || this.x < this.startX - 300
                || this.y > this.startY + 250
                || this.y < this.startY - 250) {
                this.remove = true;
            }//end of if
        }//end of update
    }//end of guardLosChecker
} //end of class