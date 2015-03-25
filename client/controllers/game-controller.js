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
            $scope.$on('$destroy', function (event) {
                socket.event.remove.lobby('gotChatMessage', gotChatMessage);
                socket.event.remove.game('gotGameData', gotGameData);
                socket.event.remove.game('gotScoreData', gotScoreData);
                socket.event.remove.game('gotQuitGame', gotQuitGame);
            });
            socket.event.lobby('gotChatMessage', gotChatMessage);
            socket.event.game('gotGameData', gotGameData);
            socket.event.game('gotScoreData', gotScoreData);
            socket.event.game('gotQuitGame', gotQuitGame);

            $(window).scrollTop();
            paint.paint(); //initialize board
            socket.emit.game('joinGame', vm.player.gameRoom);
        };

        function gotChatMessage(message) {
            vm.chat.addMessage(message);
            $scope.$apply();
        };

        function gotGameData(data) {
            paint.repaint(data);
        };

        function gotScoreData(scores) {
            paint.updateScores(scores);
            
        };

        function gotQuitGame(message) {
            $location.path('/lobby');
            $scope.$apply();
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
