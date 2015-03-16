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
            game: eventGame,
            remove: {
                lobby: removeEventLobby,
                game: removeEventGame
            }
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
        lobby.on(event, callback);
    };

    function eventGame(event, callback) {
        game.on(event, callback);
    };

    function removeEventLobby(event, callback) {
        lobby.removeListener(event, callback);
    };

    function removeEventGame(event, callback) {
        game.removeListener(event, callback);
    };
};
