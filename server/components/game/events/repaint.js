var websocket = require('../../websocket/websocket')();

module.exports = function (game) {
    console.log('sending message from repaint event');
    //websocket().to('/game').emit('message', 'sent from repaint gameEvent');
    websocket(function (socket) {
        socket.to('/game').emit('message', 'sent from repaint gameEvent');
    });
};
