var events     = require('./events');
var websocket  = {};
var websockets = [];

websocket.init = function (io) {
    lobby = createNamespace('/lobby');
    game  = createNamespace('/game');
    registerEvents(lobby);
    registerEvents(game);
    websockets = [io, lobby, game];

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

websocket.sockets = function () {
    return websockets;
}

module.exports = websocket;
