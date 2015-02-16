var events = require('./events');

module.exports = function (io) {
    var lobby = createNamespace('/lobby');
    var game  = createNamespace('/game');
    registerEvents(lobby);
    registerEvents(game);

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
