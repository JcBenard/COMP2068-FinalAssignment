/// <reference path="gameobject.ts" />

module objects {

    export class Tank extends GameObject {

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor() {

            //set the sprite to rank using the gameObject constructor
            super("tank");           

            //set the dy
            this._dy = 1;

            //set the starting position
            this.x = 35;
            this.y = 220;
        }

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(playerY: number) {

            //rotate the tank images based on the players location
            if (this.y > playerY + 25) {
                this.y -= this._dy;
                this.rotation = -5;
                switch (true) {
                    case (this.y > playerY + 75):
                        this.rotation = -10;
                    case (this.y > playerY + 150):
                        this.rotation = -15;
                    case (this.y > playerY + 225):
                        this.rotation = -20;
                    case (this.y > playerY + 300):
                        this.rotation = -23;
                }
            } else if (this.y < playerY - 25) {
                this.y += this._dy;
                this.rotation = 5;
                switch (true) {
                    case (this.y < playerY - 75):
                        this.rotation = 10;
                    case (this.y < playerY - 150):
                        this.rotation = 15;
                    case (this.y < playerY - 225):
                        this.rotation = 20;
                    case (this.y < playerY - 300):
                        this.rotation = 23;
                }
            } else {
                this.rotation = 0;
            }
        }
    }
}  