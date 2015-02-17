'use strict';

var io = require('socket.io-client');
var lobby = io('http://localhost:3000/lobby');
var game  = io('http://localhost:3000/game');

lobby.on('connect', function (socket) {
    console.log('lobby connect');
    lobby.emit('hi');
});

game.on('connect', function (socket) {
    console.log('game connect');
    game.emit('hii');
});
