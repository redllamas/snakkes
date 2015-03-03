var players = require('../../player/players');

module.exports = function (namespace, socket) {
    socket.on('disconnect', function () {
        var clientId  = socket.client.id;

        //lobby events
        if(namespace.name === '/lobby') {
            players.remove(clientId);
            namespace.emit('players', players.list);
        }
    });
};
