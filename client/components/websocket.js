'use strict';

angular
    .module('app')
    .factory('socket', socket);

socket.$inject = [];

function socket() {
    var io      = require('socket.io-client');
    var host    = require('../../config/config')().websocket.host;
    var lobby   = io(host + '/lobby');
    var game    = io(host + '/game');
    var service = {
        emit: {
            lobby: emitLobby,
            game: emitGame
        },
        event: {
            lobby: eventLobby,
            game: eventGame
        }
    };
    return service;

    ////////////

    function emitLobby(event, message) {
        lobby.emit(event, message);
    };

    function emitGame(event, message) {
        game.emit(event, message);
    };

    function eventLobby(event, callback) {
        // lobby.removeAllListeners([event]);
        lobby.removeListener(event, callback);
        lobby.on(event, callback);
    };

    function eventGame(event, callback) {
        // game.removeAllListeners([event]);
        game.removeListener(event, callback);
        game.on(event, callback);
    };
};
