var games = require('../../game/games');

module.exports = function (namespace, socket) {

    socket.on('message', function (message) {

        games.startLoop();
        games.startGame();


        // if(namespace.name === '/game') {
        //     namespace.emit('message', message);

        //     var rooms = Object.keys(namespace.adapter.rooms);

        //     rooms.forEach(function (room) {
        //         //console.log(room);
        //         namespace.to(room).emit('message', 'message to: '+room);
        //     });

        //     // console.log('joinroom------------');
        //     //var id = namespace.sockets[0].id;
        //     //console.log();
        //     // namespace.sockets[0].join('someroom');
        //     //console.log( namespace.connected[id] );
        //     //console.log(Object.keys(namespace.sockets));
        //     console.log('rooms---------------');
        //     console.log(rooms);
        //     console.log('--------------------');

        // }

    });
};
