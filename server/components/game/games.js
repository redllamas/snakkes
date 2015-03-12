var Game  = require('./game');
var games = [];

module.exports.list = games;

module.exports.activeGames = function () {
    return this.list;
};

module.exports.addNewGame = function(defender, challenger, gameRoomId) {
    games.push(new Game(defender, challenger, gameRoomId));
};

module.exports.removeGame = function (gameRoomIndex) {
    games.push(new Game(defender, challenger, gameRoomId));
};

module.exports.getWormInstance = function (playerId) {
    var game = games.filter(function (_game) {
        return (_game.players.indexOf(playerId) !== -1);
    }).shift();

    return game.worms[game.players.indexOf(playerId)];
};


// module.exports = function () {

//     function activeGames() {
//         return games;
//     };

//     function addNewGame(defender, challenger, gameRoomId) {
//         games.push(new Game(defender, challenger, gameRoomId));
//     };

//     function removeGame(gameRoomIndex) {
//         games.splice(gameRoomIndex, 1);
//     };

//     function getWormInstance(playerId) {
//         console.log('getworminstance ' + playerId);
//     };

//     return {
//         activeGames: activeGames,
//         addNewGame: addNewGame,
//         removeGame: removeGame,
//         getWormInstance: getWormInstance
//     };

// };
