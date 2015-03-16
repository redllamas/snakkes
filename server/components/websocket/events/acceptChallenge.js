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

        //refresh player data
        if(namespace.name === '/lobby') {
            namespace.emit('gotPlayers', players.list);
        }

        namespace.to(playerId).emit('gotAcceptChallenge', opponentId);
        socket.broadcast.to(opponentId).emit('gotAcceptChallenge', playerId);

        games.addNewGame(playerId, opponentId, gameRoom);

        // if(namespace.name === '/lobby') {
        //     namespace.emit('gotPlayers', players.list);
        // }

    });

};
