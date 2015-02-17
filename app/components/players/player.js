function Player(id) {
    this.canChallenge = true;
    this.inGame = false;
    this.gameRoom = '';
    this.id = id;
    this.name = id;
    this.email = '';
}

Player.prototype.finishGame = function (roomId) {
    this.canChallenge = true;
    this.inGame = false;
    this.gameRoom = '';
    return this;
};

Player.prototype.setRoomId = function (roomId) {
    this.gameRoom = roomId;
    return this;
};

Player.prototype.awaitResponse = function () {
    this.canChallenge = false;
    return this;
};

Player.prototype.declineChallenge = function () {
    this.canChallenge = true;
    this.gameRoom = '';
    return this;
};

Player.prototype.acceptChallenge = function () {
    this.inGame = true;
    return this;
};

module.exports = Player;
