var players = require('../../player/players');

module.exports = function (namespace, socket) {

    socket.on('refreshPlayers', function () {

        if(namespace.name === '/lobby') {
            namespace.emit('gotPlayers', players.list);
        }

    });
};
