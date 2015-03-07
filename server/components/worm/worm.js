var board = require('../board/board')();

function Worm(color, length, challenger) {
    this.ateApple = false;
    this.color = color;
    this.xSize = board.meta().pw;
    this.ySize = board.meta().ph;
    this.xBounds = board.meta().boundsX;
    this.yBounds = board.meta().boundsY;
    this.coords = getInitialCoords.apply(this, [length]);
    this.direction = 'right';

    function getInitialCoords(length) {
        var x = ((this.xBounds / 2) - ((length * this.xSize) / 2));
        var y = challenger ? ((this.yBounds / 2) - ((length * this.ySize) / 2)) : ((this.yBounds / 2) + ((length * this.ySize) / 2));
        var coords = [];

        for(var i=0; i<length; i++) {
            coords.push({ x: x, y: y });
            x += this.xSize;
        };

        return coords;
    };
}

Worm.prototype.move = function () {
    var worm = this;
    var currentCoordinate = this.currentCoordinate();
    var nextCoordinate    = this.nextCoordinate();

    if(worm.notHittingBounds(currentCoordinate, nextCoordinate)) {
        worm.moveToCoordinate(nextCoordinate);
    }
};

Worm.prototype.currentCoordinate = function () {
    return this.coords[this.coords.length-1];
};

Worm.prototype.getCoordinates = function () {
    return this.coords;
};

Worm.prototype.notHittingBounds = function (currentCoordinate, nextCoordinate) {
    if (currentCoordinate.x !== nextCoordinate.x || currentCoordinate.y !== nextCoordinate.y) return true;
};

Worm.prototype.moveToCoordinate = function (coordinate) {
    this.coords.push(coordinate);
    if( ! this.ateApple) this.coords.splice(0, 1);
    this.ateApple = false;
};

// Worm.prototype.getCoordinatesWithColor = function () {
//     var obj = {};
//     obj[this.color] = this.getCoordinates();
//     return obj;
// };

Worm.prototype.nextCoordinate = function () {
    var currentCoordinate = this.currentCoordinate();
    var nextCoordinate    = { x: currentCoordinate.x, y: currentCoordinate.y };
    switch(this.direction) {
        case 'left':
            if(nextCoordinate.x > 0) nextCoordinate.x -= this.xSize;
            break;
        case 'up':
            if(nextCoordinate.y > 0) nextCoordinate.y -= this.ySize;
            break;
        case 'right':
            if(nextCoordinate.x < this.xBounds) nextCoordinate.x += this.xSize;
            break;
        case 'down':
            if(nextCoordinate.y < this.yBounds) nextCoordinate.y += this.ySize;
            break;
    }
    return nextCoordinate;
};

Worm.prototype.setDirection = function (direction) {
    this.direction = direction;
};

module.exports = Worm;
