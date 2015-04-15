/// <reference path="gameobject.ts" />

module objects {

    export class Mine extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(dx) {

            //set the sprite to the given name using the gameObject constructor
            super("mine");

            //set the dx to the given dx
            this._dx = dx;
            //set the sound played on hit
            this.soundString = "explosion";
            this.name = "mines";
            //set the island to start at a random x and an out of bounds y
            this._reset();
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update() {
            //move the object based on dx and check if the object is in bounds
            this.x -= this._dx;
            this._checkBounds();
        }

        //set the objects locationn based on  the given x and y
        public setMines(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        //set the mine to a random y pos and a random x pos out of screen
        private _reset() {
            this.x = constants.SCREEN_WIDTH + Math.floor(Math.random() * constants.SCREEN_WIDTH);
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
        }

        //checks if the mine is passed the screen
        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }
    }
}    