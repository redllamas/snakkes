'use strict';

angular
    .module('app.game-controller', [])
    .controller('GameController', GameController);

GameController.$inject = ['socket'];

function GameController(socket) {
    var vm = this;

    vm.sendMessage = sendMessage;

    activate();

    ////////////

    function activate() {
        socket.gameMessage(function (msg) {
            console.log(msg);
        });
    };

    function sendMessage() {
        socket.gameEmit('message', 'hi there!');
    };

};
