'use strict';

angular
    .module('app.lobby-controller', [])
    .controller('LobbyController', LobbyController);

LobbyController.$inject = ['$scope', '$location', 'socket', 'md5', 'players'];

function LobbyController($scope, $location, socket, md5, players) {
    var vm = this;

    vm.player = players.player;
    vm.players = players.list;
    vm.opponent = players.opponent;
    vm.md5 = md5;
    vm.updateInfo = updateInfo;
    vm.challenge = challenge;
    vm.declineChallenge = declineChallenge;
    vm.acceptChallenge = acceptChallenge;

    activate();

    ////////////

    function activate() {

        socket.on('startGame', function () {
            console.log('got startgame message');
            $location.path('/game');
            $scope.$apply();
        });

        socket.on('message', function (msg) {
            console.log('got message: ' + msg);
        });

        socket.players(function () {
            $scope.$apply();
        });

        socket.on('declineChallenge', function (data) {
            console.log('declineChallenge');
            console.log(data);
        });
    };

    function updateInfo() {
        socket.emit('updatePlayer', vm.player);
    };

    function challenge(playerId) {
        socket.emit('challenge', playerId);
    };

    function declineChallenge() {
        socket.emit('declineChallenge', vm.opponent.id);
    };

    function acceptChallenge() {
        socket.emit('acceptChallenge', vm.opponent.id);
    };

};
