/// <reference path="gameobject.ts" />

module objects {

    export class Items extends GameObject {

        private startLocationX: number;
        private startLocationY: number;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(name: string, xLocation: number, yLocation: number) {

            super(name);

            this.soundString = "difficulty";
            this.name = name;
            
            this.startLocationX = xLocation;
            this.startLocationY = yLocation;

            this.x = this.startLocationX;
            this.y = this.startLocationY;
        }

        update() {
        }
    }
}  