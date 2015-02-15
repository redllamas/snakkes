var Player = require('./player');
var players = [];

module.exports = function (io) {
    var lobby = io.of('/lobby');
    var game  = io.of('/game');

    lobby.on('connection', function (socket) {
        addPlayer(socket.client.id);
        sendUsers(lobby);

        socket.on('disconnect', function () {
            removePlayer(socket.client.id);
            sendUsers(lobby);
        });

        socket.on('challenge', function (msg) {
            console.log('challenged!');
            console.log(msg);
            socket.broadcast.to(msg).emit('challenge', 'hey!');
        });

    });

    function addPlayer(id) {
        players.push( new Player(id) );
    };

    function removePlayer(id) {
        players.forEach(function (player, index) {
            if (player.id === id) players.splice(index, 1);
        });
    };

    function sendUsers(namespace) {
        namespace.emit('players', players);
    };

};
