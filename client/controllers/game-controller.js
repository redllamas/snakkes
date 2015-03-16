module.exports = function($) {
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

            //scroll to top
            $(window).scrollTop();

            //initialize board
            paint.paint();

            //join game room to start receiving game events
            socket.emit.game('joinGame', vm.player.gameRoom);

            console.log(vm.player.gameRoom);

            socket.event.game('gotGameData', function (data) {
                paint.repaint(data);
            });

            socket.event.lobby('gotChatMessage', function (message) {
                vm.chat.addMessage(message);
                $scope.$apply();
            });

            socket.event.game('gotQuitGame', function () {
                $location.path('/lobby');
                $scope.$apply();
            });
        };

        function quitGame() {
            socket.emit.game('quitGame', vm.player.gameRoom);
        };

        function sendMessage() {
            socket.emit.lobby('chatMessage', vm.player.name + ': ' + vm.chatMessage);
            vm.chatMessage = '';
        };
    };

}
