﻿/// <reference path="guardloschecker.ts" />
/// <reference path="../constants.ts" />
module objects {

    export class Guard extends createjs.Sprite {

        //instanced variables///////////////////////////////////////////////////////////////////////
        private _dx: number = 0;
        private _dy: number = 0;
        public width: number;
        public height: number;
        private _counter: number = 0;
        private diffX: number = 0;
        private diffY: number = 0;
        private direction: String;
        public name = "guard";
        public losCheckers: objects.GuardLosChecker[] = [];
        private counter: number = 0;

        //constructor////////////////////////////////////////////////////////////////////////////////
        constructor(setX: number, setY: number, direction: String, world: createjs.Container) {

            super(managers.Assets.atlas, "guardMove" + direction);//set the guards animation to the given direction

            //get the height and width of the object then set the regestration point to the center
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //set the objects x and y co-ord to the given ones
            this.x = setX;
            this.y = setX;

            //set the direction to the given direction
            this.direction = direction;

            //set the dx or dy based on the direction
            switch (this.direction) {
                case ("Left"):
                    this._dx = -1;
                    break;
                case ("Right"):
                    this._dx = 1;
                    break;
                case ("Up"):
                    this._dy = -1;
                    break;
                case ("Down"):
                    this._dy = 1;
                    break;
            }//end of switch

        }//end of constructor

        //public methods/////////////////////////////////////////////////////////////////////////////
        public update(player, world: createjs.Container) {

            //update the line of sight checkers for the guard, removing them if they move to far
            for (var index = 0; index < this.losCheckers.length; index++) {
                this.losCheckers[index].update();

                if (this.losCheckers[index].remove == true) {
                    world.removeChild(this.losCheckers[index]);
                    this.losCheckers.splice(index, 1);                   
                }//end of if
            }//end of for

            //if the counter hits 40 add a new line of sight checkers
            if (this.counter % 40 == 0) {
                var losChecker = new objects.GuardLosChecker(this);
                this.losCheckers.push(losChecker);
                world.addChild(losChecker);
            }//end of if
            //increment the time counter
            this.counter++;

            //check if the guard has hit the end of there partol for that direction. then flip the direction and remove all los checkers
            if (this.direction == "Left" && this.diffX < -300) {
                this._dx = -this._dx;//reverse the dx
                this.gotoAndPlay("guardMoveRight");//set the animation to the opposit one for the axis
                this.diffX = 0;//set the distance moves variable to 0
                this.direction = "Right";//set the direction to the opposit one for the axis
                for (var index = 0; index < this.losCheckers.length; index++) {// remove all los checkers
                    world.removeChild(this.losCheckers[index]); 
                }//end of for  
                this.losCheckers = [];         
             } else if(this.direction == "Right" && this.diffX > 300) {
                this._dx = -this._dx;
                this.gotoAndPlay("guardMoveLeft");
                this.diffX = 0;
                this.direction = "Left";
                for (var index = 0; index < this.losCheckers.length; index++) {
                    world.removeChild(this.losCheckers[index]);
                } //end of for  
                this.losCheckers = [];
            } else if (this.direction == "Up" && this.diffY < -300) {
                this._dy = -this._dy;
                this.gotoAndPlay("guardMoveDown");
                this.diffY = 0;
                this.direction = "Down";
                for (var index = 0; index < this.losCheckers.length; index++) {
                    world.removeChild(this.losCheckers[index]);
                }  //end of for  
                this.losCheckers = [];
            } else if (this.direction == "Down" && this.diffY > 300) {
                this._dy = -this._dy;
                this.gotoAndPlay("guardMoveUp");
                this.diffY = 0;
                this.direction = "Up";
                for (var index = 0; index < this.losCheckers.length; index++) {
                    world.removeChild(this.losCheckers[index]);
                }  //end of for  
                this.losCheckers = [];
            }//end of if

            //increment the distance variables and the guard location by dx and dy
            this.diffX += this._dx;
            this.diffY += this._dy;
            this.x += this._dx;
            this.y += this._dy;
           
        }//end of update
    }//end of guard
} //end of class  