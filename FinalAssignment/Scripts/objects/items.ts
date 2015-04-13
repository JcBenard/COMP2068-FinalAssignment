/// <reference path="gameobject.ts" />

module objects {

    export class Items extends GameObject {


        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(name: string, xLocation: number, yLocation: number) {

            super(name);

            this.soundString = "difficulty";
            this.name = name;

            this.x = xLocation;
            this.y = yLocation;
        }

        update() {
        }
    }
}  