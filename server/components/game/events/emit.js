var websocket = require('../../websocket/websocket')();

module.exports = function (game) {

    websocket(function (socket, sockets) {
        // console.log('sending: ' + JSON.stringify(game));
        sockets[1].emit('message', game);
    });

};
