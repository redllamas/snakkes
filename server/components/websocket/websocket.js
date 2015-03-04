var handler = require('./handler')();

module.exports = function () {

    return function (callback) {
        var socket = handler.socket();
        var sockets = handler.sockets();
        callback(socket, sockets);
    };

};
