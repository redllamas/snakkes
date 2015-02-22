var Player = require('./player');
var players = [];

module.exports.list = players;

module.exports.add = function (id) {
    players.push(new Player(id));
};

module.exports.find = function (id) {
    return players.filter(function (player) {
        return player.id === id;
    }).shift();
};

module.exports.remove = function (id) {
    players.forEach(function (player, index) {
        if (player.id === id) players.splice(index, 1);
    });
};
