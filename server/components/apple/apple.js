var board = require('../board/board')();

function Apple(wormCoords) {
    this.color = 'white';
    this.eaten = false;
    this.ticksX = board.meta().ticksX;
    this.ticksY = board.meta().ticksY;
    this.coord = {};
    this.getNewCoordinate(wormCoords);
};

Apple.prototype.getNewCoordinate = function (wormCoords) {
    var apple = this;
    var found = false;

    while(found === false) {
        apple.generateCoords();

        if( ! apple.coordsCollision(wormCoords)) {
            found = true;
        };
    }
};

Apple.prototype.getColor = function () {
    return this.color;
};

Apple.prototype.getCoordinate = function () {
    return this.coord;
};

Apple.prototype.setCoordinate = function (coordinate) {
    this.coord = coordinate;
};

Apple.prototype.generateCoords = function () {
    this.coord = {
        x: this.ticksX[Math.floor(Math.random() * (this.ticksX.length-1))],
        y: this.ticksY[Math.floor(Math.random() * (this.ticksY.length-1))]
    };
};

Apple.prototype.coordsCollision = function (wormCoords) {
    var collision = false;
    var apple = this;
    wormCoords.forEach(function (wormCoord) {
        if(wormCoord.x === apple.coord.x && wormCoord.y === apple.coord.y) collision = true;
    });
    return collision;
};

module.exports = Apple;
