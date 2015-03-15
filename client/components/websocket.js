'use strict';

angular
    .module('app')
    .factory('socket', socket);

socket.$inject = [];

function socket() {
    var io      = require('socket.io-client');
    var host    = require('../../config/config')().websocket.host;
    var root    = io(host);
    var lobby   = io(host + '/lobby');
    var game    = io(host + '/game');
    var service = {
        emit: {
            all: emitAll,
            lobby: emitLobby,
            game: emitGame
        },
        event: {
            all: eventAll,
            lobby: eventLobby,
            game: eventGame
        }
    };
    return service;

    ////////////

    function emitAll(event, message) {
        root.emit(event, message);
    };

    function emitLobby(event, message) {
        lobby.emit(event, message);
    };

    function emitGame(event, message) {
        game.emit(event, message);
    };

    function eventAll(event, callback) {
        root.on(event, callback);
    };

    function eventLobby(event, callback) {
        lobby.on(event, callback);
    };

    function eventGame(event, callback) {
        game.on(event, callback);
    };
};
