function Player(id) {
    this.canChallenge = true;
    this.challenger = false;
    this.defender = false;
    this.inGame = false;
    this.gameRoom = '';
    this.id = id;
    this.name = id;
    this.email = '';
};

Player.prototype.update = function (player) {
    this.name = player.name;
    this.email = player.email;
};

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

Player.prototype.gotChallenge = function () {
    this.canChallenge = false;
    this.defender = true;
    return this;
};

Player.prototype.awaitResponse = function () {
    this.canChallenge = false;
    this.challenger = true;
    return this;
};

Player.prototype.declineChallenge = function () {
    this.canChallenge = true;
    this.challenger = false;
    this.defender = false;
    this.gameRoom = '';
    return this;
};

Player.prototype.acceptChallenge = function () {
    this.inGame = true;
    return this;
};

module.exports = Player;
