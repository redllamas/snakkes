'use strict';

angular
    .module('app.game-controller', [])
    .controller('GameController', GameController);

GameController.$inject = ['$scope', '$location', 'socket', 'players', 'paint', 'chat', 'joystick'];

function GameController($scope, $location, socket, players, paint, chat, joystick) {
    var vm = this;

    vm.player      = players.player;
    vm.players     = players.list;
    vm.opponent    = players.opponent;
    vm.chat        = chat;
    vm.chatMessage = '';
    vm.quitGame    = quitGame;
    vm.sendMessage = sendMessage;

    activate();

    ////////////

    function activate() {
        paint.paint();

        socket.event.game('message', function (colors) {
            paint.repaint(colors);
        });

        socket.event.lobby('gotChatMessage', function (message) {
            vm.chat.addMessage(message);
            $scope.$apply();
        });

        socket.event.all('gotQuitGame', function () {
            console.log('event all');
            console.log('got quit game');
            //$location.path('/lobby');
            //$scope.$apply();
        });

        socket.event.lobby('gotQuitGame', function () {
            console.log('event lobby');
            console.log('got quit game');
            //$location.path('/lobby');
            //$scope.$apply();
        });

        socket.event.game('gotQuitGame', function () {
            console.log('event game');
            console.log('got quit game');
            //$location.path('/lobby');
            //$scope.$apply();
        });
    };

    function quitGame() {
        console.log('sending');
        socket.emit.game('quitGame', vm.player.gameRoom);
    };

    function sendMessage() {
        socket.emit.lobby('chatMessage', vm.player.name + ': ' + vm.chatMessage);
        vm.chatMessage = '';
    };
};
