function Player(id) {
    this.canChallenge = false;
    this.inGame = false;
    this.id = id;
    this.name = id;
    this.email = '';
}

module.exports = Player;
