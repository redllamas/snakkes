module.exports = function () {
    var io, lobby, game;

    function init(req, res, next) {
        var app = req.app;
        io = app.get('socket');
        lobby = io.of('/lobby');
        game = io.of('/game');

        lobby.on('connection', function (socket) {
            lobby.emit('userCount', Object.keys(lobby.connected));
            socket.on('disconnect', function (socket) {
                lobby.emit('userCount', Object.keys(lobby.connected));
            });
        });

        next();
    };

    return {
        init: init
    };

};
