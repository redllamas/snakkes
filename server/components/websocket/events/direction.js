var games   = require('../../game/games');

module.exports = function (namespace, socket) {

    socket.on('direction', function (object) {

        games.getWormInstance(object.id).setDirection(object.direction);

    });
};
