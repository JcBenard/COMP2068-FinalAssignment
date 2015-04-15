/// <reference path="gameobject.ts" />

module objects {

    export class Items extends GameObject {


        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(name: string, xLocation: number, yLocation: number) {

            //set the sprite to the given name using the gameObject constructor
            super(name);

            //set the sound played on hit
            this.soundString = "difficulty";
            this.name = name;//set the name of the object

            //set the location to the given point
            this.x = xLocation;
            this.y = yLocation;
        }//end of constructor
    }//end of items
}  //end of class