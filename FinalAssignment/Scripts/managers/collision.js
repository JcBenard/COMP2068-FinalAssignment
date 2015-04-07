var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision() {
        }
        //collision for objects moving into the player objects
        Collision.prototype.objectsCollision = function (collider, collide) {
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
                } //end of if
            } //end of if
        }; //end of objects collision
        //collision for the player objects moving into objects
        Collision.prototype.playerObjectsCollision = function (collider, collide) {
            //make the two point on the same grid
            var pt = collide.globalToLocal(collider.x, collider.y);
            //check if the two points are colliding
            if (collide.hitTest(pt.x, pt.y)) {
                //play the sound associated with the collider
                createjs.Sound.play(collider.soundString);
                //if the collide is a guard move it off the stage
                if (collide.name == "guard") {
                    collide.x = -1000;
                    collide.y = -1000;
                } //end of if
                //if the collider is a bullet move it off the stage
                if (collider.name == "bullet") {
                    collider.x = -10000;
                    collider.y = -10000;
                } //end of if
            } //end of if
        }; //end of player objects collision
        //collision for walls
        Collision.prototype.wallCollision = function (world, player) {
            if (world.x >= constants.SCRREN_CENTER_WIDTH || player.x < constants.SCRREN_CENTER_WIDTH - 5) {
                collidingLeft = true;
                world.x = constants.SCRREN_CENTER_WIDTH;
                snakeColl = true;
            }
            else {
                collidingLeft = false;
            } //end of if
            if (world.y <= constants.SCRREN_CENTER_HEIGHT || player.y > constants.SCRREN_CENTER_HEIGHT + 5) {
                collidingBottom = true;
                snakeColl = true;
                world.y = constants.SCRREN_CENTER_HEIGHT;
            }
            else {
                collidingBottom = false;
            } //end of if
            if (world.x <= -870 || player.x > constants.SCRREN_CENTER_WIDTH + 5) {
                collidingRight = true;
                snakeColl = true;
                world.x = -870;
            }
            else {
                collidingRight = false;
            } //end of if
            if (world.y >= 1085 || player.y < constants.SCRREN_CENTER_HEIGHT - 5) {
                collidingTop = true;
                snakeColl = true;
                world.y = 1085;
            }
            else {
                collidingTop = false;
            } //end of if
        }; //end of if
        //collision for background objects like boxes and walls
        Collision.prototype.backgroundObjectsCollision = function (player, world, backgroundObject) {
            //make the two point on the same grid
            var pt = backgroundObject.globalToLocal(player.x, player.y);
            //check if the player isn't in the object
            if (pt.x >= backgroundObject.collisionBox.x + backgroundObject.boxWidth || pt.x + player.width * .5 <= backgroundObject.collisionBox.x || pt.y >= backgroundObject.collisionBox.y + backgroundObject.boxHeight || pt.y + player.height * .5 <= backgroundObject.collisionBox.y) {
            }
            else {
                if (collidingBottom == true || collidingTop == true) {
                    player.y += dy; //move the player away from the object
                }
                else {
                    world.y -= dy; //move the screen away from the object
                } //end of if
                if (collidingRight == true || collidingLeft == true) {
                    player.x += dx; //move the player away from the object
                }
                else {
                    world.x -= dx; //move the screen away from the object
                } //end of if
            } //end of if
        }; //
        return Collision;
    })();
    managers.Collision = Collision; //end of collider
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map