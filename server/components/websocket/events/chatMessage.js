var games = require('../../game/games');

module.exports = function (namespace, socket) {

    socket.on('chatMessage', function (message) {

        console.log('got message');
        if(namespace.name === '/lobby') {
            namespace.emit('gotChatMessage', message);
        }

    });
};
