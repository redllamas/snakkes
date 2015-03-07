module.exports = function (game) {

    game.worms.forEach(function (worm) {
        worm.move();
    });

};
