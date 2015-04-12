module objects {
    export class GuardLosChecker extends createjs.Shape {

        private _dx: number;
        private _dy: number;
        private startX: number;
        private startY: number;
        public remove: boolean;
        public name: string;
        public width: number;
        public height: number;
        public number: number = 1;

        constructor(guard) {
            super();

            this.graphics.beginFill("blue").drawRect(guard.x, guard.y, 10, 10);

            this._dx = guard._dx * 3;
            this._dy = guard._dy * 3;

            this.width = 10;
            this.height = 10;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.startX = this.x;
            this.startY = this.y;

            this.name = "los";
        }

        public update() {
            this.x += this._dx;
            this.y += this._dy;

            

            if (this.x > this.startX + 400
                || this.x < this.startX - 400
                || this.y > this.startY + 400
                || this.y < this.startY - 400) {
                this.remove = true;
            }
        }
    }
} 