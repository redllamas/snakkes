var Player = require('./player');
var players = [];

module.exports.list = players;

module.exports.add = function (id) {
    players.push(new Player(id));
};

module.exports.remove = function (id) {
    players.forEach(function (player, index) {
        if (player.id === id) players.splice(index, 1);
    });
};
