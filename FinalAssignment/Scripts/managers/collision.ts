module managers {
    // Collision Manager Class
    export class Collision {

        constructor() {

        }

        public distance(p1: createjs.Point, p2: createjs.Point): number {
            //console.log(Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2))));
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //collision for objects moving into the player objects
        public objectsCollision(collider, collide, game, healthBar) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //make the two point on the same grid
            var pt = collider.localToLocal(collide.x, collide.y, collide);

            p1.x = pt.x;
            p1.y = pt.y;
            p2.x = collide.x;
            p2.y = collide.y;

            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                //if they aren't already colliding
                if (!collider.isColliding) {
                    //play the sound associated with the collider and move it off the stage
                    createjs.Sound.play(collider.soundString);

                    collider.x = -1000;
                    collider.y = -1000;

                    //if the collider's name is pistol set the players weapon to it and mark them as having a gun for animation purpose
                    if (collider.name == "pistol") {
                        currentWeapon = "pistol";
                        haveGun = "Gun";
                        ammo = 5;
                    } else if (collider.name == "ammo") {
                        ammo += 2;
                    } else if (collider.name == "ration") {
                        if (playerHealth == constants.PLAYER_HEALTH) {
                        } else if (playerHealth == constants.PLAYER_HEALTH - 1) {
                            game.addChild(healthBar[playerHealth]);
                            playerHealth += 1;
                        } else {
                            game.addChild(healthBar[playerHealth]);
                            game.addChild(healthBar[playerHealth + 1]);
                            playerHealth += 2;
                        }
                    } else if (collider.name == "mines" || collider.name == "tankBullet" || collider.name == "shell") {
                        playerHealth -= 2;//remove 1 health from the players health variable
                        game.removeChild(healthBar[playerHealth + 1]);
                        game.removeChild(healthBar[playerHealth]);
                    } else if (collider.name == "antiTank") {
                        return true;
                    }

                    if (collide.name == "gunner") {
                        return true;
                    }
                    collider.isColliding = true;
                }
            } else {//if the elements aren't colliding
                collider.isColliding = false;//set the variable to false so they can collide again
            }
        }//end of objects collision

        //collision for the player objects moving into objects
        public playerObjectsCollision(collider, collide, ration, ammoBox, game, healthBar) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //make the two point on the same grid
            var pt = collide.localToLocal(collider.x, collider.y, collider);

            p1.x = pt.x;
            p1.y = pt.y;
            p2.x = collider.x;
            p2.y = collider.y;

            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                if (!collider.isColliding) {
                    //play the sound associated with the collider
                    createjs.Sound.play(collider.soundString);

                    //if the collide is a guard move it off the stage
                    if (collide.name == "guard") {
                        var random = Math.floor((Math.random() * 10) + 1);
                        if (random == 1) {
                            ammoBox.x = collide.x;
                            ammoBox.y = collide.y;
                        } else if (random == 2) {
                            ration.x = collide.x;
                            ration.y = collide.y;
                        }

                        collide.x = -1000;
                        collide.y = -1000;
                    }//end of if

                    if (collide.name == "snake") {
                        playerHealth -= 2;
                        game.removeChild(healthBar[playerHealth + 1]);
                        game.removeChild(healthBar[playerHealth]);
                    }

                    //if the collider is a bullet move it off the stage
                    if (collider.name == "bullet") {
                        collider.x = -10000;
                        collider.y = -10000;
                    }//end of if

                    if (collider.name == "los") {
                        console.log("lost");
                    }
                }//end of if
            }else {//if the elements aren't colliding
                collider.isColliding = false;//set the variable to false so they can collide again
            }
        }//end of player objects collision

        public losCollisionPlayer(collider, collide, guard) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //make the two point on the same grid
            var pt = guard.globalToLocal(collide.x, collide.y);

            p1.x = pt.x;
            p1.y = pt.y;
            p2.x = collider.x;
            p2.y = collider.y;

            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                return true;
            }
        }

        public losCollisionObjects(collider, collide, guard) {

            var pt = guard.globalToLocal(collide.x, collide.y); 

            console.log(pt + "/" + collider.x + " " + collider.y);

            if (pt.x >= collider.x + collider.width
                || pt.x + collide.width<= collider.x
                || pt.y - collide.height>= collider.y + collider.height
                || pt.y <= collider.y) {

            } else {
                return true;
            }
        }

        //collision for walls
        public wallCollision(world, player) {
            if (world.x >= constants.SCRREN_CENTER_WIDTH || player.x < constants.SCRREN_CENTER_WIDTH - 5) {
                collidingLeft = true;
                world.x = constants.SCRREN_CENTER_WIDTH;
                snakeColl = true;
            } else {
                collidingLeft = false;
            }//end of if

            if (world.y <= constants.SCRREN_CENTER_HEIGHT || player.y > constants.SCRREN_CENTER_HEIGHT + 5) {
                collidingBottom = true;
                snakeColl = true;
                world.y = constants.SCRREN_CENTER_HEIGHT
            } else {
                collidingBottom = false;
            }//end of if

            if (world.x <= -870 || player.x > constants.SCRREN_CENTER_WIDTH + 5) {
                collidingRight = true;
                snakeColl = true;
                world.x = -870;
            } else {
                collidingRight = false;
            }//end of if

            if (world.y >= 1085 || player.y < constants.SCRREN_CENTER_HEIGHT - 5) {
                collidingTop = true;
                snakeColl = true;
                world.y = 1085;
            } else {
                collidingTop = false;
            }//end of if
        }//end of if

        //collision for background objects like boxes
        public backgroundObjectsCollision(object, world, backgroundObject) {

            //make the two point on the same grid
            var pt = backgroundObject.globalToLocal(object.x, object.y);

            //check if the player isn't in the object
            if (pt.x >= backgroundObject.collisionBox.x + backgroundObject.boxWidth
                || pt.x + object.width * .5 <= backgroundObject.collisionBox.x
                || pt.y >= backgroundObject.collisionBox.y + backgroundObject.boxHeight
                || pt.y + object.height * .5 <= backgroundObject.collisionBox.y) {

            } else {//if they are in the object
                if (object.name == "snake") {
                    if (collidingBottom == true || collidingTop == true) {//if the player is currently colliding with the top or bottom wall
                        object.y += dy;//move the player away from the object
                    } else {
                        world.y -= dy;//move the screen away from the object
                    }//end of if

                    if (collidingRight == true || collidingLeft == true) {//if the player is currently colliding with the left or right wall
                        object.x += dx;//move the player away from the object
                    } else {
                        world.x -= dx;//move the screen away from the object
                    }//end of if
                } else if (object.name == "bullet") {
                    object.x = -2000;
                    object.y = -2000;
                }
            }//end of if
        }//


        //public methods/////////////////////////////////////////////////////////////////////////////
        public wallObjectsCollision(object, world, wall: objects.WallShapes) {

            var pt = wall.globalToLocal(object.x, object.y);

            if (pt.x >= wall.xLocation + wall.width
                || pt.x + object.width * .5 <= wall.xLocation
                || pt.y >= wall.yLocation + wall.height
                || pt.y + object.height * .5 <= wall.yLocation) {

            } else {
                if (object.name == "snake") {
                    if (collidingBottom == true || collidingTop == true) {
                        object.y += dy;
                    } else {
                        world.y -= dy;
                    }

                    if (collidingRight == true || collidingLeft == true) {
                        object.x += dx;
                    } else {
                        world.x -= dx;
                    }
                } else if (object.name == "bullet") {
                    object.x = -2000;
                    object.y = -2000;
                }
                if (wall.name == "door") {
                    return true;
                }
            }
        }
    }//end of collider
}  