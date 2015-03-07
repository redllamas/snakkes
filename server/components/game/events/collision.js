module.exports = function (game) {

    var apple = game.apple;
    var worms = game.worms;

    worms.forEach(function (worm) {
        if(apple.coordsCollision(worm.getCoordinates())) {
            apple.eaten = true;
            worm.ateApple = true;
        };
    });

};
