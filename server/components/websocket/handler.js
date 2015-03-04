var events = require('./events');
var websocket = null;
var websockets = [];

module.exports = function () {

    function init(io) {
        websocket = io;
        lobby  = createNamespace('/lobby');
        game   = createNamespace('/game');
        registerEvents(lobby);
        registerEvents(game);
        websockets.push(lobby);
        websockets.push(game);

        function createNamespace(namespace) {
            return io.of(namespace);
        };

        function registerEvents(namespace) {
            namespace.on('connection', function (socket) {
                events.forEach(function (event) {
                    event(namespace, socket);
                });
            });
        };
    };

    function socket() {
        return websocket;
    };

    function sockets() {
        return websockets;
    };

    return {
        init: init,
        socket: socket,
        sockets: sockets
    };

};
