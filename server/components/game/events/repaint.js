var websocket = require('../../websocket/websocket')().socket();

module.exports = function (game) {
    console.log('sending message from repaint event');
    websocket.to('/game').emit('message', 'sent from repaint gameEvent');
};
