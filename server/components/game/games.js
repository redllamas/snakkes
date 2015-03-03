var Game        = require('./game');
//var fps       = (1000/30); //30fps
var fps         = (1000/0.1);
var timer       = null;
var activeGames = [];
var gameEvents  = [];

module.exports = function () {

    function init(events) {
        gameEvents = events || [];
        if ( ! timer) timer = setInterval(function () { loop() }, fps);
    };

    // function term() {
    //     clearInterval(timer);
    // };

    function loop() {
        activeGames.forEach(function (game) {
            fireEvents(game);
        });
    };

    function fireEvents(game) {
        gameEvents.forEach(function (event) {
            event(game);
        });
    };

    function addNewGame() {
        activeGames.push(new Game);
    };

    function removeGame(gameRoomIndex) {
        activeGames.splice(gameRoomIndex, 1);
    };

    return {
        init: init,
        // term: term,
        addNewGame: addNewGame,
        removeGame: removeGame
    };

};
