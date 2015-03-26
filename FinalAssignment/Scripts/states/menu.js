/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
var states;
(function (states) {
    var Menu = (function () {
        //constructor///////////////////////////////////////////////////////////////////////////////
        function Menu() {
            this.game = new createjs.Container();
            //create and add the background to the game
            this.background = new createjs.Bitmap(assetLoader.getResult("menuBackground"));
            this.game.addChild(this.background);
            //create and add the start button to the game
            this.startButton = new objects.Button("startButton", constants.SCRREN_CENTER_WIDTH, constants.SCRREN_CENTER_HEIGHT);
            this.game.addChild(this.startButton);
            //add an on click listener for the start button
            this.startButton.on("click", this.startButtonClicked, this);
            //create and add the instructions button to the game
            this.instructionsButton = new objects.Button("instructionsButton", constants.SCRREN_CENTER_WIDTH, (constants.SCRREN_CENTER_HEIGHT + 75));
            this.game.addChild(this.instructionsButton);
            //add an on click listener for the instructions button
            this.instructionsButton.on("click", this.instructionsButtonClicked, this);
            stage.addChild(this.game);
        }
        //public methods///////////////////////////////////////////////////////////////////////////
        //update function here just because the game runs an update based on the states
        Menu.prototype.update = function () {
        };
        //private methods/////////////////////////////////////////////////////////////////////////
        //if they clicked the start button
        Menu.prototype.startButtonClicked = function () {
            //clear the game then change the state to play
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        //if they clicked the instructions button
        Menu.prototype.instructionsButtonClicked = function () {
            //clear the game then change the state to the instructions
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.INSTRUCTIONS_STATE;
            stateChanged = true;
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map