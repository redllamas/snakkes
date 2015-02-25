'use strict';

angular
    .module('app')
    .factory('players', players);

players.$inject = [];

function players() {
    // var players = [];
    // var player = {};
    // var opponent = {};
    // var service = {
    //     players:  players,
    //     player:   player,
    //     opponent: opponent
    // };
    var service = {
        players:  [],
        player:   {},
        opponent: {}
    };
    return service;
}
