'use strict';

angular
    .module('app.game-controller', [])
    .controller('GameController', GameController);

GameController.$inject = ['socket', 'players', 'paint'];

function GameController(socket, players, paint) {
    var vm = this;

    vm.player = players.player;
    vm.players = players.players;
    vm.opponent = players.opponent;
    vm.sendMessage = sendMessage;

    activate();

    ////////////

    function activate() {
        paint.paint();

        // console.log('game controller...');

        // socket.connect(function () {
        //     console.log('connecting game controller...');
        // });

        socket.gameMessage(function (game) {
            paint.repaint(game);
        });
    };

    function sendMessage() {
    //     socket.gameEmit('message', 'hi there!');
    };

};
