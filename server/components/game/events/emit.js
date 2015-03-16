var websocket = require('../../websocket/websocket')();

module.exports = function (game) {

    websocket(function (socket, sockets) {

        var colors = [];
        var apple = game.apple;
        var worms = game.worms;

        colors.push({ x: apple.getCoordinate().x, y: apple.getCoordinate().y, color: apple.getColor() });

        worms.forEach(function (worm) {
            var color = worm.getColor();
            worm.getCoordinates().forEach(function (coord) {
                colors.push({ x: coord.x, y: coord.y, color: color });
            });
        });

        //shorthand for:
        //socket.of('/game').to(game.gameRoomId).emit('message', colors);
        sockets[1].to(game.gameRoomId).emit('gotGameData', colors);
    });

};
