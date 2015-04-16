module managers {
    // Collision Manager Class
    export class Collision {

        constructor() {

        }

        //calculates the distance between the two points
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        //collision for objects moving into the player objects
        public objectsCollision(collider, collide, game, healthBar) {

            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //make the two point on the same grid
            if (collide.name == "snake") {
                var pt = collider.localToLocal(collide.x, collide.y, collide);
            } else {
                var pt = collider;
            }

            //put the x and y of the objects into the points
            p1.x = pt.x;
            p1.y = pt.y;
            p2.x = collide.x;
            p2.y = collide.y;

            //check if the objects are currently colliding
            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                //if they aren't already colliding
                if (!collider.isColliding) {
                    //play the sound associated with the collider and move it off the stage
                    createjs.Sound.play(collider.soundString);

                    //move the collider off the stage
                    collider.x = -1000;
                    collider.y = -1000;

                    //if the collider's name is pistol set the players weapon to it and mark them as having a gun for animation purpose
                    if (collider.name == "pistol") {
                        currentWeapon = "pistol";
                        haveGun = "Gun";
                        haveWeapon[0] = true;
                        ammo = 5;
                    } else if (collider.name == "missle") {
                        haveWeapon[2] = true;//if they collide with the missle launcher set the variable to true
                    } else if (collider.name == "armor") {
                        haveArmor = true;//if they collide with armor set the variable to true
                    } else if (collider.name == "ammo") {
                        ammo += 2;//if they collide with the ammo box add 2 to there total ammo
                    } else if (collider.name == "ration") {//if they collide with a ration add two to there health unless that would bring them over the max
                        if (playerHealth == constants.PLAYER_HEALTH) {
                        } else if (playerHealth == constants.PLAYER_HEALTH - 1) {
                            game.addChild(healthBar[playerHealth]);
                            playerHealth += 1;
                        } else {
                            game.addChild(healthBar[playerHealth]);
                            game.addChild(healthBar[playerHealth + 1]);
                            playerHealth += 2;
                        }
                    } else if (collider.name == "mines" || collider.name == "tankBullet" || collider.name == "shell") {//if the player collides with something damaging remove 2 from there health
                        if (haveArmor) {
                            playerHealth--;//remove 1 health from the players health variable
                            game.removeChild(healthBar[playerHealth]);
                        } else {
                            playerHealth -= 2;//remove 1 health from the players health variable
                            game.removeChild(healthBar[playerHealth + 1]);
                            game.removeChild(healthBar[playerHealth]);
                        }
                    } else if (collider.name == "antiTank") {//the players anti tank mine collides return true
                        return true;
                    } else if (collider.name == "missles") {//the players missle mine collides return true
                        return true;
                    }

                    //if the gunner is the one the collider is collidng with return true
                    if (collide.name == "gunner") {
                        return true;
                    }
                    collider.isColliding = true;//set the is colliding to true so the collider dosen't collide again
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

            //put the x and y of the objects into the points
            p1.x = pt.x;
            p1.y = pt.y;
            p2.x = collider.x;
            p2.y = collider.y;

            //check if the objects are currently colliding
            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                if (!collider.isColliding) {
                    //play the sound associated with the collider
                    createjs.Sound.play(collider.soundString);

                    //if the collide is a guard move it off the stage
                    if (collide.name == "guard") {
                        //roll a random number between 1 and 10
                        var random = Math.floor((Math.random() * 10) + 1);
                        if (random == 1) {//if it's 1 put a ammo box where the guard was
                            ammoBox.x = collide.x;
                            ammoBox.y = collide.y;
                        } else if (random == 2) {//if it's 2 put a ration where the guard was
                            ration.x = collide.x;
                            ration.y = collide.y;
                        }
                        //move the guard off the stage
                        collide.x = -1000;
                        collide.y = -1000;
                        //increment the number of kills the player has by 1
                        kills++;
                    }//end of if

                    //if the player is colliding with metal gear return true
                    if (collide.name == "metalGear") {
                        return true;
                    }
                    //if snake is being collided with remove 2 from his health
                    if (collide.name == "snake") {
                        if (haveArmor) {
                            playerHealth --;
                            game.removeChild(healthBar[playerHealth]);
                        } else {
                            playerHealth -= 2;
                            game.removeChild(healthBar[playerHealth + 1]);
                            game.removeChild(healthBar[playerHealth]);
                        }
                    }

                    //if the collider is a bullet move it off the stage
                    if (collider.name == "bullet") {
                        collider.x = -10000;
                        collider.y = -10000;
                    }//end of if
                }//end of if
            }else {//if the elements aren't colliding
                collider.isColliding = false;//set the variable to false so they can collide again
            }
        }//end of player objects collision

        //called when the game is checking if the guards los boxes are colliding with the player
        public losCollisionPlayer(collider, collide, guard) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            //make the two point on the same grid
            var pt = guard.globalToLocal(collide.x, collide.y);

            //put the x and y of the objects into the points
            p1.x = pt.x;
            p1.y = pt.y;
            p2.x = collider.x;
            p2.y = collider.y;

            //if the objects are colliding return true
            if (this.distance(p1, p2) < ((collide.width * .5) + (collider.width * .5))) {
                return true;
            }
        }

        //called when the game is checking if the guards los boxes are colliding with a wall
        public losCollisionWalls(collider, collide, guard, world) {

            //make the two point on the same grid
            var pt = guard.localToLocal(collider.x, collider.y, world);

            //if the objects aren't colliding do nothing
            if (pt.x >= collide.xLocation + collide.width
                || pt.x +  collider.width <= collide.xLocation
                || pt.y >= collide.yLocation + collide.height
                || pt.y + collider.height <= collide.yLocation) {

            } else {//if they are move the collider off the stage
                collider.x = -10000;
                collider.y = -10000;
            }
        }

        //called when the game is checking if the guards los boxes are colliding with a background object
        public losCollisionObjects(collider, collide, guard, world) {

            //make the two point on the same grid
            var pt = guard.localToLocal(collider.x, collider.y, world);

            //if the objects aren't colliding do nothing
            if (pt.x >= collide.x + collide.boxWidth
                || pt.x + collider.width <= collide.x
                || pt.y >= collide.y + collide.boxHeight
                || pt.y + collider.height <= collide.y) {

            } else {//if they are move the collider off the stage
                collider.x = -10000;
                collider.y = -10000;
            }
        }

        //collision for walls
        public wallCollision(world, player, walls) {
            //if the camera is all the way to the left or the player is left of the middle
            if (world.x >= constants.SCRREN_CENTER_WIDTH || player.x < constants.SCRREN_CENTER_WIDTH - 5) {
                collidingLeft = true;//make the left collision varable true
                world.x = constants.SCRREN_CENTER_WIDTH;//lock the camera to the left
                snakeColl = true;//set this variable to true so the player moves instead of the camera
            } else {//if the camra or player isn't colliding left set the left collidion variable to false
                collidingLeft = false;
            }//end of if

            if (world.y <= constants.SCRREN_CENTER_HEIGHT || player.y > constants.SCRREN_CENTER_HEIGHT + 5) {
                collidingBottom = true;
                snakeColl = true;
                world.y = constants.SCRREN_CENTER_HEIGHT
            } else {
                collidingBottom = false;
            }//end of if

            if (world.x <= constants.SCREEN_WIDTH + constants.SCRREN_CENTER_WIDTH - walls.width || player.x > constants.SCRREN_CENTER_WIDTH + 5) {
                collidingRight = true;
                snakeColl = true;
                world.x = constants.SCREEN_WIDTH + constants.SCRREN_CENTER_WIDTH - walls.width;
            } else {
                collidingRight = false;
            }//end of if

            if (world.y >= walls.height - constants.SCRREN_CENTER_HEIGHT_WITH_BAR|| player.y < constants.SCRREN_CENTER_HEIGHT - 5) {
                collidingTop = true;
                snakeColl = true;
                world.y = walls.height - constants.SCRREN_CENTER_HEIGHT_WITH_BAR;
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
                } else if (object.name == "bullet" || object.name == "missle") {
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
                if (object.name == "snake") {//if snake is the one colliding with the wall
                    if (collidingBottom == true || collidingTop == true) {//if snake is currently able to move up or down
                        object.y += dy;//lock snakes vertical movement
                    } else {//if the screen is the one currently moving up or down
                        world.y -= dy;//lock the screens vertical movement
                    }

                    if (collidingRight == true || collidingLeft == true) {
                        object.x += dx;
                    } else {
                        world.x -= dx;
                    }
                } else if (object.name == "bullet") {//if the bullet is the one colliding with the wall, move it off the stage
                    object.x = -2000;
                    object.y = -2000;
                }
                if (wall.name == "door" && object.name == "snake") {//if snake collides with the door wall return true
                    return true;
                }
            }
        }
    }//end of collider
}  