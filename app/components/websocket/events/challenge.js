var players = require('../../players/players');

module.exports = function (namespace, socket) {

    socket.on('challenge', function (player) {
        var ownPlayer = socket.client.id;
        players.find(player).awaitResponse();
        players.find(ownPlayer).awaitResponse();
        socket.broadcast.to(player).emit('challenge', ownPlayer);
    });

    socket.on('acceptChallenge', function (player) {
        var ownPlayer = socket.client.id;
        var gameId    = ownPlayer + '-' + player;
        players.find(player).acceptChallenge().setRoomId(gameId);
        players.find(ownPlayer).acceptChallenge().setRoomId(gameId);
        socket.broadcast.to(player).emit('acceptChallenge', ownPlayer);
    });

    socket.on('declineChallenge', function (player) {
        var ownPlayer = socket.client.id;
        players.find(player).declineChallenge();
        players.find(ownPlayer).declineChallenge();
        socket.broadcast.to(player).emit('declineChallenge', ownPlayer);
    });
};
