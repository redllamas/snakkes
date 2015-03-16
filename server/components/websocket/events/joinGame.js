module.exports = function (namespace, socket) {

    socket.on('joinGame', function (gameRoomId) {

        console.log('got join with: ' + gameRoomId);
        socket.join(gameRoomId);

    });

};
