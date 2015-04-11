module objects {
    export class Door extends GameObject {

        constructor(xLocation: number, yLocation: number, doorDirection: String) {
            super("door" + doorDirection);

            this.x = xLocation;
            this.y = yLocation;

            this.name = "door";
        }
    }
}