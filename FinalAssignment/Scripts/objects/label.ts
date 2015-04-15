module objects {
    export class Label extends createjs.Text {

        //constructor//////////////////////////////////////////////////////////////////////
        constructor(labelString: string, x: number, y: number) {
            //set the text to the given information, using the consts for fonts
            super(labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY, "#ffffff");

            //set the location to the given point
            this.x = x;
            this.y = y;

            //set how the text is set
            this.textAlign = "right";
            this.textBaseline = "alphabetic";
        }//end of constructor

        //public methods////////////////////////////////////////////////////////////////////
        public update(ammo: number) {
            this.text = "" + ammo;//update the text based on the given number
        }//end of update
    }//end of label
} //end of class