function Game(challenger, defender, gameRoomId) {
    this.challenger = challenger;
    this.defender   = defender;
    this.gameRoomId = gameRoomId;
    this.initialLoop = true;
};

Game.prototype.getRoomId = function () {
    return this.gameRoomId;
};

Game.prototype.setRoomId = function (roomId) {
    this.gameRoomId = roomId;
};

module.exports = Game;
