'use strict';

angular
    .module('app')
    .factory('socket', socket);

socket.$inject = [];

function socket() {
    var io = require('socket.io-client');
    var lobby = io('http://localhost:3000/lobby');
    var game  = io('http://localhost:3000/game');
    var service = {
        emit: emit,
        players: players
    };
    return service;

    ////////////

    function emit(message) {
        lobby.emit(message);
    };

    function players(callback) {
        lobby.on('players', callback);
    };
};
