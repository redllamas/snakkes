var games = require('../../game/games');

module.exports = function (namespace, socket) {

    socket.on('chatMessage', function (message) {

        if(namespace.name === '/lobby') {
            namespace.emit('gotChatMessage', message);
        }

    });
};
