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

        socket.connect(function () {
            console.log('connecting game controller...');
        });

        socket.gameMessage(function (msg) {
            console.log(vm.player.gameRoom);
            console.log(msg);
        });
    };

    function sendMessage() {
        socket.gameEmit('message', 'hi there!');
    };

};
