//module managers {
//    // Collision Manager Class
//    export class Collision {
//        //calculate the distance between two points
//        public distance(p1: createjs.Point, p2: createjs.Point): number {
//            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
//        }
//        //check if two elements collided
//        public checkCollision(collider: objects.GameObject, collide) {
//            //make points using the player charater and the selected element
//            var p1: createjs.Point = new createjs.Point();
//            var p2: createjs.Point = new createjs.Point();
//            p1.x = collide.x;
//            p1.y = collide.y;
//            p2.x = collider.x;
//            p2.y = collider.y;
//            //check if the elements have collided using the distance method and if they are
//            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
//                //if they aren't already colliding
//                if (!collider.isColliding) {
//                    createjs.Sound.play(collider.soundString);//play the sound that would be made on collision
//                    collider.isColliding = true;//set this varriables to true so they don't trigger collision again
//                    if (collider.name == "pistol") {
//                        currentWeapon = "pistol";
//                        haveGun = "Gun";
//                    } else if (collider.name == "bullet") {
//                        this.game.removeChild(collide);
//                        collider.y = constants.SCREEN_HEIGHT;
//                    } else if (collider.name == "snake") {
//                        this.game.removeChild(collide);
//                        this.ration.x = collide.x;
//                        this.ration.y = collide.y;
//                    }
//                } else {//if the elements aren't colliding
//                    collider.isColliding = false;//set the variable to false so they can collide again
//                }
//            }
//        }
//    }//end of collider
//}   
//# sourceMappingURL=collision.js.map