module objects {
    export class GuardLosChecker extends createjs.Shape {

        private _dx: number;
        private _dy: number;
        private startX: number;
        private startY: number;
        public remove: boolean;

        constructor(guard) {
            super();

            this.graphics.beginFill("blue").drawRect(guard.x, guard.y, 5, 5);

            this._dx = guard._dx * 3;
            this._dy = guard._dy * 3;

            this.startX = this.x;
            this.startY = this.y;
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