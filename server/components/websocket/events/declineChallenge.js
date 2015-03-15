var players = require('../../player/players');

module.exports = function (namespace, socket) {

    socket.on('declineChallenge', function (opponentId) {
        var playerId = socket.client.id;

        var opponent = players.find(opponentId);
        if(opponent) opponent.declineChallenge();

        var player = players.find(playerId);
        if(player) player.declineChallenge();

        socket.broadcast.to(opponentId).emit('declineChallenge', playerId);

        if(namespace.name === '/lobby') {
            namespace.emit('gotPlayers', players.list);;
        }

    });
};
