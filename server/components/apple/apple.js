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

// Apple.prototype.respawn = function () {
//     if(this.eaten) this.getNewCoordinates();
//     this.eaten = false;
// };

// Apple.prototype.wormAteMe = function () {
//     this.eaten = true;
// };

// Apple.prototype.xBounds = board.meta().ticksX;

// Apple.prototype.yBounds = board.meta().ticksY;

// Apple.prototype.getNewCoordinates = function (worms) {
//     this.coord = null;
//     while(this.coord === null) {
//         var found = true;
//         var tmpCoords = this.generateCoords();

//         this.worms.forEach(function (worm) {
//             worm.getCoordinates().forEach(function (wormCoords) {
//                 if(wormCoords.x === tmpCoords.x && wormCoords.y === tmpCoords.y) found = false;
//             });
//         });

//         if(found) { this.coord = [tmpCoords] }
//     }
// };



// Apple.prototype.getCoordinates = function () {
//     return this.coord;
// };

// Apple.prototype.getCoordinatesWithColor = function () {
//     var obj = {};
//     obj[this.color] = this.getCoordinates();
//     return obj;
// };

module.exports = Apple;
