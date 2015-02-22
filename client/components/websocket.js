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
        connect: connect,
        players: players
    };
    return service;

    ////////////

    function emit(event, message) {
        lobby.emit(event, message);
    };

    function connect(callback) {
        lobby.on('connect', callback);
    };

    function players(callback) {
        lobby.on('players', callback);
    };
};
