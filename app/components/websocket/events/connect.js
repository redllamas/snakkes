var players = require('../../players/players');

module.exports = function (namespace, socket) {
    var clientId = socket.client.id;

    //lobby events
    if(namespace.name === '/lobby') {
        players.add(clientId);
        namespace.emit('players', players.list);
    }

};
