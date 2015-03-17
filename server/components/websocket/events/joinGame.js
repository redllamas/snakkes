module.exports = function (namespace, socket) {

    socket.on('joinGame', function (gameRoomId) {

        socket.join(gameRoomId);

    });

};
