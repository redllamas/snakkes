'use strict';

angular
    .module('app')
    .factory('players', players);

players.$inject = ['socket'];

function players(socket) {

    //websocket events
    socket.connect(setPlayerId);
    socket.gotChallenge(updateOpponent);
    socket.players(updatePlayers);

    var list = [];
    var player = {};
    var opponent = {};
    var service = {
        list: list,
        player: player,
        opponent: opponent
    };
    return service;

    ////////////

    function setPlayerId() {
        player.id = this.io.engine.id;
    };

    function updateOpponent(opponentId) {
        list.forEach(function (player) {
            if(player.id === opponentId) {
                for (var key in player) opponent[key] = player[key];
            }
        });
    };

    function updatePlayers(players) {
        list.splice(0, list.length);
        players.forEach(function (_player) {
            list.push(_player);
            if (player.id === _player.id) {
                for (var key in _player) player[key] = _player[key];
            }
        });
    };
}
