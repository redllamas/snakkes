function init(io) {

    //register socket listener events
    var websocket       = require('./websocket/websocket')();
    var websocketEvents = require('./websocket/events');
    websocket.init(io, websocketEvents);

    //register game events
    var games           = require('./game/games')();
    var gameEvents      = require('./game/events');
    games.addNewGame();
    games.init(gameEvents);

};

module.exports.init = init;
