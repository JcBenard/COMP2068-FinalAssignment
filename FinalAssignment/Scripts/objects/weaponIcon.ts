module objects {
    export class WeaponIcon extends createjs.Sprite {

        public ammoLabel: createjs.Text;

        constructor(weapon: string) {
            //create the sprite based on the string given
            super(managers.Assets.atlas, weapon);

            //set default postition
            this.x = 410;
            this.y = 445;
        }//end of constructor
    }//end of weaponIcon
}//end of class