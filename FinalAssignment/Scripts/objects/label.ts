module objects {
    export class Label extends createjs.Text {

        //constructor//////////////////////////////////////////////////////////////////////
        constructor(labelString: string, x: number, y: number) {
            super(labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, "#ffffff");

            this.x = x;
            this.y = y;

            this.textAlign = "right";
            this.textBaseline = "alphabetic";
        }

        //public methods////////////////////////////////////////////////////////////////////
        public update(score: number) {
            this.text = "" + score;
        }
    }
} 