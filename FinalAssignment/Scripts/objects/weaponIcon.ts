module objects {
    export class WeaponIcon extends createjs.Sprite {

        public ammoLabel: createjs.Text;

        constructor(weapon: string) {
            super(managers.Assets.atlas, weapon);

            this.x = 410;
            this.y = 445;
        }
    }
}