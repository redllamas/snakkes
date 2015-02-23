module.exports = function (namespace, socket) {

    socket.on('message', function (message) {

        if(namespace.name === '/game') {
            namespace.emit('message', message);
        }

    });
};
