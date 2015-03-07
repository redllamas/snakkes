module.exports = function (game) {

    if(game.apple.eaten) {
        game.apple.getNewCoordinate(game.getWormCoordinates());
        game.apple.eaten = false;
    };

};
