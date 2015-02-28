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
        on: on,
        emit: emit,
        gameEmit: gameEmit,
        connect: connect,
        gotChallenge: gotChallenge,
        players: players,
        gameMessage: gameMessage
    };
    return service;

    ////////////

    function on(event, callback) {
        lobby.on(event, callback);
    };

    function emit(event, message) {
        lobby.emit(event, message);
    };

    function gameEmit(event, message) {
        game.emit(event, message);
    };

    function connect(callback) {
        lobby.on('connect', callback);
    };

    function gotChallenge(callback) {
        lobby.on('challenge', callback);
    };

    function players(callback) {
        lobby.on('players', callback);
    };

    function gameMessage(callback) {
        game.on('message', callback);
    };
};
