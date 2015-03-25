// var games = require('../../game/games');
// var players = require('../../player/players');

// module.exports = function (namespace, socket) {

//     socket.on('updateScores', function (gameRoomId, id, points) {

//         players.find(player.id).addScore(10);

//         if(namespace.name === '/game') {
//             var game       = games.findGame(gameRoomId);
//             var defender   = players.find(game.players[0]);
//             var challenger = players.find(game.players[1]);
//             var apple      = game.apple;
//             var points     = 10;

//             //get worms

//             if(apple.coordsCollision(games.getWormInstance(defender.id).getCoordinates())) {
//                 // if defender worm instance collide with apple
//                 defender.addScore(points);
//                 console.log('did it work for defender?');
//             } else if(apple.coordsCollision(games.getWormInstance(challenger.id).getCoordinates())) {
//                 // if challennger worm instance collide with apple
//                 challenger.addScore(points);
//                 console.log('did it work for challenger?');
//             } else {
//                 console.log('did it work?');
//                 return true;
//             }

//             namespace.emit('updateScores', players.player.score);
//         }

//     });
// };