'use strict';

angular
    .module('app.game-controller', [])
    .controller('GameController', GameController);

GameController.$inject = ['socket', 'players'];

function GameController(socket, players) {
    var vm = this;

    vm.player = players.player;
    vm.players = players.players;
    vm.opponent = players.opponent;
    vm.sendMessage = sendMessage;

    activate();

    ////////////

    function activate() {
        console.log('game controller...');
        // console.log(players.player);
        // console.log(players.players);
        // console.log(players.opponent);
        // console.log('-----');

        socket.connect(function () {
            console.log('connecting game controller...');
            // console.log('connecting game controller...');
            // console.log('connecting game controller...');
            // console.log('connecting game controller...');
            // console.log(players.player);
            // console.log(players.players);
            // console.log(players.opponent);
            // console.log('-----');
        });

        socket.gameMessage(function (msg) {
            console.log(msg);
        });
    };

    function sendMessage() {
        socket.gameEmit('message', 'hi there!');
    };

};
