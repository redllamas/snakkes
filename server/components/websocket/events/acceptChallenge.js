var players = require('../../players/players');

module.exports = function (namespace, socket) {

    socket.on('acceptChallenge', function (opponentId) {
        var playerId = socket.client.id;
        var gameRoom = playerId + '' + opponentId;

        var opponent = players.find(opponentId);
        if(opponent) opponent.acceptChallenge().setRoomId(gameRoom);

        var player = players.find(playerId);
        if(player) player.acceptChallenge().setRoomId(gameRoom);

        namespace.to(playerId).emit('acceptChallenge', opponentId);
        socket.broadcast.to(opponentId).emit('acceptChallenge', playerId);

        if(namespace.name === '/lobby') {
            namespace.emit('players', players.list);
        }
    });

};
