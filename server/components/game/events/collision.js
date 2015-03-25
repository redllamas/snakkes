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

// var websocket = require('../../websocket/websocket')();

// module.exports = function (game) {

//     websocket(function (socket, sockets) {

//         var scores = [];
//         var apple = game.apple;
//         var worms = game.worms;
//         var score = 0;
//         scores.push({ score: score });
        
//         worms.forEach(function (worm) {  
//           if(apple.coordsCollision(worm.getCoordinates())) {
//             apple.eaten = true;
//             worm.ateApple = true;
//             score += 10;
//             scores.push({ score: score });
//           };
//         });

//         //shorthand for:
//         socket.of('/game').to(game.gameRoomId).emit('gotScoreData', scores);
//         // sockets[1].to(game.gameRoomId).emit('gotScoreData', scores);
//     });

// };
