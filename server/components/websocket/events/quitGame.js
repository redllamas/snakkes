var games = require('../../game/games');
var players = require('../../player/players');

module.exports = function (namespace, socket) {

    socket.on('quitGame', function (gameRoomId) {

        console.log('got quit game');
        console.log(gameRoomId);
        namespace.to(gameRoomId).emit('gotQuitGame');
        socket.to(gameRoomId).emit('gotQuitGame');


        if(namespace.name === '/game') {

            // var game       = games.findGame(gameRoomId);
            // var defender   = players.find(game.players[0]);
            // var challenger = players.find(game.players[1]);

            //broadcast quit game to gameRoom
            //this will redirect clients back to lobby


            //reset player status
            // defender.finishGame();
            // challenger.finishGame();

            // //leave game room
            // namespace.sockets.forEach(function (_socket) {
            //     if(_socket.id === defender.id || _socket.id === challenger.id) {
            //         _socket.leave(gameRoomId);
            //     }
            // });

            // //remove game
            // games.removeGame(gameRoomId);

        }

    });
};
