var Game  = require('./game');
var games = [];

module.exports.list = games;

module.exports.activeGames = function () {
    return this.list;
};

module.exports.addNewGame = function(defender, challenger, gameRoomId) {
    games.push(new Game(defender, challenger, gameRoomId));
};

module.exports.removeGame = function (gameRoomId) {
    var gameRoomIndex;

    games.forEach(function (game, index) {
        if(game.gameRoomId === gameRoomId) gameRoomIndex = index;
    });

    games.splice(gameRoomIndex, 1);
};

module.exports.findGame = function (gameRoomId) {
    return games.filter(function (game) {
        return game.gameRoomId === gameRoomId;
    }).shift();
};

module.exports.getWormInstance = function (playerId) {
    var game = games.filter(function (_game) {
        return (_game.players.indexOf(playerId) !== -1);
    }).shift();

    return game.worms[game.players.indexOf(playerId)];
};
