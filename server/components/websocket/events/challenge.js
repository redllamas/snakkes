var players = require('../../player/players');

module.exports = function (namespace, socket) {

    socket.on('challenge', function (player) {
        var ownPlayer = socket.client.id;
        players.find(player).gotChallenge();
        players.find(ownPlayer).awaitResponse();
        socket.broadcast.to(player).emit('challenge', ownPlayer);

        if(namespace.name === '/lobby') {
            namespace.emit('players', players.list);
        }
    });
};
