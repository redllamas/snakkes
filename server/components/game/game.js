var Worm = require('../worm/worm');
var Apple = require('../apple/apple');

function Game(challenger, defender, gameRoomId) {
    this.challenger = challenger; //worm index 0
    this.defender   = defender; //worm index 1
    this.gameRoomId = gameRoomId;
    this.worms      = [new Worm('steelblue', 4, true), new Worm('yellow', 4, false)];
    this.apple      = new Apple(this.getWormCoordinates());
};

Game.prototype.getWormCoordinates = function () {
    var coords = [];
    this.worms.forEach(function (worm) {
        coords = coords.concat(worm.getCoordinates());
    });
    return coords;
};

Game.prototype.getRoomId = function () {
    return this.gameRoomId;
};

Game.prototype.setRoomId = function (roomId) {
    this.gameRoomId = roomId;
};

module.exports = Game;
