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
        $scope.$on('$destroy', function (event) {
            socket.event.remove.lobby('gotChatMessage', gotChatMessage);
            socket.event.remove.lobby('gotAcceptChallenge', gotAcceptChallenge);
            socket.event.remove.lobby('gotPlayers', gotPlayers);
        });
        socket.event.lobby('gotChatMessage', gotChatMessage);
        socket.event.lobby('gotAcceptChallenge', gotAcceptChallenge);
        socket.event.lobby('gotPlayers', gotPlayers);

        socket.emit.lobby('refreshPlayers');
    };

    function gotChatMessage(message) {
        vm.chat.addMessage(message);
        $scope.$apply();
    };

    function gotAcceptChallenge(message) {
        $location.path('/game');
        $scope.$apply();
    };

    function gotPlayers(message) {
        $scope.$apply();
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
