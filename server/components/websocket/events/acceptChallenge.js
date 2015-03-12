var players = require('../../player/players');
var games   = require('../../game/games');

module.exports = function (namespace, socket) {

    socket.on('acceptChallenge', function (opponentId) {
        var playerId = socket.client.id;
        var gameRoom = 'gameRoom-' + playerId + '' + opponentId;

        var opponent = players.find(opponentId);
        if(opponent) opponent.acceptChallenge().setRoomId(gameRoom);

        var player = players.find(playerId);
        if(player) player.acceptChallenge().setRoomId(gameRoom);

        namespace.to(playerId).emit('acceptChallenge', opponentId);
        socket.broadcast.to(opponentId).emit('acceptChallenge', playerId);

        socket.join(gameRoom);
        namespace.sockets.forEach(function (_socket) {
            console.log(_socket.id + ' ' + opponentId);
            if(_socket.id === opponentId) {
                _socket.join(gameRoom);
            }
        });

        console.log('rooms--------------');
        console.log('-------------------');
        var rooms = Object.keys(namespace.adapter.rooms);
        console.log(rooms);
        console.log('-------------------');

        //test message
        namespace.to(gameRoom).emit('message', 'message to: '+gameRoom);

        if(namespace.name === '/lobby') {
            namespace.emit('players', players.list);
        }

        namespace.to(gameRoom).emit('startGame', 'let\'s start');

        games.addNewGame(playerId, opponentId, gameRoom);

        //TODO: start game from here
        //TODO: pass playerId to game so that we can identify the worm
    });

};
