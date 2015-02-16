module.exports = function (namespace, socket) {
    socket.on('challenge', function (player) {
        console.log('challenged!');
        socket.broadcast.to(player).emit('challenge', 'hey!');
    });
};
