var Game  = require('./game');
var games = [];

module.exports = function () {

    addNewGame();

    function activeGames() {
        return games;
    };

    function addNewGame() {
        games.push(new Game);
    };

    function removeGame(gameRoomIndex) {
        games.splice(gameRoomIndex, 1);
    };

    return {
        activeGames: activeGames,
        addNewGame: addNewGame,
        removeGame: removeGame
    };

};
