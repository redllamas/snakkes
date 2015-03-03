var players = require('../../player/players');

module.exports = function (namespace, socket) {

    socket.on('updatePlayer', function (player) {

        players.find(player.id).update(player);

        //lobby events
        if(namespace.name === '/lobby') {
            namespace.emit('players', players.list);
        }

    });
};
