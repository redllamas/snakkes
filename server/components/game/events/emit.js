var websocket = require('../../websocket/websocket')();

module.exports = function (game) {

    websocket(function (socket, sockets) {

        var colors = [];
        var scores = [];
        var apple = game.apple;
        var worms = game.worms;

        colors.push({ x: apple.getCoordinate().x, y: apple.getCoordinate().y, color: apple.getColor() });

        worms.forEach(function (worm) {
            var color = worm.getColor();
            worm.getCoordinates().forEach(function (coord) {
                colors.push({ x: coord.x, y: coord.y, color: color });
            });
        });

        scores.push({ score: score });
        
        worms.forEach(function (worm) {  
          if(apple.coordsCollision(worm.getCoordinates())) {
            // apple.eaten = true;
            // worm.ateApple = true;
            score += 10;
            scores.push({ score: score });
          };
        });

        //shorthand for:
        //socket.of('/game').to(game.gameRoomId).emit('message', colors);
        sockets[1].to(game.gameRoomId).emit('gotGameData', colors);
        sockets[1].to(game.gameRoomId).emit('gotScoreData', scores);
    });

};
