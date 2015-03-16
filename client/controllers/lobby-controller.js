'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = ['$scope', '$location', 'socket', 'md5', 'players', 'chat'];

function LobbyController($scope, $location, socket, md5, players, chat) {
    var vm = this;

    vm.md5         = md5;
    vm.player      = players.player;
    vm.players     = players.list;
    vm.opponent    = players.opponent;
    vm.chat        = chat;
    vm.chatMessage = '';
    vm.sendMessage = sendMessage;
    vm.updateInfo  = updateInfo;
    vm.challenge   = challenge;
    vm.declineChallenge = declineChallenge;
    vm.acceptChallenge  = acceptChallenge;

    activate();

    ////////////

    function activate() {
        socket.emit.lobby('refreshPlayers');

        socket.event.lobby('gotChatMessage', function (message) {
            vm.chat.addMessage(message);
            $scope.$apply();
        });

        socket.event.lobby('gotAcceptChallenge', function (message) {
            $location.path('/game');
            $scope.$apply();
        });

        socket.event.lobby('gotPlayers', function () {
            $scope.$apply();
        });
    };

    function sendMessage() {
        socket.emit.lobby('chatMessage', vm.player.name + ': ' + vm.chatMessage);
        vm.chatMessage = '';
    };

    function updateInfo() {
        socket.emit.lobby('updatePlayer', vm.player);
    };

    function challenge(playerId) {
        socket.emit.lobby('challenge', playerId);
    };

    function declineChallenge() {
        socket.emit.lobby('declineChallenge', vm.opponent.id);
    };

    function acceptChallenge() {
        socket.emit.lobby('acceptChallenge', vm.opponent.id);
    };

};
