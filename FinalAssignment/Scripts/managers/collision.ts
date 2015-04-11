module managers {
    // Collision Manager Class
    export class Collision {

        constructor() {

        }

        //collision for objects moving into the player objects
        public objectsCollision(collider: objects.GameObject, collide, game, healthBar) {

            //make the two point on the same grid
            var pt = collider.globalToLocal(collide.x, collide.y);

            //check if the two points are colliding
            if (collider.hitTest(pt.x, pt.y)) {
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
                    ammo += 1;
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
                }
            }//end of if
        }//end of objects collision

        //collision for the player objects moving into objects
        public playerObjectsCollision(collider: objects.GameObject, collide, ration, ammoBox, game, healthBar) {

            //make the two point on the same grid
            var pt = collide.globalToLocal(collider.x, collider.y);

            //check if the two points are colliding
            if (collide.hitTest(pt.x, pt.y)) {
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
            }//end of if
        }//end of player objects collision

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
            }
        }
    }//end of collider
}  